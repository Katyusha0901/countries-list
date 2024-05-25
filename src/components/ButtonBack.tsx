import { Link } from "react-router-dom";
import { routes } from "../routes";
import Button from "react-bootstrap/Button";

export function ButtonBack() {
  return (
    <Link to={routes.home}>
      <Button variant="outline-primary">Назад</Button>
    </Link>
  );
}
