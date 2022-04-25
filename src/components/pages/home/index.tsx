import Header from "../../Organisms/header";
import { Container } from "./styles";

import Lottie from "react-lottie";
import animationData from "../../../lotties/68688-cute-astronaut-floating-with-rocket-on-space-cartoon.json";
import ListLaunchers from "../../Templates/list-launchers";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Filter from "../../Organisms/filter";

export interface PropsFilter {
  startDate: Date | null;
  endDate: Date | null;
  success: boolean;
  past: boolean;
  unsuccess: boolean;
  upcoming: boolean;
}

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [props, setProps] = useState<PropsFilter>({} as PropsFilter);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const updateFilter = (
    startDate: Date | null,
    endDate: Date | null,
    success: boolean,
    past: boolean,
    unsuccess: boolean,
    upcoming: boolean
  ) => {
    let prepareObj: PropsFilter = {
      startDate,
      endDate,
      success,
      past,
      unsuccess,
      upcoming,
    };

    console.log("HOME -> updateFilter", prepareObj);

    setProps(prepareObj);
  };

  return (
    <Container>
      <Header />
      <div>
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>

      <Filter updateFilter={updateFilter} />

      <ListLaunchers propsFilter={props} />
    </Container>
  );
};

export default Home;
