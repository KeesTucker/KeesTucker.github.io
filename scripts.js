document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById("contentContainer");
    let isLoading = false;
    let currentIndex = 0;
    const itemsPerPage = 1;

    // Initial content loading and setup
    loadMoreContent();
    checkScroll();

    // Scroll event to load more content
    window.addEventListener("scroll", handleScroll);

    // Adjust image heights on load and resize
    window.addEventListener("load", adjustImageHeights);
    window.addEventListener("resize", adjustImageHeights);

    function createMedia(media, isHero) {
        const className = isHero ? 'hero' : 'media';
        switch (media.type) {
            case 'video':
                return `<video src="${media.url}" class="${className} full-width" ${isHero ? 'autoplay muted' : ''}></video>`;
            case 'image':
                return `<img src="${media.url}" class="${className} full-width">`;
            default:
                return '';
        }
    }

    function createSection(data) {
        return `
            <div class="section">
                <h2>${data.title}</h2>
                ${createMedia(data.hero, true)}
                <p>${data.description}</p>
                <div class="row">${data.media.map(media => createMedia(media, false)).join('')}</div>
            </div>
        `;
    }

    function loadMoreContent() {
        if (!isLoading && currentIndex < portfolioData.length) {
            isLoading = true;
            const newData = portfolioData.slice(currentIndex, currentIndex + itemsPerPage);
            newData.forEach(data => {
                contentContainer.innerHTML += createSection(data);
            });
            currentIndex += itemsPerPage;
            isLoading = false;
            // Wait for content to render before setting up video controls
            setTimeout(() => {
                setupVideoControls();
            }, 100);
        }
    }

    function checkScroll() {
        setTimeout(() => {
            if (window.innerHeight >= document.body.offsetHeight) {
                loadMoreContent();
                checkScroll();
            }
        }, 100);
    }

    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            loadMoreContent();
        }
    }

    function adjustImageHeights() {
        document.querySelectorAll(".row").forEach(row => {
            const media = row.querySelectorAll(".media");
            const maxHeight = Array.from(media).reduce((max, media) => Math.max(max, media.offsetHeight), 0);
            media.forEach(media => media.style.height = `${maxHeight}px`);
        });
    }

    function setupVideoControls() {
        document.querySelectorAll('video').forEach(video => {
            video.addEventListener('mouseenter', () => video.setAttribute('controls', 'controls'));
            video.addEventListener('mouseleave', () => video.removeAttribute('controls'));
        });
    }
});