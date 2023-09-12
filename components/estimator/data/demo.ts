import {
  Category,
  Condition,
  ConditionType,
  LineItem,
  Term,
  Variable,
  VariableType,
  Venue,
} from "@/components/estimator/types";

enum Tag {
  Gratuity = 'GRATUITY',
  Taxable = 'TAXABLE',
}

export const VENUE: Venue = {
  id: "1",
  name: "ACME Inc",
  timezone: "America/Los_Angeles",
  minimum: 14_000,
  email: 'contact@acme.com',
  phone: '+1 222 333 4444',
  depositPercentage: 0.35,
  notes: [
    'Admin Fee does not replace gratuity. Thank you!',
  ]
};

const HEADCOUNT_VAR = {
  id: "V6",
  venueId: VENUE.id,
  name: "Headcount",
  type: VariableType.Integer,
  required: true,
  min: 1,
  max: 150,
  label: "How many guests will be at the event?",
  subtext: "Include the number of people within your own personal party.",
  default: 75,
};

const HEADCOUNT_OVER_100: Condition = {
  id: "C-19",
  variableId: HEADCOUNT_VAR.id,
  type: ConditionType.GTE,
  condition: 100,
};

export const VARIABLES: Variable[] = [
  { id: "V1", venueId: VENUE.id, name: "Year", type: VariableType.Year, required: true },
  { id: "V2", venueId: VENUE.id, name: "Month", type: VariableType.Month, required: true },
  { id: "V3", venueId: VENUE.id, name: "Day", type: VariableType.Date, required: true },
  {
    id: "V4",
    venueId: VENUE.id,
    name: "Day of Week",
    type: VariableType.DayOfWeek,
    required: true,
  },
  {
    id: "V5",
    venueId: VENUE.id,
    name: "Time Range",
    type: VariableType.TimeRange,
    required: true,
  },
  HEADCOUNT_VAR,
  {
    id: "V7",
    venueId: VENUE.id,
    name: "Wedding Ceremony",
    type: VariableType.Boolean,
    required: true,
    label: "Would you like to have a wedding ceremony?",
    subtext: "Ceremonies may only occur from 9AM - 12PM.",
  },
  {
    id: "V8",
    venueId: VENUE.id,
    name: "Parking Attendant",
    type: VariableType.Boolean,
    required: true,
    label: "Would you like to have a parking attendant?",
  },
  {
    id: "V9",
    venueId: VENUE.id,
    name: "Outdoor Dining",
    type: VariableType.Boolean,
    required: true,
    label: "Would you like to Dine Al Fresco in our courtyard area?",
    subtext: "This increases the Admin Fee from 22% to 25%.",
  },
  {
    id: "V10",
    venueId: VENUE.id,
    name: "Additional Event Time",
    type: VariableType.Integer,
    required: true,
    min: 0,
    max: 12,
    label: "How many additional hours would you like to extend the event?",
    subtext: "Each additional hour is $1,250.",
  },
  {
    id: "V11",
    venueId: VENUE.id,
    name: "Additional Setup Time",
    required: true,
    type: VariableType.Integer,
    min: 0,
    max: 6,
    label: "How many additional hours of setup time before the event do you need?",
    subtext: "Each additional hour is $250.",
  },
  {
    id: "V12",
    venueId: VENUE.id,
    name: "Dining Option",
    type: VariableType.Select,
    required: false,
    options: [
      "à la carte",
      "Buffet", // TODO: conditions to display certain options, only can choose this if >=100
    ],
    label: "Which dining option would you like?",
    subtext: "Buffets can only be served to party sizes greater than 100"
  },
  {
    id: "V13",
    venueId: VENUE.id,
    name: "Buffet Option",
    type: VariableType.Select,
    required: false,
    options: ["Kansas City Barbeque", "Asian"],
    label: "Which buffet option would you like?",
    subtext: "Buffets can only be serve to party sizes greater than 100",
    conditions: [
      {
        id: "C-V13",
        type: ConditionType.Equal,
        condition: "Buffet",
        variableId: "V12",
      },
      HEADCOUNT_OVER_100,
    ]
  },
  {
    id: "V14",
    venueId: VENUE.id,
    name: "A la carte entrees",
    type: VariableType.MultiSelect,
    required: false,
    label: "Please select 1-3 entree choices.",
    options: [
      "A", "B", "C"
    ],
    min: 1,
    max: 3,
    conditions: [
      {
        id: "C-V14",
        type: ConditionType.Equal,
        condition: "à la carte",
        variableId: "V12",
      },
    ]
  },
];

