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
  name: "The 1909",
  timezone: "America/Los_Angeles",
  email: "the1909christina@gmail.com",
  phone: "+1 310 498 3427",
  depositPercentage: 0.3,
  notes: [
    "Admin Fee does not replace gratuity. A 15% gratuity is recommended. Thank you!",
  ],
};

// SECTION: Variables
const VAR_YEAR: Variable = {
  id: "V1",
  venueId: VENUE.id,
  name: "Year",
  type: VariableType.Year,
  required: true,
};
const VAR_MONTH: Variable = {
  id: "V2",
  venueId: VENUE.id,
  name: "Month",
  type: VariableType.Month,
  required: true,
};
const VAR_DATE: Variable = {
  id: "V3",
  venueId: VENUE.id,
  name: "Day",
  type: VariableType.Date,
  required: true,
};
const VAR_DAY: Variable = {
  id: "V4",
  venueId: VENUE.id,
  name: "Day of Week",
  type: VariableType.DayOfWeek,
  required: true,
};
const VAR_TIME: Variable = {
  id: "V5",
  venueId: VENUE.id,
  name: "Time Range",
  type: VariableType.TimeRange,
  required: true,
};
const VAR_HEADCOUNT: Variable = {
  id: "V6",
  venueId: VENUE.id,
  name: "Headcount",
  type: VariableType.Integer,
  required: true,
  min: 1,
  max: 150,
  default: 90,
};
const VAR_FURNISHING_STYLE: Variable = {
  id: "V7",
  venueId: VENUE.id,
  name: "Furnishing Style",
  type: VariableType.Select,
  options: ["Formal", "Rustic"],
  required: true,
};
const VAR_PHOTO_BOOTH: Variable = {
  id: "V8",
  venueId: VENUE.id,
  name: "Photo Booth",
  type: VariableType.Boolean,
  default: true,
  required: false,
};
const VAR_CLASSIC_CAR: Variable = {
  id: "V9",
  venueId: VENUE.id,
  name: "Classic Car",
  type: VariableType.Select,
  options: [
    "1957 Ford Fairlane - Blue & White Edition",
    "1974 VW Westphalia Bus - Orange",
    "1958 BMW Isetta - Mustard",
    "1974 Orange VW Bus with Custom Deco",
  ],
  default: "1974 Orange VW Bus with Custom Deco",
  required: false,
};
const VAR_OUTDOOR_LIGHTING: Variable = {
  id: "V10",
  venueId: VENUE.id,
  name: "Outdoor Lighting",
  type: VariableType.Boolean,
  default: true,
  required: false,
};
const VAR_OUTDOOR_SOUND: Variable = {
  id: "V11",
  venueId: VENUE.id,
  name: "Outdoor Sound",
  type: VariableType.Boolean,
  default: true,
  required: false,
};
const VAR_INDOOR_SOUND: Variable = {
  id: "V12",
  venueId: VENUE.id,
  name: "Indoor Sound",
  type: VariableType.Boolean,
  default: true,
  required: false,
};
const VAR_PATIO_HEATER: Variable = {
  id: "V13",
  venueId: VENUE.id,
  name: "Patio Heater",
  type: VariableType.Integer,
  min: 0,
  max: 9,
  default: 2,
  required: false,
};
const VAR_DANCING_HALL_LIGHTING: Variable = {
  id: "V14",
  venueId: VENUE.id,
  name: "Dancing Hall Lighting",
  type: VariableType.Boolean,
  default: true,
  required: false,
};
const VAR_RECEPTION_STAFFING: Variable = {
  id: "V-RS",
  venueId: VENUE.id,
  name: "Reception Staffing",
  type: VariableType.Select,
  options: ["Buffet", "Family", "Plated"],
  default: "Buffet",
  required: true,
};
const VAR_REFRESHMENTS: Variable = {
  id: "V-R",
  venueId: VENUE.id,
  name: "Refreshments",
  type: VariableType.Boolean,
  default: true,
  required: false,
};
const VAR_LIGHT_APPETIZERS: Variable = {
  id: "V-LA",
  venueId: VENUE.id,
  name: "Light Passed Appetizers",
  type: VariableType.MultiSelect,
  options: [
    "cucumber canapé with avocado hummus, tomato, and cilantro",
    "bacon wrapped maple marinated chicken",
    "tomato bruschetta, smashed burrata cheese, basil, balsamic reduction",
    "caramelized onion and spinach stuffed mushroom, mozzarella",
    "toasted baguette with goat cheese, sliced figs, pickled red onions",
  ],
  required: false,
};
const VAR_HEARTY_APPETIZERS: Variable = {
  id: "V-HA",
  venueId: VENUE.id,
  name: "Hearty Passed Appetizers",
  type: VariableType.MultiSelect,
  options: [
    "bacon wrapped ranchero/blue cheese stuffed dates",
    "cucumber canapé with Korean BBQ pork, pear kimchi salsa",
    "turkey pho meatballs, hoisin and sriracha, green onion",
    "pita chip with roasted eggplant and pepper compote, tahini sauce, parsley",
    "sourdough bread with charred skirt steak, béarnaise sauce, pickled cucumber",
  ],
  required: false,
};
const VAR_NIGHT_PIZZA: Variable = {
  id: "V-NP",
  venueId: VENUE.id,
  name: "Late Night Pizza",
  type: VariableType.Boolean,
  default: false,
  required: false,
};
const VAR_NIGHT_SERVING_STATION: Variable = {
  id: "V-NSS",
  venueId: VENUE.id,
  name: "Night Serving Station",
  type: VariableType.Boolean,
  default: false,
  required: false,
};
const VAR_NIGHT_ESPRESSO_BAR: Variable = {
  id: "V-NEB",
  venueId: VENUE.id,
  name: "Espresso Bar",
  type: VariableType.Boolean,
  default: false,
  required: false,
};

