import { useState, useEffect } from "react";

const CACHE_DURATION = 60 * 1000;

const fetchPost = async (id: number) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    { cache: "default" }
  );
  const result = await response.json();
  return result;
};

export const useCachedPost = (id: number) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const cachedPost = localStorage.getItem(`cachedPost${id}Post`);
    const cachedTime = localStorage.getItem(`cachedPost${id}Time`);

    if (cachedPost && cachedTime) {
      const parsedTime = parseInt(cachedTime, 10);
      const currentTime = new Date().getTime();
      if (currentTime - parsedTime < CACHE_DURATION) {
        setPost(JSON.parse(cachedPost));
        return;
      }
    }

    fetchPost(id).then((result) => {
      setPost(result);
      localStorage.setItem(`cachedPost${id}Post`, JSON.stringify(result));
      localStorage.setItem(`cachedPost${id}Time`, String(new Date().getTime()));
    });
  }, [id]);

  return post;
};
