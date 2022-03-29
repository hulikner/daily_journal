import { postEntry } from "./JournalEntry.js";
import { PostList, showPostList } from "./JournalEntryList.js";
import { PostEdit, clearInputs, ResetEdit } from "./JournalEdit.js"; 
import { LoginForm } from "../auth/LoginForm.js";
import { RegisterForm } from "../auth/RegisterForm.js";
import { Post } from "./JournalEntry.js";
import {
  getPosts,
  usePostCollection,
  getSinglePost,
  updatePost,
  deletePost,
  logoutUser,
  getLoggedInUser,
  setLoggedInUser,
  postLike,
  loginUser,
  registerUser,
} from "./JournalData.js";

const showEdit = (postObj) => {
  const entryElement = document.querySelector("#form");
  entryElement.innerHTML = PostEdit(postObj);
};

const checkForUser = () => {
    if (sessionStorage.getItem("users")){
      setLoggedInUser(JSON.parse(sessionStorage.getItem("users")));
      showPostList();
      showLoginRegister()
    }else {
        showLoginRegister();
    }
}

const showLoginRegister = () => {
    
    const entryElement = document.querySelector(".navBar");
    //template strings can be used here too
    if (getLoggedInUser().id) {
      entryElement.innerHTML = `<hr/> <hr/><button class="nav-link" id="logout">Logout</button>`
  } else {
    entryElement.innerHTML = `${LoginForm()} <hr/> <hr/> ${RegisterForm()}`
      
      showPostList()
  }
    
    //make sure the post list is cleared out too
  document.querySelector(".postList");
  document.innerHTML = "";
}

const showLogin = () => {
  if (getLoggedInUser().id) {
      return `<p class="nav-link" id="logout">Logout</p>`
  } else {
      return `${LoginForm()} <hr/> <hr/> ${RegisterForm()}
      <p class="nav-link" id="login">Login</p>`
  }
}

document.addEventListener("click", event => {
	event.preventDefault();
	if (event.target.id.startsWith("like")) {
	  const likeObject = {
		 postId: parseInt(event.target.id.split("__")[1]),
		 userId: getLoggedInUser().id
	  }
	  postLike(likeObject)
		.then(response => {
		  showPostList();
		})
	}
  })

document.addEventListener("click", event => {
    if (event.target.id === "logout") {
      logoutUser();
      console.log(getLoggedInUser());
      sessionStorage.clear();
      checkForUser();
    }
  })


document.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "login__submit") {
      //collect all the details into an object
      const userObject = {
        name: document.querySelector("input[name='name']").value,
        email: document.querySelector("input[name='email']").value
      }
      loginUser(userObject)
      .then(dbUserObj => {
        if(dbUserObj){
          sessionStorage.setItem("users", JSON.stringify(dbUserObj));
          showPostList();
        }else {
          //got a false value - no user
          const entryElement = document.querySelector("#form");
          entryElement.innerHTML = `<p class="center">That user does not exist. Please try again or register for your free account.`;
        }
      })
    }
  })

  document.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "register__submit") {
      //collect all the details into an object
      const userObject = {
        name: document.querySelector("input[name='registerName']").value,
        email: document.querySelector("input[name='registerEmail']").value
      }
      registerUser(userObject)
      .then(dbUserObj => {
        sessionStorage.setItem("users", JSON.stringify(dbUserObj));
        showPostList();
      })
    }
  })


document.addEventListener("click", event => {
    if (event.target.id === "logout") {
      logoutUser();
      console.log(getLoggedInUser());
    }
  })

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
    ResetEdit();
    showPostList();
    });
  }
});

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id.startsWith("newPost__cancel")) {
    ResetEdit();
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

checkForUser()
showPostList();
