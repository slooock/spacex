import Card from "../../Organisms/card";
import { List } from "./styles";
import LaunchService from "../../../services/launch-service";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Launch } from "../../../domain/dto/launch-dto";

const simulateService = new LaunchService();

export default function ListLaunchers() {
  const [listLaunches, setListLaunches] = useState<Launch[]>([]);
  const [pag, setPag] = useState<number>(0);
  const [initLoaded, setInitLoaded] = useState<boolean>(false);

  async function getInfos(limit: number, offset: number) {
    console.log("getInfos", limit, offset);
    let response = await simulateService.getLauches(limit, offset);
    console.log("response");
    setListLaunches([...listLaunches, ...response.data]);
  }

  // useEffect(() => {
  //   async function onInit() {
  //     await getInfos(4, 0);
  //   }

  //   onInit();
  // }, []);

  useEffect(() => {
    console.log("aaaaa");
    console.log(4, pag);
    getInfos(4, pag);
  }, [pag]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        console.log(pag, initLoaded);

        setPag((value) => value + 4);
      }
    });
    intersectionObserver.observe(
      document.querySelector("#sentinela") as Element
    );
    return () => intersectionObserver.disconnect();
  }, []);

  return (
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
  );
}
