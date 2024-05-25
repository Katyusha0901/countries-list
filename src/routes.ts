export const routes = {
  home: "/",
  country: (countryName?: string) =>
    `/country/${countryName ?? ":countryName"}`,
} as const;
