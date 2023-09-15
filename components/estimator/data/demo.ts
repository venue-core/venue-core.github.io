import {
  Availability,
  Category,
  Condition,
  ConditionType,
  LineItem,
  Page,
  PageType,
  Variable,
  VariableType,
  Venue,
} from "@/components/estimator/types";

export const VENUE: Venue = {
  id: "1",
  name: "ACME Inc",
  timezone: "America/Los_Angeles",
  minimum: 14_000,
  email: "contact@acme.com",
  phone: "+1 222 333 4444",
  depositPercentage: 0.35,
  notes: ["Admin Fee does not replace gratuity. Thank you!"],
};

// SECTION: variables
export const VAR_YEAR: Variable = {
  id: "V1",
  venueId: VENUE.id,
  name: "Year",
  type: VariableType.Year,
  required: true,
};
export const VAR_MONTH: Variable = {
  id: "V2",
  venueId: VENUE.id,
  name: "Month",
  type: VariableType.Month,
  required: true,
};
export const VAR_DATE: Variable = {
  id: "V3",
  venueId: VENUE.id,
  name: "Day",
  type: VariableType.Date,
  required: true,
};
export const VAR_DAY: Variable = {
  id: "V4",
  venueId: VENUE.id,
  name: "Day of Week",
  type: VariableType.DayOfWeek,
  required: true,
};
export const VAR_TIME: Variable = {
  id: "V5",
  venueId: VENUE.id,
  name: "Time Range",
  type: VariableType.TimeRange,
  required: true,
};
export const VAR_HEADCOUNT: Variable = {
  id: "V6",
  venueId: VENUE.id,
  name: "Headcount",
  type: VariableType.Integer,
  required: true,
  min: 1,
  max: 150,
  default: 100,
};
const VAR_BATHROOM_RENTAL: Variable = {
  id: "V7",
  venueId: VENUE.id,
  name: "Bathroom Rental",
  type: VariableType.Select,
  required: true,
  options: ["Genie Magic Flush", "AJs Portables"],
};
const VAR_BATHROOM_GENERATORS: Variable = {
  id: "V8",
  venueId: VENUE.id,
  name: "Bathroom Generators",
  type: VariableType.Integer,
  required: false,
  min: 0,
  max: 10,
  default: 0,
};
const VAR_BATHROOM_ATTENDANTS: Variable = {
  id: "V9",
  venueId: VENUE.id,
  name: "Bathroom Attendants",
  type: VariableType.Integer,
  required: false,
  min: 0,
  max: 10,
  default: 0,
};
const VAR_CATERING: Variable = {
  id: "V10",
  venueId: VENUE.id,
  name: "Caterer",
  type: VariableType.Select,
  required: false,
  options: ["Maria's Catering"],
  default: "Maria's Catering",
};
const VAR_CATERING_WITH_INNOUT: Variable = {
  id: "V10-1",
  venueId: VENUE.id,
  name: "Caterer",
  type: VariableType.Select,
  required: false,
  options: ["Maria's Catering", "In-N-Out"],
};
const VAR_DOUBLE_DOUBLE: Variable = {
  id: "V11",
  venueId: VENUE.id,
  name: "In-N-Out - Double Double",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_CHEESEBURGER: Variable = {
  id: "V12",
  venueId: VENUE.id,
  name: "In-N-Out - Cheeseburger",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_HAMBURGER: Variable = {
  id: "V13",
  venueId: VENUE.id,
  name: "In-N-Out - Hamburger",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_GRILLED_CHEESE: Variable = {
  id: "V14",
  venueId: VENUE.id,
  name: "In-N-Out - Grilled Cheese",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_FOUNTAIN_DRINKS: Variable = {
  id: "V15",
  venueId: VENUE.id,
  name: "In-N-Out - Fountain Drinks",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_CHIPS: Variable = {
  id: "V16",
  venueId: VENUE.id,
  name: "In-N-Out - Chips",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_COFFEE_STATION: Variable = {
  id: "V17",
  venueId: VENUE.id,
  name: "Coffee Station",
  type: VariableType.Boolean,
  required: false,
  default: true,
};
const VAR_HYDRATION_STATION: Variable = {
  id: "V18",
  venueId: VENUE.id,
  name: "Hydration Station",
  type: VariableType.Boolean,
  required: false,
  default: true,
};
const VAR_AGUA_FRESCAS: Variable = {
  id: "V19",
  venueId: VENUE.id,
  name: "Agua Frescas",
  type: VariableType.Integer,
  required: false,
  min: 0,
  default: 0,
};
const VAR_BAR: Variable = {
  id: "V20",
  venueId: VENUE.id,
  name: "Bar Services",
  type: VariableType.Boolean,
  required: false,
  default: true,
};
const VAR_BAR_ADDITIONAL: Variable = {
  id: "V21",
  venueId: VENUE.id,
  name: "Additional Bar Services",
  type: VariableType.Integer,
  required: false,
  min: 0,
  max: 6,
};
const VAR_FARMHOUSE_TABLE: Variable = {
  id: "V22",
  venueId: VENUE.id,
  name: "Farmhouse Table",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_SWEETHEART_TABLE: Variable = {
  id: "V23",
  venueId: VENUE.id,
  name: "Sweetheart Table",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_COFFEE_TABLE: Variable = {
  id: "V24",
  venueId: VENUE.id,
  name: "Coffee Table",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_DISPLAY_TABLE: Variable = {
  id: "V25",
  venueId: VENUE.id,
  name: "Display Table",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_COCKTAIL_TABLE: Variable = {
  id: "V26",
  venueId: VENUE.id,
  name: "Cocktail Table",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_BENCH: Variable = {
  id: "V27",
  venueId: VENUE.id,
  name: "Bench",
  type: VariableType.Integer,
  required: false,
  min: 0,
};
const VAR_FOLDING_CHAIR: Variable = {
  id: "V28",
  venueId: VENUE.id,
  name: "Folding Chair",
  type: VariableType.Integer,
  required: false,
  min: 0,
};

// SECTION: conditions
const CONDITION_FRIDAY: Condition = {
  id: "C1",
  variableId: VAR_DAY.id,
  type: ConditionType.Equal,
  condition: 5,
};
const CONDITION_SATURDAY: Condition = {
  id: "C2",
  variableId: VAR_DAY.id,
  type: ConditionType.Equal,
  condition: 6,
};
const CONDITION_UNDER_150: Condition = {
  id: "C3",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 150,
};
const CONDITION_UNDER_30: Condition = {
  id: "C4",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 30,
};
const CONDITION_YEAR_2023: Condition = {
  id: "C5",
  variableId: VAR_YEAR.id,
  type: ConditionType.Equal,
  condition: 2023,
};
const CONDITION_YEAR_2024: Condition = {
  id: "C6",
  variableId: VAR_YEAR.id,
  type: ConditionType.Equal,
  condition: 2024,
};
const CONDITION_HEADCOUNT_UNDER_50: Condition = {
  id: "C7",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 50,
};
const CONDITION_HEADCOUNT_UNDER_80: Condition = {
  id: "C8",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 80,
};
const CONDITION_HEADCOUNT_OVER_81: Condition = {
  id: "C8.1",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.GTE,
  condition: 81,
};
const CONDITION_HEADCOUNT_UNDER_100: Condition = {
  id: "C9",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 100,
};
const CONDITION_HEADCOUNT_UNDER_110: Condition = {
  id: "C10",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 110,
};
const CONDITION_HEADCOUNT_UNDER_130: Condition = {
  id: "C11",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 130,
};
const CONDITION_HEADCOUNT_UNDER_150: Condition = {
  id: "C12",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 150,
};
const CONDITION_BATHROOM_GENIE: Condition = {
  id: "C13",
  variableId: VAR_BATHROOM_RENTAL.id,
  type: ConditionType.Equal,
  condition: "Genie Magic Flush",
};
const CONDITION_BATHROOM_AJ: Condition = {
  id: "C14",
  variableId: VAR_BATHROOM_RENTAL.id,
  type: ConditionType.Equal,
  condition: "AJs Portables",
};
const CONDITION_CATERING_MARIA: Condition = {
  id: "C15",
  variableId: VAR_CATERING.id,
  type: ConditionType.Equal,
  condition: "Maria's Catering",
};
const CONDITION_CATERING_MARIA_W_INNOUT: Condition = {
  id: "C15-1",
  variableId: VAR_CATERING_WITH_INNOUT.id,
  type: ConditionType.Equal,
  condition: "Maria's Catering",
};
const CONDITION_CATERING_INNOUT: Condition = {
  id: "C16",
  variableId: VAR_CATERING_WITH_INNOUT.id,
  type: ConditionType.Equal,
  condition: "In-N-Out",
};
const CONDITION_COFFEE_STATION: Condition = {
  id: "C17",
  variableId: VAR_COFFEE_STATION.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_HYDRATION_STATION: Condition = {
  id: "C18",
  variableId: VAR_HYDRATION_STATION.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_BAR: Condition = {
  id: "C19",
  variableId: VAR_BAR.id,
  type: ConditionType.Equal,
  condition: true,
};

// SECTION: pages
export const PAGES: Page[] = [
  {
    id: "P-0",
    title: "Intro",
    type: PageType.Intro,
    fields: [],
  },
  {
    id: "P-1",
    title: "Date",
    type: PageType.Calendar,
    fields: [],
    description: `
<div>
  <div className="flex justify-between">
    <span>Friday (≤ 30 guests):</span>
    <span>$3,000</span>
  </div>
  <div className="flex justify-between">
    <span>Friday (31-150 guests):</span>
    <span>$5,000</span>
  </div>
  <div className="flex justify-between">
    <span>Saturday:</span> 
    <span>$5,500</span>
  </div>
</div>`,
  },
  {
    id: "P-2",
    title: "General",
    type: PageType.Form,
    fields: [
      {
        id: "P2-Q1",
        label: "How many guests will be at the event?",
        subtext:
          "Max 150. Include the number of people within your own personal party.",
        variable: VAR_HEADCOUNT,
      },
    ],
  },
  {
    id: "P-3",
    title: "Catering",
    type: PageType.Form,
    fields: [
      {
        id: "P3-Q1-1",
        label: "Which catering service would you like?",
        variable: VAR_CATERING,
        conditions: [CONDITION_HEADCOUNT_OVER_81],
      },
      {
        id: "P3-Q1-2",
        label: "Which catering service would you like?",
        variable: VAR_CATERING_WITH_INNOUT,
        conditions: [CONDITION_HEADCOUNT_UNDER_80],
      },
      {
        id: "P3-Q2",
        label: "How many double doubles should be ordered?",
        subtext: "$6.90 + tax",
        variable: VAR_DOUBLE_DOUBLE,
        conditions: [CONDITION_CATERING_INNOUT],
      },
      {
        id: "P3-Q3",
        label: "How many cheeseburgers should be ordered?",
        subtext: "$5.30 + tax",
        variable: VAR_CHEESEBURGER,
        conditions: [CONDITION_CATERING_INNOUT],
      },
      {
        id: "P3-Q4",
        label: "How many hamburgers should be ordered?",
        subtext: "$4.80 + tax",
        variable: VAR_HAMBURGER,
        conditions: [CONDITION_CATERING_INNOUT],
      },
      {
        id: "P3-Q5",
        label: "How many grilled cheeses should be ordered?",
        subtext: "$4.70 + tax",
        variable: VAR_GRILLED_CHEESE,
        conditions: [CONDITION_CATERING_INNOUT],
      },
      {
        id: "P3-Q6",
        label: "How many fountain drinks should be ordered?",
        subtext: "2.35 + tax",
        variable: VAR_FOUNTAIN_DRINKS,
        conditions: [CONDITION_CATERING_INNOUT],
      },
      {
        id: "P3-Q7",
        label: "How many chips should be ordered?",
        subtext: "$1.25 + tax",
        variable: VAR_CHIPS,
        conditions: [CONDITION_CATERING_INNOUT],
      },
      {
        id: "P3-Q11",
        label: "Would you like a coffee station?",
        subtext: "$275 - Coffee, Decaf, Tea, sugar, creamer, and cups included",
        variable: VAR_COFFEE_STATION,
      },
      {
        id: "P3-Q12",
        label: "Would you like a hydration station?",
        subtext: "$275 - Water, lemonade, ice tea, and cups included",
        variable: VAR_HYDRATION_STATION,
      },
      {
        id: "P3-Q13",
        label: "How many jugs of agua fresca would you like?",
        subtext: "$65 per jug - 40-50 servings - Ice and cups included",
        variable: VAR_AGUA_FRESCAS,
      },
    ],
  },
  {
    id: "P-4",
    title: "Bar Services",
    type: PageType.Form,
    fields: [
      {
        id: "P4-Q1",
        label: "Would you like bartending services?",
        subtext: "4 hours | 2 Bartenders provided",
        variable: VAR_BAR,
      },
      {
        id: "P4-Q2",
        label: "How many additional hours of bar services would you like?",
        variable: VAR_BAR_ADDITIONAL,
        conditions: [CONDITION_BAR],
      },
    ],
  },
  {
    id: "P-5",
    title: "Seating Rentals",
    type: PageType.Form,
    fields: [
      {
        id: "P5-Q1",
        label: "How many 8-ft farmhouse tables would you like?",
        subtext: "$48 per",
        variable: VAR_FARMHOUSE_TABLE,
      },
      {
        id: "P5-Q2",
        label: "How many Estelita sweetheart tables would you like?",
        subtext: "$45 per",
        variable: VAR_SWEETHEART_TABLE,
      },
      {
        id: "P5-Q3",
        label: "How many Austino coffee tables would you like?",
        subtext: "$45 per",
        variable: VAR_COFFEE_TABLE,
      },
      {
        id: "P5-Q4",
        label: "How many Viktorina display tables would you like?",
        subtext: "$45 per",
        variable: VAR_DISPLAY_TABLE,
      },
      {
        id: "P5-Q5",
        label: "How many 32-in Katerina cocktail tables would you like?",
        subtext: "$40 per",
        variable: VAR_COCKTAIL_TABLE,
      },
      {
        id: "P5-Q6",
        label: "How many benches would you like?",
        subtext: "$15 per",
        variable: VAR_BENCH,
      },
      {
        id: "P5-Q7",
        label:
          "How many Fruitwood folding chairs w/ white cushions would you like?",
        subtext: "$3.25 per",
        variable: VAR_FOLDING_CHAIR,
      },
    ],
  },
  {
    id: "P-6",
    title: "Bathroom Rentals",
    type: PageType.Form,
    fields: [
      {
        id: "P6-Q1",
        label: "Which bathroom rental would you like to use?",
        variable: VAR_BATHROOM_RENTAL,
      },
      {
        id: "P6-Q2",
        label: "How many additional power generators would you like?",
        subtext: "$150 per generator",
        variable: VAR_BATHROOM_GENERATORS,
      },
      {
        id: "P6-Q3",
        label: "How many additional bathroom attendants would you like?",
        subtext: "$40 per hour per attendant (6 hours)",
        variable: VAR_BATHROOM_ATTENDANTS,
      },
    ],
  },
  {
    id: "P-7",
    title: "Price Quote",
    type: PageType.PriceQuote,
    fields: [],
  },
];

// SECTION: line items
const ITEM_VENUE: LineItem = {
  id: "LI-V",
  venueId: VENUE.id,
  name: "Venue",
  required: true,
  type: "LINE_ITEM",
  category: Category.General,
  options: [
    {
      id: "LIV-1",
      venueId: VENUE.id,
      name: "Micro - Friday",
      required: false,
      type: "LINE_ITEM",
      category: Category.General,
      basePrice: 3000,
      conditions: [[CONDITION_FRIDAY, CONDITION_UNDER_30]],
    },
    {
      id: "LIV-2",
      venueId: VENUE.id,
      name: "Regular - Friday",
      required: false,
      type: "LINE_ITEM",
      category: Category.General,
      basePrice: 5000,
      conditions: [[CONDITION_FRIDAY, CONDITION_UNDER_150]],
    },
    {
      id: "LIV-3",
      venueId: VENUE.id,
      name: "Regular - Saturday",
      required: false,
      type: "LINE_ITEM",
      category: Category.General,
      basePrice: 5500,
      conditions: [[CONDITION_SATURDAY, CONDITION_UNDER_150]],
    },
  ],
};

const ITEM_PLANNER: LineItem = {
  id: "LI-P",
  venueId: VENUE.id,
  name: "Planner",
  required: true,
  type: "LINE_ITEM",
  category: Category.General,
  options: [
    {
      id: "LIP-1",
      venueId: VENUE.id,
      name: "Cassandra Lee & Co. Events - 2023",
      required: false,
      type: "LINE_ITEM",
      category: Category.General,
      basePrice: 2250,
      conditions: [[CONDITION_YEAR_2023]],
    },
    {
      id: "LIP-2",
      venueId: VENUE.id,
      name: "Cassandra Lee & Co. Events - 2024",
      required: false,
      type: "LINE_ITEM",
      category: Category.General,
      basePrice: 2300,
      conditions: [[CONDITION_YEAR_2024]],
    },
  ],
};

const ITEM_CATERING_MARIA: LineItem = {
  id: "LI-CM",
  venueId: VENUE.id,
  name: "Catering",
  subtext: "Maria's Tacos & Catering",
  description: "2 hours of service",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 17 * 1.0775, // 7.75% sales tax
  multipleVariableIds: [VAR_HEADCOUNT.id],
  conditions: [[CONDITION_CATERING_MARIA], [CONDITION_CATERING_MARIA_W_INNOUT]],
};

const ITEM_CATERER_INNOUT: LineItem = {
  id: "LI-CI",
  venueId: VENUE.id,
  name: "Catering",
  subtext: "In-N-Out",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  conditions: [[CONDITION_CATERING_INNOUT, CONDITION_HEADCOUNT_UNDER_80]],
  items: [
    {
      id: "LICI-1",
      name: "Double Double",
      basePrice: 6.9 * 1.095,
      multipleVariableId: VAR_DOUBLE_DOUBLE.id,
    },
    {
      id: "LICI-2",
      name: "Cheeseburher",
      basePrice: 5.3 * 1.095,
      multipleVariableId: VAR_CHEESEBURGER.id,
    },
    {
      id: "LICI-3",
      name: "Hamburger",
      basePrice: 4.8 * 1.095,
      multipleVariableId: VAR_HAMBURGER.id,
    },
    {
      id: "LICI-4",
      name: "Grilled Cheese",
      basePrice: 4.7 * 1.095,
      multipleVariableId: VAR_GRILLED_CHEESE.id,
    },
    {
      id: "LICI-5",
      name: "Fountain Drinks (20 oz)",
      basePrice: 2.35 * 1.095,
      multipleVariableId: VAR_FOUNTAIN_DRINKS.id,
    },
    {
      id: "LICI-6",
      name: "Grilled Cheese",
      basePrice: 1.25 * 1.095,
      multipleVariableId: VAR_CHIPS.id,
    },
  ].map((o) => ({
    ...o,
    venueId: VENUE.id,
    required: false,
    type: "LINE_ITEM",
    category: Category.Catering,
  })),
};

const ITEM_CATERING_STAFF: LineItem = {
  id: "LI-CS",
  venueId: VENUE.id,
  name: "Catering Staff",
  subtext: "$270 per server (9 hours) - 1 attendant every 50 guests",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  options: [
    {
      id: "LICS-1",
      venueId: VENUE.id,
      name: "1 Server",
      required: false,
      type: "LINE_ITEM",
      category: Category.Catering,
      basePrice: 270,
      conditions: [[CONDITION_HEADCOUNT_UNDER_50]],
    },
    {
      id: "LICS-2",
      venueId: VENUE.id,
      name: "2 Servers",
      required: false,
      type: "LINE_ITEM",
      category: Category.Catering,
      basePrice: 540,
      conditions: [[CONDITION_HEADCOUNT_UNDER_100]],
    },
    {
      id: "LICS-3",
      venueId: VENUE.id,
      name: "3 Servers",
      required: false,
      type: "LINE_ITEM",
      category: Category.Catering,
      basePrice: 810,
      conditions: [[CONDITION_HEADCOUNT_UNDER_150]],
    },
  ],
};

const ITEM_COFFEE_STATION: LineItem = {
  id: "LI-CS",
  venueId: VENUE.id,
  name: "Coffee Station",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 275,
  conditions: [[CONDITION_COFFEE_STATION]],
};

const ITEM_HYDRATION_STATION: LineItem = {
  id: "LI-HS",
  venueId: VENUE.id,
  name: "Hydration Station",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 275,
  conditions: [[CONDITION_HYDRATION_STATION]],
};

const ITEM_AGUA_FRESCAS: LineItem = {
  id: "LI-AF",
  venueId: VENUE.id,
  name: "Agua Frescas",
  subtext: "40-50 servings per order",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 65,
  multipleVariableIds: [VAR_AGUA_FRESCAS.id],
};

// SECTION: bar
const ITEM_BAR: LineItem = {
  id: "LI-B",
  venueId: VENUE.id,
  name: "Maria's Bartending",
  subtext: "4 hours | 2 bartenders",
  required: false,
  type: "LINE_ITEM",
  category: Category.Bar,
  basePrice: 750,
  conditions: [[CONDITION_BAR]],
};

const ITEM_BAR_ADDITIONAL: LineItem = {
  id: "LI-BA",
  venueId: VENUE.id,
  name: "Additional Bar Service",
  subtext: "$75 per hour",
  required: false,
  type: "LINE_ITEM",
  category: Category.Bar,
  basePrice: 75,
  multipleVariableIds: [VAR_BAR_ADDITIONAL.id],
};

// SECTION: rentals
const ITEM_FARMHOUSE_TABLE: LineItem = {
  id: "LI-FT",
  venueId: VENUE.id,
  name: "8-ft Farmhouse Table",
  subtext: "$48 per",
  required: false,
  type: "LINE_ITEM",
  category: Category.Rentals,
  basePrice: 48,
  multipleVariableIds: [VAR_FARMHOUSE_TABLE.id],
};
const ITEM_SWEETHEART_TABLE: LineItem = {
  id: "LI-ST",
  venueId: VENUE.id,
  name: "Estelita Sweetheart Table",
  subtext: "$45 per",
  required: false,
  type: "LINE_ITEM",
  category: Category.Rentals,
  basePrice: 45,
  multipleVariableIds: [VAR_SWEETHEART_TABLE.id],
};
const ITEM_COFFEE_TABLE: LineItem = {
  id: "LI-CT",
  venueId: VENUE.id,
  name: "Austino Coffee Table",
  subtext: "$45 per",
  required: false,
  type: "LINE_ITEM",
  category: Category.Rentals,
  basePrice: 45,
  multipleVariableIds: [VAR_COFFEE_TABLE.id],
};
const ITEM_DISPLAY_TABLE: LineItem = {
  id: "LI-VT",
  venueId: VENUE.id,
  name: "Viktorina Display Table",
  subtext: "$45 per",
  required: false,
  type: "LINE_ITEM",
  category: Category.Rentals,
  basePrice: 45,
  multipleVariableIds: [VAR_DISPLAY_TABLE.id],
};
const ITEM_COCKTAIL_TABLE: LineItem = {
  id: "LI-CT",
  venueId: VENUE.id,
  name: "32-in Katerina Cocktail Table",
  subtext: "$40 per",
  required: false,
  type: "LINE_ITEM",
  category: Category.Rentals,
  basePrice: 40,
  multipleVariableIds: [VAR_COCKTAIL_TABLE.id],
};
const ITEM_BENCH: LineItem = {
  id: "LI-BT",
  venueId: VENUE.id,
  name: "Bench",
  subtext: "$15 per",
  required: false,
  type: "LINE_ITEM",
  category: Category.Rentals,
  basePrice: 15,
  multipleVariableIds: [VAR_BENCH.id],
};
const ITEM_FOLDING_CHAIR: LineItem = {
  id: "LI-FC",
  venueId: VENUE.id,
  name: "Fruitwood Folding Chair, White Cushion",
  subtext: "$3.25 per",
  required: false,
  type: "LINE_ITEM",
  category: Category.Rentals,
  basePrice: 3.25,
  multipleVariableIds: [VAR_FOLDING_CHAIR.id],
};

// SECTION: misc
const ITEM_VALET: LineItem = {
  id: "LI-VP",
  venueId: VENUE.id,
  name: "Valet Parking",
  required: true,
  type: "LINE_ITEM",
  category: Category.Miscellaneous,
  options: [
    {
      id: "LIVP-1",
      venueId: VENUE.id,
      name: "3 Attendants",
      required: false,
      type: "LINE_ITEM",
      category: Category.Miscellaneous,
      basePrice: 975,
      conditions: [[CONDITION_HEADCOUNT_UNDER_80]],
    },
    {
      id: "LIVP-2",
      venueId: VENUE.id,
      name: "4 Attendants",
      required: false,
      type: "LINE_ITEM",
      category: Category.Miscellaneous,
      basePrice: 1300,
      conditions: [[CONDITION_HEADCOUNT_UNDER_110]],
    },
    {
      id: "LIVP-3",
      venueId: VENUE.id,
      name: "5 Attendants",
      required: false,
      type: "LINE_ITEM",
      category: Category.Miscellaneous,
      basePrice: 1625,
      conditions: [[CONDITION_HEADCOUNT_UNDER_130]],
    },
    {
      id: "LIVP-4",
      venueId: VENUE.id,
      name: "6 Attendants",
      required: false,
      type: "LINE_ITEM",
      category: Category.Miscellaneous,
      basePrice: 1950,
      conditions: [[CONDITION_HEADCOUNT_UNDER_150]],
    },
  ],
};

const ITEM_BATHROOM: LineItem = {
  id: "LI-B",
  venueId: VENUE.id,
  name: "Luxury Bathroom Rental",
  required: true,
  type: "LINE_ITEM",
  category: Category.Miscellaneous,
  options: [
    {
      id: "LIB-1",
      venueId: VENUE.id,
      name: "Genie - Luxury Single Stall Restroom Trailer",
      required: false,
      type: "LINE_ITEM",
      category: Category.Miscellaneous,
      basePrice: 550,
      conditions: [[CONDITION_BATHROOM_GENIE, CONDITION_HEADCOUNT_UNDER_50]],
    },
    {
      id: "LIB-2",
      venueId: VENUE.id,
      name: "Genie - Luxury 2 Station Restroom Trailer",
      required: false,
      type: "LINE_ITEM",
      category: Category.Miscellaneous,
      basePrice: 1100,
      conditions: [[CONDITION_BATHROOM_GENIE, CONDITION_HEADCOUNT_UNDER_100]],
    },
    {
      id: "LIB-3",
      venueId: VENUE.id,
      name: "Luxury 3 Stall Restroom Trailer",
      required: false,
      type: "LINE_ITEM",
      category: Category.Miscellaneous,
      basePrice: 1100,
      conditions: [[CONDITION_BATHROOM_GENIE, CONDITION_HEADCOUNT_UNDER_150]],
    },
    {
      id: "LIB-4",
      venueId: VENUE.id,
      name: "AJs Portables",
      required: false,
      type: "LINE_ITEM",
      category: Category.Miscellaneous,
      basePrice: 1100,
      conditions: [[CONDITION_BATHROOM_AJ]],
    },
  ],
};

const ITEM_BATHROOM_GENERATORS: LineItem = {
  id: "LI-BG",
  venueId: VENUE.id,
  name: "Bathroom Generators",
  subtext: "Extra",
  required: false,
  type: "LINE_ITEM",
  category: Category.Miscellaneous,
  basePrice: 150,
  multipleVariableIds: [VAR_BATHROOM_GENERATORS.id],
};

const ITEM_BATHROOM_ATTENDANTS: LineItem = {
  id: "LI-BA",
  venueId: VENUE.id,
  name: "Bathroom Attendants",
  subtext: "$40 per hour per attendant (6 hours)",
  description:
    "The attendant ensures the unit remains stocked and cleaned during the event and troubleshoots any issues, should they arise",
  required: false,
  type: "LINE_ITEM",
  category: Category.Miscellaneous,
  basePrice: 40 * 6, // TODO: 6 hours to variable
  multipleVariableIds: [VAR_BATHROOM_ATTENDANTS.id],
};

const ITEM_MUSIC: LineItem = {
  id: "LI-M",
  venueId: VENUE.id,
  name: "Live Music",
  subtext: "EpicOne",
  required: true,
  type: "LINE_ITEM",
  category: Category.Miscellaneous,
  basePrice: 1595,
};

const ITEM_WEDDING_INSURANCE: LineItem = {
  id: "LI-I",
  venueId: VENUE.id,
  name: "Wedding Insurance",
  subtext: "EventHelper.com",
  required: true,
  type: "LINE_ITEM",
  category: Category.Miscellaneous,
  basePrice: 275,
};

const ITEM_ADMIN_FEE: LineItem = {
  id: "LI-AF",
  venueId: VENUE.id,
  name: "Admin Fee",
  subtext: "20%",
  required: true,
  category: Category.Fees,
  type: "ADMIN_FEE",
  multiple: 0.2,
  targets: [
    Category.General,
    Category.Catering,
    Category.Bar,
    Category.Rentals,
    Category.Miscellaneous,
  ],
};

const ITEM_TAXES: LineItem = {
  id: "LI-9",
  venueId: VENUE.id,
  name: "Sales Tax",
  subtext: "9.5%",
  required: true,
  category: Category.Taxes,
  type: "TAX",
  multiple: 0.095,
  targets: [
    Category.General,
    Category.Catering,
    Category.Bar,
    Category.Rentals,
    Category.Miscellaneous,
    Category.Fees,
  ],
};

export const LINE_ITEMS: LineItem[] = [
  // general
  ITEM_VENUE,
  ITEM_PLANNER,
  // catering
  ITEM_CATERING_MARIA,
  ITEM_CATERER_INNOUT,
  ITEM_CATERING_STAFF,
  ITEM_COFFEE_STATION,
  ITEM_HYDRATION_STATION,
  ITEM_AGUA_FRESCAS,
  // bar
  ITEM_BAR,
  ITEM_BAR_ADDITIONAL,
  // rentals
  ITEM_FARMHOUSE_TABLE,
  ITEM_SWEETHEART_TABLE,
  ITEM_COFFEE_TABLE,
  ITEM_DISPLAY_TABLE,
  ITEM_COCKTAIL_TABLE,
  ITEM_BENCH,
  ITEM_FOLDING_CHAIR,
  // misc
  ITEM_VALET,
  ITEM_BATHROOM,
  ITEM_BATHROOM_GENERATORS,
  ITEM_BATHROOM_ATTENDANTS,
  ITEM_MUSIC, // ** external, do not include in admin fee + taxes
  ITEM_WEDDING_INSURANCE, // ** external, do not include in admin fee + taxes
  // admin fee
  ITEM_ADMIN_FEE,
  // taxes
  ITEM_TAXES,
];

export function generateAvailabilities(): Availability[] {
  // Bookable time range
  const START_TIME = 10;

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 24);

  const timeSlots: Availability[] = [];
  while (startDate < endDate) {
    if ([5, 6].includes(startDate.getDay())) {
      const datePart = startDate.toISOString().split("T")[0];
      const startTimeStr = `${datePart}T${String(START_TIME).padStart(
        2,
        "0"
      )}:00`;
      const endTimeStr = `${datePart}T${String(START_TIME + 8).padStart(
        2,
        "0"
      )}:00`;
      timeSlots.push({
        startTime: startTimeStr,
        endTime: endTimeStr,
      });
    }
    // Move on to next day
    startDate.setDate(startDate.getDate() + 1);
  }
  return timeSlots;
}
