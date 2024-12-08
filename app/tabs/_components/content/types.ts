export type City = {
  name: string;
  timezone: string;
};

export type _Props = {
  tabsRef: React.RefObject<HTMLUListElement | null>;
  tabsPosition: string;
  tabsOnScroll: () => void;
  cities: Array<City>;
  onClick: (event: React.MouseEvent) => void;
  activeCity: City;
  activeCityTime: string;
};
