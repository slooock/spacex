import Header from "../../Organisms/header";
import { Container } from "./styles";

import Lottie from "react-lottie";
import animationData from "../../../lotties/68688-cute-astronaut-floating-with-rocket-on-space-cartoon.json";
import ListLaunchers from "../../Templates/list-launchers";
import { useEffect } from "react";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Header />
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <ListLaunchers />
    </Container>
  );
}
