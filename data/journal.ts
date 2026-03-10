// data/journal.ts

export interface Vendor {
    name: string;
    role: string;
    url: string;
}

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
    vendors?: Vendor[];
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
        excerpt: "twelve years in the making. a story that started at a penny press machine on a high school trip, brought to life under the stone terraces of graydon hall.",
        videoId: "GHhmsEs_8x8",
        fieldNotes: [
            "twelve years in the making. it started at a penny press machine during a high school trip to an aquarium in philadelphia, and ended up here, exchanging promises in the gardens of graydon hall manor.",
            "they are the rare and beautiful story of high school sweethearts who actually made it. growing up alongside each other, their love transitioned from a sweet, shy crush to something deeply rooted and genuine.",
            "the space feels like a european villa dropped directly into toronto. the stone terrace bounced the natural light beautifully, and working alongside emily mickelson and the team at forever wildfield kept the entire day feeling effortless and grounded.",
            "i didn't need to orchestrate a single moment. their connection genuinely feels like a honeymoon phase that never ends. i just stayed close, paid attention, and collected the honest frames."
        ],
        vendors: [
            { name: "Graydon Hall Manor", role: "Venue", url: "https://www.graydonhall.com/" },
            { name: "Emily Mickelson", role: "Photography", url: "https://www.emilymickelson.com/" },
            { name: "Forever Wildfield", role: "Florals", url: "https://foreverwildfield.com/" },
            { name: "Your Day by Lucas", role: "Videography", url: "https://www.yourdaybylucas.com/" }
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
