document.addEventListener('DOMContentLoaded', function() {
    const addGameForm = document.getElementById('addGameForm');
    const gameNameInput = document.getElementById('gameName');
    const gameGenreInput = document.getElementById('gameGenre');
    const gamePlatformInput = document.getElementById('gamePlatform');
    const successMessage = document.getElementById('successMessage');
    const gameList = document.getElementById('gameList');
    const viewLibraryBtn = document.getElementById('viewLibraryBtn');
    const backToAddGameBtn = document.getElementById('backToAddGameBtn');
    const librarySection = document.getElementById('librarySection');
  
    let library = JSON.parse(localStorage.getItem('gameLibrary')) || [];
  
    function displayLibrary() {
      gameList.innerHTML = '';
      library.forEach(game => {
        const li = document.createElement('li');
        li.textContent = `${game.name} - ${game.genre} - ${game.platform}`;
        gameList.appendChild(li);
      });
    }
  
    // Handle the game adding form submission
    addGameForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const gameName = gameNameInput.value;
      const gameGenre = gameGenreInput.value;
      const gamePlatform = gamePlatformInput.value;
  
      const newGame = { name: gameName, genre: gameGenre, platform: gamePlatform };
      
      // Add game to library and update localStorage
      library.push(newGame);
      localStorage.setItem('gameLibrary', JSON.stringify(library));
  
      // Show success message and reset the form
      successMessage.classList.remove('hidden');
      addGameForm.reset();
  
      setTimeout(() => {
        successMessage.classList.add('hidden');
      }, 2000);
    });
  
    // View the game library
    viewLibraryBtn.addEventListener('click', function() {
      librarySection.classList.remove('hidden');
      displayLibrary();
      addGameForm.classList.add('hidden');
    });
  
    // Go back to adding games
    backToAddGameBtn.addEventListener('click', function() {
      librarySection.classList.add('hidden');
      addGameForm.classList.remove('hidden');
    });
  });
  