import { useParams } from "react-router-dom";
// import { ButtonBack } from "./features/Button-back";
import { Country } from "../types";

interface Props {
  countries: Country[];
}

export const CountryPage: React.FC<Props> = ({ countries }) => {
  const { countryId } = useParams<string>();
  const id: number = Number(countryId);

  return (
    <div className="comment-page">
      <div className="comment-page__title">{countries[id - 1].name.common}</div>
      <div className="comment-page__text">{countries[id - 1].capital}</div>
      <div>
        <img src={countries[id - 1].flags.png} />
      </div>
      {/* <ButtonBack /> */}
    </div>
  );
};
