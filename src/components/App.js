import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);
  const [showForm, setShowForm] = useState(false);


  useEffect(()=>{
    fetch('http://localhost:3001/toys')
    .then(r=>r.json())
    .then(toys=>setToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(newItem){
    setToys(toys => [...toys, newItem])
  }

  function handleDelete(updatedToy) {
    const updatedToys = toys.filter(toy => toy.id !== updatedToy.id);
    setToys(updatedToys);
  }

  function handleUpdateLikes(updatedToy) {
    const updatedToys = toys.map(toy => 
      toy.id === updatedToy.id ? updatedToy : toy
    );
      setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      toys={toys} 
      onDeleteToy={handleDelete}
      onUpdatedLikesToy ={handleUpdateLikes} 
      />
    </>
  );
}

export default App;
