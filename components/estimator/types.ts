export interface Venue {
  id: string;
  name: string;
  timezone: string;
  minimum?: number;
}

export enum DefaultVariableType {
  Date = "DATE",
  DayOfWeek = "DAY_OF_WEEK",
  Month = "MONTH",
  TimeRange = "TIME_RANGE",
  Year = "YEAR",
}

enum PrimitiveVariableType {
  Boolean = "BOOLEAN",
  Float = "FLOAT",
  Integer = "INTEGER",
  Select = "SELECT",
  Text = "TEXT",
}

export const VariableType = { ...PrimitiveVariableType, ...DefaultVariableType };
export type VariableType = DefaultVariableType | PrimitiveVariableType;

export interface Variable {
  id: string;
  venueId: string;
  name: string;
  type: VariableType;
  required: boolean;
  options?: (string | number)[];
  min?: number;
  max?: number;
  interval?: number;
  label?: string;
  subtext?: string;
  description?: string;
}

export enum Category {
  Bar = 'BAR',
  Catering = 'CATERING',
  Fees = 'FEES',
  General = 'GENERAL',
  Menu = 'MENU',
  Miscellaneous = 'MISCELLANEOUS',
  Taxes = 'TAXES',
}

export interface LineItem {
  id: string;
  venueId: string;
  name: string;
  required: boolean;
  category: Category;
  options: Term[];
  tags?: string[];
  minimum?: number;
  description?: string;
  instructions?: string;
}

export interface Term {
  id: string;
  name: string;
  // TODO: maybe add a type for more explicit price calculation
  conditions: string[][];
  items?: LineItem[];
  basePrice?: number;
  targets?: { type: 'TAG' | 'CATEGORY', value: string }[];
  multiple?: number;
  multipleVariableId?: string;
  minimum?: number;
  description?: string;
  instructions?: string;
}

export enum ConditionType {
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
  [variableId: string]: boolean | number | string | { start: Date; end: Date };
};

export enum Page {
  Intro = "INTRO",
  Calendar = "CALENDAR",
  Inputs = "INPUTS",
  Quote = "QUOTE",
}

