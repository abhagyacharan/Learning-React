  function List(props) {
    // if(!props.animalsList){
    //     return <div>Loading...</div>;
    // }

    // if(props.animalsList.length === 0){
    //     return <div>There are no animals in the list!</div>;
    // }

    // return (    
    //   <ul>
    //     {props.animalsList.map((animal) => {
    //     //   return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
    //     return animal.startsWith("L") && <li key={animal}>{animal}</li>
    //     })}
    //   </ul>
    // );
return(
    <>
        {!props.animalsList ? (
            <div>Loading...</div>
        ) : props.animalsList.length > 0 ? (
            <ul>
                {props.animalsList.map((animal) => {
                    return <li key={animal}>{animal}</li>
                })}
            </ul>
        ) : (
            <div>There are no animals in List</div>
        )
    }
    </>
    );
  }
  
  function Animals() {
    const animals = [];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animalsList={animals} />
        {/* <List  /> */}
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