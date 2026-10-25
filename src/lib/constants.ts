export const BUSINESS_INFO = {
  name: "America Shines Cleaning Service, LLC",
  shortName: "America Shines",
  legalName: "America Shines Cleaning Service, LLC",
  tagline: "A Spotless Home. An Elevated Standard.",
  subtitle:
    "Thoughtful, dependable residential and commercial cleaning based in Joppatowne, Maryland.",
  phone: "+1 443-286-1945",
  phoneFormatted: "(443) 286-1945",
  phoneTel: "tel:+14432861945",
  emailReported: "amcdonald2005@comcast.net",
  address: {
    street: "219 Philadelphia Rd",
    city: "Joppatowne",
    state: "MD",
    zip: "21085",
    country: "United States",
    formatted: "219 Philadelphia Rd, Joppatowne, MD 21085",
  },
  directoryReportedNote:
    "Business information sourced from third-party public directories. Presented as an independent concept preview pending official review and confirmation by America Shines Cleaning Service, LLC.",
  coordinates: {
    latitude: 39.4215,
    longitude: -76.3533,
  },
};

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  badge: string;
  details: string[];
  recommendedFor: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "recurring",
    title: "Recurring Residential Cleaning",
    shortDesc: "Consistent, scheduled home care tailored to your family's weekly or monthly routine.",
    fullDesc:
      "A dependable house cleaning routine designed to keep your home fresh, hygienic, and organized. Ideal for busy families and professionals who value regular, reliable upkeep.",
    image: "/images/service_recurring.jpg",
    badge: "Popular Service",
    details: [
      "Kitchen countertops, sink sanitizing, and exterior appliance wiping",
      "Bathroom fixtures, mirrors, showers, and tubs scrubbed and detailed",
      "Dusting of furniture, shelves, baseboards, and living spaces",
      "Floors thoroughly vacuumed and washed throughout",
    ],
    recommendedFor: "Weekly, bi-weekly, or monthly home care (scope confirmed upon estimate)",
  },
  {
    id: "deep",
    title: "Deep Cleaning & Seasonal Reset",
    shortDesc: "A meticulous, comprehensive top-to-bottom clean for spaces needing extra attention.",
    fullDesc:
      "An intensive cleaning service targeting accumulated buildup, detailed corners, woodwork, and areas that regular maintenance cleanings may not cover.",
    image: "/images/service_deep.jpg",
    badge: "Detailed Reset",
    details: [
      "Hand-wiping of doors, frames, baseboards, and window sills",
      "Detailed kitchen grease removal, backsplashes, and exterior cabinets",
      "Thorough tile, grout, and fixture descaling in bathrooms",
      "Detailed ceiling fan blades, vent covers, and edge cleaning",
    ],
    recommendedFor: "Seasonal refresh, first-time visits, or spring cleaning",
  },
  {
    id: "move-in",
    title: "Move-In & Move-Out Cleaning",
    shortDesc: "Prepare empty homes for a fresh beginning or a pristine property handover.",
    fullDesc:
      "Step into an immaculate environment. We detail empty properties from top to bottom so new homeowners, tenants, or property managers receive a spotless handover.",
    image: "/images/service_move_in.jpg",
    badge: "Turnover Ready",
    details: [
      "Interior cabinet, pantry, and vanity wiping",
      "Wall baseboards, door frames, and closet shelving detailing",
      "Deep sanitizing of all bathroom and kitchen surfaces",
      "Floor polishing, vacuuming, and complete corner-to-corner cleaning",
    ],
    recommendedFor: "New homeowners, renters moving out, and real estate turnover",
  },
  {
    id: "airbnb",
    title: "Short-Term Rental & Turnover Cleaning",
    shortDesc: "Fast, reliable turnaround cleaning between guest stays for local rental properties.",
    fullDesc:
      "Hospitality-focused cleaning support designed to ensure incoming guests arrive to pristine bedrooms, spotless bathrooms, and restaged living areas.",
    image: "/images/service_airbnb.jpg",
    badge: "Guest Ready",
    details: [
      "Linens laundered or changed with crisp hotel-style presentation",
      "Complete bathroom disinfection and streak-free mirror detailing",
      "Kitchen counters sanitized, refrigerator wiped, and trash removed",
      "Turnover coordination aligned with your check-in schedule",
    ],
    recommendedFor: "Vacation rental owners and short-term property hosts",
  },
  {
    id: "home-office",
    title: "Residential & Small Office Cleaning",
    shortDesc: "Quiet, professional cleaning for home workspaces and commercial offices.",
    fullDesc:
      "Maintain a tidy, distraction-free environment that promotes daily productivity and professionalism for local offices, boutique studios, and executive home workspaces.",
    image: "/images/service_office.jpg",
    badge: "Productive Workspaces",
    details: [
      "Desk surfaces, keyboards, monitors, and meeting tables sanitized",
      "Breakroom areas, coffee stations, and waste bins emptied and wiped",
      "Floor vacuuming, hard floor mopping, and air freshening",
      "Flexible scheduling to avoid disruption to your workday",
    ],
    recommendedFor: "Home offices, boutique agencies, and small commercial suites",
  },
];