const year = VARIABLES.find((v) => v.type === VariableType.Year);
if (!year) throw new Error("Year variable not found");
export const YEAR = year;
const month = VARIABLES.find((v) => v.type === VariableType.Month);
if (!month) throw new Error("Month variable not found");
export const MONTH = month;
const date = VARIABLES.find((v) => v.type === VariableType.Date);
if (!date) throw new Error("Date variable not found");
export const DATE = date;
const day = VARIABLES.find((v) => v.type === VariableType.DayOfWeek);
if (!day) throw new Error("Day of Week variable not found");
export const DAY = day;
const time = VARIABLES.find((v) => v.type === VariableType.TimeRange);
if (!time) throw new Error("Time range variable not found");
export const TIME = time;

const headcount = HEADCOUNT_VAR;
if (!headcount) throw new Error("Headcount variable not found");
const attendant = VARIABLES.find((v) => v.name === "Parking Attendant");
if (!attendant) throw new Error("Parking Attendant variable not found");
const ceremony = VARIABLES.find((v) => v.name === "Wedding Ceremony");
if (!ceremony) throw new Error("Wedding Ceremony variable not found");
const outdoorDining = VARIABLES.find((v) => v.name === "Outdoor Dining");
if (!outdoorDining) throw new Error("Outdoor Dining variable not found");
const additionalSetupTime = VARIABLES.find((v) => v.name === "Additional Setup Time");
if (!additionalSetupTime) throw new Error("Additional Setup Time variable not found");
const additionalEventTime = VARIABLES.find((v) => v.name === "Additional Event Time");
if (!additionalEventTime) throw new Error("Additional Event Time variable not found");
const dining = VARIABLES.find((v) => v.name === "Dining Option");
if (!dining) throw new Error("Dining Option variable not found");
const buffet = VARIABLES.find((v) => v.name === "Buffet Option");
if (!buffet) throw new Error("Buffet Option variable not found");

const PEAK_SEASON: Condition = {
  id: "C-1",
  variableId: MONTH.id,
  type: ConditionType.Inclusive,
  condition: [5, 6, 7, 8, 9, 10],
};
const WINTER: Condition = {
  id: "C-2",
  variableId: MONTH.id,
  type: ConditionType.Inclusive,
  condition: [1, 2, 3, 4, 11, 12],
};
const WEEKDAYS: Condition = {
  id: "C-3",
  variableId: DAY.id,
  type: ConditionType.Inclusive,
  condition: [1, 2, 3, 4],
};
const FRIDAYS_SUNDAYS: Condition = {
  id: "C-4",
  variableId: DAY.id,
  type: ConditionType.Inclusive,
  condition: [5, 0],
};
const SATURDAYS: Condition = {
  id: "C-5",
  variableId: DAY.id,
  type: ConditionType.Inclusive,
  condition: [6],
};
const HEADCOUNT_UP_TO_90: Condition = {
  id: "C-6",
  variableId: headcount.id,
  type: ConditionType.LTE,
  condition: 90,
};
const HEADCOUNT_91_TO_150: Condition[] = [
  {
    id: "C-7",
    variableId: headcount.id,
    type: ConditionType.GTE,
    condition: 91,
  },
  {
    id: "C-8",
    variableId: headcount.id,
    type: ConditionType.LTE,
    condition: 150,
  },
];
const HEADCOUNT_UP_TO_150: Condition = {
  id: "C-9",
  variableId: headcount.id,
  type: ConditionType.LTE,
  condition: 150,
};
const WANT_PARKING_ATTENDANT: Condition = {
  id: "C-10",
  variableId: attendant.id,
  type: ConditionType.Equal,
  condition: true,
};
const WANT_WEDDING_CEREMONY: Condition = {
  id: "C-11",
  variableId: ceremony.id,
  type: ConditionType.Equal,
  condition: true,
};
const IS_OUTDOOR_DINING: Condition = {
  id: "C-12",
  variableId: outdoorDining.id,
  type: ConditionType.Equal,
  condition: true,
};
const IS_NOT_OUTDOOR_DINING: Condition = {
  id: "C-13",
  variableId: outdoorDining.id,
  type: ConditionType.Equal,
  condition: false,
};
const HAS_ADDITIONAL_EVENT_TIME: Condition = {
  id: "C-14",
  variableId: additionalEventTime.id,
  type: ConditionType.GTE,
  condition: 1,
};
const HAS_ADDITIONAL_SETUP_TIME: Condition = {
  id: "C-15",
  variableId: additionalSetupTime.id,
  type: ConditionType.GTE,
  condition: 1,
};
const DINING_A_LA_CARTE: Condition = {
  id: "C-16",
  variableId: dining.id,
  type: ConditionType.Equal,
  condition: "à la carte"
};
const BUFFET_KANSAS_CITY_BARBEQUE: Condition = {
  id: "C-17",
  variableId: buffet.id,
  type: ConditionType.Equal,
  condition: "Kansas City Barbeque"
};
const BUFFET_ASIAN: Condition = {
  id: "C-18",
  variableId: buffet.id,
  type: ConditionType.Equal,
  condition: "Asian"
};

