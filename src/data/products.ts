// Using images from public folder - Bed & sofa components Pictures
// These are referenced directly as public assets
const prodBrackets = "/Bed%20%26%20sofa%20components%20Pictures/Big%20brackets.jpg";
const prodButtonNails = "/Bed%20%26%20sofa%20components%20Pictures/button%20nails.jpg";
const prodCastors = "/Bed%20%26%20sofa%20components%20Pictures/caster.jpg";
const prodInsertEdge = "/Bed%20%26%20sofa%20components%20Pictures/Insert%20%28with%20edga%29.jpg";
const prodInserts = "/Bed%20%26%20sofa%20components%20Pictures/Insert.jpg";
const prodHingeSingle = "/Bed%20%26%20sofa%20components%20Pictures/Iron%20hinges%20%282%20holes%29.png";
const prodHinges = "/Bed%20%26%20sofa%20components%20Pictures/Iron%20hinges%20set.jpg";
const prodLLegs = "/Bed%20%26%20sofa%20components%20Pictures/L%20shape%20legs.jpg";
const prodLinkingBar = "/Bed%20%26%20sofa%20components%20Pictures/linking%20bar.jpg";
const prodBolts = "/Bed%20%26%20sofa%20components%20Pictures/M8%20%26%20M5%20Bolt.jpg";
const prodMattressTape = "/Bed%20%26%20sofa%20components%20Pictures/mattress%20tape.jpg";
const prodMetalSofaLegs = "/Bed%20%26%20sofa%20components%20Pictures/Metal%20sofa%20legs%20set.jpg";
const prodUClips = "/Bed%20%26%20sofa%20components%20Pictures/Metal%20U%20clip%20%26%20Plastic%20U%20clip.jpg";
const prodWoodSofaLegs = "/Bed%20%26%20sofa%20components%20Pictures/Metal%2Bwood%20sofa%20legs%20set.jpg";
const prodOnepieceBolt = "/Bed%20%26%20sofa%20components%20Pictures/One%20piece%20bolt.jpg";
const prodPipeLegs = "/Bed%20%26%20sofa%20components%20Pictures/Pipe%20legs.jpg";
const prodCornerEdge = "/Bed%20%26%20sofa%20components%20Pictures/Plastic%20Drawer%20corner%20%28edga%29.jpg";
const prodPlasticHinge = "/Bed%20%26%20sofa%20components%20Pictures/plastic%20hinges.png";
const prodPlasticWasher = "/Bed%20%26%20sofa%20components%20Pictures/plastic%20wahser.jpg";
const prodSmallBrackets = "/Bed%20%26%20sofa%20components%20Pictures/Small%20brackets.jpg";
const prodSofaHinges = "/Bed%20%26%20sofa%20components%20Pictures/sofa%20hinges.jpg";
const prodSofaLegs = "/Bed%20%26%20sofa%20components%20Pictures/sofa%20legs.jpg";
const prodStarSofaLegs = "/Bed%20%26%20sofa%20components%20Pictures/Star%20sofa%20legs.jpg";
const prodTSofaLegs = "/Bed%20%26%20sofa%20components%20Pictures/T%20sofa%20leg%28Angle%29.jpg";
const prodTNut = "/Bed%20%26%20sofa%20components%20Pictures/T%20nut.jpg";
const prodWasher = "/Bed%20%26%20sofa%20components%20Pictures/wahser.jpg";

