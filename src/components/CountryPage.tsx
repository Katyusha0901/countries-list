import { useParams } from "react-router-dom";
import { ButtonBack } from "./ButtonBack";
import { Country } from "../types";
import Card from "react-bootstrap/Card";
import "../styles/Styles.css";
interface Props {
  countries: Country[];
}

export const CountryPage: React.FC<Props> = ({ countries }) => {
  const { countryName } = useParams<string>();
  const country = countries.find(
    (country) => country.name.common === countryName
  );
  return (
    <div className="comment-page">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={country?.flags.png} />
        <Card.Body>
          <Card.Title>{countryName}</Card.Title>
          <Card.Text>Capital{country?.capital}</Card.Text>
          <ButtonBack />
        </Card.Body>
      </Card>
    </div>
  );
};
