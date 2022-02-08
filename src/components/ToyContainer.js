import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onDeleteToy, onUpdatedLikesToy}) {
  return (
    <div id="toy-collection"> {toys.map(toy =>
      <ToyCard
        key={toy.id}
        id={toy.id}
        name={toy.name}
        image={toy.image}
        likes={toy.likes}
        onDeleteToy={onDeleteToy}
        onUpdatedLikesToy={onUpdatedLikesToy}
      />
    )}
    </div>
  );
}

export default ToyContainer;
