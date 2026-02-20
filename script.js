const games = [
  {
    title: "Hot Wheels: Race Off",
    category: "car",
    link: "https://www.madkidgames.com/embed/hot-wheels-race-off/"
  },
  {
    title: "Survivor.io",
    category: "action",
    link: "https://www.madkidgames.com/embed/survivor-io/"
  },
  {
    title: "Drive or Die: Zombie Apocalypse",
    category: "action",
    link: "https://www.madkidgames.com/embed/drive-or-die-zombie-apocalypse/"
  },
  {
    title: "GTA Car Stunt: Mega Ramp",
    category: "car",
    link: "https://www.madkidgames.com/embed/gta-car-stunt-mega-ramp/"
  },
  {
    title: "MMX Hill Dash 2 – Race Offroad",
    category: "car",
    link: "https://www.madkidgames.com/embed/mmx-hill-dash-2-race-offroad/"
  },
  {
    title: "Wolf Survival Simulator",
    category: "action",
    link: "https://www.madkidgames.com/embed/wolf-survival-simulator/"
  }
];

const container = document.getElementById("gamesContainer");
const modal = document.getElementById("gameModal");
const frame = document.getElementById("gameFrame");
const closeBtn = document.getElementById("closeBtn");
const searchInput = document.getElementById("search");

function openGame(link) {
  frame.src = link;
  modal.classList.add("active");
}

closeBtn.onclick = () => {
  modal.classList.remove("active");
  frame.src = "";
};

searchInput.addEventListener("input", () => {
  const filtered = games.filter(game =>
    game.title.toLowerCase().includes(searchInput.value.toLowerCase())
  );
  loadGames(filtered);
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const category = link.dataset.category;
    if (category === "all") {
      loadGames(games);
    } else {
      loadGames(games.filter(g => g.category === category));
    }
  });
});

loadGames(games);
