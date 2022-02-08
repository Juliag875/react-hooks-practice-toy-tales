import React from "react";

function ToyCard({id, name, image, likes, onDeleteToy, onUpdatedLikesToy}) {

  function handleDeleteClick(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(r=>r.json())
    .then(()=>onDeleteToy({id}))
  }

  function handleLikesClick() {
    const updatedLikes = likes + 1;
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: updatedLikes})
    })
    .then(r=>r.json())
    .then(updatedLikes => onUpdatedLikesToy(updatedLikes))
  }
    
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikesClick} className="like-btn">Like {"3"}</button>
      <button 
      style = {{backgroundColor:"pink"}} 
      className="del-btn"
      onClick={handleDeleteClick}>Delete
      </button>
    </div>
  );
}

export default ToyCard;
