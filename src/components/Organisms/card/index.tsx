import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";

import { Container, Content, Favorite, Status } from "./styles";

export interface CardProps {
  flight_number: number;
  mission_name: string;
  launch_year: string;
  launch_success: boolean;
  rocket_name: string;
  image: string;
  details: string;
}

const Card: React.FC<CardProps> = (props) => {
  let {
    flight_number,
    mission_name,
    launch_year,
    launch_success,
    rocket_name,
    details,
    image,
  } = props;
  const [favorite, setFavorite] = useState<boolean>(false);

  return (
    <Container>
      <div className="content">
        <div className="align">
          <img src={image} />
        </div>
        <Content>
          <h1>
            #{flight_number} {mission_name}
          </h1>
          <div className="year">{launch_year}</div>
          <h3>{rocket_name}</h3>
          <div className="text">{details}</div>
        </Content>

        <Favorite active={favorite}>
          <IconButton
            aria-label="delete"
            onClick={() => {
              setFavorite(!favorite);
            }}
          >
            <FaStar />
          </IconButton>
        </Favorite>
      </div>

      {launch_success ? (
        <Status active={launch_success}>Success</Status>
      ) : (
        <Status active={launch_success}>Fail</Status>
      )}
    </Container>
  );
};

export default Card;