// Sofa elastic webbing images
const webbing1 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/1.jpg";
const webbing2 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/2.jpg";
const webbing3 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/3.jpg";
const webbing4 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/4.jpg";
const webbing5 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/5.jpg";
const webbing6 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/6.jpg";
const webbing7 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/7.jpg";
const webbing8 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/8.jpg";
const webbing9 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/9.jpg";
const webbing10 = "/Bed%20%26%20sofa%20components%20Pictures/Sofa%20elastic%20webbing/10.jpg";
const webbing11 = "/Bed & sofa components Pictures/Sofa elastic webbing/11.jpg";
const webbing12 = "/Bed & sofa components Pictures/Sofa elastic webbing/12.jpg";
const webbing13 = "/Bed & sofa components Pictures/Sofa elastic webbing/13.jpg";
const webbing14 = "/Bed & sofa components Pictures/Sofa elastic webbing/14.jpg";
const webbing15 = "/Bed & sofa components Pictures/Sofa elastic webbing/15.jpg";
const webbing16 = "/Bed & sofa components Pictures/Sofa elastic webbing/16.jpg";

// Collection images
import catFabrics from "@/assets/cat-fabrics.jpg";
import catFeet from "@/assets/cat-feet.jpg";
import catButtoning from "@/assets/cat-buttoning.jpg";
import catAerosols from "@/assets/cat-aerosols.jpg";
import catWebbing from "@/assets/cat-webbing.jpg";
import catTools from "@/assets/cat-tools.jpg";

export type Product = {
  id: string;
  sku: string;
  title: string;
  category: string;
  collection: string;
  tag?: string | null;
  image: string;
  shortDesc: string;
  description: string;
  features: string[];
  uses: string[];
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  image: string;
  tag?: string | null;
};

export const collections: Collection[] = [
  {
    id: "fabrics",
    name: "Fabrics",
    description: "Chenille, velvet, faux leather and more. Extensive range for all upholstery projects.",
    image: catFabrics,
    tag: "Most Popular",
  },
  {
    id: "feet-castors",
    name: "Feet & Castors",
    description: "Chrome, brass and black sofa feet, gliders and castors in all sizes.",
    image: catFeet,
    tag: null,
  },
  {
    id: "buttoning-finishing",
    name: "Buttoning & Finishing",
    description: "Decorative buttons, nails, gimp pins and all your trimming essentials.",
    image: catButtoning,
    tag: null,
  },
  {
    id: "aerosols",
    name: "Aerosols",
    description: "Fabric adhesives, fire retardant and upholstery care sprays.",
    image: catAerosols,
    tag: null,
  },
  {
    id: "spunbond-webbing",
    name: "Spunbond & Webbing",
    description: "Non-woven linings, sofa webbing and dust cover materials.",
    image: catWebbing,
    tag: null,
  },
  {
    id: "accessories-tools",
    name: "Accessories & Tools",
    description: "Staple guns, needles, scissors and everything the professional needs.",
    image: catTools,
    tag: null,
  },
];

