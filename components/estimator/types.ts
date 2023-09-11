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
  MultiSelect = 'MULTI_SELECT',
  Select = "SELECT",
  Text = "TEXT",
}

export const VariableType = { ...PrimitiveVariableType, ...DefaultVariableType };
export type VariableType = DefaultVariableType | PrimitiveVariableType;

export enum PageType {
  Calendar = 'CALENDAR',
  CalendarTime = 'CALENDAR_AND_TIME',
  Form = 'FORM',
  Intro = 'INTRO',
  Time = 'TIME',
}

export interface Page {
  id: string;
  title: string;
  type: PageType;
  rank: number;
}

export interface Field {
  id: string;
  pageId: string;
  label: string;
  subtext?: string;
  description?: string;
  row: number;
  col: number;
  variableId: string;
}

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
  default?: string | number;
  conditions?: Condition[];
}

export enum Category {
  Bar = 'Bar',
  Catering = 'Catering',
  Fees = 'Fees',
  General = 'General',
  Menu = 'Menu',
  Miscellaneous = 'Miscellaneous',
  Taxes = 'Taxes & Fees',
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
  conditions: Condition[][];
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
  [variableId: string]: boolean | number | string | { start: Date; end: Date } | (string | number)[];
};

export enum View {
  Intro = "INTRO",
  Calendar = "CALENDAR",
  Inputs = "INPUTS",
  Quote = "QUOTE",
}

