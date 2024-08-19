// Function to get query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to load artist data from JSON
async function loadArtistPage() {
    const artistId = getQueryParam('id');
    const artistFileName =
        artistId === "1" ? "TheWeeknd.json" :
            artistId === "2" ? "BLACKPINK.json" :
                artistId === "3" ? "LanaDelRey.json" :
                    null;

    if (artistFileName) {
        try {
            const response = await fetch(`API/${artistFileName}`);
            const artist = await response.json();

            document.getElementById('artistName').innerText = artist.name;
            document.getElementById('artistInfo').innerHTML = `<h2 class="text-2xl font-semibold">About ${artist.name}</h2><p class="mt-4">${artist.bio}</p>`;

            const songsContainer = document.getElementById('songs');
            songsContainer.innerHTML = '';
            artist.songs.forEach(song => {
                const songCard = `
            <div class="bg-gray-800 p-5 rounded-lg shadow-md">
                <img src="${song.image}" alt="${song.title}" class="rounded-t-lg mb-4">
                <h3 class="text-lg font-semibold">${song.title}</h3>
                <audio controls class="mt-4 w-full">
                    <source src="${song.audio}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>
        `;
                songsContainer.innerHTML += songCard;
            });
        } catch (error) {
            console.error("Error loading artist data:", error);
        }
    } else {
        document.getElementById('artistName').innerText = "Artist Not Found";
        document.getElementById('artistInfo').innerHTML = "";
        document.getElementById('songs').innerHTML = "";
    }
}

// Function to go back to the homepage
function goBack() {
    window.location.href = 'index.html';
}

// Load artist page content on page load
window.onload = loadArtistPage;