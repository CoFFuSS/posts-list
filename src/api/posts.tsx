import { useState, useEffect } from "react";
import { POSTS_URL } from "../constants/urls";

const CACHE_DURATION = 60 * 1000;

const fetchPosts = async () => {
  const response = await fetch(POSTS_URL, { cache: "default" });
  const result = await response.json();
  return result;
};

export const useCachedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const cachedPosts = localStorage.getItem("cachedPosts");
    const cachedTime = localStorage.getItem("cachedPostsTime");

    if (cachedPosts && cachedTime) {
      const parsedTime = parseInt(cachedTime, 10);
      const currentTime = new Date().getTime();
      if (currentTime - parsedTime < CACHE_DURATION) {
        setPosts(JSON.parse(cachedPosts));
        return;
      }
    }

    fetchPosts().then((result) => {
      setPosts(result);
      localStorage.setItem("cachedPosts", JSON.stringify(result));
      localStorage.setItem("cachedPostsTime", String(new Date().getTime()));
    });
  }, []);

  return posts;
};
