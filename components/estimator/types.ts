export interface Venue {
  id: string;
  name: string;
  timezone: string;
  email: string;
  phone: string;
  depositPercentage?: number; // TODO: redo deposit / payment schedule data models
  minimum?: number;
  notes?: string[];
}

export enum VariableType {
  Date = "DATE",
  DayOfWeek = "DAY_OF_WEEK",
  Month = "MONTH",
  TimeRange = "TIME_RANGE",
  Year = "YEAR",
  // PRIMITIVE
  Boolean = "BOOLEAN",
  Float = "FLOAT",
  Integer = "INTEGER",
  MultiSelect = "MULTI_SELECT",
  Select = "SELECT",
  Text = "TEXT",
}

export enum PageType {
  Calendar = "CALENDAR",
  CalendarTime = "CALENDAR_AND_TIME",
  Estimate = "ESTIMATE",
  Form = "FORM",
  Intro = "INTRO",
  Time = "TIME",
}

export interface Page {
  id: string;
  title?: string;
  description?: string;
  type: PageType;
  fields: Field[];
}

type InputProps = Partial<{
  options: (string | number)[];
  min?: number;
  max?: number;
  interval?: number;
  default?: string | number | boolean;
}>;

export interface Field extends InputProps {
  id: string;
  label: string;
  subtext?: string;
  description?: string;
  variable: Variable;
  conditions?: Condition[];
  required?: boolean;
}

export interface Variable extends InputProps {
  id: string;
  venueId: string;
  name: string;
  type: VariableType;
  required: boolean;
}

export enum Category {
  Bar = "Bar",
  Catering = "Catering",
  Drinks = "Drinks",
  Fees = "Fees",
  General = "General",
  Menu = "Menu",
  Miscellaneous = "Miscellaneous",
  Rentals = "Rentals",
  Taxes = "Taxes",
}

// TYPES:
//   - CONSTANT (just basePrice)
//   - VARIABLE (basePrice + multipleVariableId)
//   - PERCENTAGE (multiple + targets, taxes, admin fees, etc.)
type Price = Partial<{
  basePrice: number;
  targets: string[];
  multiple: number;
  multipleVariableIds: string[];
  minimum: number;
}>;

export interface LineItem extends Price {
  id: string;
  venueId: string;
  name: string;
  required: boolean;
  type: "LINE_ITEM" | "ADMIN_FEE" | "TAX" | "GRATUITY";
  category: Category;
  subtext?: string;
  description?: string;
  instructions?: string;
  options?: LineItem[]; // Select a single option from this list
  items?: LineItem[]; // Sum up the total of the line item based on these items
  conditions?: Condition[][];
}

export enum ConditionType {
  AtLeastN = "AT_LEAST_N",
  Equal = "EQUAL",
  Exclusive = "EXCLUSIVE",
  Inclusive = "INCLUSIVE",
  LTE = "LESS_THAN_OR_EQUAL_TO",
  GTE = "GREATER_THAN_OR_EQUAL_TO",
}

export interface Condition {
  id: string;
  variableId: string;
  type: ConditionType;
  condition: (string | number | boolean)[] | string | number | boolean;
}

export type Inputs = {
  [variableId: string]:
    | boolean
    | number
    | string
    | { start: Date; end: Date }
    | (string | number)[];
};

export type Availability = {
  startTime: string;
  endTime: string;
};

export interface ItemPrice {
  title: string;
  subtitle?: string;
  items?: ItemPrice[];
  price: number;
  minimum: number;
  final: number;
  category: Category;
  missing: boolean;
}
