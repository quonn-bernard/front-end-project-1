let commentsPayload;

const CommentFactory = 
fetch("/model/data.json")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    commentsPayload = data
  })
  .catch((error) => console.error("FETCH ERROR:", error));