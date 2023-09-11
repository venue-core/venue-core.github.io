"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { DateValue } from "react-aria";

export const SelectedDateContext = createContext<{
  selectedDate: DateValue;
  setSelectedDate: Dispatch<SetStateAction<DateValue>>;
}>({
  selectedDate: today(getLocalTimeZone()),
  setSelectedDate: () => {},
});

export function SelectedDateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedDate, setSelectedDate] = useState(today(getLocalTimeZone()));
  return (
    // @ts-ignore
    <SelectedDateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </SelectedDateContext.Provider>
  );
}

export function useSelectedDate() {
  const context = useContext(SelectedDateContext);
  if (context === undefined) {
    throw new Error(
      "useSelectedDate must be used within a SelectedDateProvider"
    );
  }
  return context;
}