export const CONDITIONS = [
  PEAK_SEASON,
  WINTER,
  WEEKDAYS,
  FRIDAYS_SUNDAYS,
  SATURDAYS,
  HEADCOUNT_UP_TO_90,
  ...HEADCOUNT_91_TO_150,
  HEADCOUNT_UP_TO_150,
  WANT_PARKING_ATTENDANT,
  WANT_WEDDING_CEREMONY,
  IS_OUTDOOR_DINING,
  IS_NOT_OUTDOOR_DINING,
  HAS_ADDITIONAL_EVENT_TIME,
  HAS_ADDITIONAL_SETUP_TIME,
  DINING_A_LA_CARTE,
  BUFFET_KANSAS_CITY_BARBEQUE,
  BUFFET_ASIAN,
  HEADCOUNT_OVER_100,
].reduce<Record<string, Condition>>((acc, c) => {
  acc[c.id] = c;
  return acc;
}, {})

const VENUE_TERMS: Term[] = [
  {
    id: "TV-1",
    name: "Peak Season - Weekdays - Up to 90",
    basePrice: 5400,
    conditions: [[PEAK_SEASON, WEEKDAYS, HEADCOUNT_UP_TO_90]],
  },
  {
    id: "TV-2",
    name: "Peak Season - Weekdays - 91 - 150",
    basePrice: 6900,
    conditions: [[PEAK_SEASON, WEEKDAYS, ...HEADCOUNT_91_TO_150]],
  },
  {
    id: "TV-3",
    name: "Peak Season - Fridays / Sundays - Up to 90",
    basePrice: 7500,
    conditions: [[PEAK_SEASON, FRIDAYS_SUNDAYS, HEADCOUNT_UP_TO_90]],
  },
  {
    id: "TV-4",
    name: "Peak Season - Fridays / Sundays - 91 - 150",
    basePrice: 8400,
    conditions: [[PEAK_SEASON, FRIDAYS_SUNDAYS, ...HEADCOUNT_91_TO_150]],
  },
  {
    id: "TV-5",
    name: "Peak Season - Saturdays - Up to 150",
    basePrice: 9900,
    conditions: [[PEAK_SEASON, SATURDAYS, HEADCOUNT_UP_TO_150]],
  },
  {
    id: "TV-6",
    name: "Winter - Weekdays - Up to 90",
    basePrice: 4200,
    conditions: [[WINTER, WEEKDAYS, HEADCOUNT_UP_TO_90]],
  },
  {
    id: "TV-7",
    name: "Winter - Fridays / Sundays - Up to 90",
    basePrice: 5400,
    conditions: [[WINTER, FRIDAYS_SUNDAYS, HEADCOUNT_UP_TO_90]],
  },
  {
    id: "TV-8",
    name: "Winter - Saturdays - Up to 90",
    basePrice: 7500,
    conditions: [[WINTER, SATURDAYS, HEADCOUNT_UP_TO_90]],
  },
];

const VENUE_ITEM: LineItem = {
  id: "LI-1",
  venueId: VENUE.id,
  name: "Venue",
  required: true,
  options: VENUE_TERMS,
  category: Category.General,
  // minimum: 10000,
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
};

const PARKING_ATTENDANT_FEE: LineItem = {
  id: "LI-2",
  venueId: VENUE.id,
  name: "Parking Attendant Fee",
  required: false,
  category: Category.Miscellaneous,
  options: [
    {
      id: "TPA-1",
      name: "Parking Attendant Fee",
      conditions: [[WANT_PARKING_ATTENDANT]],
      basePrice: 500,
    },
  ],
  description:
    "Padua Hills requires a security guard for all events. A parking attendant will be provided for your party.",
};

const CEREMONY_FEE: LineItem = {
  id: "LI-3",
  venueId: VENUE.id,
  name: "Wedding Ceremony Fee",
  required: false,
  category: Category.Miscellaneous,
  options: [
    {
      id: "TC-1",
      name: "Wedding Ceremony Fee",
      conditions: [[WANT_WEDDING_CEREMONY]],
      basePrice: 2000,
    },
  ],
  description: `This is to include the following:
• Preparation of the gazebo
• Setting up of all chairs (up to 225 white wedding chairs)
• Guest book table & linen
• Gift Table & linen
• Ceremony table & linen (if needed)
• Placement of the white aisle runner in courtyard gazebo area (upon request)
• Ceremony breakdown and cleanup
• Rehearsal (1 hour)
• Bridal Suite`,
};

