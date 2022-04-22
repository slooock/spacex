import Card from "../../Organisms/card";
import { List, GroupButtons } from "./styles";
import LaunchService from "../../../services/launch-service";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Launch } from "../../../domain/dto/launch-dto";

const simulateService = new LaunchService();

export default function ListLaunchers() {
  const [listLaunches, setListLaunches] = useState<Launch[]>([]);
  const [pag, setPag] = useState<number>(0);
  const [initLoaded, setInitLoaded] = useState<boolean>(false);
  const [past, setPast] = useState<boolean>(false);
  const [scrollControl, setScrollControl] = useState<number>(0);

  async function getInfos(limit: number, offset: number) {
    let response = await simulateService.getLauches(limit, offset, past);
    setListLaunches([...listLaunches, ...response.data]);
  }

  // useEffect(() => {
  //   async function onInit() {
  //     await getInfos(4, 0);
  //   }

  //   onInit();
  // }, []);

  // useEffect(() => {
  //   console.log("change past");
  //   setPag((value) => 0);
  // }, [past]);

  useEffect(() => {
    getInfos(4, listLaunches.length);
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
      <GroupButtons>
        <Button
          variant={past ? "outlined" : "contained"}
          onClick={() => {
            setPast(false);
          }}
        >
          Past launches
        </Button>
        <Button
          variant={!past ? "outlined" : "contained"}
          onClick={() => {
            setPast(true);
          }}
        >
          Upcoming launches
        </Button>
      </GroupButtons>
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
    </>
  );
}
