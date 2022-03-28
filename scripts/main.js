
import { EntryListComponent } from "./JournalEntryList.js";



EntryListComponent();

//  const applicationElement = document.querySelector(".entryForm");
//  applicationElement.addEventListener("click", event => {
//      event.preventDefault();
//      if (event.target.id === "newPost__cancel") {
//          //clear the input fields
//      }
//    })
//  applicationElement.addEventListener("click", event => {
//      event.preventDefault();
//      if (event.target.id === "newPost__submit") {
//          //collect the input values into an object to post to the DB
//          const title = document.querySelector("input[name='postTitle']").value
//          const url = document.querySelector("input[name='postURL']").value
//          const description = document.querySelector("textarea[name='postDescription']").value
//          //we have not created a user yet - for now, we will hard code `1`.
//          //we can add the current time as well
//          const postObject = {
//              title: title,
//              imageURL: url,
//              description: description,
//              userId: 1,
//              timestamp: Date.now()
//            }
           
//            // be sure to import from the DataManager
//            createPost(postObject)
//    }
//  })