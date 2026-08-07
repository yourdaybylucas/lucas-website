// data/journal.ts

export interface Vendor {
    name: string;
    role: string;
    url: string;
}

export interface JournalPlace {
    name: string;
    locality: string;
    region?: string;
    country: string;
    url?: string;
}

export interface JournalVideo {
    id: string;
    title: string;
    label: string;
    uploadDate: string;
    duration: string;
}

export interface JournalSeo {
    title: string;
    description: string;
}

export interface JournalEntry {
    id: string;
    slug: string;
    title: string;
    place: JournalPlace;
    weddingDate: string;
    publishedAt: string;
    updatedAt: string;
    format: string;
    stock: string;
    excerpt: string;
    primaryVideo: JournalVideo;
    secondaryVideo?: JournalVideo;
    seo: JournalSeo;
    fieldNotes: string[];
    vendors?: Vendor[];
}

export const journalEntries: JournalEntry[] = [
    {
        id: "048",
        slug: "jenna-clark-whistle-bear-golf-club",
        title: "jenna & clark",
        place: {
            name: "Whistle Bear Golf Club",
            locality: "Cambridge",
            region: "Ontario",
            country: "Canada",
            url: "https://whistlebear.ca/weddings/"
        },
        weddingDate: "May 31, 2026",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "a relaxed day at whistle bear, full of big laughs, honest vows, and the quiet certainty of finding home in another person.",
        primaryVideo: {
            id: "KfOXk9GKan0",
            title: "Whistle Bear Golf Club Wedding // A Love That Feels Like Home",
            label: "Wedding Film",
            uploadDate: "2026-08-05T20:32:00-07:00",
            duration: "PT5M53S"
        },
        seo: {
            title: "Whistle Bear Golf Club Wedding Film | Jenna & Clark | LUCAS",
            description: "Watch Jenna and Clark’s Whistle Bear Golf Club wedding film in Cambridge, Ontario, filmed digitally by Lucas Bulger."
        },
        fieldNotes: [
            "jenna said falling in love with clark never felt like falling. it felt like walking into a house and realizing she was home. their vows returned to that same certainty: a life built together, a family, shared memories, and growing old hand in hand.",
            "the people closest to them spoke about what changed when they found each other. jenna brought out a lighter, brighter side of clark; clark gave her the genuine, kind, honest, and encouraging partnership her family knew she deserved.",
            "their day at whistle bear was relaxed and personal, moving easily from quiet promises to big laughs with the people who know them best. as jenna put it, forever could never feel like enough."
        ],
        vendors: [
            { name: "Whistle Bear Golf Club", role: "Venue", url: "https://whistlebear.ca/weddings/" },
            { name: "Sandra Monaco Photography", role: "Photography", url: "https://sandramonacophoto.com/" },
            { name: "Wildwood", role: "Florals", url: "https://www.bywildwood.com/" },
            { name: "Your Day by Lucas", role: "Wedding Film", url: "https://www.yourdaybylucas.com/" }
        ]
    },
    {
        id: "047",
        slug: "tiffany-jonny-maison-dubreuil",
        title: "tiffany & jonny",
        place: {
            name: "Maison Dubreuil",
            locality: "Saint-Christophe-des-Bardes",
            region: "Nouvelle-Aquitaine",
            country: "France",
            url: "https://www.maisondubreuil.com/"
        },
        weddingDate: "May 20, 2026",
        publishedAt: "2026-07-21",
        updatedAt: "2026-07-21",
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 200T",
        excerpt: "from a random monday night at a toronto board game café to lifetime promises in the vineyards of saint-émilion. an easy, deeply felt day on digital and super 8.",
        primaryVideo: {
            id: "aXhgKAGdOww",
            title: "Let’s start with forever // Tiffany + Jonny’s France Destination Wedding Film",
            label: "Wedding Film",
            uploadDate: "2026-07-21T11:23:20-07:00",
            duration: "PT5M36S"
        },
        secondaryVideo: {
            id: "Zce2J1Ovaec",
            title: "Toronto to France on Super 8 // Tiffany + Jonny at Maison Du Breuil",
            label: "Super 8 Film",
            uploadDate: "2026-07-21T12:58:03-07:00",
            duration: "PT3M5S"
        },
        seo: {
            title: "Maison Dubreuil Wedding Film in Saint-Émilion | LUCAS",
            description: "Watch Tiffany and Jonny’s Maison Dubreuil wedding film in Saint-Émilion, France, filmed on digital and Kodak Vision3 200T Super 8 by Lucas Bulger."
        },
        fieldNotes: [
            "they met at 24 in a tiny board game café in downtown toronto. two weeks after jonny slid into tiffany’s dms, they went on their first date. years later, that wonderfully unlikely monday night led all the way to the vineyards of saint-émilion.",
            "their promises were built around the quiet ways they care for each other: tea brewed on sick days, warm hugs when life feels heavy, small just-thinking-of-you gifts, and the peaceful, cozy life they keep choosing together.",
            "maison dubreuil sits three minutes from saint-émilion, a restored 1908 farmhouse with old stone, open sky, and rows of vines in every direction. i filmed the day on digital and 200t super 8, keeping things simple and letting it unfold as it did. ‘no measure of time with you will be long enough, but we’ll start with forever.’"
        ],
        vendors: [
            { name: "Maison Dubreuil", role: "Venue", url: "https://www.maisondubreuil.com/" },
            { name: "Devoted to You", role: "Planner", url: "https://www.devotedtoyou.ca/" },
            { name: "Eric Cheng Photography", role: "Photography", url: "https://ericcheng.ca/" },
            { name: "Laehui Studio", role: "Illustration", url: "https://laehui.com/" },
            { name: "Reflets", role: "Florals", url: "https://www.reflets-fleurs.com/" }
        ]
    },
    {
        id: "046",
        slug: "alex-nick-chateau-hermitage-de-combas",
        title: "alex & nick",
        place: {
            name: "Château Hermitage de Combas",
            locality: "Servian",
            region: "Occitanie",
            country: "France",
            url: "https://hermitagedecombas.com/"
        },
        weddingDate: "May 16, 2025",
        publishedAt: "2026-07-06",
        updatedAt: "2026-07-06",
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 200T",
        excerpt: "an ethereal, intimate celebration at a breathtaking french chateau, fueled by heartfelt vows, prosecco, and the incredible energy of seventy of their closest friends.",
        primaryVideo: {
            id: "xCRgV8RAX78",
            title: "70 Friends & A French Chateau // Alex & Nick’s Ethereal Wedding in the South of France",
            label: "Wedding Film",
            uploadDate: "2026-07-05T09:20:39-07:00",
            duration: "PT8M28S"
        },
        secondaryVideo: {
            id: "XfkIzsNPIoE",
            title: "Alex & Nick’s Wedding in the South of France // The Super 8 Film",
            label: "Super 8 Film",
            uploadDate: "2026-07-06T10:56:05-07:00",
            duration: "PT3M19S"
        },
        seo: {
            title: "Château Hermitage de Combas Wedding Film | LUCAS",
            description: "Watch Alex and Nick’s Château Hermitage de Combas wedding film from Servian, France, filmed on digital and Kodak Vision3 200T Super 8."
        },
        fieldNotes: [
            "their story wasn't love at first sight, but started as a friendship that slowly grew into a deep, unwavering connection.",
            "nick brought a calm, steady presence that put everyone at ease, while alex radiated undeniable warmth and joy.",
            "the day was pure magic, crossing the ocean for everything from prosecco pours to an unforgettable dance floor."
        ],
        vendors: [
            { name: "Samantha Nicholas", role: "Planner", url: "https://www.samanthanicholas.ca" },
            { name: "Lydia Ivy Photography", role: "Photography", url: "https://lydiaivy.com" },
            { name: "Taylor Switzer Makeup", role: "Makeup", url: "https://taylorswitzer.com" },
            { name: "The Flower Shop Designs", role: "Florals", url: "" },
            { name: "Château Hermitage de Combas", role: "Venue", url: "https://hermitagedecombas.com" },
            { name: "Wildfire DJs & Louis Palmer Music", role: "DJ", url: "https://instagram.com/wildfire_djs" }
        ]
    },
    {
        "id": "045",
        "slug": "monica-luka-old-mill-toronto",
        "title": "monica & luka",
        "place": {
            "name": "Old Mill Toronto",
            "locality": "Toronto",
            "region": "Ontario",
            "country": "Canada",
            "url": "https://www.oldmilltoronto.com/"
        },
        "weddingDate": "Feb. 28, 2026",
        "publishedAt": "2026-04-14",
        "updatedAt": "2026-04-14",
        "format": "Digital + Super 8mm",
        "stock": "Kodak Vision3 500T",
        "excerpt": "an emotional and elegant day with a grounded focus on family, bottled beautifully on super 8.",
        "primaryVideo": {
            "id": "Vt9qMqQPnlQ",
            "title": "Historic Charm & Super 8 Film | Monica & Luka at Old Mill Toronto",
            "label": "Super 8 Film",
            "uploadDate": "2026-04-14T11:36:14-07:00",
            "duration": "PT2M52S"
        },
        "secondaryVideo": {
            "id": "4gFlIIgFD1c",
            "title": "An Elegant, Heartfelt Wedding at Old Mill Toronto | Monica + Luka",
            "label": "Digital Reel",
            "uploadDate": "2026-03-06T13:25:54-08:00",
            "duration": "PT1M15S"
        },
        "seo": {
            "title": "Old Mill Toronto Wedding Film | Monica & Luka | LUCAS",
            "description": "Watch Monica and Luka’s Old Mill Toronto wedding films, documented on digital and Kodak Vision3 500T Super 8 by Lucas Bulger."
        },
        "fieldNotes": [
            "the historic venue and elegant styling created an incredible energy, perfectly complemented by live strings.",
            "they thoughtfully moved their date forward so monica’s dad could be there to celebrate with them, giving the whole day this beautiful, grounded focus.",
            "it was a perfect mix of meaningful, quiet moments and a lot of laughs with their favourite people. we also cut a 60-second digital reel to preserve the fast-paced energy of the party."
        ],
        "vendors": [
            { "name": "Muse Event Co", "role": "Planner", "url": "https://www.instagram.com/museeventco/" },
            { "name": "Paige Thompson", "role": "Photography", "url": "https://www.instagram.com/paigethompsonphoto/" },
            { "name": "Blush and Bloom", "role": "Florals", "url": "https://www.instagram.com/blushandbloom/" },
            { "name": "Old Mill Toronto", "role": "Venue", "url": "https://www.instagram.com/oldmilltoronto/" },
            { "name": "Wellington Music", "role": "Strings", "url": "https://www.instagram.com/wellington.music/" }
        ]
    },
    {
        id: "044",
        slug: "alex-parm-elle-by-stella",
        title: "alex & parm",
        place: {
            name: "Elle by Stella",
            locality: "Toronto",
            region: "Ontario",
            country: "Canada",
            url: "https://www.ellebystella.ca/"
        },
        weddingDate: "Aug. 22, 2025",
        publishedAt: "2026-03-11",
        updatedAt: "2026-03-11",
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 200T",
        excerpt: "the beautiful second chapter of parminder and alex's wedding celebrations, highlighted by a heartfelt western ceremony at elle by stella.",
        primaryVideo: {
            id: "kvLEmAzg5kQ",
            title: "The Grand Finale | Parminder & Alex’s Wedding at Elle by Stella",
            label: "Wedding Film",
            uploadDate: "2025-12-11T10:51:03-08:00",
            duration: "PT8M4S"
        },
        seo: {
            title: "Elle by Stella Wedding Film | Alex & Parm | LUCAS",
            description: "Watch Alex and Parm’s Elle by Stella wedding film in Toronto, documented on digital and Kodak Vision3 200T Super 8 by Lucas Bulger."
        },
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
        place: {
            name: "Elora Mill",
            locality: "Elora",
            region: "Ontario",
            country: "Canada",
            url: "https://eloramill.ca/"
        },
        weddingDate: "Feb. 16, 2025",
        publishedAt: "2026-03-10",
        updatedAt: "2026-03-10",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "a massive winter storm and a pivot from an ireland destination. an incredibly grounded day anchored by heavy, honest vows.",
        primaryVideo: {
            id: "CYWJBr73jrk",
            title: "A Winter Wedding Full of Love | Megan + Mike at Elora Mill",
            label: "Wedding Film",
            uploadDate: "2025-04-07T07:26:37-07:00",
            duration: "PT7M15S"
        },
        seo: {
            title: "Elora Mill Winter Wedding Film | Megan & Mike | LUCAS",
            description: "Watch Megan and Mike’s winter wedding film at Elora Mill in Ontario, filmed digitally by Guelph wedding filmmaker Lucas Bulger."
        },
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
        place: {
            name: "Spencer's at the Waterfront",
            locality: "Burlington",
            region: "Ontario",
            country: "Canada",
            url: "https://pearleweddings.ca/spencers/"
        },
        weddingDate: "Oct. 12, 2025",
        publishedAt: "2026-03-10",
        updatedAt: "2026-03-10",
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 200T",
        excerpt: "fourteen years in the making. an honest, high-energy day built on the anticipation of high school sweethearts finally making it official.",
        primaryVideo: {
            id: "q2Qw5G4M0Lc",
            title: "Adventure, Laughter & 14 Years of Love | Spencer’s at the Waterfront Wedding Video",
            label: "Wedding Film",
            uploadDate: "2025-11-11T09:59:08-08:00",
            duration: "PT6M27S"
        },
        seo: {
            title: "Spencer’s Waterfront Wedding Film | Kristen & Frankie",
            description: "Watch Kristen and Frankie’s Spencer’s at the Waterfront wedding film in Burlington, filmed on digital and Kodak Vision3 200T Super 8."
        },
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
        place: {
            name: "Graydon Hall Manor",
            locality: "Toronto",
            region: "Ontario",
            country: "Canada",
            url: "https://www.graydonhall.com/"
        },
        weddingDate: "Sep. 28, 2025",
        publishedAt: "2026-03-10",
        updatedAt: "2026-03-10",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "twelve years in the making. a story that started at a penny press machine on a high school trip, brought to life under the stone terraces of graydon hall.",
        primaryVideo: {
            id: "GHhmsEs_8x8",
            title: "Romantic Graydon Hall Manor Wedding | Kevin & Melanie’s High School Sweetheart Story",
            label: "Wedding Film",
            uploadDate: "2025-11-15T12:52:36-08:00",
            duration: "PT6M57S"
        },
        seo: {
            title: "Graydon Hall Manor Wedding Film | Melanie & Kevin | LUCAS",
            description: "Watch Melanie and Kevin’s Graydon Hall Manor wedding film in Toronto, documented digitally by Ontario wedding filmmaker Lucas Bulger."
        },
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
        place: {
            name: "Paletta Mansion",
            locality: "Burlington",
            region: "Ontario",
            country: "Canada",
            url: "https://palettamansion.com/"
        },
        weddingDate: "Sep. 14, 2025",
        publishedAt: "2026-03-10",
        updatedAt: "2026-03-10",
        format: "Digital + Super 8mm",
        stock: "Kodak Vision3 200T",
        excerpt: "a story that started with a late-night a&w run, brought to life seven years later on the burlington waterfront. an intimate summer day anchored by private vows and a sparkler exit.",
        primaryVideo: {
            id: "kXRULOzL9AQ",
            title: "The Greatest Achievement in My Life is Marrying You | Beautiful Wedding at The Paletta Mansion",
            label: "Wedding Film",
            uploadDate: "2025-09-19T20:21:39-07:00",
            duration: "PT7M2S"
        },
        seo: {
            title: "Paletta Mansion Wedding Film | Olivia & Max | LUCAS",
            description: "Watch Olivia and Max’s Paletta Mansion wedding film in Burlington, documented on digital and Kodak Vision3 200T Super 8 by Lucas Bulger."
        },
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
        place: {
            name: "The Studio",
            locality: "Guelph",
            region: "Ontario",
            country: "Canada"
        },
        weddingDate: "Aug. 02, 2025",
        publishedAt: "2026-03-10",
        updatedAt: "2026-03-10",
        format: "Editorial / Notes",
        stock: "Mixed Emulsions",
        excerpt: "thoughts on why the imperfections, light leaks, and raw grain of true kodak film stock will always carry more weight than a digital sensor.",
        primaryVideo: {
            id: "Ozy1MUKZZR4",
            title: "Kristen & Frankie on Super 8 | A Waterfront Wedding in Burlington",
            label: "Super 8 Film",
            uploadDate: "2025-11-06T14:53:14-08:00",
            duration: "PT3M19S"
        },
        seo: {
            title: "Why Super 8 Wedding Film? | The Analog Process | LUCAS",
            description: "Why Super 8 wedding film still matters: notes from Lucas Bulger on Kodak film stock, intentional coverage, grain, light leaks, and honest movement."
        },
        fieldNotes: [
            "thoughts on why the imperfections, light leaks, and raw grain of true kodak film stock will always carry more weight than a digital sensor.",
            "it forces intention. when a cartridge only holds three minutes of footage, you stop shooting simply to 'have coverage' and start waiting for the moments that actually matter.",
            "the mechanical whir of the camera usually prompts a laugh or a double-take from the room, acting as a perfect icebreaker."
        ]
    }
];
