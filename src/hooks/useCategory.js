import { useContext } from "react";
import { CategoryContext } from "../contexts/CategoryContext";

export function useCategory() {
  const value = useContext(CategoryContext);
  
  return value;
}