export const products: Product[] = [
  // ── BRACKETS & FIXINGS ─────────────────────────────────
  {
    id: "large-sofa-brackets",
    sku: "WRC-BRK-01",
    title: "Large Sofa Brackets",
    category: "Brackets & Fixings",
    collection: "Accessories & Tools",
    image: prodBrackets,
    shortDesc: "Heavy-duty galvanised steel frame assembly brackets in multiple sizes.",
    description:
      "Our heavy-duty galvanised steel sofa brackets are engineered for strength and durability. Manufactured to withstand the rigours of daily furniture use, these brackets are a staple for sofa and bed frame assembly lines across the UK. Available in multiple sizes to suit a wide range of frame thicknesses and joint configurations.",
    features: [
      "Galvanised zinc finish for corrosion resistance",
      "Multiple sizes available — call for current stock",
      "Pre-drilled holes for fast assembly",
      "Suitable for both hardwood and softwood frames",
    ],
    uses: ["Sofa frame assembly", "Bed frame construction", "Cabinet and unit manufacturing"],
  },
  {
    id: "small-brackets",
    sku: "WRC-BRK-02",
    title: "Small Bracket Set",
    category: "Brackets & Fixings",
    collection: "Accessories & Tools",
    tag: null,
    image: prodSmallBrackets,
    shortDesc: "Comprehensive set of small galvanised brackets for all joint types.",
    description:
      "A comprehensive range of smaller galvanised steel brackets covering corner joints, flat plates and T-junction connectors. Supplied in mixed sets ideal for smaller frame work, drawer units and cabinet assembly. All components are zinc-plated for longevity.",
    features: [
      "Mixed-type set: corner, flat plate and T-bar",
      "Zinc-plated steel construction",
      "Pre-drilled for standard screw sizes",
      "Compact form for tight joint access",
    ],
    uses: ["Drawer and cabinet construction", "Lightweight frame joints", "Furniture repair and restoration"],
  },
  {
    id: "linking-bars",
    sku: "WRC-LNK-01",
    title: "Linking Bars",
    category: "Brackets & Fixings",
    collection: "Accessories & Tools",
    tag: null,
    image: prodLinkingBar,
    shortDesc: "Steel linking bars in two lengths for securing sectional sofa units.",
    description:
      "Steel linking bars designed to securely connect adjacent sectional sofa units. Available in two standard lengths with slotted ends for fine adjustment. Essential for showroom and retail environments where sectional configurations must remain stable.",
    features: [
      "Available in two standard lengths",
      "Slotted ends for positional adjustment",
      "Polished steel finish",
      "Easy tool-free installation",
    ],
    uses: ["Sectional sofa connection", "Modular furniture linking", "Showroom display setup"],
  },

  // ── HINGES ─────────────────────────────────────────────
  {
    id: "iron-hinges-set",
    sku: "WRC-HNG-02",
    title: "Iron Hinges (Set)",
    category: "Hinges",
    collection: "Accessories & Tools",
    image: prodHinges,
    shortDesc: "Chrome & black iron hinges supplied in matching sets for sofa beds.",
    description:
      "High-quality iron hinges supplied as matching chrome and black pairs. Ideal for sofa bed mechanisms, storage ottomans and lift-up bases. The contrasting finishes allow for both functional and decorative applications in furniture manufacturing.",
    features: [
      "Supplied as matched chrome + black set",
      "Heavy-gauge iron construction",
      "Suitable for lift-up and fold-flat mechanisms",
      "Pre-drilled fixing points",
    ],
    uses: ["Sofa bed mechanisms", "Storage ottoman lids", "Fold-flat furniture joints"],
  },
  {
    id: "iron-hinge-single",
    sku: "WRC-HNG-01",
    title: "Iron Hinge (Single)",
    category: "Hinges",
    collection: "Accessories & Tools",
    shortDesc: "Single 4-hole flat iron hinge. Zinc-plated finish for corrosion resistance.",
    description:
      "A versatile single flat iron hinge with four fixing holes for secure fastening. Zinc-plated to prevent corrosion, suitable for lightweight panel joints, access hatches and decorative lid applications across bed and sofa manufacturing.",
    features: [
      "4-hole fixing pattern",
      "Zinc-plated for corrosion resistance",
      "Flat profile for flush panel fitting",
      "Available in bulk quantities",
    ],
    uses: ["Panel jointing", "Access hatches", "Lightweight lid fixtures"],
  },
  {
    id: "plastic-hinge",
    sku: "WRC-HNG-03",
    title: "Plastic Hinge",
    category: "Hinges",
    collection: "Accessories & Tools",
    tag: null,
    image: prodPlasticHinge,
    shortDesc: "Black heavy-duty plastic hinge for upholstered bed bases and sofa interiors.",
    description:
      "A robust black moulded plastic hinge with a wide body profile for maximum contact area. Designed for upholstered divan base lids, ottoman storage furniture and sofa interior panels where a silent, non-metallic joint is required.",
    features: [
      "Heavy-duty black nylon construction",
      "Wide body for increased strength",
      "Silent operation — no metal-on-metal contact",
      "UV-stable material",
    ],
    uses: ["Divan base lids", "Ottoman storage furniture", "Interior panel jointing"],
  },

  // ── LEGS & FEET ────────────────────────────────────────
  {
    id: "l-shape-legs",
    sku: "WRC-LEG-03",
    title: "L-Shape Chrome Legs",
    category: "Legs & Feet",
    collection: "Feet & Castors",
    tag: null,
    image: prodLLegs,
    shortDesc: "Polished chrome corner L-legs for modern sofa and furniture frames.",
    description:
      "Premium polished chrome L-shape corner legs offering a sleek, contemporary finish. Constructed from solid steel with a mirror-polished chrome plating. Available in multiple heights. These legs are a popular choice for modern sofa frames and lounge furniture.",
    features: [
      "Mirror-polished chrome finish",
      "Solid steel core construction",
      "Multiple height options available",
      "Pre-drilled mounting plate",
    ],
    uses: ["Modern sofa frames", "Lounge chairs", "Side tables and occasional furniture"],
  },
  {
    id: "metal-sofa-legs",
    sku: "WRC-LEG-04",
    title: "Gold Metal Sofa Legs",
    category: "Legs & Feet",
    collection: "Feet & Castors",
    tag: "New In",
    image: prodMetalSofaLegs,
    shortDesc: "Gold-finish geometric metal legs — a bold, on-trend statement for premium sofas.",
    description:
      "These striking gold-finish geometric metal sofa legs bring a luxury, designer feel to any upholstered piece. Featuring a looped arch design at the top and stepped geometric base, available in tall and short configurations to suit different sofa styles.",
    features: [
      "Gold electroplated finish",
      "Available in tall and short variants",
      "Geometric looped arch design",
      "Solid steel core",
    ],
    uses: ["Premium sofa legs", "Designer accent chairs", "Headboard stands"],
  },
  {
    id: "wood-metal-sofa-legs",
    sku: "WRC-LEG-05",
    title: "Wood & Gold Sofa Legs",
    category: "Legs & Feet",
    collection: "Feet & Castors",
    tag: null,
    image: prodWoodSofaLegs,
    shortDesc: "Luxury dark wood & gold metal sofa legs with decorative emblem detail.",
    description:
      "An upscale set of sofa legs combining a dark macassar-effect wood panel with a polished gold metal base. Finished with a decorative embossed emblem, these legs are targeted at premium and designer furniture lines seeking a distinctive finish.",
    features: [
      "Dark macassar wood-effect panel",
      "Polished gold metal base and foot",
      "Decorative embossed emblem",
      "Sold as a set of two",
    ],
    uses: ["Premium sofa manufacturing", "Designer furniture lines", "High-end retail products"],
  },
  {
    id: "pipe-legs",
    sku: "WRC-LEG-06",
    title: "Chrome Pipe Legs",
    category: "Legs & Feet",
    collection: "Feet & Castors",
    tag: null,
    image: prodPipeLegs,
    shortDesc: "Polished chrome cylindrical pipe legs — industrial-chic style for sofas and chairs.",
    description:
      "Smooth polished chrome cylindrical legs with a flat mounting plate. A versatile and timeless choice that suits both industrial and contemporary furniture styles. The flat plate allows simple screw fixing to the underside of any sofa or chair frame.",
    features: [
      "Mirror-polished chrome cylinder",
      "Flat mounting plate with pre-drilled holes",
      "Supplied as a pair",
      "Multiple diameter options",
    ],
    uses: ["Sofa and armchair bases", "Retro and industrial furniture", "Reception seating"],
  },
  {
    id: "castors",
    sku: "WRC-CST-01",
    title: "Furniture Castors",
    category: "Legs & Feet",
    collection: "Feet & Castors",
    tag: "Popular",
    image: prodCastors,
    shortDesc: "High-quality swivel castors and gliders for furniture mobility.",
    description:
      "Professional-grade castors and gliders designed for smooth furniture movement. Available in various sizes and materials suited for different floor types and weight requirements.",
    features: [
      "Smooth swivel action",
      "Multiple sizes available",
      "Suitable for all floor types",
      "Heavy-duty construction",
    ],
    uses: ["Mobile furniture", "Office chairs", "Sofa and armchair bases"],
  },

  // ── BOLTS & FIXINGS ────────────────────────────────────
  {
    id: "m8-m5-bolts",
    sku: "WRC-BLT-01",
    title: "M8 / M5 Bolts & Keys",
    category: "Bolts & Fasteners",
    collection: "Accessories & Tools",
    tag: null,
    image: prodBolts,
    shortDesc: "Furniture assembly bolts including barrel nuts and allen keys.",
    description:
      "A standard set of furniture assembly bolts in M5 and M8 sizes, complete with corresponding barrel nuts and allen keys. Essential for flat-pack furniture production and professional upholstery workshops. Supplied in bulk bags for production line use.",
    features: [
      "M5 and M8 sizes available",
      "Barrel nuts included",
      "Allen key supplied",
      "Zinc-plated for corrosion resistance",
    ],
    uses: ["Flat-pack furniture assembly", "Frame construction", "Replacement hardware kits"],
  },
  {
    id: "one-piece-bolt",
    sku: "WRC-BLT-02",
    title: "One-Piece Leg Bolts",
    category: "Bolts & Fasteners",
    collection: "Accessories & Tools",
    tag: null,
    image: prodOnepieceBolt,
    shortDesc: "One-piece threaded leg bolts with plastic base in 4 sizes.",
    description:
      "One-piece threaded leg fixing bolts with an integrated plastic star-shaped base plate. Available in four different lengths to match various leg thread depths. Widely used in the production of sofa and chair leg assemblies for a clean, rattle-free connection.",
    features: [
      "Available in 4 lengths",
      "Integrated plastic star base plate",
      "Threaded shaft for secure fixing",
      "Zinc-coated steel shaft",
    ],
    uses: ["Leg attachment on sofas and chairs", "Production line assembly", "Replacement leg hardware"],
  },
  {
    id: "plastic-washer",
    sku: "WRC-WSH-01",
    title: "Plastic Washers",
    category: "Bolts & Fasteners",
    collection: "Accessories & Tools",
    tag: null,
    image: prodPlasticWasher,
    shortDesc: "White nylon domed washers for leg bolts and furniture assembly.",
    description:
      "White nylon domed washers providing a clean, professional finish to furniture bolt fixings. Prevents metal-on-wood contact, reduces noise and protects surface finishes. Compatible with standard M8 leg bolts and inserts.",
    features: [
      "White nylon — non-marking",
      "Domed profile for neat appearance",
      "Compatible with M8 fixings",
      "Available in bulk quantities",
    ],
    uses: ["Leg bolt finishing", "Frame assembly", "Reducing vibration and noise"],
  },

  // ── INSERTS ────────────────────────────────────────────
  {
    id: "threaded-inserts",
    sku: "WRC-INS-01",
    title: "Threaded Inserts",
    category: "Inserts & Clips",
    collection: "Accessories & Tools",
    tag: null,
    image: prodInserts,
    shortDesc: "Hex-drive wood threaded inserts for strong bolt connections.",
    description:
      "Gold-tone hex-drive threaded inserts for creating strong, reusable bolt connections in timber. The aggressive external thread grips wood fibres for maximum pull-out resistance. Used extensively in sofa and bed frame production for leg attachments.",
    features: [
      "Aggressive external thread for maximum grip",
      "Hex-drive installation",
      "Zinc/brass tone finish",
      "Multiple thread sizes available",
    ],
    uses: ["Leg bolt receiver in sofa frames", "Bed headboard connections", "Cabinet assembly"],
  },
  {
    id: "flanged-inserts",
    sku: "WRC-INS-02",
    title: "Flanged Edge Inserts",
    category: "Inserts & Clips",
    collection: "Accessories & Tools",
    tag: null,
    image: prodInsertEdge,
    shortDesc: "Flanged inserts for countersunk applications in divan bases.",
    description:
      "Flanged edge threaded inserts designed for countersunk panel applications. The flange sits flush to the surface, providing a clean finish. Ideal for divan bases, bed frames and cabinet panels where a recessed bolt connection is required.",
    features: [
      "Flanged top for flush-fit installation",
      "Available in standard M6 and M8 thread",
      "Zinc-plated finish",
      "Suitable for MDF and particleboard",
    ],
    uses: ["Divan base panels", "Cabinet construction", "Flat panel bolt connections"],
  },
  {
    id: "u-clips",
    sku: "WRC-CLK-01",
    title: "Metal & Plastic U-Clips",
    category: "Inserts & Clips",
    collection: "Spunbond & Webbing",
    tag: null,
    image: prodUClips,
    shortDesc: "Metal and plastic U-clips for webbing, springs and frame retention.",
    description:
      "A versatile range of U-clips available in zinc-plated metal, white plastic and black plastic. Used in furniture manufacturing to retain webbing straps, spring coils and slat ends within sofa and chair frames. The different materials suit different load and aesthetic requirements.",
    features: [
      "Available in metal (zinc), white plastic and black plastic",
      "Snap-fit installation",
      "Suitable for 25mm–38mm webbing",
      "High-retention grip profile",
    ],
    uses: ["Webbing retention in sofa frames", "Spring coil clip", "Slat end retention in bed bases"],
  },
  {
    id: "corner-edge",
    sku: "WRC-CRN-01",
    title: "Corner Edge Protectors",
    category: "Inserts & Clips",
    collection: "Accessories & Tools",
    tag: null,
    image: prodCornerEdge,
    shortDesc: "Plastic and metal drawer/panel corner edge protectors in 3 finishes.",
    description:
      "L-shaped corner and edge protectors for drawer units, packaging and panel furniture. Available in beige plastic, clear plastic and zinc-plated metal to suit different applications. Protects corners during transit and in production environments.",
    features: [
      "Three finishes: beige, clear, zinc metal",
      "L-profile fits standard panel corners",
      "Lightweight and easy to apply",
      "Reusable metal variant",
    ],
    uses: ["Drawer corner protection", "Packaging and transit protection", "Panel furniture edging"],
  },

  // ── TAPES & WEBBING ────────────────────────────────────
  {
    id: "mattress-tape",
    sku: "WRC-TAP-01",
    title: "Mattress Tape / Webbing",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: prodMattressTape,
    shortDesc: "Woven mattress border tape and furniture webbing in black, white and cream.",
    description:
      "High-quality woven mattress border tape and sofa webbing supplied on rolls. Available in black, white and cream to match different fabric requirements. Used for edge binding on mattresses, divan bases and upholstered panels, as well as traditional webbing suspension in seat frames.",
    features: [
      "Available in black, white and cream",
      "Supplied on large bulk rolls",
      "Woven construction for strength and flexibility",
      "Suitable for both mattress binding and seat webbing",
    ],
    uses: ["Mattress border binding", "Divan base edge finishing", "Traditional seat webbing suspension"],
  },

  // ── NAILS & FINISHING ──────────────────────────────────
  {
    id: "button-nails",
    sku: "WRC-BTN-02",
    title: "Button Nails / Glides",
    category: "Nails & Finishing",
    collection: "Buttoning & Finishing",
    tag: null,
    image: prodButtonNails,
    shortDesc: "Screw-fit metal button glides protecting floors and finishing furniture legs.",
    description:
      "Chrome-finish screw-fit metal button glides providing a neat, professional finish to furniture legs while protecting hard floors from scratching. The screw-fit shank ensures a secure hold in leg bases. Available in multiple diameters.",
    features: [
      "Chrome-plated steel construction",
      "Screw-fit shank for secure hold",
      "Flat smooth contact surface",
      "Multiple diameter sizes available",
    ],
    uses: ["Furniture leg glides", "Floor protection", "Finishing detail on sofa and chair legs"],
  },

  // ── ADDITIONAL LEGS & FEET ──────────────────────────────
  {
    id: "sofa-hinges",
    sku: "WRC-HNG-04",
    title: "Sofa Hinges",
    category: "Hinges",
    collection: "Accessories & Tools",
    tag: null,
    image: prodSofaHinges,
    shortDesc: "Professional sofa hinge set for bed frames and storage mechanisms.",
    description: "Heavy-duty sofa hinges designed for professional furniture manufacturing. Perfect for mechanisms and support systems in sofa beds and upholstered frames.",
    features: ["Heavy-duty construction", "Multiple sizes available", "Easy installation", "Durable finish"],
    uses: ["Sofa mechanisms", "Storage bed frames", "Professional furniture assembly"],
  },
  {
    id: "standard-sofa-legs",
    sku: "WRC-LEG-07",
    title: "Standard Sofa Legs",
    category: "Legs & Feet",
    collection: "Feet & Castors",
    tag: null,
    image: prodSofaLegs,
    shortDesc: "Classic wooden sofa legs in natural or stained finish.",
    description: "Traditional wooden sofa legs available in various stains and finishes. Suitable for contemporary and classic furniture design.",
    features: ["Solid wood construction", "Multiple finishes available", "Standard sizing", "Professional quality"],
    uses: ["Sofa frame assembly", "Chair bases", "Furniture manufacturing"],
  },
  {
    id: "star-sofa-legs",
    sku: "WRC-LEG-08",
    title: "Star Sofa Legs",
    category: "Legs & Feet",
    collection: "Feet & Castors",
    tag: "New In",
    image: prodStarSofaLegs,
    shortDesc: "Designer star-shaped metal sofa legs with modern finishing.",
    description: "Contemporary star-shaped metal sofa legs offering a distinctive design element. Perfect for modern furniture pieces.",
    features: ["Modern star design", "Metal construction", "Premium finish", "Available in multiple heights"],
    uses: ["Modern sofa design", "Premium furniture", "Designer pieces"],
  },
  {
    id: "t-angle-sofa-legs",
    sku: "WRC-LEG-09",
    title: "T-Angle Sofa Legs",
    category: "Legs & Feet",
    collection: "Feet & Castors",
    tag: null,
    image: prodTSofaLegs,
    shortDesc: "Industrial T-angle metal sofa legs with specialized bracket system.",
    description: "Professional T-angle sofa legs designed for reinforced frame support. Ideal for heavy-duty upholstered furniture.",
    features: ["T-angle bracket design", "Heavy-duty construction", "Reinforced support", "Multiple mounting options"],
    uses: ["Heavy sofa frames", "Commercial furniture", "Industrial applications"],
  },
  {
    id: "t-nuts",
    sku: "WRC-NUT-01",
    title: "T-Nuts",
    category: "Bolts & Fasteners",
    collection: "Accessories & Tools",
    tag: null,
    image: prodTNut,
    shortDesc: "Threaded T-nuts for furniture assembly and frame connections.",
    description: "High-quality T-nuts suitable for frame assembly and securing components in furniture manufacturing.",
    features: ["Threaded design", "Multiple sizes", "Zinc-plated finish", "Professional grade"],
    uses: ["Frame assembly", "Component fastening", "Furniture connections"],
  },
  {
    id: "washer-standard",
    sku: "WRC-WSH-02",
    title: "Standard Washers",
    category: "Bolts & Fasteners",
    collection: "Accessories & Tools",
    tag: null,
    image: prodWasher,
    shortDesc: "Metal and plastic washers for bolt and fastening applications.",
    description: "Standard washers for use with bolts and fasteners throughout furniture assembly.",
    features: ["Multiple materials available", "Various sizes", "Corrosion resistant", "Professional grade"],
    uses: ["Bolt fastening", "Frame assembly", "Hardware finishing"],
  },

  // ── SOFA ELASTIC WEBBING ─────────────────────────────
  {
    id: "elastic-webbing-1",
    sku: "WRC-WEB-01",
    title: "Sofa Elastic Webbing - Type 1",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing1,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 1.",
    description: "High-quality elastic webbing designed for sofa seat suspension systems. Provides comfortable support and durability.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-2",
    sku: "WRC-WEB-02",
    title: "Sofa Elastic Webbing - Type 2",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing2,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 2.",
    description: "Alternative elastic webbing type for sofa seat suspension applications.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-3",
    sku: "WRC-WEB-03",
    title: "Sofa Elastic Webbing - Type 3",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing3,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 3.",
    description: "Specialized elastic webbing for sofa seat suspension applications.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-4",
    sku: "WRC-WEB-04",
    title: "Sofa Elastic Webbing - Type 4",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing4,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 4.",
    description: "Professional elastic webbing for sofa manufacturing.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-5",
    sku: "WRC-WEB-05",
    title: "Sofa Elastic Webbing - Type 5",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing5,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 5.",
    description: "Premium elastic webbing designed for professional sofa manufacturing.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-6",
    sku: "WRC-WEB-06",
    title: "Sofa Elastic Webbing - Type 6",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing6,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 6.",
    description: "High-quality elastic webbing for sofa suspension systems.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-7",
    sku: "WRC-WEB-07",
    title: "Sofa Elastic Webbing - Type 7",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing7,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 7.",
    description: "Professional-grade elastic webbing for furniture suspension.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-8",
    sku: "WRC-WEB-08",
    title: "Sofa Elastic Webbing - Type 8",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing8,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 8.",
    description: "Quality elastic webbing suitable for sofa manufacturing.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-9",
    sku: "WRC-WEB-09",
    title: "Sofa Elastic Webbing - Type 9",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing9,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 9.",
    description: "Durable elastic webbing for professional sofa assembly.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-10",
    sku: "WRC-WEB-10",
    title: "Sofa Elastic Webbing - Type 10",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing10,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 10.",
    description: "Professional elastic webbing for furniture applications.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-11",
    sku: "WRC-WEB-11",
    title: "Sofa Elastic Webbing - Type 11",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing11,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 11.",
    description: "Quality webbing for sofa seat suspension systems.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-12",
    sku: "WRC-WEB-12",
    title: "Sofa Elastic Webbing - Type 12",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing12,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 12.",
    description: "Premium elastic webbing for professional sofa manufacturing.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-13",
    sku: "WRC-WEB-13",
    title: "Sofa Elastic Webbing - Type 13",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing13,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 13.",
    description: "Durable elastic webbing for furniture suspension systems.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-14",
    sku: "WRC-WEB-14",
    title: "Sofa Elastic Webbing - Type 14",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing14,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 14.",
    description: "High-quality webbing for sofa assembly applications.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-15",
    sku: "WRC-WEB-15",
    title: "Sofa Elastic Webbing - Type 15",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing15,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 15.",
    description: "Professional-grade elastic webbing for sofa manufacturing.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
  {
    id: "elastic-webbing-16",
    sku: "WRC-WEB-16",
    title: "Sofa Elastic Webbing - Type 16",
    category: "Tapes & Webbing",
    collection: "Spunbond & Webbing",
    tag: null,
    image: webbing16,
    shortDesc: "Premium elastic webbing for sofa seat suspension - Type 16.",
    description: "Quality elastic webbing for professional furniture applications.",
    features: ["High elasticity", "Durable construction", "Professional grade", "Bulk available"],
    uses: ["Sofa seat suspension", "Chair bases", "Furniture support systems"],
  },
];

export const categories = [...new Set(products.map((p) => p.category))];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(cat: string): Product[] {
  return products.filter((p) => p.category === cat);
}
