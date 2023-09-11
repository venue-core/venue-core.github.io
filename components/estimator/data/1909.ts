import {Variable, VariableType, Venue} from "@/components/estimator/types";

export const VENUE: Venue = {
  id: "1",
  name: "The 1909",
  timezone: "America/Los_Angeles",
  email: 'the1909christina@gmail.com',
  phone: '+1 310 498 3427',
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
  {
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
  },
];
