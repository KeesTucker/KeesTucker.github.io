document.addEventListener("DOMContentLoaded", () => {
    const contentContainer = document.getElementById("contentContainer");

    // Initial content loading and setup
    loadContent();

    // Adjust image heights on load and resize
    window.addEventListener("load", adjustImageHeights);
    window.addEventListener("resize", adjustImageHeights);

    function createMedia(media, isHero) {
        if (media == null) {
          return '';
        }
        const className = isHero ? 'hero' : 'media';
        switch (media.type) {
            case 'video':
                return `<video src="${media.url}" class="${className} full-width" ${isHero ? 'autoplay muted' : ''}></video>`;
            case 'image':
                return `<img src="${media.url}" class="${className} full-width">`;
            case 'vimeo':
                return `
                    <div style="padding:${isHero ? '56.25% 0 0 0' : '0'}; position:relative;" class="${className} vimeo full-width">
                        <iframe src="${media.url}" 
                            frameborder="0" 
                            allow="fullscreen;" 
                            style="position:absolute;top:0;left:0;width:100%;height:100%;" 
                            title="Diving"></iframe>
                    </div>
                    <script src="https://player.vimeo.com/api/player.js"></script>`
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

    function loadContent() {
        portfolioData.forEach(data => {
            contentContainer.innerHTML += createSection(data);
        });
        // Wait for content to render before setting up video controls
        setTimeout(() => {
            setupVideoControls();
        }, 100);
    }

    function adjustImageHeights() {
        document.querySelectorAll(".row").forEach(row => {
            const media = row.querySelectorAll(".media");
            const vimeoEmbeds = row.querySelectorAll(".vimeo");
            if (vimeoEmbeds.length > 0) {
              media.forEach(media => media.style.height = `${media.clientWidth * 9/16}px`);
              return;
            }
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