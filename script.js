const movies = [
    { id: 1, title: "Fortnite Battle Royale", genre: "action", image: "images/juego1.jpg", description: "Crea, juega y pelea gratis con tus amigos en Batalla campal de Fortnite. Sé el último jugador de pie en Batalla campal y Cero construcción, disfruta de un concierto o evento en vivo" },
    { id: 2, title: "Street Fighter V", genre: "comedy", image: "images/juego2.jpg", description: "Experimenta la intensidad de la batalla cara a cara en Street Fighter V. Elige entre 16 personajes icónicos, cada uno con su propia historia personal y desafíos de entrenamiento únicos" },
    { id: 3, title: "Immortals Fenyx Rising", genre: "drama", image: "images/juego3.jpg", description: "Immortals Fenyx Rising da vida a una grandiosa aventura mitológica. Ponte en la piel de Fenyx y salva a los dioses griegos" },
    { id: 4, title: "Marvel's Spider-Man Remastered", genre: "action", image: "images/juego4.jpg", description: "En Marvel's Spider-Man Remasterizado, la vida de Peter Parker se topa con la de Spider-Man en una historia original repleta de acción. Ponte en la piel de un Peter Parker veterano que ha pulido sus habilidades en la lucha contra el crimen y los villanos en la Nueva York de Marvel" },
    { id: 5, title: "Darksiders II Deathinitive Edition", genre: "comedy", image: "images/juego5.jpg", description: "¡La experiencia DARKSIDERS 2 definitiva! Resolución nativa de 1080p. Se ha equilibrado el juego y la distribución de los botines. Se ha mejorado el motor de renderizado gráfico para potenciar la calidad visual, la iluminación y las sombras." },
    { id: 6, title: "FIFA 23", genre: "drama", image: "images/juego6.jpg", description: "FIFA 23 lleva el juego del mundo al campo con la tecnología HyperMotion2, la FIFA World Cup™ masculina y femenina, equipos de clubes femeninos, funciones Cross-Play** y mucho más." },
    { id: 7, title: "Call of Duty: Advanced Warfare", genre: "action", image: "images/juego7.jpg", description: "Call of Duty: Advanced Warfare imagina los poderosos campos de batalla del futuro, donde la tecnología y la estrategia han evolucionado hasta dar paso a una nueva era de combate en la franquicia. El poder lo cambia todo." },
    { id: 8, title: "Rocket League", genre: "comedy", image: "images/juego8.jpg", description: "Salta al campo en solitario o con amigos en los modos de juego en línea 1v1, 2v2 y 3v3, o disfruta de los modos extra como Rumble, Snow Day o Hoops. ¡Desbloquea objetos con el Rocket Pass, sube de rango competitivo, participa en torneos competitivos, supera desafíos, disfruta del progreso multiplataforma y mucho más! El campo te espera." },
    { id: 9, title: "Gran Turismo Sport", genre: "drama", image: "images/juego9.jpg", description: "Ajústate el cinturón y participa de dos campeonatos online: representa a tu país en la Nations Cup y corre en nombre de tu marca de autos favorita en la Manufacturer Series." },
    { id: 10, title: "Grand Theft Auto V", genre: "action", image: "images/juego10.jpg", description: "Explora los éxitos de taquilla Grand Theft Auto V y GTA Online, ahora actualizados para PlayStation 5 con imágenes impresionantes, carga más rápida, gatillos adaptativos, respuesta háptica, audio 3D Tempest y más, además de contenido exclusivo para los jugadores de GTA Online." },
];

// Add a property to specify which games are playable
const playableGames = [1, 4]; // Fortnite and Spider-Man will be playable

const movieContainer = document.querySelector('.movie-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close');
const favoriteBtn = document.querySelector('.favorite-btn');
const playBtn = document.getElementById('play-btn');
const gameControls = document.getElementById('game-controls');

function displayMovies(movies) {
    movieContainer.innerHTML = '';
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <button class="favorite-btn">
            </button>`;
        movieElement.addEventListener('click', () => openModal(movie));
        movieContainer.appendChild(movieElement);
    });
}

function filterMovies(genre) {
    if (genre === 'all') {
        displayMovies(movies);
    } else {
        const filteredMovies = movies.filter(movie => movie.genre === genre);
        displayMovies(filteredMovies);
    }
}

function openModal(movie) {
    modalImg.src = movie.image;
    modalTitle.textContent = movie.title;
    modalDescription.textContent = movie.description;
    favoriteBtn.classList.remove('none');
    
    // Mostrar/ocultar botón de jugar según si el juego es jugable
    if (movie.playable) {
        playBtn.style.display = 'block';
        playBtn.onclick = toggleGameControls;
    } else {
        playBtn.onclick = toggleGameControls;
        playBtn.style.display = 'active';
        gameControls.style.display = 'none';
    }
    
    modal.style.display = 'block';
}

function toggleGameControls() {
        window.location.href = 'juego.html';
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterMovies(button.getAttribute('data-filter'));
    });
});

favoriteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    favoriteBtn.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    gameControls.style.display = 'active';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        gameControls.style.display = 'none';
    }
});

displayMovies(movies);