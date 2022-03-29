export const clearInputs = () => {
  const date = (document.querySelector("input[name='journalDate']").value =
    null);
  const concept = (document.querySelector(
    "input[name='conceptsCovered']"
  ).value = null);
  const entry = (document.querySelector("input[name='journalEntry']").value =
    null);
  const mood = (document.querySelector("select[name='mood']").value = null);
};

export const PostEdit = (postObj) => {
  return `
	<div class="newPost">
	<h3>Edit This Post</h3>
    <form id="form" action="">

		<fieldset>
        <label for="journalDate">Date of Entry</label>
			<input value="${postObj.date}"
				   name="journalDate"
				   class="journalDate"
				   type="date"
				   placeholder="Date" />
		</fieldset>
		<fieldset>
        <label for="conceptsCovered">Concepts Covered</label>
			<input value="${postObj.concept}"
				   name="conceptsCovered"
				   class="conceptsCovered"
				   type="text"
				   placeholder="concepts" />
		</fieldset>
		<fieldset>
        <label for="journalEntry">Journal Entry</label>
			<input value="${postObj.entry}"
				   name="journalEntry"
				   class="journalEntry"
				   type="text"
				   placeholder="Journal Entry" />
		</fieldset>
		<fieldset>
        <label for="mood">Mood for the Day</label>
                   <select value="${postObj.mood}" name="mood" id="mood">
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="lost">Lost</option>
                    <option value="ok">OK</option>
        </select>
		</fieldset>

		<fieldset>
		<input type="hidden" value="${postObj.id}" name="postId">
		<button id="updatePost__${postObj.id}">Update</button>
		<button id="newPost__cancel">Cancel</button>
        </fieldset>
        </form>
        `;
};

export const ResetEdit = () => {
  const resetEditElement = document.querySelector("#form");
  resetEditElement.innerHTML = `
	
	  
	  <form id="form" action="">
  
		  <fieldset>
		  <label for="journalDate">Date of Entry</label>
			  <input value=""
					 name="journalDate"
					 class="journalDate"
					 type="date"
					 placeholder="Date" />
		  </fieldset>
		  <fieldset>
		  <label for="conceptsCovered">Concepts Covered</label>
			  <input value=""
					 name="conceptsCovered"
					 class="conceptsCovered"
					 type="text"
					 placeholder="concepts" />
		  </fieldset>
		  <fieldset>
		  <label for="journalEntry">Journal Entry</label>
			  <input value=""
					 name="journalEntry"
					 class="journalEntry"
					 type="text"
					 placeholder="Journal Entry" />
		  </fieldset>
		  <fieldset>
		  <label for="mood">Mood for the Day</label>
					 <select value="" name="mood" id="mood">
					  <option value="happy">Happy</option>
					  <option value="sad">Sad</option>
					  <option value="lost">Lost</option>
					  <option value="ok">OK</option>
		  </select>
		  </fieldset>
  
		  <fieldset>
		  
		  <button type="button" id="Record">Record Journal Entry</button><br />
        <button type="button" id="search">Filter by Date</button>
        <input type="text" name="searchInput" id="searchInput" />
		  </fieldset>
		  </form>
		  `;
};