// SECTION: conditions
const CONDITION_PEAK_SEASON: Condition = {
  id: "C-1",
  variableId: VAR_MONTH.id,
  type: ConditionType.Inclusive,
  condition: [5, 6, 7, 8, 9, 10],
};
const CONDITION_WINTER_SEASON: Condition = {
  id: "C-2",
  variableId: VAR_MONTH.id,
  type: ConditionType.Inclusive,
  condition: [1, 2, 3, 4, 11, 12],
};
const CONDITION_WEEKDAYS: Condition = {
  id: "C-3",
  variableId: VAR_DAY.id,
  type: ConditionType.Inclusive,
  condition: [1, 2, 3, 4],
};
const CONDITION_FRIDAYS_SUNDAYS: Condition = {
  id: "C-4",
  variableId: VAR_DAY.id,
  type: ConditionType.Inclusive,
  condition: [5, 0],
};
const CONDITION_SATURDAYS: Condition = {
  id: "C-5",
  variableId: VAR_DAY.id,
  type: ConditionType.Inclusive,
  condition: [6],
};
// const CONDITION_HEADCOUNT_UP_TO_10: Condition = {
//   id: "C-H10",
//   variableId: VAR_HEADCOUNT.id,
//   type: ConditionType.LTE,
//   condition: 10,
// };
// const CONDITION_HEADCOUNT_UP_TO_15: Condition = {
//   id: "C-H15",
//   variableId: VAR_HEADCOUNT.id,
//   type: ConditionType.LTE,
//   condition: 15,
// };
// const CONDITION_HEADCOUNT_UP_TO_20: Condition = {
//   id: "C-H20",
//   variableId: VAR_HEADCOUNT.id,
//   type: ConditionType.LTE,
//   condition: 20,
// };
// const CONDITION_HEADCOUNT_UP_TO_30: Condition = {
//   id: "C-H30",
//   variableId: VAR_HEADCOUNT.id,
//   type: ConditionType.LTE,
//   condition: 30,
// };
// const CONDITION_HEADCOUNT_UP_TO_40: Condition = {
//   id: "C-H45",
//   variableId: VAR_HEADCOUNT.id,
//   type: ConditionType.LTE,
//   condition: 30,
// };
const CONDITION_HEADCOUNT_UP_TO_90: Condition = {
  id: "C-6",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 90,
};
const CONDITION_HEADCOUNT_UP_TO_150: Condition = {
  id: "C-9",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.LTE,
  condition: 150,
};
const CONDITION_FURNISHING_FORMAL: Condition = {
  id: "C-10",
  variableId: VAR_FURNISHING_STYLE.id,
  type: ConditionType.Equal,
  condition: "Formal",
};
const CONDITION_FURNISHING_RUSTIC: Condition = {
  id: "C-11",
  variableId: VAR_FURNISHING_STYLE.id,
  type: ConditionType.Equal,
  condition: "Rustic",
};
const CONDITION_PHOTO_BOOTH: Condition = {
  id: "C-12",
  variableId: VAR_PHOTO_BOOTH.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_FORD: Condition = {
  id: "C-13",
  variableId: VAR_CLASSIC_CAR.id,
  type: ConditionType.Equal,
  condition: "1957 Ford Fairlane - Blue & White Edition",
};
const CONDITION_VW_WESTPHALIA: Condition = {
  id: "C-14",
  variableId: VAR_CLASSIC_CAR.id,
  type: ConditionType.Equal,
  condition: "1974 VW Westphalia Bus - Orange",
};
const CONDITION_BMW: Condition = {
  id: "C-15",
  variableId: VAR_CLASSIC_CAR.id,
  type: ConditionType.Equal,
  condition: "1958 BMW Isetta - Mustard",
};
const CONDITION_OUTDOOR_LIGHTING: Condition = {
  id: "C-16",
  variableId: VAR_OUTDOOR_LIGHTING.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_OUTDOOR_SOUND: Condition = {
  id: "C-17",
  variableId: VAR_OUTDOOR_SOUND.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_INDOOR_SOUND: Condition = {
  id: "C-18",
  variableId: VAR_INDOOR_SOUND.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_DANCING_HALL_LIGHTING: Condition = {
  id: "C-19",
  variableId: VAR_DANCING_HALL_LIGHTING.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_STAFFING_PLATED: Condition = {
  id: "C-SP",
  variableId: VAR_RECEPTION_STAFFING.id,
  type: ConditionType.Equal,
  condition: "Plated",
};
const CONDITION_STAFFING_FAMILY: Condition = {
  id: "C-SF",
  variableId: VAR_RECEPTION_STAFFING.id,
  type: ConditionType.Equal,
  condition: "Family",
};
const CONDITION_STAFFING_BUFFET: Condition = {
  id: "C-SB",
  variableId: VAR_RECEPTION_STAFFING.id,
  type: ConditionType.Equal,
  condition: "Buffet",
};
const CONDITION_REFRESHMENTS: Condition = {
  id: "C-R",
  variableId: VAR_REFRESHMENTS.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_LIGHT_APPETIZERS: Condition = {
  id: "C-LA",
  variableId: VAR_LIGHT_APPETIZERS.id,
  type: ConditionType.AtLeastN,
  condition: 1,
};
const CONDITION_HEARTY_APPETIZERS: Condition = {
  id: "C-HA",
  variableId: VAR_HEARTY_APPETIZERS.id,
  type: ConditionType.AtLeastN,
  condition: 1,
};
const CONDITION_NIGHT_PIZZA: Condition = {
  id: "C-NP",
  variableId: VAR_NIGHT_PIZZA.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_NIGHT_SERVING_STATION: Condition = {
  id: "C-NSS",
  variableId: VAR_NIGHT_SERVING_STATION.id,
  type: ConditionType.Equal,
  condition: true,
};
const CONDITION_NIGHT_ESPRESSO_BAR: Condition = {
  id: "C-NEB",
  variableId: VAR_NIGHT_ESPRESSO_BAR.id,
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
  <div className="text-lg font-semibold mb-1">Peak Season: May 1st to Oct 31st</div>
  <div className="flex justify-between">
    <span>Weekdays (≤ 90 guests):</span>
    <span>$5,400</span>
  </div>
  <div className="flex justify-between">
    <span>Weekdays (≤ 150 guests):</span>
    <span>$6,900</span>
  </div>
    <div className="flex justify-between">
    <span>Fridays / Sundays (≤ 90 guests):</span>
    <span>$7,500</span>
  </div>
  <div className="flex justify-between">
    <span>Fridays / Sundays (≤ 150 guests):</span>
    <span>$8,400</span>
  </div>
  <div className="flex justify-between">
    <span>Saturdays (≤ 150 guests):</span>
    <span>$9,900</span>
  </div>
  <div className="text-lg font-semibold mt-2 mb-1">Winter Season: Nov 1st to Apr 30st</div>
  <div className="flex justify-between">
    <span>Weekdays:</span> 
    <span>$4,200</span>
  </div>
  <div className="flex justify-between">
    <span>Fridays / Sundays:</span> 
    <span>$5,400</span>
  </div>
  <div className="flex justify-between">
    <span>Saturday:</span> 
    <span>$5,500</span>
  </div>
</div>`,
  },
  {
    id: "P-2",
    title: "Guests",
    type: PageType.Form,
    fields: [
      {
        id: "P2-Q1",
        label: "How many guests will be at the event?",
        subtext: "Include the number of people within your own personal party.",
        variable: VAR_HEADCOUNT,
      },
      // TODO: conditional question where if is winter, then max number of people in party is 90
    ],
  },
  {
    id: "P-3",
    title: "Event Furnishings",
    type: PageType.Form,
    fields: [
      {
        id: "P3-Q1",
        label: "What kind of even furnishing style would you like?",
        variable: VAR_FURNISHING_STYLE,
      },
      {
        id: "P3-Q2",
        label: "Would you like to set up outdoor lighting?",
        subtext:
          "$240 - Meadow and amphitheater hanging, string and tree lights",
        variable: VAR_OUTDOOR_LIGHTING,
      },
      {
        id: "P3-Q3",
        label: "Would you like to set up an outdoor sound system?",
        subtext: "$150 - 12 Speakers and 1 wireless microphone",
        variable: VAR_OUTDOOR_SOUND,
      },
      {
        id: "P3-Q4",
        label: "Would you like to set up an indoor sound system?",
        subtext: "$150 - Speakers, subwoofer and wireless microphone",
        variable: VAR_INDOOR_SOUND,
      },
      {
        id: "P3-Q5",
        label: "How many patio heaters with propane would you like?",
        subtext: "$75 each",
        variable: VAR_PATIO_HEATER,
      },
      {
        id: "P3-Q6",
        label: "Would you like dancing hall bistro lighting?",
        subtext: "90 ft",
        variable: VAR_DANCING_HALL_LIGHTING,
      },
      {
        id: "P3-Q10",
        label: "Would you like to set up a photo booth for your guests?",
        variable: VAR_PHOTO_BOOTH,
      },
      {
        id: "P3-Q11",
        label: "Which classic car would you like for your photos?",
        variable: VAR_CLASSIC_CAR,
        conditions: [CONDITION_PHOTO_BOOTH],
      },
    ],
  },
  {
    id: "P-4",
    title: "Catering",
    type: PageType.Form,
    fields: [
      {
        id: "P4-Q0",
        label: "Would style of reception would you like?",
        subtext: "Buffet - FREE | Family - $3PP | Plated - $6PP",
        variable: VAR_RECEPTION_STAFFING,
      },
      {
        id: "P4-Q1",
        label: "Would you like to serve refreshments?",
        subtext:
          "$6 pp - watermelon fresca, house lemonade, iced tea, & fruit-infused water",
        variable: VAR_REFRESHMENTS,
      },
      {
        id: "P4-Q2",
        label: "Which light passed appetizers would you like to serve?",
        subtext: "$6 pp per item",
        variable: VAR_LIGHT_APPETIZERS,
      },
      {
        id: "P4-Q3",
        label: "Which hearty passed appetizers would you like to serve?",
        subtext: "$6 pp per item",
        variable: VAR_HEARTY_APPETIZERS,
      },
    ],
  },
  {
    id: "P-5",
    title: "Catering (Night Options)",
    type: PageType.Form,
    fields: [
      {
        id: "P5-Q1",
        label: "Would you like to serve pizzas?",
        subtext: "$15 pp - 8-in pizzas, 2 topping styles, served in slices",
        variable: VAR_NIGHT_PIZZA,
      },
      {
        id: "P5-Q2",
        label:
          "Would you like to set up a coffee, hot tea, and cake serving station?",
        subtext:
          "$6 pp - 2 cake-serving staff, plates, cutlery, napkins, and fresh brewed coffee & black tea",
        variable: VAR_NIGHT_SERVING_STATION,
      },
      {
        id: "P5-Q3",
        label: "Would you like to set up an espresso bar?",
        subtext:
          "$6pp - unlimited espresso and cappuccino service with porcelain china sets",
        variable: VAR_NIGHT_ESPRESSO_BAR,
      },
    ],
  },
  {
    id: "P-6",
    title: "Price Quote",
    type: PageType.Estimate,
    fields: [],
  },
];

// SECTION: Line Items
const ITEM_VENUE: LineItem = {
  id: "LI-V",
  venueId: VENUE.id,
  name: "Venue",
  category: Category.General,
  type: "LINE_ITEM",
  required: true,
  description: `Venue Package inclusions
• Use of Entire outdoor & indoor area from 11 am to 11 pm
• all amnesties permanently attached to the venue
• Pre and post event comprehensive cleaning
• Valet parking service on Saturdays and Sundays
• Parking & Golfcart service for mobility impaired
• setup and breakdown of the1909 furniture & rental items
• One hour of rehearsal time during the week
• Two Venue logistic meetings prior to the event
• Outdoor and indoor rustic bar Fixture`,
  options: [
    {
      id: "LIV-1",
      name: "Peak Season - Weekdays - Up to 90",
      basePrice: 5400,
      conditions: [
        [
          CONDITION_PEAK_SEASON,
          CONDITION_WEEKDAYS,
          CONDITION_HEADCOUNT_UP_TO_90,
        ],
      ],
    },
    {
      id: "LIV-2",
      name: "Peak Season - Weekdays - 91 - 150",
      basePrice: 6900,
      conditions: [
        [
          CONDITION_PEAK_SEASON,
          CONDITION_WEEKDAYS,
          CONDITION_HEADCOUNT_UP_TO_150,
        ],
      ],
    },
    {
      id: "LIV-3",
      name: "Peak Season - Fridays / Sundays - Up to 90",
      basePrice: 7500,
      conditions: [
        [
          CONDITION_PEAK_SEASON,
          CONDITION_FRIDAYS_SUNDAYS,
          CONDITION_HEADCOUNT_UP_TO_90,
        ],
      ],
    },
    {
      id: "LIV-4",
      name: "Peak Season - Fridays / Sundays - 91 - 150",
      basePrice: 8400,
      conditions: [
        [
          CONDITION_PEAK_SEASON,
          CONDITION_FRIDAYS_SUNDAYS,
          CONDITION_HEADCOUNT_UP_TO_150,
        ],
      ],
    },
    {
      id: "LIV-5",
      name: "Peak Season - Saturdays - Up to 150",
      basePrice: 9900,
      conditions: [
        [
          CONDITION_PEAK_SEASON,
          CONDITION_SATURDAYS,
          CONDITION_HEADCOUNT_UP_TO_150,
        ],
      ],
    },
    {
      id: "LIV-6",
      name: "Winter - Weekdays - Up to 90",
      basePrice: 4200,
      conditions: [
        [
          CONDITION_WINTER_SEASON,
          CONDITION_WEEKDAYS,
          CONDITION_HEADCOUNT_UP_TO_90,
        ],
      ],
    },
    {
      id: "LIV-7",
      name: "Winter - Fridays / Sundays - Up to 90",
      basePrice: 5400,
      conditions: [
        [
          CONDITION_WINTER_SEASON,
          CONDITION_FRIDAYS_SUNDAYS,
          CONDITION_HEADCOUNT_UP_TO_90,
        ],
      ],
    },
    {
      id: "LIV-8",
      name: "Winter - Saturdays - Up to 90",
      basePrice: 7500,
      conditions: [
        [
          CONDITION_WINTER_SEASON,
          CONDITION_SATURDAYS,
          CONDITION_HEADCOUNT_UP_TO_90,
        ],
      ],
    },
  ].map((o) => ({
    ...o,
    venueId: VENUE.id,
    category: Category.General,
    required: false,
    type: "LINE_ITEM",
  })),
};

const ITEM_CATERING: LineItem = {
  id: "LI-C",
  venueId: VENUE.id,
  name: "Continental Menu",
  subtext: "$65 pp",
  required: true,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 65,
  multipleVariableIds: [VAR_HEADCOUNT.id],
};

const ITEM_RECEPTION_STAFFING: LineItem = {
  id: "LI-RS",
  venueId: VENUE.id,
  name: "Reception Staffing",
  required: true,
  type: "LINE_ITEM",
  category: Category.Catering,
  options: [
    {
      id: "LI-RS-1",
      name: "Plated Style",
      subtext: "$6 pp",
      basePrice: 6,
      multipleVariableIds: [VAR_HEADCOUNT.id],
      conditions: [[CONDITION_STAFFING_PLATED]],
    },
    {
      id: "LI-RS-1",
      name: "Family Style",
      subtext: "$3 pp",
      basePrice: 3,
      multipleVariableIds: [VAR_HEADCOUNT.id],
      conditions: [[CONDITION_STAFFING_FAMILY]],
    },
    {
      id: "LI-RS-1",
      name: "Buffet Style",
      basePrice: 0,
      multipleVariableIds: [VAR_HEADCOUNT.id],
      conditions: [[CONDITION_STAFFING_BUFFET]],
    },
  ].map((o) => ({
    ...o,
    venueId: VENUE.id,
    type: "LINE_ITEM",
    category: Category.Catering,
    required: true,
  })),
};

const ITEM_REFRESHMENTS: LineItem = {
  id: "LI-R",
  venueId: VENUE.id,
  name: "Refreshments",
  subtext: "$6 pp",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  multipleVariableIds: [VAR_HEADCOUNT.id],
  conditions: [[CONDITION_REFRESHMENTS]],
};

const ITEM_LIGHT_APPETIZERS: LineItem = {
  id: "LI-LA",
  venueId: VENUE.id,
  name: "Light Passed Appetizers",
  subtext: "$3 pp per item",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 3,
  multipleVariableIds: [VAR_HEADCOUNT.id, VAR_LIGHT_APPETIZERS.id],
  conditions: [[CONDITION_LIGHT_APPETIZERS]],
};

const ITEM_HEARTY_APPETIZERS: LineItem = {
  id: "LI-HA",
  venueId: VENUE.id,
  name: "Hearty Passed Appetizers",
  subtext: "$6 pp per item",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 6,
  multipleVariableIds: [VAR_HEADCOUNT.id, VAR_HEARTY_APPETIZERS.id],
  conditions: [[CONDITION_HEARTY_APPETIZERS]],
};

const ITEM_NIGHT_PIZZA: LineItem = {
  id: "LI-NP",
  venueId: VENUE.id,
  name: "Late Night Pizza",
  subtext: "$15 pp",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 15,
  multipleVariableIds: [VAR_HEADCOUNT.id],
  conditions: [[CONDITION_NIGHT_PIZZA]],
};

const ITEM_NIGHT_SERVING_STATION: LineItem = {
  id: "LI-NSS",
  venueId: VENUE.id,
  name: "Night Serving Station",
  subtext: "$6 pp - Coffee, tea, and cake",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 6,
  multipleVariableIds: [VAR_HEADCOUNT.id],
  conditions: [[CONDITION_NIGHT_SERVING_STATION]],
};

const ITEM_NIGHT_ESPRESSO_BAR: LineItem = {
  id: "LI-NEB",
  venueId: VENUE.id,
  name: "Espresso Bar",
  subtext: "$6 pp",
  required: false,
  type: "LINE_ITEM",
  category: Category.Catering,
  basePrice: 6,
  multipleVariableIds: [VAR_HEADCOUNT.id],
  conditions: [[CONDITION_NIGHT_ESPRESSO_BAR]],
};

const ITEM_FURNISHINGS: LineItem = {
  id: "LI-F",
  venueId: VENUE.id,
  name: "Event Furnishings",
  required: true,
  type: "LINE_ITEM",
  category: Category.Rentals,
  options: [
    {
      id: "LIF-1",
      name: "Preset - Formal",
      basePrice: 600,
      conditions: [[CONDITION_FURNISHING_FORMAL]],
    },
    {
      id: "LIF-2",
      name: "Preset - Rustic",
      basePrice: 1500,
      conditions: [[CONDITION_FURNISHING_RUSTIC]],
    },
  ].map((o) => ({
    ...o,
    venueId: VENUE.id,
    category: Category.Rentals,
    required: false,
    type: "LINE_ITEM",
  })),
};

const ITEM_PHOTO_BOOTH: LineItem = {
  id: "LI-PB",
  venueId: VENUE.id,
  name: "Photo Booth",
  required: false,
  type: "LINE_ITEM",
  category: Category.Rentals,
  basePrice: 750,
  options: [
    {
      id: "LIPB-1",
      name: "1957 Ford Fairlane - Blue & White Edition",
      basePrice: 250,
      conditions: [[CONDITION_FORD]],
    },
    {
      id: "LIPB-2",
      name: "1974 VW Westphalia Bus - Orange",
      basePrice: 250,
      conditions: [[CONDITION_VW_WESTPHALIA]],
    },
    {
      id: "LIPB-3",
      name: "1958 BMW Isetta - Mustard",
      basePrice: 250,
      conditions: [[CONDITION_BMW]],
    },
    {
      id: "LIPB-4",
      name: "1974 Orange VW Bus with Custom Deco",
      basePrice: 0,
    },
  ].map((o) => ({
    ...o,
    venueId: VENUE.id,
    category: Category.Rentals,
    required: false,
    type: "LINE_ITEM",
  })),
  conditions: [[CONDITION_PHOTO_BOOTH]],
};

const ITEM_OUTDOOR_LIGHTING: LineItem = {
  id: "LI-OL",
  venueId: VENUE.id,
  name: "Outdoor Lighting",
  category: Category.Rentals,
  type: "LINE_ITEM",
  required: false,
  basePrice: 240,
  conditions: [[CONDITION_OUTDOOR_LIGHTING]],
};

const ITEM_OUTDOOR_SOUND: LineItem = {
  id: "LI-OS",
  venueId: VENUE.id,
  name: "Outdoor Sound System",
  category: Category.Rentals,
  type: "LINE_ITEM",
  required: false,
  basePrice: 150,
  conditions: [[CONDITION_OUTDOOR_SOUND]],
};

const ITEM_INDOOR_SOUND: LineItem = {
  id: "LI-IS",
  venueId: VENUE.id,
  name: "Indoor Sound System",
  category: Category.Rentals,
  type: "LINE_ITEM",
  required: false,
  basePrice: 150,
  conditions: [[CONDITION_INDOOR_SOUND]],
};

const ITEM_PATIO_HEATER: LineItem = {
  id: "LI-PH",
  venueId: VENUE.id,
  name: "Patio Heater",
  category: Category.Rentals,
  type: "LINE_ITEM",
  required: false,
  basePrice: 75,
  multipleVariableIds: [VAR_PATIO_HEATER.id],
};

const ITEM_DANCING_HALL_LIGHTING: LineItem = {
  id: "LI-DHL",
  venueId: VENUE.id,
  name: "Dancing Hall",
  subtext: "Bistro Lighting (90 ft)",
  category: Category.Rentals,
  type: "LINE_ITEM",
  required: false,
  basePrice: 90,
  conditions: [[CONDITION_DANCING_HALL_LIGHTING]],
};

const ITEM_ADMIN_FEE: LineItem = {
  id: "LI-AF",
  venueId: VENUE.id,
  name: "Admin Fee",
  subtext: "25%",
  required: true,
  category: Category.Fees,
  type: "ADMIN_FEE",
  multiple: 0.25,
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
  // General
  ITEM_VENUE,
  // Catering
  ITEM_CATERING,
  ITEM_RECEPTION_STAFFING,
  ITEM_REFRESHMENTS,
  ITEM_LIGHT_APPETIZERS,
  ITEM_HEARTY_APPETIZERS,
  ITEM_NIGHT_PIZZA,
  ITEM_NIGHT_SERVING_STATION,
  ITEM_NIGHT_ESPRESSO_BAR,
  // Rentals
  ITEM_FURNISHINGS,
  ITEM_OUTDOOR_LIGHTING,
  ITEM_OUTDOOR_SOUND,
  ITEM_INDOOR_SOUND,
  ITEM_PATIO_HEATER,
  ITEM_DANCING_HALL_LIGHTING,
  ITEM_PHOTO_BOOTH,
  // Fees
  ITEM_ADMIN_FEE,
  // Taxes
  ITEM_TAXES,
];

export function generateAvailabilities(): Availability[] {
  // Bookable time range
  const START_TIME = 5;
  const END_TIME = 24;

  const startDate = new Date();
  const endDate = new Date(startDate);
  endDate.setMonth(endDate.getMonth() + 24);

  const timeSlots: Availability[] = [];
  while (startDate < endDate) {
    // Check if the day is a weekday
    if (startDate.getDay() !== 0 && startDate.getDay() !== 6) {
      // Randomise amount of days with bookable times
      if (Math.random() < 0.4) {
        // Randomise amount of bookable times within a day
        const timesForDay =
          Math.floor(Math.random() * (END_TIME - START_TIME)) + 1;
        let currentTime = START_TIME;

        Array.from({ length: timesForDay }).forEach(() => {
          // Bookings go for 8 hours
          const duration = 8;
          const endTime = currentTime + duration;

          if (endTime <= END_TIME) {
            const datePart = startDate.toISOString().split("T")[0];
            // Format time as ISO string
            const startTimeStr = `${datePart}T${String(currentTime).padStart(
              2,
              "0"
            )}:00`;
            const endTimeStr = `${datePart}T${String(endTime).padStart(
              2,
              "0"
            )}:00`;

            // Populate timeSlots array with day's bookable times
            timeSlots.push({
              startTime: startTimeStr,
              endTime: endTimeStr,
            });

            // Add a "break" of 0 to 2 hours until next bookable slot
            currentTime = endTime + Math.floor(Math.random() * 2);
          }
        });
      }
    }
    // Move on to next day
    startDate.setDate(startDate.getDate() + 1);
  }
  return timeSlots;
}
