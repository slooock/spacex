import Card from "../../Organisms/card";
import { List, LottieContainer } from "./styles";
import LaunchService from "../../../services/launch-service";
import { useEffect, useState } from "react";
import { Launch } from "../../../domain/dto/launch-dto";
import { PropsFilter } from "../../pages/home";
import Lottie from "react-lottie";
import animationData from "../../../lotties/96180-rocket-facon-heavy.json";

interface ListLaunchers {
  propsFilter: PropsFilter;
}

const simulateService = new LaunchService();
const ListLaunchers: React.FC<ListLaunchers> = ({
  propsFilter,
}: ListLaunchers) => {
  const [listLaunches, setListLaunches] = useState<Launch[]>([]);
  const [scrollControl, setScrollControl] = useState<number>(0);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function getInfos(limit: number, offset: number, call: string) {
    console.log("aaaaaa");
    let response = await simulateService.getLauches(limit, offset, propsFilter);
    setListLaunches([...listLaunches, ...response.data]);
  }

  useEffect(() => {
    console.log("ListLaunchers -> propsFilter", propsFilter);
    setListLaunches([]);
    setScrollControl(Math.random());
  }, [propsFilter]);

  useEffect(() => {
    getInfos(4, listLaunches.length, "scrollControl");
  }, [scrollControl]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setScrollControl((value) => value + 1);
      }
    });
    intersectionObserver.observe(
      document.querySelector("#sentinela") as Element
    );
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <>
      <List>
        {listLaunches.map((launch, index) => {
          return (
            <Card
              key={index}
              flight_number={launch.flight_number}
              mission_name={launch.mission_name}
              launch_year={launch.launch_year}
              launch_success={launch.launch_success}
              rocket_name={launch.rocket.rocket_name}
              image={launch.links.mission_patch}
              details={launch.details}
            />
          );
        })}

        <span id="sentinela"></span>
      </List>
      <LottieContainer>
        <Lottie options={defaultOptions} height={400} width={400} />
        <span>loading</span>
      </LottieContainer>
    </>
  );
};

export default ListLaunchers;
