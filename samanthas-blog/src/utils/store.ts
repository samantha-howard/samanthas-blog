import { createStore } from "@stencil/store";

import { BlogEntryItem } from "./interfaces";
import pathsToBlogEntries from "../assets/blog-paths.json";

let blogEntries: BlogEntryItem[] = [];
let blogEntryPaths = pathsToBlogEntries.paths;

export const store = createStore({
  blogEntries
});

export const state = store.state;
export const dispose = store.dispose;

/**
 * Gets all of the fileNames for the blog entries (md files)
 */
export function loadBlogEntries() {
  const blogEntryFileNames: BlogEntryItem[] = blogEntryPaths.map((path: string) => {
    return ({
      name: path
    } as BlogEntryItem);
  });
  state.blogEntries = [...blogEntryFileNames];
  console.log(state.blogEntries);
}
