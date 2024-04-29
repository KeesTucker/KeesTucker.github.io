const portfolioData = [
    {
        title: "Aotearoa Diving Sim [UE5] [Current]",
        hero: { type: "video", url: "content/videos/Diving.mp4"},
        description: "I am aiming to create a realistic diving experience simulating NZ waters. " +
            "The sea is a huge part of my life and this is my attempt to showcase that through my favourite medium. " +
            "Almost everything is procedurally generated. All art and assets were created by me using Blender and " +
            "Substance Painter. Still a work in progress.",
        media: [
            { type: "image", url: "content/images/diving/diving-1.png" },
            { type: "image", url: "content/images/diving/diving-2.png" }, 
            { type: "image", url: "content/images/diving/diving-3.png" },
            { type: "image", url: "content/images/diving/diving-4.png" },
            { type: "image", url: "content/images/diving/diving-5.png" },
            { type: "image", url: "content/images/diving/diving-6.png" },
            { type: "image", url: "content/images/diving/diving-7.png" },
        ]
    },
    {
        title: "Entropy Survival Game [UE5] [Current]",
        hero: { type: "video", url: "content/videos/Kees-Has-No-Roof.mp4" },
        description: "Entropy is a survival game that has been spear headed by a talented friend. Some friends and " +
            "I jumped on board to help out as it is quickly becoming a very impressive indie game. " +
            "Set in space on a procedurally generated planet, it " +
            "combines elements of typical survival games like Rust and movement shooters like Apex. It also has " +
            "a robust automation system and a focus on vehicles to traverse the vast landscape.",
        media: [
            { type: "video", url: "content/videos/Never-Friendly.mp4" },
            { type: "image", url: "content/images/entropy/sand-1.png" },
            { type: "video", url: "content/videos/Explosive-Delivery-System.mp4" },
            { type: "video", url: "content/videos/Hover-Bike-Wall-Riding.mp4" },
            { type: "image", url: "content/images/entropy/sand-2.png" },
            { type: "video", url: "content/videos/Sand.mp4" },
        ]
    },
    {
        title: "Untamed Isles [Unity] [2022]",
        hero: { type: "video", url: "content/videos/Untamedcombat.mp4" },
        description: "Untamed Isles was an ambitious MMO developed in NZ. I was hired as a junior developer but quickly " +
            "stepped into more senior positions with more leadership elements, some of my favourite memories were " +
            "onboarding new devs. My main focus was the combat system which allowed up to 6 players to battle it out in " +
            "Pokemon style battles in realtime, visible to all other players. I also worked on a biome system, genomes " +
            "and wild encounters",
        media: [
            { type: "video", url: "content/videos/Untamedtrailer.mp4" },
            { type: "image", url: "content/images/untamed/arenaplacement.png" },
            { type: "image", url: "content/images/untamed/combatnpc.png" },
            { type: "image", url: "content/images/untamed/validarenas.png" },
            { type: "image", url: "content/images/untamed/wildencounter.png" },
        ]
    },
    {
        title: "PAKUMAN: RTX ON [UE5] [2022]",
        hero: { type: "video", url: "content/videos/Pakuman-Gameplay.mp4" },
        description: "A new spin on an old classic! Inspired by the beloved public domain 80s arcade game 'Pachmon', " +
            "this reboot has a tonne of new features including ray tracing, EDM, online scoreboard, realistic graphics, " +
            "anatomically correct Polkman, obstacles to jump over, and new updated realistic water ripple on ghosts. " +
            "Now in 3D! This game was created as an entry to the 2023 Aotearoa Game Jam by Group 13.",
        media: [
            { type: "image", url: "content/images/pakuman/pakuman1.png" },
            { type: "image", url: "content/images/pakuman/pakuman2.png" },
        ]
    },
    {
        title: "RATMODE [Unity] [2023]",
        hero: { type: "video", url: "content/videos/Grapple-Op.mp4" },
        description: "I started a studio with some coworkers and this was one of our prototypes; RAT PARKOUR GAME. " +
            "It's one of my favourite prototypes I've made and I hope we pick it back up in future",
        media: [
            { type: "video", url: "content/videos/Roofrat.mp4" },
            { type: "video", url: "content/videos/Rat-Tushy.mp4" },
        ]
    },
    {
        title: "Stick Royale [Unity] [2018]",
        hero: { type: "video", url: "content/videos/StickRoyaleTrailer.mp4" },
        description: "Networked 2D physics-based rag-doll fighting game This was a project I started in high school at " +
            "15, I was heavily inspired by Stick Fight: The Game (and actually talked with the developer about my " +
            "project), but I wanted a Battle Royale format so I made a clone in Unity and implemented networking " +
            "with Mirror. It was never really finished but I released it on the Google Play Store and on itch.io as " +
            "an executable download. This game built my foundational programming and development skills and without " +
            "it I wouldn't be half the programmer I am now.",
        media: [
            { type: "video", url: "content/videos/Stickgameplay1.mp4" },
            { type: "image", url: "content/images/stickroyale/stick-royale-shop.png" },
        ]
    },
    {
        title: "Stick Royale [Unity] [2018]",
        hero: { type: "video", url: "content/videos/StickRoyaleTrailer.mp4" },
        description: "Networked 2D physics-based rag-doll fighting game This was a project I started in high school at " +
            "15, I was heavily inspired by Stick Fight: The Game (and actually talked with the developer about my " +
            "project), but I wanted a Battle Royale format so I made a clone in Unity and implemented networking " +
            "with Mirror. It was never really finished but I released it on the Google Play Store and on itch.io as " +
            "an executable download. This game built my foundational programming and development skills and without " +
            "it I wouldn't be half the programmer I am now.",
        media: [
            { type: "video", url: "content/videos/Stickgameplay1.mp4" },
            { type: "image", url: "content/images/stickroyale/stick-royale-shop.png" },
        ]
    },
    {
        title: "VR Soil Sim [Unity] [2021]",
        hero: { type: "video", url: "content/videos/HighResEditSoil.mp4" },
        description: "256^3 Voxel Soil Sim running on the quest at almost full fps. Unfortunately, YouTube’s " +
            "compression butchered the footage (switch to 1440p for a better look). A vertical slice of an applied " +
            "game running on the Quest. This is my contribution to a group client project for Evans Taylor Digital. " +
            "It consists of a full voxel soil physics simulation running at a respectable framerate on the Oculus " +
            "Quest’s measly GPU. It runs on the GPU using compute shaders and utilises a custom mesh generation " +
            "algorithm (not marching cubes). The mesh generation is actually a hybrid of Dual Contouring and a custom " +
            "technique I developed, It generates much fewer verts compared to marching cubes and allows for easy " +
            "merging of vertices. Base texture diffuse attributed to; Sophie Engel and Cara Kruger",
        media: [
            { type: "image", url: "content/images/soilsim/colliders.png" },
            { type: "video", url: "content/videos/Soil-Overhang.mp4" },
            { type: "image", url: "content/images/soilsim/colliders1.png" },
            { type: "video", url: "content/videos/Soil-Overhang-1.mp4" },
        ]
    },
    {
        title: "Wolf Wolf Sheep [Unity] [2022]",
        hero: { type: "video", url: "content/videos/Wolfwolfsheep.mp4" },
        description: "This was my teams submission to Aoteroa Game Jam 2022! Over the course of a weekend we developed " +
            "an asymmetric multiplayer game similar to Among Us. This game taught me how valuable proper scoping is, we " +
            "scoped our game very small and we finished early and got time to add extra features! We used photon for " +
            "the networking and some synty assets for the environment. I used a naive boids implementation for the " +
            "flocking sheep which helped make the sheeps movement somewhat realistic. We had so much fun making this. " +
            "Unfortunatley it was disqualified as we used Photon Networking, however, it came 1st equal in the voting.",
        media: [
            { type: "image", url: "content/images/wolfwolfsheep/gameplay1.png" },
            { type: "image", url: "content/images/wolfwolfsheep/gameplay2.png" },
            { type: "image", url: "content/images/wolfwolfsheep/gameplay3.png" },
            { type: "image", url: "content/images/wolfwolfsheep/gameplay4.png" },
        ]
    },
]; 