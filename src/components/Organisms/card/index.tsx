import React, { useEffect, useState } from "react";
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

  const setLocalStorage = (flight_number: string) => {
    let storageFavorites = localStorage.getItem("@spacex:listFavorites");

    if (storageFavorites !== null && storageFavorites.length !== 0) {
      storageFavorites = storageFavorites + "," + flight_number;
    } else {
      storageFavorites = flight_number;
    }
    localStorage.setItem("@spacex:listFavorites", storageFavorites);
  };

  const removeLocalStorage = (flight_number: string) => {
    let storageFavorites = localStorage.getItem("@spacex:listFavorites");

    if (storageFavorites != null) {
      storageFavorites = storageFavorites.replaceAll(flight_number, "");
      storageFavorites = storageFavorites.replaceAll(",,", ",");

      if (storageFavorites[storageFavorites.length - 1] === ",") {
        storageFavorites = storageFavorites.substring(
          0,
          storageFavorites.length - 1
        );
      }

      if (storageFavorites[0] === ",") {
        storageFavorites = storageFavorites.substring(
          1,
          storageFavorites.length
        );
      }

      localStorage.setItem(
        "@spacex:listFavorites",
        storageFavorites.toString()
      );
    }
  };

  const handleFavorite = (favorite: boolean) => {
    if (!favorite) {
      setLocalStorage(String(flight_number));
    } else {
      removeLocalStorage(String(flight_number));
    }

    setFavorite(!favorite);
  };

  useEffect(() => {
    const storage = localStorage.getItem("@spacex:listFavorites");
    let listStorage = storage?.split(",");
    console.log(listStorage?.indexOf(String(flight_number)), listStorage);
    if (listStorage?.indexOf(String(flight_number)) !== -1) {
      setFavorite(true);
    }
  }, []);

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
              handleFavorite(favorite);
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