export const SERVICE_AREAS = [
  { name: "Joppatowne", state: "MD", zipCodes: ["21085"], primary: true },
  { name: "Bel Air", state: "MD", zipCodes: ["21014", "21015"], primary: true },
  { name: "Edgewood", state: "MD", zipCodes: ["21040"], primary: true },
  { name: "Abingdon", state: "MD", zipCodes: ["21009"], primary: true },
  { name: "Fallston", state: "MD", zipCodes: ["21047"], primary: true },
  { name: "White Marsh", state: "MD", zipCodes: ["21162"], primary: true },
  { name: "Perry Hall", state: "MD", zipCodes: ["21128"], primary: true },
];

export const SURROUNDING_COVERAGE_NOTE =
  "Reported service coverage centered on Joppatowne (21085), Harford County, and the Route 40 & I-95 corridor. Exact service boundary to be confirmed with business owner.";

export const CLIENT_CARE_STANDARDS = [
  {
    id: 1,
    title: "Direct & Transparent Communication",
    description:
      "Clear expectations from your initial quote request to appointment confirmation. No automated phone loops—direct local contact.",
    pillar: "Clear Terms",
  },
  {
    id: 2,
    title: "Meticulous Attention to Surfaces",
    description:
      "Methodical scrubbing of kitchen counters, detailed descaling of bathroom tile, wiping of baseboards, and thorough washing of hard floors.",
    pillar: "Thoroughness",
  },
  {
    id: 3,
    title: "Discretion & Respect for Privacy",
    description:
      "Your home sanctuary, personal belongings, pets, and schedule are treated with genuine professional discretion and care on every visit.",
    pillar: "Respect",
  },
  {
    id: 4,
    title: "Joppatowne Dispatch & Reliability",
    description:
      "Stationed at 219 Philadelphia Rd in Joppatowne, with punctual travel along the Pulaski Highway (Route 40) and I-95 corridors.",
    pillar: "Punctuality",
  },
];

export const FAQS = [
  {
    question: "What cleaning services does America Shines provide?",
    answer:
      "Reported offerings include recurring residential home cleaning, comprehensive deep cleaning, move-in and move-out cleaning, short-term rental turnover, and small office cleaning in Joppatowne, MD and surrounding Harford County communities. Exact scopes are customized to each client.",
  },
  {
    question: "Do you offer recurring house cleaning?",
    answer:
      "Yes. Scheduled recurring cleanings can be arranged on weekly, bi-weekly, or monthly intervals customized to your home and family schedule.",
  },
  {
    question: "Can I book a one-time deep clean?",
    answer:
      "Yes. Deep cleaning services provide an intensive, top-to-bottom reset for kitchens, bathrooms, baseboards, and living spaces that need thorough restoration.",
  },
  {
    question: "Do you clean homes for move-ins or move-outs?",
    answer:
      "Yes. Empty homes can be detailed for new occupants, property managers, or tenants seeking a pristine property handover.",
  },
  {
    question: "Do you provide Airbnb and rental turnover cleaning?",
    answer:
      "Yes. Turnover cleaning for vacation rentals and short-term properties is available to ensure incoming guests arrive to an immaculate, freshly staged home.",
  },
  {
    question: "Which areas in Maryland are reported as served?",
    answer:
      "Directory records indicate service centered in Joppatowne, MD (21085) and nearby Harford & Baltimore County communities including Bel Air, Edgewood, Abingdon, Fallston, White Marsh, and Perry Hall. Service availability is confirmed upon inquiry.",
  },
  {
    question: "How do I request an estimate?",
    answer:
      "You can submit an inquiry through our online 3-step quote form on this page or call directly at (443) 286-1945 to discuss your space and timing.",
  },
  {
    question: "How can I contact America Shines Cleaning Service?",
    answer:
      "America Shines Cleaning Service, LLC can be reached by phone at (443) 286-1945 or by email at amcdonald2005@comcast.net (reported directory email). The reported address is 219 Philadelphia Rd, Joppatowne, MD 21085.",
  },
];
