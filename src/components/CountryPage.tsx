import { useParams } from "react-router-dom";
// import { ButtonBack } from "./features/Button-back";
import { Country } from "../types";

interface Props {
  countries: Country[];
}

export const CountryPage: React.FC<Props> = ({ countries }) => {
  const { countryInformation } = useParams<string>();
  console.log(countries)
  const country = countries.find(
    (country) => country.name.common === countryInformation
  )
  console.log(countryInformation);
  return (
    <div className="comment-page">
      <div className="comment-page__title">{countryInformation}</div>
      <div className="comment-page__text">{country?.capital}</div>
      <div>
        <img src={country?.flags.png} />
      </div>
      {/* <ButtonBack /> */}
    </div>
  );
};
