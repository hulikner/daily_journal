let postCollection = [];

export const usePostCollection = () => {
  return [...postCollection];
};

export const getPosts = () => {
  return (
    fetch("http://localhost:8088/journal")
      //.then((response)=>console.log('Before-Json:',response))
      .then((response) => response.json())
      // do something with response here
      .then((parsedResponse) => {
        return parsedResponse.reverse();
      })
  );
};

export const getSinglePost = (postId) => {
  return fetch(`http://localhost:8088/journal/${postId}`).then((response) =>
    response.json()
  );
};

export const deletePost = (postId) => {
  return fetch(`http://localhost:8088/journal/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const updatePost = (postObj) => {
  return fetch(`http://localhost:8088/journal/${postObj.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postObj),
  }).then((response) => response.json());
};
