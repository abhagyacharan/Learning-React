function ListItem(props) {
    return <li>{props.animal}</li>
  }
  
  function List(props) {
    return (
      <ul>
        {props.animalsList.map((animal) => {
          return <ListItem key={animal} animal={animal} />;
        })}
      </ul>
    );
  }
  
  function Animals() {
    const animals = ["Lion", "Cow", "Snake", "Lizard"];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animalsList={animals} />
      </div>
    );
  }
  
    // return (
    //     <div>
    //         <h1>Animals: </h1>
    //         <ul>
    //             {/* {animals.map((animal) => {
    //                 // return <li key={animal}>{animal}</li>
    //             })} */}
    //             {animalList}
    //         </ul>
    //     </div>
    // )

    // return (
    //     <div>
    //         <h1>Animals: </h1>
    //         <ul>
    //             <li>Lion</li>
    //             <li>Tiger</li>
    //             <li>Cheetah</li>
    //         </ul>
    //     </div>
    // );



export default Animals;