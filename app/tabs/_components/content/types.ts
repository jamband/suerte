export type City = {
  name: string;
  timezone: string;
};

export type _Props = {
  cities: Array<City>;
  onClick: (event: React.MouseEvent) => void;
  activeCity: City;
  activeCityTime: string;
};
