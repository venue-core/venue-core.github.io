"use client";

import { createContext, useContext, useEffect, useState } from "react";

import {
  Availability,
  generateAvailabilities,
} from "@/components/datetime/context/data";

const AvailabilitiesContext = createContext<{
  availabilities: Availability[];
}>({
  availabilities: [],
});

export function AvailabilitiesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [availabilities, setAvailabilities] = useState<Availability[]>([]);

  useEffect(() => {
    setAvailabilities(generateAvailabilities());
  }, []);
  return (
    <AvailabilitiesContext.Provider value={{ availabilities: availabilities }}>
      {children}
    </AvailabilitiesContext.Provider>
  );
}

export function useAvailabilities() {
  const context = useContext(AvailabilitiesContext);
  if (context === undefined) {
    throw new Error(
      "useAvailabilities must be used within a AvailabilitiesProvider"
    );
  }
  return context;
}
