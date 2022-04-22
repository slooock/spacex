import { Button } from "@mui/material";
import React from "react";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <div className="content">
        <h1>Spacex</h1>
        <div className="menuItems">
          <Button variant="text" className="itemMenu">
            <div className="active ">Launches</div>
          </Button>
          <Button variant="text" className="itemMenu">
            <div>Favorites</div>
          </Button>
        </div>
      </div>
    </Container>
  );
}
