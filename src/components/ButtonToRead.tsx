import { Link } from "react-router-dom";
import { Country } from "../types";
import Button from "react-bootstrap/Button";
interface Props {
  countryInformation: Country;
}

export const ButtonToRead: React.FC<Props> = ({ countryInformation }) => {
  return (
    <Link to={`/countries-list-test/country/${countryInformation.name.common}`}>
      <Button variant="outline-primary">Просмотр</Button>
    </Link>
  );
};
