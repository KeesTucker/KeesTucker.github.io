const portfolioData = [
    {
        title: "GPU Plant Growth Sim [Unity] [2026]",
        github: "https://github.com/KeesTucker/splant",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/1170572319?muted=1&autoplay=1&controls=0&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479"},
        description: "Real-time plant growth sim running entirely on the GPU, up to 100,000 cells simultaneously dividing, ageing, and bonding together. " +
            "I wanted to see how far I could push a fully GPU-driven simulation so everything lives in compute shaders. " +
            "A 3D spatial hash table with GPU radix sorting handles neighbour queries for collision and bonding, " +
            "and concurrent physics forces are accumulated across thousands of threads using atomic compare-exchange on raw float bits to sidestep race conditions without any serialisation. " +
            "There are no meshes and no rasterisation, the renderer is a custom raymarcher built on a sparse SDF brick atlas that gets rebuilt every frame, " +
            "with subsurface scattering standing in for diffuse lighting and producing soft self-shadowing as a side effect.",
        media: [
            { type: "image", url: "https://i.imgur.com/YfFUlpnl.png" },
            { type: "image", url: "https://i.imgur.com/7sTCorbl.png" },
            { type: "vimeo", url: "https://player.vimeo.com/video/1170572868?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/crsmUoFl.png" },
            { type: "vimeo", url: "https://player.vimeo.com/video/1170575132?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/jqVW9DPl.png" },
        ]
    },
    {
        title: "Aotearoa Diving Sim [UE5] [2025]",
        github: "https://github.com/KeesTucker/Aotearoa",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/989843115?muted=1&autoplay=1&controls=0&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479"},
        description: "I am aiming to create a realistic diving experience simulating NZ waters. " +
            "The sea is a huge part of my life and this is my attempt to showcase that through my favourite medium. " +
            "Almost everything is procedurally generated. All art and assets were created by me using Blender and " +
            "Substance Painter. Still a work in progress.",
        media: [
            { type: "image", url: "https://i.imgur.com/wPaHSBul.png" },
            { type: "image", url: "https://i.imgur.com/qpFNtAMl.png" },
            { type: "image", url: "https://i.imgur.com/R9ISzhfl.png" },
            { type: "image", url: "https://i.imgur.com/v1gee7ll.png" },
            { type: "image", url: "https://i.imgur.com/amVeW2il.png" },
            { type: "image", url: "https://i.imgur.com/38g1NuIl.png" },
            { type: "image", url: "https://i.imgur.com/PDiX7c2l.png" },
        ]
    },
    {
        title: "Entropy Survival Game [UE5] [2025]",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/989842230?muted=1&autoplay=1&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        description: "Entropy is a survival game that has been spear headed by a talented friend. Some friends and " +
            "I jumped on board to help out as it is quickly becoming a very impressive indie game. " +
            "Set in space on a procedurally generated planet, it " +
            "combines elements of typical survival games like Rust and movement shooters like Apex. It also has " +
            "a robust automation system and a focus on vehicles to traverse the vast landscape.",
        media: [
            { type: "vimeo", url: "https://player.vimeo.com/video/989842357?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/lakwbisl.png" },
            { type: "vimeo", url: "https://player.vimeo.com/video/989861493?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "vimeo", url: "https://player.vimeo.com/video/989862242?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/ADDnhHrl.png" },
            { type: "vimeo", url: "https://player.vimeo.com/video/989842606?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        ]
    },
    {
        title: "Untamed Isles [Unity] [2022]",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/989842799?muted=1&autoplay=1&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        description: "Untamed Isles was an ambitious MMO developed in NZ. I was hired as a junior developer but quickly " +
            "stepped into more senior positions with more leadership elements, some of my favourite memories were " +
            "onboarding new devs. My main focus was the combat system which allowed up to 6 players to battle it out in " +
            "Pokemon style battles in realtime, visible to all other players. I also worked on a biome system, genomes " +
            "and wild encounters",
        media: [
            { type: "vimeo", url: "https://player.vimeo.com/video/989842849?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/WR4FgEjl.png" },
            { type: "image", url: "https://i.imgur.com/Zgts0c8l.png" },
            { type: "image", url: "https://i.imgur.com/TrgiqFOl.png" },
            { type: "image", url: "https://i.imgur.com/bb8HFBgl.png" },
        ]
    },
    {
        title: "PAKUMAN: RTX ON [UE5] [2022]",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/989842390?muted=1&autoplay=1&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        description: "A new spin on an old classic! Inspired by the beloved public domain 80s arcade game 'Pachmon', " +
            "this reboot has a tonne of new features including ray tracing, EDM, online scoreboard, realistic graphics, " +
            "anatomically correct Polkman, obstacles to jump over, and new updated realistic water ripple on ghosts. " +
            "Now in 3D! This game was created as an entry to the 2023 Aotearoa Game Jam by Group 13.",
        media: [
            { type: "image", url: "https://i.imgur.com/JC9mIfkl.png" },
            { type: "image", url: "https://i.imgur.com/9xCXlNjl.png" },
        ]
    },
    {
        title: "RATMODE [Unity] [2023]",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/989852119?muted=1&autoplay=1&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        description: "I started a studio with some coworkers and this was one of our prototypes; RAT PARKOUR GAME. " +
            "It's one of my favourite prototypes I've made and I hope we pick it back up in future",
        media: [
            { type: "vimeo", url: "https://player.vimeo.com/video/989842544?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "vimeo", url: "https://player.vimeo.com/video/989842466?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        ]
    },
    {
        title: "Stick Royale [Unity] [2018]",
        github: "https://github.com/KeesTucker/Stick-Brawl",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/989842772?muted=1&autoplay=1&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        description: "Networked 2D physics-based rag-doll fighting game This was a project I started in high school at " +
            "15, I was heavily inspired by Stick Fight: The Game (and actually talked with the developer about my " +
            "project), but I wanted a Battle Royale format so I made a clone in Unity and implemented networking " +
            "with Mirror. It was never really finished but I released it on the Google Play Store and on itch.io as " +
            "an executable download. This game built my foundational programming and development skills and without " +
            "it I wouldn't be half the programmer I am now.",
        media: [
            { type: "vimeo", url: "https://player.vimeo.com/video/989863169?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/MCyvH7Nl.png" },
        ]
    },
    {
        title: "VR Soil Sim [Unity] [2021]",
        github: "https://github.com/KeesTucker/Soil-Simulation-GPU",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/989853383?muted=1&autoplay=1&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        description: "256^3 Voxel Soil Sim running on the quest at almost full fps. Unfortunately, YouTube’s " +
            "compression butchered the footage (switch to 1440p for a better look). A vertical slice of an applied " +
            "game running on the Quest. This is my contribution to a group client project for Evans Taylor Digital. " +
            "It consists of a full voxel soil physics simulation running at a respectable framerate on the Oculus " +
            "Quest’s measly GPU. It runs on the GPU using compute shaders and utilises a custom mesh generation " +
            "algorithm (not marching cubes). The mesh generation is actually a hybrid of Dual Contouring and a custom " +
            "technique I developed, It generates much fewer verts compared to marching cubes and allows for easy " +
            "merging of vertices. Base texture diffuse attributed to; Sophie Engel and Cara Kruger",
        media: [
            { type: "image", url: "https://i.imgur.com/nuoZeQdl.png" },
            { type: "vimeo", url: "https://player.vimeo.com/video/989842665?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/xZJkUo1l.png" },
            { type: "vimeo", url: "https://player.vimeo.com/video/989842686?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        ]
    },
    {
        title: "Wolf Wolf Sheep [Unity] [2022]",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/989842965?muted=1&autoplay=1&controls=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        description: "This was my teams submission to Aoteroa Game Jam 2022! Over the course of a weekend we developed " +
            "an asymmetric multiplayer game similar to Among Us. This game taught me how valuable proper scoping is, we " +
            "scoped our game very small and we finished early and got time to add extra features! We used photon for " +
            "the networking and some synty assets for the environment. I used a naive boids implementation for the " +
            "flocking sheep which helped make the sheeps movement somewhat realistic. We had so much fun making this. " +
            "Unfortunatley it was disqualified as we used Photon Networking, however, it came 1st equal in the voting.",
        media: [
            { type: "image", url: "https://i.imgur.com/WXi5s5ol.png" },
            { type: "image", url: "https://i.imgur.com/DVs6lt9l.png" },
            { type: "image", url: "https://i.imgur.com/imeNctWl.png" },
            { type: "image", url: "https://i.imgur.com/f2ZEFyNl.png" },
        ]
    },
    {
      title: "Gallery",
      description: "Here's some random cool stuff I've made",
      media: [
        { type: "image", url: "https://i.imgur.com/q78ETxFl.png" },
        { type: "vimeo", url: "https://player.vimeo.com/video/989842929?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        { type: "image", url: "https://i.imgur.com/mbIATjGl.png" },
        { type: "image", url: "https://i.imgur.com/5rB6DTal.png" },
        { type: "image", url: "https://i.imgur.com/IHu28Djl.png" },
        { type: "vimeo", url: "https://player.vimeo.com/video/989842137?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        { type: "image", url: "https://i.imgur.com/fUEJBNVl.jpg" },
        { type: "image", url: "https://i.imgur.com/v4jmo0Dl.png" },
      ]
    },
];

const hobbiesData = [
    {
        title: "Huskki",
        github: "https://github.com/KeesTucker/huskki",
        hero: { type: "image", url: "https://i.imgur.com/L38o0U0h.png" },
        description: "ECU hacking and real-time monitoring on my motorbikes. Reverse engineering KTMs wet paper bag security, " +
            "built a custom dashboard that connects wirelessly via Raspberry PI to my phone, and building tooling to let me flash my ECU's.",
        media: [
            { type: "image", url: "https://i.imgur.com/bvfgCEIl.png" },
            { type: "vimeo", url: "https://player.vimeo.com/video/1170778387?muted=1&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/mats0j0l.png" },
            { type: "vimeo", url: "https://player.vimeo.com/video/1170778413?muted=0&autoplay=0&transparent=0&loop=1&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
            { type: "image", url: "https://i.imgur.com/B5BguHol.png" },
            { type: "image", url: "https://i.imgur.com/swjoF1ol.png" },
        ]
    },
    {
        title: "Husaberg 450",
        hero: { type: "vimeo", url: "https://player.vimeo.com/video/1170778300?muted=0&autoplay=0&controls=1&loop=0&autopause=0&badge=0&amp;&amp;player_id=0&amp;app_id=58479" },
        description: "Bought myself a new dirt bike and right after saying I wasn't going to be paranoid and pull it apart it dropped a valve and killed itself. Currently rebuilding :(.",
        media: [
            { type: "image", url: "https://i.imgur.com/5IcbNDcl.png" },
            { type: "image", url: "https://i.imgur.com/YeNKlcpl.png" },
            { type: "image", url: "https://i.imgur.com/fNfwtPvl.png" },
            { type: "image", url: "https://i.imgur.com/gZiOnG3l.png" },
        ]
    },
    {
        title: "Native NZ Saltwater Aquariums",
        hero: { type: "image", url: "https://i.imgur.com/8O3MVtYh.png" },
        description: "I grew up on BOAT. I like the sea. I especially like NZ natives. I love little ecosystems and caring for these little critters. Every time I see a blue eyed triplefin I light up inside. I LOVE SEAWEED.",
        media: [
            { type: "image", url: "https://i.imgur.com/HUnUbeNl.png" },
            { type: "image", url: "https://i.imgur.com/ZtHkAjfl.png" },
            { type: "image", url: "https://i.imgur.com/u48qtABl.png" },
            { type: "image", url: "https://i.imgur.com/duNK4EEl.png" },
            { type: "image", url: "https://i.imgur.com/gfOkHFul.png" },
            { type: "image", url: "https://i.imgur.com/YY0pmqsl.png" },
            { type: "image", url: "https://i.imgur.com/0H3ESj0l.png" },
            { type: "image", url: "https://i.imgur.com/KtQwnIEl.png" },
            { type: "image", url: "https://i.imgur.com/TbL74Wel.png" },
            { type: "image", url: "https://i.imgur.com/NmLWaz6l.png" },
            { type: "image", url: "https://i.imgur.com/XFnqKesl.png" },
            { type: "image", url: "https://i.imgur.com/DmV2VITl.png" },
        ]
    },
    {
        title: "Husqvarna 701",
        hero: { type: "image", url: "https://i.imgur.com/jGvBO8th.png" },
        description: "Previous owner ran it without an air filter... so out came the head, cylinder & piston. Fully rebuilt top-end. My favourite bike of all time. It's purely a supermoto these days.",
        media: [
            { type: "image", url: "https://i.imgur.com/tC5LVLFl.png" },
            { type: "image", url: "https://i.imgur.com/CdPpZHcl.png" },
            { type: "image", url: "https://i.imgur.com/bGW5Royl.png" },
            { type: "image", url: "https://i.imgur.com/i7yaD9Nl.png" },
            { type: "image", url: "https://i.imgur.com/hgUExQsl.png" },
        ]
    },
    {
        title: "Mini ITX Workstation",
        description: "Built for game dev & gaming. RTX 3090 (now a 5070ti), 5900x, 32GB DDR4, 2TB nvme, AIO water cooled",
        media: [
            { type: "image", url: "https://i.imgur.com/rdeUBcQl.png" },
            { type: "image", url: "https://i.imgur.com/ITVSZjwl.png" },
        ]
    },
    {
        title: "Husqvarna SM 610",
        description: "Bought an old thumper with way too many problems in University. Rebuilt it in my dorm room",
        media: [
            { type: "image", url: "https://i.imgur.com/djlYEqfl.png" },
            { type: "image", url: "https://i.imgur.com/mpu3eWEl.png" },
            { type: "image", url: "https://i.imgur.com/sBmsVjol.png" },
        ]
    },
];
