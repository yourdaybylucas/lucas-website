// data/journal.ts

export interface JournalEntry {
    id: string;
    slug: string;
    title: string;
    location: string;
    date: string;
    format: string;
    stock: string;
    excerpt: string;
    videoId: string;
    fieldNotes: string[];
}

export const journalEntries: JournalEntry[] = [
    {
        id: "042",
        slug: "kristen-frankie-spencers",
        title: "kristen & frankie",
        location: "Spencer's at the Waterfront",
        date: "Oct. 12, 2025",
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 500T",
        excerpt: "the rain held off just long enough. a study in quiet moments, heavy tears, and a timeline that we eventually just threw out the window.",
        videoId: "q2Qw5G4M0Lc", 
        fieldNotes: [
            "the rain held off just long enough. a study in quiet moments, heavy tears, and a timeline that we eventually just threw out the window.",
            "they entirely abandoned the traditional shot list. instead, we spent the afternoon just wandering the grounds, letting the lake winds dictate the movement of the dresses and the hair. it felt unforced, grounded, and entirely like them.",
            "the super 8mm frames from the evening reception are some of my favourites. the raw grain handles the low light of the glass pavilion beautifully."
        ]
    },
    {
        id: "041",
        slug: "melanie-kevin-graydon",
        title: "melanie & kevin",
        location: "Graydon Hall Manor",
        date: "Sep. 28, 2025",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "european architecture dropped into the heart of the city. the clear tent reception felt like a greenhouse as the evening set in.",
        videoId: "GHhmsEs_8x8",
        fieldNotes: [
            "european architecture dropped into the heart of the city. the clear tent reception felt like a greenhouse as the evening set in.",
            "we focused heavily on the ambient audio during the outdoor cocktail hour. the string quartet echoing off the stone walls added a massive amount of weight to the final edit.",
            "no directed portraits were necessary; the environment did all the heavy lifting."
        ]
    },
    {
        id: "040",
        slug: "olivia-max-paletta",
        title: "olivia & max",
        location: "Paletta Mansion",
        date: "Sep. 14, 2025",
        format: "Hybrid + Physical",
        stock: "Kodak Tri-X 7266 (B&W)",
        excerpt: "lake winds and untamed energy. we spent most of the afternoon wandering the estate grounds letting the dresses blow out.",
        videoId: "kXRULOzL9AQ",
        fieldNotes: [
            "lake winds and untamed energy. we spent most of the afternoon wandering the estate grounds letting the dresses blow out.",
            "this was a masterclass in trusting the process. instead of pulling them away for golden hour, i just stayed close to the head table and let them experience the speeches undisturbed.",
            "the black and white 8mm stock paired perfectly with the overcast, moody sky rolling in off the lake."
        ]
    },
    {
        id: "039",
        slug: "the-analog-process",
        title: "why super 8mm?",
        location: "The Studio",
        date: "Aug. 02, 2025",
        format: "Editorial / Notes",
        stock: "Mixed Emulsions",
        excerpt: "thoughts on why the imperfections, light leaks, and raw grain of true kodak film stock will always carry more weight than a digital sensor.",
        videoId: "Ozy1MUKZZR4", 
        fieldNotes: [
            "thoughts on why the imperfections, light leaks, and raw grain of true kodak film stock will always carry more weight than a digital sensor.",
            "it forces intention. when a cartridge only holds three minutes of footage, you stop shooting simply to 'have coverage' and start waiting for the moments that actually matter.",
            "the mechanical whir of the camera usually prompts a laugh or a double-take from the room, acting as a perfect icebreaker."
        ]
    }
];
