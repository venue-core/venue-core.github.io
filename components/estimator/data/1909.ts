import {
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

// SECTION: pages
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
    description: `
<div>
  <div className="font-semibold mb-1">Peak Season: May 1st to Oct 31st</div>
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
  <div className="font-semibold mt-2 mb-1">Winter Season: Nov 1st to Apr 30st</div>
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
    title: "General",
    type: PageType.Form,
    rank: 2,
    fields: [
      {
        id: "P3-Q1",
        label: "How many guests will be at the event?",
        subtext: "Include the number of people within your own personal party.",
        row: 1,
        variable: VAR_HEADCOUNT,
      },
    ],
  },
  {
    id: "P-3",
    title: "Catering",
    type: PageType.Form,
    rank: 3,
    fields: [],
  },
  {
    id: "P-4",
    title: "Bar Services",
    type: PageType.Form,
    rank: 4,
    fields: [],
  },
  {
    id: "P-5",
    title: "Seating Rentals",
    type: PageType.Form,
    rank: 5,
    fields: [],
  },
  {
    id: "P-6",
    title: "Bathroom Rentals",
    type: PageType.Form,
    rank: 6,
    fields: [],
  },
  {
    id: "P-7",
    title: "Price Quote",
    type: PageType.PriceQuote,
    rank: 7,
    fields: [],
  },
];
