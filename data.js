const videosData = [
    {
        id: "video1",
        title: "01. Chess - King - Sage | CCL IITGn",
        youtubeId: "nMAVCu15vGw", 
        description: "Explore the fascinating story of the Chessboard and the wheat grains.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video2",
        title: "02. An Obedient Idiot | CCL IITGn",
        youtubeId: "0dAH6pqX43s",
        description: "Understanding computers as obedient machines that follow precise instructions.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video3",
        title: "03. Computer ki Pardadi | CCL IIT Gandhinagar",
        youtubeId: "SztT6_8RGLQ", 
        description: "A look into the history and ancestors of modern computers.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video4",
        title: "04. Computing with Punched Cards (Binary) | CCL IITGn",
        youtubeId: "m6vBUbTzec4", 
        description: "Learn how punched cards were used for early computing.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video5",
        title: "05. Count on Fingers | CCL IITGn",
        youtubeId: "ceSczrsPwa4", 
        description: "Discover mathematical concepts using just your hands.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video6",
        title: "06. Measure your Height in different bases | CCL IITGn",
        youtubeId: "48iYsIE3ivo", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video7",
        title: "07. Measure your Height in different bases | CCL IITGn",
        youtubeId: "ykc3Fa6cuIs", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video8",
        title: "08. Computing with Punched Cards (Ternary) | CCL IITGn",
        youtubeId: "z0zRSKKVxVU", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video9",
        title: "09. Computing with Weighing Scales - Searching | CCL IITGn",
        youtubeId: "KMPv6UrXBBQ", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video10",
        title: "10. Uljan - Ullat Palat : Error Detection and Correction| CCL IIT Gandhinagar",
        youtubeId: "9JZ9_kzv2xE", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video11",
        title: "11. Suljan - Ullat Palat : Error Detection and Correction | CCL IIT Gn",
        youtubeId: "D8_GQnuJfug", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video12",
        title: "12. Fun Facts | CCL IIT Gn",
        youtubeId: "DueR_C-LSe0", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video13",
        title: "13. Encryption, Decryption and Cracking the Enigma Code | CCL IIT Gn",
        youtubeId: "Q5l7YWih_ZU", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video14",
        title: "14. Logic Gates using wooden blocks | CCL IITGn",
        youtubeId: "cvzqHTDx69E", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video15",
        title: "15. Algorithms with Weighing Scales | CCL IIT Gn",
        youtubeId: "O-vCRrM7TN8", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video17",
        title: "17. AI as a Future | CCL IITGn",
        youtubeId: "6PKRBin-c9w", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    },
    {
        id: "video18",
        title: "Conclude Outro | CCL IIT Gandhinagar",
        youtubeId: "JXkkbc5d63M", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML",
        resources: [
            { type: "PDF", title: "Module Notes", link: "#" },
            { type: "Worksheet", title: "Worksheet", link: "#" }
        ]
    }
];