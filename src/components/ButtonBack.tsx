import { Link } from "react-router-dom";
import { RoutesObject } from "../RoutesObject";
import Button from "react-bootstrap/Button";

export function ButtonBack() {
  return (
    <Link to={RoutesObject.mainPage}>
      <Button variant="outline-primary">Назад</Button>
    </Link>
  );
}
