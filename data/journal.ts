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
    venueId?: string;
}

export interface JournalVideo {
    id: string;
    title: string;
    label: string;
    uploadDate: string;
    duration: string;
    thumbnailQuality?: "maxresdefault" | "sddefault";
}

export function getJournalVideoThumbnail(video: JournalVideo) {
    return `https://img.youtube.com/vi/${video.id}/${video.thumbnailQuality ?? "maxresdefault"}.jpg`;
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
    weddingDateIso: string;
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
        id: "057",
        slug: "olivia-eli-port-cunnington-lodge-muskoka",
        title: "olivia & eli",
        place: {
            name: "Port Cunnington Lodge",
            locality: "Lake of Bays",
            region: "Ontario",
            country: "Canada",
            url: "https://portcunningtonlodge.com/weddings/"
        },
        weddingDate: "June 21, 2025",
        weddingDateIso: "2025-06-21",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "ten years together, one lodge to themselves, and a full muskoka weekend built around the people who know them best.",
        primaryVideo: {
            id: "s8Zuuc169lE",
            title: "10 Years in the Making | Olivia and Eli's Muskoka Wedding at Port Cunnington Lodge",
            label: "Wedding Film",
            uploadDate: "2025-09-04T08:21:20-07:00",
            duration: "PT8M7S"
        },
        seo: {
            title: "Port Cunnington Lodge Wedding Film | Olivia & Eli | LUCAS",
            description: "Watch Olivia and Eli’s Port Cunnington Lodge wedding film from a full weekend on Lake of Bays in Muskoka, Ontario."
        },
        fieldNotes: [
            "after ten years together, olivia and eli turned the wedding into a full weekend at port cunnington lodge. having the property to themselves gave everyone time to settle in, catch up, and celebrate without compressing it all into a few hours.",
            "one of their closest friends officiated, so the ceremony carried the same balance as the rest of the weekend: personal vows, a lot of feeling, and enough well-earned roasting to keep things loose. the speeches followed suit.",
            "the lake, docks, lodge, and late-night dance floor gave the film a distinctly muskoka rhythm. quiet when it needed to be, then very much not quiet once the party started."
        ],
        vendors: [
            { name: "Port Cunnington Lodge", role: "Venue", url: "https://portcunningtonlodge.com/weddings/" },
            { name: "The Bride's Butler", role: "Planning", url: "https://thebridesbutler.ca/" },
            { name: "Whim & Willow Photo", role: "Photography", url: "https://whimandwillowphoto.com/" },
            { name: "Jessy Beck Design", role: "Florals", url: "https://www.jessybeckdesign.com/" }
        ]
    },
    {
        id: "056",
        slug: "kaylee-kyle-cabo-destination-wedding",
        title: "kaylee & kyle",
        place: {
            name: "Sandos Finisterra",
            locality: "Cabo San Lucas",
            region: "Baja California Sur",
            country: "Mexico",
            url: "https://www.sandos.com/sandos-finisterra/weddings-sandos-finisterra"
        },
        weddingDate: "Jan. 31, 2024",
        weddingDateIso: "2024-01-31",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "an ontario crowd in cabo for a week of poolside hangs, a catamaran, personal vows, and a wedding that behaved more like a holiday.",
        primaryVideo: {
            id: "d9kgyZ3NnjA",
            title: "An Unforgettable Week In Cabo | Ontario Couple Hosts Destination Wedding in Mexico",
            label: "Wedding Film",
            uploadDate: "2024-02-06T11:00:30-08:00",
            duration: "PT6M50S",
            thumbnailQuality: "sddefault"
        },
        seo: {
            title: "Cabo Destination Wedding Film | Kaylee & Kyle | LUCAS",
            description: "Watch Kaylee and Kyle’s destination wedding film at Sandos Finisterra in Cabo San Lucas, Mexico, with nearly 100 guests from Ontario."
        },
        fieldNotes: [
            "kaylee and kyle brought nearly one hundred of their favourite people from ontario to cabo. the wedding sat inside a full week together rather than at the centre of one tightly scheduled day.",
            "the days moved between the pool and a catamaran before everyone gathered at sandos finisterra. against the cabo skyline, they read personal vows that gave the film its quieter centre.",
            "destination weddings have a useful looseness to them. by the time the ceremony arrives, everyone has already shared meals, swims, sun, and a few late nights. that familiarity is all over this one."
        ],
        vendors: [
            { name: "Sandos Finisterra", role: "Venue", url: "https://www.sandos.com/sandos-finisterra/weddings-sandos-finisterra" }
        ]
    },
    {
        id: "055",
        slug: "nicole-blake-private-property-toronto",
        title: "nicole & blake",
        place: {
            name: "Private Property",
            locality: "Toronto",
            region: "Ontario",
            country: "Canada"
        },
        weddingDate: "Aug. 18, 2023",
        weddingDateIso: "2023-08-18",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "a toronto backyard, roughly eighty people, and a wedding planned in two months before nicole and blake moved to the uk.",
        primaryVideo: {
            id: "fVA-LpxyxBs",
            title: "Couple Hosts a Beautiful Backyard Wedding in Toronto Before Moving to the UK",
            label: "Wedding Film",
            uploadDate: "2023-09-27T20:32:50-07:00",
            duration: "PT5M7S"
        },
        seo: {
            title: "Toronto Backyard Wedding Film | Nicole & Blake | LUCAS",
            description: "Watch Nicole and Blake’s intimate private-property wedding film from a thoughtfully planned backyard celebration in Toronto, Ontario."
        },
        fieldNotes: [
            "with new jobs taking them to the uk, nicole and blake handed their team a two-month planning window. around eighty people still fit into the toronto backyard without the celebration losing its intimate scale.",
            "a tent linked the property's two levels, creating one continuous route from the afternoon ceremony into dinner and the evening party. the setting felt personal because it was personal; family history was already built into the place.",
            "private-property weddings ask for more planning behind the scenes, but they give the finished film something a conventional venue cannot manufacture. the day belongs to a place that already means something."
        ],
        vendors: [
            { name: "Laura Olsen Events", role: "Planning", url: "https://lauraolsenevents.ca/" },
            { name: "515 Photo Co.", role: "Photography", url: "https://www.515photoco.com/" },
            { name: "DJ Dash", role: "DJ", url: "https://www.thedjdash.com/" }
        ]
    },
    {
        id: "054",
        slug: "dom-spencer-langdon-hall",
        title: "dom & spencer",
        place: {
            name: "Langdon Hall",
            locality: "Cambridge",
            region: "Ontario",
            country: "Canada",
            url: "https://langdonhall.ca/weddings",
            venueId: "langdon-hall"
        },
        weddingDate: "Oct. 18, 2025",
        weddingDateIso: "2025-10-18",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "a fall day at langdon hall for two genuine teammates, equal parts steady devotion, private jokes, and very good timing.",
        primaryVideo: {
            id: "gOZQGueoLkM",
            title: "The Kind of Love that Lasts | Beautiful Fall Wedding Day at Langdon Hall",
            label: "Wedding Film",
            uploadDate: "2026-02-05T09:09:48-08:00",
            duration: "PT7M47S"
        },
        seo: {
            title: "Langdon Hall Wedding Film | Dom & Spencer | LUCAS",
            description: "Watch Dom and Spencer’s fall wedding film at Langdon Hall, a country-house wedding venue in Cambridge, Ontario."
        },
        fieldNotes: [
            "dom and spencer describe one another as teammates, and the evidence is in both the heavy moments and the small ones. when life called for everything to stop for brain surgery, they stopped. when it called for a private joke, they had plenty ready.",
            "their vows never chased perfection. they were about making each other better, funnier, and more fully themselves, which left the ceremony moving without ever becoming too polished.",
            "langdon hall suited that balance. the dark house interiors, red brick, forest, and late-season gardens gave the digital film real range while the entire day stayed grounded on one property."
        ],
        vendors: [
            { name: "Langdon Hall", role: "Venue", url: "https://langdonhall.ca/weddings" },
            { name: "W Events", role: "Planning", url: "https://www.weventsanddecor.com/" },
            { name: "Erin Blackwood Photography", role: "Photography", url: "https://erinblackwood.com/" },
            { name: "Simply Beautiful Decor", role: "Decor", url: "https://simplybeautifuldecor.ca/" },
            { name: "The DJ Co.", role: "DJ", url: "https://thedjco.ca/" },
            { name: "Power of Love Celebrations", role: "Officiant", url: "https://poweroflovecelebrations.com/" }
        ]
    },
    {
        id: "053",
        slug: "mikhail-saira-harding-waterfront-estate",
        title: "mikhail & saira",
        place: {
            name: "Harding Waterfront Estate",
            locality: "Mississauga",
            region: "Ontario",
            country: "Canada",
            url: "https://www.mississauga.ca/hospitality-services/harding-waterfront-estate/",
            venueId: "harding-waterfront"
        },
        weddingDate: "Apr. 25, 2026",
        weddingDateIso: "2026-04-25",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "a classic, faith-centred day at harding waterfront estate, with no first look and all the anticipation left intact.",
        primaryVideo: {
            id: "kuwH4ulnNEA",
            title: "An evidence of grace | Mikhail + Saira's Harding Waterfront Estate Wedding",
            label: "Wedding Film",
            uploadDate: "2026-06-04T09:12:07-07:00",
            duration: "PT6M31S"
        },
        seo: {
            title: "Harding Waterfront Estate Wedding Film | Mikhail & Saira",
            description: "Watch Mikhail and Saira’s digital wedding film at Harding Waterfront Estate, a historic lakefront venue in Mississauga, Ontario."
        },
        fieldNotes: [
            "mikhail and saira skipped the first look. he wanted the traditional anticipation of seeing her walk down the aisle, and leaving that moment alone gave the ceremony a real sense of arrival.",
            "their faith sat at the centre of the day through personal prayers, grounded vows, and saira describing mikhail as an evidence of grace in her life. her mother's speech carried that same weight into the reception.",
            "harding's historic house, open lawn, and lake ontario wind gave the film a classic shape without making it feel formal. the edit stays observational and patient, with a few bloopers left in at the end for accuracy."
        ],
        vendors: [
            { name: "Harding Waterfront Estate", role: "Venue", url: "https://www.mississauga.ca/hospitality-services/harding-waterfront-estate/" },
            { name: "Alyssa Marie Photography", role: "Photography", url: "https://alyssamarie.ca/" }
        ]
    },
    {
        id: "052",
        slug: "abbey-dean-muskoka-elopement",
        title: "abbey & dean",
        place: {
            name: "Camp Wind Rose",
            locality: "Muskoka",
            region: "Ontario",
            country: "Canada",
            url: "https://www.instagram.com/campwindrose/"
        },
        weddingDate: "Aug. 8, 2025",
        weddingDateIso: "2025-08-08",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "rain, a canoe, vows on a small algonquin island, dinner at the cottage, and one curious snapping turtle at sunset.",
        primaryVideo: {
            id: "OpriEnhPFws",
            title: "Adventurous Elopement in Muskoka | Canoe, Island Vows, and Sunset Swim",
            label: "Elopement Film",
            uploadDate: "2025-08-21T10:21:17-07:00",
            duration: "PT4M37S",
            thumbnailQuality: "sddefault"
        },
        seo: {
            title: "Muskoka Elopement Film | Abbey & Dean | LUCAS",
            description: "Watch Abbey and Dean’s adventurous Muskoka elopement film with a canoe trip, private island vows in Algonquin, and a cottage dinner."
        },
        fieldNotes: [
            "one week before the larger wedding, abbey and dean planned something smaller with family at a muskoka cottage. the morning stayed slow before everyone headed toward algonquin with a canoe and very little interest in dry shoes.",
            "rain came down during the paddle, then cleared as they reached a small island. they helped each other get ready there and read their vows with no room, aisle, or audience pulling focus.",
            "the day ended back at camp wind rose with dinner, cake, and a sunset swim interrupted by a snapping turtle. a concise and fairly perfect summary of a muskoka elopement: beautiful, quiet, and slightly feral."
        ],
        vendors: [
            { name: "Camp Wind Rose", role: "Cottage", url: "https://www.instagram.com/campwindrose/" },
            { name: "Evelyn Barkey Photography", role: "Photography", url: "https://evelynbarkey.com/" }
        ]
    },
    {
        id: "051",
        slug: "barbara-hamilton-rcyc-toronto-island",
        title: "barbara & hamilton",
        place: {
            name: "Royal Canadian Yacht Club",
            locality: "Toronto Island",
            region: "Ontario",
            country: "Canada",
            url: "https://rcyc.ca/Occasions/Weddings",
            venueId: "rcyc"
        },
        weddingDate: "Sep. 6, 2025",
        weddingDateIso: "2025-09-06",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "comfort, laughter, a little frosé, and a toronto island wedding with the city sitting quietly across the harbour.",
        primaryVideo: {
            id: "9mTq-dXKW84",
            title: "100 Minus One Day | Barbara + Hamilton's Toronto Island Wedding at The RCYC",
            label: "Wedding Film",
            uploadDate: "2026-01-23T13:04:46-08:00",
            duration: "PT7M7S",
            thumbnailQuality: "sddefault"
        },
        seo: {
            title: "RCYC Toronto Island Wedding Film | Barbara & Hamilton",
            description: "Watch Barbara and Hamilton’s Royal Canadian Yacht Club wedding film on Toronto Island, with harbour and skyline views."
        },
        fieldNotes: [
            "barbara and hamilton's relationship did not begin with a dramatic turning point. it started with comfort, laughter, frosé, and the ease of realizing that being together required very little performance.",
            "their words kept returning to inner character and the daily choice to show up for one another. the vows felt deliberate, but the room around them stayed light enough for the laughter to land.",
            "the boat crossing makes an rcyc wedding feel removed from toronto before the day has even started. then the island clubhouse, open lawn, docks, and skyline keep the city present without letting it take over."
        ],
        vendors: [
            { name: "Royal Canadian Yacht Club", role: "Venue", url: "https://rcyc.ca/Occasions/Weddings" },
            { name: "Black Dog Weddings", role: "Planning", url: "https://www.blackdogweddings.com/" },
            { name: "Corynn Fowler Photography", role: "Photography", url: "https://www.corynnfowlerphotography.com/" }
        ]
    },
    {
        id: "050",
        slug: "alex-sharan-globe-and-mail-centre",
        title: "alex & sharan",
        place: {
            name: "The Globe and Mail Centre",
            locality: "Toronto",
            region: "Ontario",
            country: "Canada",
            url: "https://www.globeandmailcentre.com/wedding-private/weddings/",
            venueId: "globe-and-mail-centre"
        },
        weddingDate: "July 19, 2024",
        weddingDateIso: "2024-07-19",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "alex and sharan above king east, with a glass room, an open terrace, and toronto doing most of the work outside.",
        primaryVideo: {
            id: "koOkRfluMIc",
            title: "Breathtaking Toronto Wedding at The Globe and Mail Centre",
            label: "Wedding Film",
            uploadDate: "2024-09-17T14:14:56-07:00",
            duration: "PT5M55S",
            thumbnailQuality: "sddefault"
        },
        seo: {
            title: "Globe and Mail Centre Wedding Film | Alex & Sharan",
            description: "Watch Alex and Sharan’s wedding film at The Globe and Mail Centre, a modern Toronto venue with a 17th-floor terrace and skyline views."
        },
        fieldNotes: [
            "alex and sharan gathered everyone high above toronto's king east district. the glass room kept the skyline present through the reception, while the terrace opened the day out toward the lake and downtown.",
            "the creative team kept the room clean and considered: pretty plans on the structure, lace and luce behind the stills, and the dulce dwelling bringing softness into a deliberately minimal venue.",
            "the globe and mail centre is at its best when sunset is treated as part of the timeline. once the light shifts across the seventeenth floor, the city becomes a moving backdrop rather than a static view."
        ],
        vendors: [
            { name: "The Globe and Mail Centre", role: "Venue", url: "https://www.globeandmailcentre.com/wedding-private/weddings/" },
            { name: "Pretty Plans", role: "Planning", url: "https://www.prettyplans.ca/" },
            { name: "Lace + Luce", role: "Photography", url: "https://www.laceandluce.com/" },
            { name: "The Dulce Dwelling", role: "Florals", url: "https://www.thedulcedwelling.com/" }
        ]
    },
    {
        id: "049",
        slug: "aalia-josh-lune-1860",
        title: "aalia & josh",
        place: {
            name: "Lune 1860",
            locality: "Goderich",
            region: "Ontario",
            country: "Canada",
            url: "https://www.lune1860.ca/pages/wedding-venue",
            venueId: "lune-1860"
        },
        weddingDate: "Aug. 2, 2025",
        weddingDateIso: "2025-08-02",
        publishedAt: "2026-08-07",
        updatedAt: "2026-08-07",
        format: "Digital",
        stock: "Sensor Only",
        excerpt: "two people from the same hometown whose paths kept crossing until dinner at joey's finally changed the route.",
        primaryVideo: {
            id: "f3L54oek57o",
            title: "Emotive + Fun Lune 1860 Wedding | Aalia & Josh’s Heartfelt Day in Goderich",
            label: "Wedding Film",
            uploadDate: "2025-11-05T09:22:23-08:00",
            duration: "PT6M5S"
        },
        seo: {
            title: "Lune 1860 Wedding Film | Aalia & Josh | LUCAS",
            description: "Watch Aalia and Josh’s digital wedding film at Lune 1860, an intimate private-estate wedding venue near Goderich, Ontario."
        },
        fieldNotes: [
            "aalia and josh grew up in the same hometown, their paths crossing without quite meeting until the timing finally worked. dinner at joey's became the start of a life shaped by devotion, laughter, and family.",
            "their daughter aerys stayed close to the centre of the day. between the tearful vows and a full dance floor, the wedding felt less like the start of a family than a celebration of the one already there.",
            "lune 1860 remains one of my favourite places to film. every matte interior has its own palette, the grounds stay quiet, and the newer reception space carries that same editorial restraint into the evening."
        ],
        vendors: [
            { name: "Lune 1860", role: "Venue", url: "https://www.lune1860.ca/pages/wedding-venue" }
        ]
    },
    {
        id: "048",
        slug: "jenna-clark-whistle-bear-golf-club",
        title: "jenna & clark",
        place: {
            name: "Whistle Bear Golf Club",
            locality: "Cambridge",
            region: "Ontario",
            country: "Canada",
            url: "https://whistlebear.ca/weddings/",
            venueId: "whistle-bear-golf-club"
        },
        weddingDate: "May 31, 2026",
        weddingDateIso: "2026-05-31",
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
            "their day at whistle bear golf club in cambridge was relaxed and personal, moving easily from quiet promises to big laughs with the people who know them best. as jenna put it, forever could never feel like enough."
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
        weddingDateIso: "2026-05-20",
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
        weddingDateIso: "2025-05-16",
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
        "weddingDateIso": "2026-02-28",
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
        weddingDateIso: "2025-08-22",
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
            url: "https://eloramill.ca/",
            venueId: "elora-mill"
        },
        weddingDate: "Feb. 16, 2025",
        weddingDateIso: "2025-02-16",
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
            url: "https://spencers.ca/weddings/",
            venueId: "spencers-waterfront"
        },
        weddingDate: "Oct. 12, 2025",
        weddingDateIso: "2025-10-12",
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
            url: "https://www.graydonhall.com/",
            venueId: "graydon-hall-manor"
        },
        weddingDate: "Sep. 28, 2025",
        weddingDateIso: "2025-09-28",
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
            url: "https://palettamansion.com/",
            venueId: "paletta-mansion"
        },
        weddingDate: "Sep. 14, 2025",
        weddingDateIso: "2025-09-14",
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
        weddingDateIso: "2025-08-02",
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
