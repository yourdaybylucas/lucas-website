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
        id: "044",
        slug: "alex-parm-elle-by-stella",
        title: "alex & parm",
        location: "Elle by Stella",
        date: "Aug. 22, 2025", // Don't forget to update this!
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 200T",
        excerpt: "the beautiful second chapter of parminder and alex's wedding celebrations, highlighted by a heartfelt western ceremony at elle by stella.",
        videoId: "kvLEmAzg5kQ",
        fieldNotes: [
            "this was 'round two' for parminder and alex. having filmed their energetic indian wedding just four weeks prior, it was incredibly special to capture this elegant western ceremony and tell their story holistically.",
            "their first look was pure magic—alex’s reaction perfectly set the tone for an incredibly emotional, genuine day.",
            "the speeches perfectly encapsulated their seven-year journey, highlighting the quiet, everyday ways they show up for each other with patience, forgiveness, and unconditional support."
        ],
        vendors: [
            { name: "Elle by Stella", role: "Venue", url: "https://www.ellebystella.ca/" },
            { name: "Your Day By Lucas", role: "Videography", url: "https://www.yourdaybylucas.com/" },
            { name: "Bryn's Photography", role: "Photography", url: "https://www.brynsphotography.com/" },
            { name: "Plan It Right Events", role: "Planning", url: "https://planitrightevents.ca/" },
            { name: "De Reves Studio", role: "Decor/Florals", url: "https://www.derevesstudio.com/" },
            { name: "Nitro Music", role: "DJ", url: "https://www.instagram.com/nitromusicpro/?hl=en" }
        ]
    },
    {
        id: "043", // adjust to the next sequential number in your inventory
        slug: "megan-mike-elora-mill",
        title: "megan & mike",
        location: "Elora Mill",
        date: "Feb. 16, 2025",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "a massive winter storm and a pivot from an ireland destination. an incredibly grounded day anchored by heavy, honest vows.",
        videoId: "CYWJBr73jrk", 
        fieldNotes: [
            "they originally planned an ireland destination, but pivoted to elora to ensure family could be present. a massive winter storm rolled in that morning, completely isolating the mill and giving the room a quiet, intentional weight.",
            "for a couple that spends their time ice climbing and trekking through colombia, the day itself was remarkably still. no rushing, no heavy timelines. just candle-lit spaces and a focus on the people who braved the drive.",
            "the spoken words carried the entire film. 'you're home to me.' i didn't need to manufacture a single moment. i just kept the lav mics tight to cut through the ambient roar of the gorge outside, stayed close, and collected the honest frames."
        ],
        vendors: [
            { name: "Clement & Co Events", role: "Planner", url: "https://www.clementandcoevents.com/" },
            { name: "Chris Copeland", role: "Photography", url: "https://chriscopelandphotography.co.uk/" },
            { name: "White Oak Flower Co.", role: "Florals", url: "https://www.whiteoakflower.co/" },
            { name: "Simply Beautiful Decor", role: "Decor", url: "https://simplybeautifuldecor.ca/" },
            { name: "Pink Peony Press", role: "Stationery", url: "https://pinkpeonypress.com/" },
            { name: "Your Wedding Officiant", role: "Officiant", url: "https://www.yourweddingofficiant.ca/" },
            { name: "Elora Mill Hotel & Spa", role: "Venue", url: "https://eloramill.ca/" }
        ]
    },
    {
        id: "042",
        slug: "kristen-frankie-spencers",
        title: "kristen & frankie",
        location: "Spencer's at the Waterfront",
        date: "Oct. 12, 2025",
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 200T",
        excerpt: "fourteen years in the making. an honest, high-energy day built on the anticipation of high school sweethearts finally making it official.",
        videoId: "q2Qw5G4M0Lc", 
        fieldNotes: [
            "fourteen years of dating and engagement leads to a very specific kind of energy. they've been together since high school, growing up side by side. you could feel the anticipation mixed with pure excitement all day.",
            "the spoken words anchored the film. from surviving a stint living in a van to joking about farts during the vows—it was the perfect balance of heavy, honest promises and unapologetic laughter. love, when done right, is equal parts laughter, trust, and mischief.",
            "the transition from the ceremony to the reception was seamless, shifting into a massive party at spencer's. the kodak 200t stock handled the shift from the lakefront afternoon into the glass pavilion beautifully, keeping everything feeling raw and unforced."
        ],
        vendors: [
            { name: "586 Event Group", role: "DJ / Entertainment", url: "https://www.586eventgroup.com/" },
            { name: "515 Photo Co.", role: "Photography", url: "https://515photoco.com/" },
            { name: "Andria Sgromo Designs", role: "Decor", url: "https://www.andriasgromodesigns.com/" },
            { name: "Windflower Florals", role: "Florals", url: "https://www.windflowerflorals.com/" }
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
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 200T",
        excerpt: "a story that started with a late-night a&w run, brought to life seven years later on the burlington waterfront. an intimate summer day anchored by private vows and a sparkler exit.",
        videoId: "kXRULOzL9AQ",
        fieldNotes: [
            "it started with a last-ditch effort to find a late-night burger at a&w, and ended up here, seven years later, on the burlington waterfront. seventy of their closest people gathered at paletta mansion for a hot, heavy summer day.",
            "the approach was completely unforced. they opted for a first look and private vows outside, keeping the heavy promises between just the two of them. i just stayed close with the 200t stock, bottling the quiet strength of their connection as the natural light bounced off the estate.",
            "the speeches brought equal parts laughter and tears, but their easy energy carried the film. they closed out the evening with a first dance under sparklers and, fittingly, an a&w late-night snack. you couldn't script a more honest full-circle moment."
        ],
        vendors: [
            { name: "Paletta Mansion", role: "Venue", url: "https://palettamansion.com/" },
            { name: "Nymph Floral", role: "Florals", url: "https://nymphfloral.com/" },
            { name: "Fancy Films", role: "Content Creation", url: "https://www.stylemepretty.com/vendor-profile/fancy-films" }
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
