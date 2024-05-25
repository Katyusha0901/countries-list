import { Country } from "../types";
import { ButtonToRead } from "./ButtonToRead";
import { forwardRef } from "react";
import "../styles/Styles.css";

interface Props {
  countryInformation: Country;
}

export const Post = forwardRef<HTMLDivElement, Props>(
  ({ countryInformation }, ref) => {
    return (
      <div className="post" ref={ref}>
        <h5>{countryInformation.name.common}</h5>
        <ButtonToRead countryInformation={countryInformation} />
      </div>
    );
  }
);
