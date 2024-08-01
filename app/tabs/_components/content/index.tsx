"use client";

import { useNow } from "@/_hooks/now";
import { useState } from "react";
import { Component } from "./component";
import type { City } from "./types";

export const Content: React.FC = (props) => {
  const [activeCity, setActiveCity] = useState<City>({
    name: "Tokyo",
    timezone: "Asia/Tokyo",
  });

  const [now, setNow] = useNow();

  const cities: Array<City> = [
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "Bangkok", timezone: "Asia/Bangkok" },
    { name: "Dubai", timezone: "Asia/Dubai" },
    { name: "Paris", timezone: "Europe/Paris" },
    { name: "Casablanca", timezone: "Africa/Casablanca" },
    { name: "Sao Paulo", timezone: "America/Sao_Paulo" },
    { name: "New York", timezone: "America/New_York" },
    { name: "Los Angeles", timezone: "America/Los_Angeles" },
    { name: "Honolulu", timezone: "Pacific/Honolulu" },
    { name: "Auckland", timezone: "Pacific/Auckland" },
    { name: "Australia", timezone: "Australia/Sydney" },
  ];

  const onClick = (event: React.MouseEvent) => {
    const name = event.currentTarget.textContent || "";
    const timezone = cities.find((city) => name === city.name)?.timezone || "";

    setActiveCity({ name, timezone });
    setNow(new Date());
  };

  const activeCityTime = now.toLocaleTimeString([], {
    timeZone: activeCity.timezone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Component
      {...props}
      cities={cities}
      onClick={onClick}
      activeCity={activeCity}
      activeCityTime={activeCityTime}
    />
  );
};
