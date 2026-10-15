//import
import { createContext, useEffect, useState } from "react";
import { API_URL } from "../services/api";

//context
export const BlogPostContext = createContext();

//provider
export const BlogPostProvider = ({ children }) => {
  const [blogPostData, setBlogPostData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getBlogPosts = async () => {
    setIsLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_URL}/blogPosts`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Impossibile recuperare i post");
      }
      const data = await response.json();
      if (Array.isArray(data.blogPosts)) {
        setBlogPostData(data.blogPosts);
      } else {
        setBlogPostData([]);
        console.log("Formato dati non riconosciuto",data);
      }
    } catch (e) {
      console.error(e);
      setError("Errore nel caricamento dei post");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  return (
    <BlogPostContext.Provider
      value={{
        blogPostData,
        setBlogPostData,
        isLoading,
        setIsLoading,
        error,
        setError,
        getBlogPosts,
      }}
    >
      {children}
    </BlogPostContext.Provider>
  );
};
