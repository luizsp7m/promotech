import { useEffect, useState } from 'react';
import { database } from '../services/firebase';

export function usePost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postRef = database.ref('posts');

    postRef.on('value', snapshot => {
      const data = snapshot.val();
      const postList = [];
      for (let id in data) {
        postList.push({ id, ...data[id] });
      }

      setPosts(postList);
    });
  }, []);

  return { posts };
}