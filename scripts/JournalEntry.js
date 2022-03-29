import { clearInputs } from "./JournalEdit.js";
import { showPostList } from "./JournalEntryList.js";
import { getLikes } from "./JournalData.js";

const apiURL = "http://localhost:8088/journal";

export const postEntry = (obj) => {
  return fetch(`${apiURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
};

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id === "Record") {
    // const postId = document.querySelector("input[name='postId']").value;
    const newPost = {
      // id: postId || null,
      date: document.querySelector("#journalDate").value,
      concept: document.querySelector("#conceptsCovered").value,
      entry: document.querySelector("#journalEntry").value,
      mood: document.querySelector("#mood").value,
    };
    postEntry(newPost).then(() => {
      clearInputs();
      showPostList();
    });
  }
});

const getNumberOfLikes = (postId) => {
  getLikes(postId)
  .then(response => {
    document.querySelector(`#likes__${postId}`).innerHTML = `👍 ${response.length}`;
  })
}

export const Post = (postObject) => {
  return `
      <section class="post">
        <header>
            <div class="date" input[type="date"]>${postObject.date}</div>
        </header>
        <p class="concepts">Concepts Covered: ${postObject.concept}</p>
        <p class="entry">Journal Entry: ${postObject.entry}</p>
        <p class="mood">Mood: ${postObject.mood}</p>
        <div><button id="edit__${postObject.id}">Edit</button>
        <button id="delete__${postObject.id}">Delete</button> <button id="like__${postObject.id}">Like</button>
        </div>
        <p id="likes__${postObject.id}">👍 ${getNumberOfLikes(postObject.id)}</p>
        <section class="breakpoint"></section>
      </section>
    `;
};
