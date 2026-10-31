const videosData = [
    {
        id: "video1",
        title: "01. Chess - King - Sage | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/01_chess_king_sage.png",
        youtubeId: "nMAVCu15vGw", 
        description: "Explore the fascinating story of the Chessboard and the wheat grains.",
        module: "CT and AI ML"
    },
    {
        id: "video2",
        title: "02. An Obedient Idiot | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/02_an_obedient_idiot.png",
        youtubeId: "0dAH6pqX43s",
        description: "Understanding computers as obedient machines that follow precise instructions.",
        module: "CT and AI ML"
    },
    {
        id: "video3",
        title: "03. Computer ki Pardadi | CCL IIT Gandhinagar",
        thumbnail: "book/CCL_Thumbnails_All/03_computer_ki_pardadi.png",
        youtubeId: "SztT6_8RGLQ", 
        description: "A look into the history and ancestors of modern computers.",
        module: "CT and AI ML"
    },
    {
        id: "video4",
        title: "04. Computing with Punched Cards (Binary) | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/04_punched_cards_binary.png",
        youtubeId: "m6vBUbTzec4", 
        description: "Learn how punched cards were used for early computing.",
        module: "CT and AI ML"
    },
    {
        id: "video5",
        title: "05. Count on Fingers | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/05_count_on_fingers.png",
        youtubeId: "ceSczrsPwa4", 
        description: "Discover mathematical concepts using just your hands.",
        module: "CT and AI ML"
    },
    {
        id: "video6",
        title: "06. Measure your Height in different bases | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/06_height_in_different_bases.png",
        youtubeId: "48iYsIE3ivo", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML"
    },
    {
        id: "video7",
        title: "07. Measure your Height in different bases | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/07_weight_in_different_bases.png",
        youtubeId: "ykc3Fa6cuIs", 
        description: "Understanding different number bases by measuring height.",
        module: "CT and AI ML"
    },
    {
        id: "video8",
        title: "08. Computing with Punched Cards (Ternary) | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/08_punched_cards_ternary.png",
        youtubeId: "z0zRSKKVxVU", 
        description: "Count beyond binary: punched cards that use three states to compute in base 3.",
        module: "CT and AI ML"
    },
    {
        id: "video9",
        title: "09. Computing with Weighing Scales - Searching | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/09_weighing_scales_searching.png",
        youtubeId: "KMPv6UrXBBQ", 
        description: "Use a weighing scale to search smartly and find the odd one out in as few weighings as possible.",
        module: "CT and AI ML"
    },
    {
        id: "video10",
        title: "10. Uljan - Ullat Palat : Error Detection and Correction| CCL IIT Gandhinagar",
        thumbnail: "book/CCL_Thumbnails_All/10_uljan_ullat_palat.png",
        youtubeId: "9JZ9_kzv2xE", 
        description: "A magic trick with flipped cards that reveals how computers detect errors in data.",
        module: "CT and AI ML"
    },
    {
        id: "video11",
        title: "11. Suljan - Ullat Palat : Error Detection and Correction | CCL IIT Gn",
        thumbnail: "book/CCL_Thumbnails_All/11_uljan_ullat_palat_parity.png",
        youtubeId: "D8_GQnuJfug", 
        description: "The secret behind the trick: how parity lets computers find and fix errors.",
        module: "CT and AI ML"
    },
    {
        id: "video12",
        title: "12. Fun Facts | CCL IIT Gn",
        thumbnail: "book/CCL_Thumbnails_All/12_fun_facts.png",
        youtubeId: "DueR_C-LSe0", 
        description: "Surprising fun facts from the world of computing and computational thinking.",
        module: "CT and AI ML"
    },
    {
        id: "video13",
        title: "13. Encryption, Decryption and Cracking the Enigma Code | CCL IIT Gn",
        thumbnail: "book/CCL_Thumbnails_All/13_enigma_code.png",
        youtubeId: "Q5l7YWih_ZU", 
        description: "How secret messages are encrypted and decrypted, and how the Enigma code was cracked.",
        module: "CT and AI ML"
    },
    {
        id: "video14",
        title: "14. Logic Gates using wooden blocks | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/14_logic_gates_wooden_blocks.png",
        youtubeId: "cvzqHTDx69E", 
        description: "Build AND, OR and NOT logic gates out of wooden blocks and see how computers make decisions.",
        module: "CT and AI ML"
    },
    {
        id: "video15",
        title: "15. Algorithms with Weighing Scales | CCL IIT Gn",
        thumbnail: "book/CCL_Thumbnails_All/15_algorithms_weighing_scales.png",
        youtubeId: "O-vCRrM7TN8", 
        description: "Step-by-step algorithms for searching and sorting using nothing but a weighing scale.",
        module: "CT and AI ML"
    },
    {
        id: "video17",
        title: "17. AI as a Future | CCL IITGn",
        thumbnail: "book/CCL_Thumbnails_All/17_ai_as_a_future.png",
        youtubeId: "6PKRBin-c9w", 
        description: "Where artificial intelligence is heading, and what it means for the future.",
        module: "CT and AI ML"
    },
    {
        id: "video18",
        title: "Conclude Outro | CCL IIT Gandhinagar",
        thumbnail: "book/CCL_Thumbnails_All/99_conclude_outro.png",
        youtubeId: "JXkkbc5d63M", 
        description: "A wrap-up of the series and the big ideas of computational thinking.",
        module: "CT and AI ML"
    },
    {
        id: "video19",
        title: "Learn Ascending and Descending with this Game | CCL IIT Gandhinagar",
        youtubeId: "240zR7S5z6A",
        description: "A hands-on game for learning to arrange numbers in ascending and descending order.",
        module: "CT and AI ML"
    },
    {
        id: "video20",
        title: "This Puzzle Turns Into a Portrait 🤯✨ | Optical Illusion DIY | Diwali D20 | CCL IIT Gandhinagar",
        youtubeId: "4ngdM_uVZCA",
        description: "A DIY optical-illusion puzzle whose pieces come together to form a portrait.",
        module: "CT and AI ML"
    },
    {
        id: "video21",
        title: "Sorting Network (Map) | Computational Thinking | Mathematics | CCL IIT Gandhinagar",
        youtubeId: "txZ4cxbdsR4",
        description: "Sort numbers by walking a sorting network drawn on a map, a hands-on look at parallel sorting.",
        module: "CT and AI ML"
    },
    
    {
        id: "video22",
        title: "Man Vs माचिस | AI Chess with Matchbox | Part - 1 | CCL IIT Gandhinagar",
        youtubeId: "T9oT9WHkC50", 
        description: "Man vs Matchbox, Part 1: matchboxes and beads that learn to play chess, a first look at how AI learns.",
        module: "CT and AI ML"
    },
    {
        id: "video23",
        title: "Man Vs माचिस | Human Neural Network & AI | 3030 Eklavya | CCL IIT Gandhinagar",
        youtubeId: "rv_Bq_QER5s", 
        description: "Man vs Matchbox: people act as a human neural network to show how AI makes decisions.",
        module: "CT and AI ML"
    },
    {
        id: "video24",
        title: "Man Vs माचिस | AI Checkers with Matchbox | CCL IIT Gandhinagar",
        youtubeId: "7-hJuOLMUAM", 
        description: "Man vs Matchbox: matchboxes that learn to play checkers by rewarding good moves.",
        module: "CT and AI ML"
    }, 

];
