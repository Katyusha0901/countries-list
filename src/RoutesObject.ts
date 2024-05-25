interface RoutesType {
  mainPage: string;
  countryPage: string;
}

export const RoutesObject: RoutesType = {
  mainPage: "/countries-list",
  countryPage: "/countries-list-test/country/:countryName",
};
