import { Country } from "../types";
import { ButtonToRead } from "./ButtonToRead";
import { forwardRef } from "react";

interface Props {
  countryInformation: Country;
}

export const Post = forwardRef<HTMLDivElement, Props>(
  ({ countryInformation }, ref) => {
    return (
      <div style={{ border: "1px solid " }} className="post" ref={ref}>
        <div className="post__content">
          <div className="post__title">{countryInformation.name.common}</div>
          <ButtonToRead countryInformation={countryInformation} />
        </div>
      </div>
    );
  }
);
