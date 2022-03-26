import { JournalEntryComponent, postEntry } from "./JournalEntry.js";
import { PostList, showPostList } from "./JournalEntryList.js";
import { PostEdit, clearInputs } from "./JournalEdit.js";
import { Post } from "./JournalEntry.js";
import {
  getPosts,
  usePostCollection,
  getSinglePost,
  updatePost,
  deletePost,
} from "./JournalData.js";

const showEdit = (postObj) => {
  const entryElement = document.querySelector("#form");
  entryElement.innerHTML = PostEdit(postObj);
};

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("edit")) {
    const postId = event.target.id.split("__")[1];
    getSinglePost(postId).then((response) => {
      showEdit(response);
    });
  }
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("updatePost")) {
    const postId = event.target.id.split("__")[1];
    const date = document.querySelector("input[name='journalDate']").value;
    const concept = document.querySelector(
      "input[name='conceptsCovered']"
    ).value;
    const entry = document.querySelector("input[name='journalEntry']").value;
    const mood = document.querySelector("select[name='mood']").value;

    const postObject = {
      date: date,
      concept: concept,
      entry: entry,
      mood: mood,
      // timestamp: parseInt(timestamp),
      id: parseInt(postId),
    };

    updatePost(postObject).then((response) => {
      clearInputs();
      showPostList();
    });
  }
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("newPost__cancel")) {
    showPostList();
  }
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("delete")) {
    const postId = event.target.id.split("__")[1];
    deletePost(postId).then((response) => {
      showPostList();
    });
  }
});

showPostList();
