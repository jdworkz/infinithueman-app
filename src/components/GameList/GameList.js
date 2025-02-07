import React from "react"
import './GameList.css'
const GameList = () =>{
    return(
        <>
         <header>
    <h1>My Game Library</h1>
    <button id="viewLibraryBtn">View My Library</button>
  </header>
  <main>
    <section>
    <h2>Add a Game to Your Library</h2>
    <form id = "addGameForm">
    <label for="gameName">Game Name:</label>
   <input type= "text" id ="gameName" required/>
   <label for="gameGenre">Genre:</label>
        <input type="text" id="gameGenre" required/> 

        <label for="gamePlatform">Platform:</label>
        <input type="text" id="gamePlatform" required/>

        <button type="submit">Add Game</button>
      </form>

    
    </section>
  </main>
  
    
      


        </>
    )
}
export default GameList;