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
  email: 'contact@acme.com',
  phone: '+1 222 333 4444',
  depositPercentage: 0.35,
  notes: [
    'Admin Fee does not replace gratuity. Thank you!',
  ]
};

const VAR_HEADCOUNT: Variable = {
  id: "V6",
  venueId: VENUE.id,
  name: "Headcount",
  type: VariableType.Integer,
  required: true,
  min: 1,
  max: 150,
  default: 100,
};

const HEADCOUNT_OVER_100: Condition = {
  id: "C-19",
  variableId: VAR_HEADCOUNT.id,
  type: ConditionType.GTE,
  condition: 1, // TODO: change back to 100 later
};

export const VARIABLES: Variable[] = [
  {
    id: "V1",
    venueId: VENUE.id,
    name: "Year",
    type: VariableType.Year,
    required: true,
  },
  {
    id: "V2",
    venueId: VENUE.id,
    name: "Month",
    type: VariableType.Month,
    required: true,
  },
  {
    id: "V3",
    venueId: VENUE.id,
    name: "Date",
    type: VariableType.Date,
    required: true,
  },
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
  VAR_HEADCOUNT,
  {
    id: "V7",
    venueId: VENUE.id,
    name: "Wedding Ceremony",
    type: VariableType.Boolean,
    required: true,
  },
  {
    id: "V8",
    venueId: VENUE.id,
    name: "Parking Attendant",
    type: VariableType.Boolean,
    required: true,
  },
  {
    id: "V9",
    venueId: VENUE.id,
    name: "Outdoor Dining",
    type: VariableType.Boolean,
    required: true,
  },
  {
    id: "V10",
    venueId: VENUE.id,
    name: "Additional Event Time",
    type: VariableType.Integer,
    required: true,
    min: 0,
    max: 12,
  },
  {
    id: "V11",
    venueId: VENUE.id,
    name: "Additional Setup Time",
    required: true,
    type: VariableType.Integer,
    min: 0,
    max: 6,
  },
  {
    id: "V12",
    venueId: VENUE.id,
    name: "Dining Option",
    type: VariableType.Select,
    required: false,
    options: [
      // "à la carte",
      "Buffet", // TODO: conditions to display certain options, only can choose this if >=100
    ],
  },
  {
    id: "V13",
    venueId: VENUE.id,
    name: "Buffet Option",
    type: VariableType.Select,
    required: true,
    options: ["Kansas City Barbeque", "Asian"],
  },
  {
    id: "V14",
    venueId: VENUE.id,
    name: "A la carte entrees",
    type: VariableType.MultiSelect,
    required: false,
    options: ["A", "B", "C"],
    min: 1,
    max: 3,
  },
  {
    id: "V15",
    venueId: VENUE.id,
    name: "House Champagne",
    required: true,
    type: VariableType.Integer,
    min: 0,
  },
  {
    id: "V16",
    venueId: VENUE.id,
    name: "House Almond",
    required: true,
    type: VariableType.Integer,
    min: 0,
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

const headcount = VAR_HEADCOUNT;
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
const houseChampagne = VARIABLES.find((v) => v.name === "House Champagne");
if (!houseChampagne) throw new Error("House Champagne variable not found");
const houseAlmond = VARIABLES.find((v) => v.name === "House Almond");
if (!houseAlmond) throw new Error("House Almond variable not found");
const entrees = VARIABLES.find(v => v.name === "A la carte entrees");
if (!entrees) throw new Error("A la carte entrees variable not found");

export const PAGES: Page[] = [
  {
    id: "P-0",
    title: "Intro",
    type: PageType.Intro,
    rank: 0,
    fields: [],
  },
  {
    id: "P-1",
    title: "Date",
    type: PageType.Calendar,
    rank: 1,
    fields: [],
  },
  // {
  //   id: "P-2",
  //   title: "Time",
  //   type: PageType.Time,
  //   rank: 2,
  //   fields: [],
  // },
  {
    id: "P-3",
    title: "Venue",
    type: PageType.Form,
    rank: 3,
    fields: [
      {
        id: 'P3-Q1',
        label: "How many guests will be at the event?",
        subtext: "Include the number of people within your own personal party.",
        row: 1,
        variable: VAR_HEADCOUNT,
      },
      {
        id: 'P3-Q2',
        label: "Would you like to have a wedding ceremony?",
        subtext: "Ceremonies may only occur from 9AM - 12PM.",
        row: 2,
        variable: ceremony,
      },
      {
        id: 'P3-Q3',
        label: "Would you like to have a parking attendant?",
        row: 3,
        variable: attendant,
      },
      {
        id: 'P3-Q4',
        label: "Would you like to Dine Al Fresco in our courtyard area?",
        subtext: "This increases the Admin Fee from 22% to 25%.",
        row: 4,
        variable: outdoorDining,
      },
      {
        id: 'P3-Q5',
        label: "How many additional hours would you like to extend the event?",
        subtext: "Each additional hour is $1,250.",
        row: 5,
        variable: additionalEventTime,
      },
      {
        id: 'P3-Q6',
        label: "How many additional hours of setup time before the event do you need?",
        subtext: "Each additional hour is $250.",
        row: 6,
        variable: additionalSetupTime,
      }
    ],
  },
  {
    id: "P-4",
    title: "Food",
    type: PageType.Form,
    rank: 4,
    fields: [
      {
        id: 'P4-Q1',
        label: "Which dining option would you like?",
        row: 1,
        variable: dining,
      },
      {
        id: 'P4-Q2',
        label: "Which buffet option would you like?",
        subtext: "Buffets can only be serve to party sizes greater than 100",
        row: 2,
        variable: buffet,
        conditions: [
          {
            id: "C-V13",
            type: ConditionType.Equal,
            condition: "Buffet",
            variableId: "V12",
          },
          HEADCOUNT_OVER_100,
        ],
      },
      {
        id: 'P4-Q3',
        label: "Please select 1-3 entree choices.",
        row: 3,
        variable: entrees,
        conditions: [
          {
            id: "C-V14",
            type: ConditionType.Equal,
            condition: "à la carte",
            variableId: "V12",
          },
        ]
      }
    ],
  },
  {
    id: "P-5",
    title: "Drinks",
    type: PageType.Form,
    rank: 5,
    fields: [
      {
        id: 'P5-Q1',
        label: "How many House Champagnes should be served?",
        subtext: "$10 per drink",
        row: 1,
        variable: houseChampagne,
      },
      {
        id: 'P5-Q2',
        label: "How many House Almonds should be served?",
        subtext: "$5 per drink",
        row: 2,
        variable: houseAlmond,
      },
    ],
  },
  {
    id: "P-6",
    title: "Price Quote",
    type: PageType.PriceQuote,
    rank: 6,
    fields: [],
  },
];

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
const BAR_HOUSE_CHAMPAGNE: Condition = {
  id: "C-19",
  variableId: houseChampagne.id,
  type: ConditionType.GTE,
  condition: 1,
};
const BAR_HOUSE_ALMOND: Condition = {
  id: "C-20",
  variableId: houseAlmond.id,
  type: ConditionType.GTE,
  condition: 1,
};

const VENUE_OPTIONS: LineItem[] = [
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
].map(o => ({ ...o, venueId: VENUE.id, category: Category.General, required: false, type: 'LINE_ITEM' }));

const VENUE_ITEM: LineItem = {
  id: "LI-1",
  venueId: VENUE.id,
  name: "Venue",
  required: true,
  options: VENUE_OPTIONS,
  category: Category.General,
  type: 'LINE_ITEM',
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
  type: 'LINE_ITEM',
  conditions: [[WANT_PARKING_ATTENDANT]],
  basePrice: 500,
  description:
    "Padua Hills requires a security guard for all events. A parking attendant will be provided for your party.",
};

const CEREMONY_FEE: LineItem = {
  id: "LI-3",
  venueId: VENUE.id,
  name: "Wedding Ceremony Fee",
  required: false,
  category: Category.Miscellaneous,
  type: 'LINE_ITEM',
  conditions: [[WANT_WEDDING_CEREMONY]],
  basePrice: 2000,
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

const BUFFET_SERVICE: LineItem = {
  id: "LI-4",
  venueId: VENUE.id,
  name: "Buffet",
  required: false,
  category: Category.Menu,
  type: 'LINE_ITEM',
  options: [
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
  ].map(o => ({ ...o, venueId: VENUE.id, category: Category.Menu, required: false, type: 'LINE_ITEM' })),
  minimum: 6_000,
};

const GRATUITY: LineItem = {
  id: "LI-5",
  venueId: VENUE.id,
  name: "Gratuity",
  required: false,
  category: Category.Fees,
  type: 'GRATUITY',
  subtext: "15% (Recommended)",
  multiple: 0.15,
};

const ADMIN_FEE: LineItem = {
  id: "LI-6",
  venueId: VENUE.id,
  name: "Admin Fee",
  required: true,
  category: Category.Fees,
  type: 'ADMIN_FEE',
  options: [
    {
      id: 'TAF-2',
      name: 'Outdoor Dining (25%)',
      multiple: 0.25,
      targets: [
        Category.General,
        Category.Menu,
        Category.Drinks,
        Category.Miscellaneous,
      ],
      conditions: [[IS_OUTDOOR_DINING]],
    },
    {
      id: 'TAF-1',
      name: 'Standard (22%)',
      multiple: 0.22,
      targets: [
        Category.General,
        Category.Menu,
        Category.Drinks,
        Category.Miscellaneous,
      ],
      conditions: [[]],
    },
  ].map(o => ({ ...o, venueId: VENUE.id, category: Category.Fees, required: false, type: 'ADMIN_FEE' })),
};

const ADDITIONAL_EVENT_TIME: LineItem = {
  id: "LI-7",
  venueId: VENUE.id,
  name: "Additional Event Time",
  subtext: '$1,250 per hour',
  required: false,
  category: Category.Miscellaneous,
  type: 'LINE_ITEM',
  basePrice: 1_250,
  multipleVariableId: additionalEventTime.id,
  conditions: [[HAS_ADDITIONAL_EVENT_TIME]]
};

const ADDITIONAL_SETUP_TIME: LineItem = {
  id: "LI-8",
  venueId: VENUE.id,
  name: "Additional Setup Time",
  subtext: '$250 per hour',
  required: false,
  category: Category.Miscellaneous,
  type: 'LINE_ITEM',
  basePrice: 250,
  multipleVariableId: additionalSetupTime.id,
  conditions: [[HAS_ADDITIONAL_SETUP_TIME]]
}

const TAXES: LineItem = {
  id: "LI-9",
  venueId: VENUE.id,
  name: "Sales Tax",
  subtext: "9.5%",
  required: true,
  category: Category.Taxes,
  type: 'TAX',
  multiple: 0.095,
  targets: [
    Category.Menu,
    Category.General,
    Category.Drinks,
    Category.Miscellaneous,
    Category.Fees,
  ],
};

const DRINK_SERVICES: LineItem[] = [
  {
    id: "LI-10",
    venueId: VENUE.id,
    name: "Drink Services",
    required: false,
    category: Category.Drinks,
    type: 'LINE_ITEM',
    items: [
      {
        id: "LI-10-1",
        venueId: VENUE.id,
        name: "House Champagne",
        required: false,
        category: Category.Drinks,
        type: 'LINE_ITEM',
        basePrice: 10,
        multipleVariableId: houseChampagne.id,
        conditions: [[BAR_HOUSE_CHAMPAGNE]],
      },
      {
        id: "LI-10-2",
        venueId: VENUE.id,
        name: "House Almond",
        required: false,
        category: Category.Drinks,
        type: 'LINE_ITEM',
        basePrice: 5,
        multipleVariableId: houseAlmond.id,
        conditions: [[BAR_HOUSE_ALMOND]],
      },
    ],
  },
];

const DINING_SERVICE: LineItem = {
  id: "LI-11",
  venueId: VENUE.id,
  name: "Dining Services",
  required: false,
  category: Category.Menu,
  type: 'LINE_ITEM',
  conditions: [[DINING_A_LA_CARTE]],
  items: [
  ]
}

export const LINE_ITEMS: LineItem[] = [
  VENUE_ITEM,
  BUFFET_SERVICE,
  DINING_SERVICE,
  ...DRINK_SERVICES,
  PARKING_ATTENDANT_FEE,
  CEREMONY_FEE,
  ADDITIONAL_EVENT_TIME,
  ADDITIONAL_SETUP_TIME,
  ADMIN_FEE,
  TAXES,
  // GRATUITY,
];

export const generateAvailabilities = (): Availability[] => {
  // Bookable time range
  const START_TIME = 5
  const END_TIME = 24

  const startDate = new Date()
  const endDate = new Date(startDate)
  endDate.setMonth(endDate.getMonth() + 24)

  const timeSlots: Availability[] = []

  while (startDate < endDate) {
    // Check if the day is a weekday
    if (startDate.getDay() !== 0 && startDate.getDay() !== 6) {
      // Randomise amount of days with bookable times
      if (Math.random() < 0.4) {
        // Randomise amount of bookable times within a day
        const timesForDay =
          Math.floor(Math.random() * (END_TIME - START_TIME)) + 1
        let currentTime = START_TIME

        Array.from({ length: timesForDay }).forEach(() => {
          // Bookings go for 8 hours
          const duration = 8
          const endTime = currentTime + duration

          if (endTime <= END_TIME) {
            const datePart = startDate.toISOString().split("T")[0]
            // Format time as ISO string
            const startTimeStr = `${datePart}T${String(currentTime).padStart(
              2,
              "0",
            )}:00`
            const endTimeStr = `${datePart}T${String(endTime).padStart(
              2,
              "0",
            )}:00`

            // Populate timeSlots array with day's bookable times
            timeSlots.push({
              startTime: startTimeStr,
              endTime: endTimeStr,
            })

            // Add a "break" of 0 to 2 hours until next bookable slot
            currentTime = endTime + Math.floor(Math.random() * 2)
          }
        })
      }
    }

    // Move on to next day
    startDate.setDate(startDate.getDate() + 1)
  }

  return timeSlots
}