const MENU_TERMS: Term[] = [
  {
    id: "TM-1",
    name: "Dining - à la carte",
    items: [
      // TODO: implement line items for a la carte
    ],
    conditions: [[DINING_A_LA_CARTE]],
  },
  {
    id: "TM-3",
    name: "Theme Buffet - Kansas City Barbeque",
    basePrice: 73.50,
    multipleVariableId: headcount.id,
    conditions: [[BUFFET_KANSAS_CITY_BARBEQUE, HEADCOUNT_OVER_100]],
  },
  {
    id: "TM-4",
    name: "Theme Buffet - Asian Buffet",
    basePrice: 73.50,
    multipleVariableId: headcount.id,
    conditions: [[BUFFET_ASIAN, HEADCOUNT_OVER_100]],
  },
]

const MENU_SERVICES: LineItem = {
  id: "LI-4",
  venueId: VENUE.id,
  name: "Menu Services",
  required: false,
  category: Category.Menu,
  tags: [Tag.Taxable, Tag.Gratuity],
  options: MENU_TERMS,
  minimum: 6_000,
};

const GRATUITY: LineItem = {
  id: "LI-5",
  venueId: VENUE.id,
  name: "Gratuity",
  required: false,
  category: Category.Menu,
  options: [
    {
      id: 'TG-1',
      name: "15% of Menu Charges (Recommended)",
      multiple: 0.15,
      targets: [
        { type: 'TAG', value: Tag.Gratuity },
      ],
      conditions: [[]]
    }
  ],
};

const ADMIN_FEE: LineItem = {
  id: "LI-6",
  venueId: VENUE.id,
  name: "Admin Fee",
  required: true,
  category: Category.Taxes,
  options: [
    {
      id: 'TAF-1',
      name: 'Standard (22%)',
      multiple: 0.22,
      targets: [
        { type: 'CATEGORY', value: Category.General },
        { type: 'CATEGORY', value: Category.Menu },
        { type: 'CATEGORY', value: Category.Miscellaneous },
      ],
      conditions: [[IS_NOT_OUTDOOR_DINING], []],
    },
    {
      id: 'TAF-2',
      name: 'Outdoor Dining (25%)',
      multiple: 0.25,
      targets: [
        { type: 'CATEGORY', value: Category.General },
        { type: 'CATEGORY', value: Category.Menu },
        { type: 'CATEGORY', value: Category.Miscellaneous },
      ],
      conditions: [[IS_OUTDOOR_DINING]],
    },
  ],
};

const ADDITIONAL_EVENT_TIME: LineItem = {
  id: "LI-7",
  venueId: VENUE.id,
  name: "Additional Event Time",
  required: false,
  category: Category.Miscellaneous,
  options: [
    {
      id: 'TAET-1',
      name: '$1,250 / hour',
      basePrice: 1_250,
      multipleVariableId: additionalEventTime.id,
      conditions: [[HAS_ADDITIONAL_EVENT_TIME]]
    },
  ],
};

const ADDITIONAL_SETUP_TIME: LineItem = {
  id: "LI-8",
  venueId: VENUE.id,
  name: "Additional Setup Time",
  required: false,
  category: Category.Miscellaneous,
  options: [
    {
      id: 'TAST-1',
      name: '$250 / hour',
      basePrice: 250,
      multipleVariableId: additionalSetupTime.id,
      conditions: [[HAS_ADDITIONAL_SETUP_TIME]]
    },
  ],
}

const TAXES: LineItem = {
  id: "LI-9",
  venueId: VENUE.id,
  name: "Sales Tax",
  required: true,
  category: Category.Taxes,
  options: [
    {
      id: 'TT-1',
      name: '9.5%',
      multiple: 0.095,
      targets: [
        { type: 'CATEGORY', value: Category.Menu },
        { type: 'CATEGORY', value: Category.General },
        { type: 'CATEGORY', value: Category.Miscellaneous },
      ],
      conditions: [[]],
    },
  ],
};

export const LINE_ITEMS: LineItem[] = [
  VENUE_ITEM,
  MENU_SERVICES,
  // GRATUITY,
  PARKING_ATTENDANT_FEE,
  CEREMONY_FEE,
  ADDITIONAL_EVENT_TIME,
  ADDITIONAL_SETUP_TIME,
  ADMIN_FEE,
  TAXES,
];
