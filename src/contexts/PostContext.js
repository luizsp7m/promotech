import { createContext, useEffect, useState } from "react";

import { useCategory } from '../hooks/useCategory';

export const PostContext = createContext();

export function PostContextProvider({ children }) {

  const [posts, setPosts] = useState([]); // Absolute
  const [postsFiltered, setPostFiltered] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const { selectedCategory } = useCategory();

  useEffect(() => {
    const postsFiltered = [];

    posts.map(post => {
      if(post.category === selectedCategory) {
        postsFiltered.push(post);
      }
    });

    setPostFiltered(postsFiltered);
  }, [selectedCategory]);

  async function getPosts() {
    const token = process.env.NEXT_PUBLIC_DATOCMS_READ_ONLY;
    setLoadingPosts(true);

    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: '{ allPosts { id productLink productImage title price description likes user category } }'
      }),
    }
    )
      .then(res => res.json())
      .then((res) => {
        setPosts(res.data.allPosts);
        setPostFiltered(res.data.allPosts);
        setLoadingPosts(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <PostContext.Provider value={{ postsFiltered, loadingPosts }} >
      { children}
    </PostContext.Provider>
  );
}