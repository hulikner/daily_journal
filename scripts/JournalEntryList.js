import { Post } from "./JournalEntry.js";
import { getPosts } from "./JournalData.js";

const entryLog = document.querySelector("#journalEntry");

export const EntryListComponent = () => {
  const entries = getJournalEntries();

  for (const entry of entries) {
    entryLog.innerHTML += JournalEntryComponent;
  }
};

export const showPostList = () => {
  const postElement = document.querySelector("#postList");
  getPosts().then((allPosts) => {
    postElement.innerHTML = PostList(allPosts);
  });
};

export const PostList = (allPosts) => {
  let postHTML = "";

  for (const postObject of allPosts) {
    postHTML += Post(postObject);
  }
  return postHTML;
};
