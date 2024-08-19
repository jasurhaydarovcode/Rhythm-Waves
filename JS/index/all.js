// Function to load playlists with skeleton loaders
function loadPlaylists() {
    const playlistContainer = document.getElementById('playlists');
    playlistContainer.innerHTML = '';

    // Skeleton loaderlarni qo'shamiz
    playlists.forEach(() => {
        const skeletonCard = `
            <div class="bg-gray-800 p-5 rounded-lg shadow-md cursor-pointer skeleton">
                <div class="w-full h-64 bg-gray-700 skeleton"></div>
                <h2 class="text-xl font-semibold mt-4 bg-gray-700 h-6 w-3/4 skeleton"></h2>
            </div>
        `;
        playlistContainer.innerHTML += skeletonCard;
    });

    // Yuklashni simulyatsiya qilish
    setTimeout(() => {
        // Skeleton loaderlarni tozalaymiz
        playlistContainer.innerHTML = '';

        // Haqiqiy playlist kartalarini qo'shamiz
        playlists.forEach(playlist => {
            const playlistCard = `
                <a href="${playlist.link}" class="bg-gray-800 p-5 rounded-lg shadow-md cursor-pointer">
                    <div class="w-full h-64 overflow-hidden">
                        <img src="${playlist.image}" alt="${playlist.name}" class="w-full h-full object-cover">
                    </div>
                    <h2 class="text-xl font-semibold mt-4">${playlist.name}</h2>
                </a>
            `;
            playlistContainer.innerHTML += playlistCard;
        });
    }, 1500); // Yuklash vaqtini moslashtirish mumkin
}

// Sahifa yuklanishida playlistlarni yuklaymiz
window.onload = loadPlaylists;