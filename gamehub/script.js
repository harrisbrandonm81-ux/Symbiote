const games = [
  { title: "Game 1", category: "action", img: "assets/game1.jpg" },
  { title: "Game 2", category: "puzzle", img: "assets/game2.jpg" },
  { title: "Game 3", category: "racing", img: "assets/game3.jpg" },
  // Add more games here
];

const grid = document.getElementById("gameGrid");
const search = document.getElementById("search");
const buttons = document.querySelectorAll(".categories button");

function renderGames(filter = "") {
  grid.innerHTML = "";
  games
    .filter(game => game.title.toLowerCase().includes(filter.toLowerCase()) || game.category === filter)
    .forEach(game => {
      grid.innerHTML += `
        <div class="game-tile">
          <img src="${game.img}" alt="${game.title}" />
          <h3>${game.title}</h3>
        </div>
      `;
    });
}

search.addEventListener("input", e => renderGames(e.target.value));
buttons.forEach(btn => btn.addEventListener("click", () => renderGames(btn.dataset.category)));

renderGames();
