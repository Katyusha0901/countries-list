import { Link } from "react-router-dom";
import { Country } from "../types";
import { RoutesObject } from "../RoutesObject";

interface Props {
  countryInformation: Country;
}

export const ButtonToRead: React.FC<Props> = ({ countryInformation }) => {
  return (
    // <Link to={`${RoutesObject.countryPage}`}>
    <Link
      to={`/countries-list-test/country/${countryInformation.name.common}`}
    >
      <div className="button-to-read">Просмотр</div>
    </Link>
  );
};
