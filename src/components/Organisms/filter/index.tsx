import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button } from "@mui/material";
import { Container, Content } from "./styles";
import { useState } from "react";
// import Stack from "@mui/material/Stack";
// import { DesktopDatePicker } from "@mui/x-date-pickers";

export default function Filter() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [past, setPast] = useState<boolean>(false);
  return (
    <Container>
      <Content>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start date"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End date"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <Button
            className="booleanButtons"
            variant={success ? "contained" : "outlined"}
            onClick={() => {
              setSuccess(!success);
            }}
          >
            {success ? "success" : "failed"}
          </Button>
          <Button
            className="booleanButtons"
            variant={past ? "contained" : "outlined"}
            onClick={() => {
              setPast(!past);
            }}
          >
            {past ? "Past" : "Upcoming"}
          </Button>
        </LocalizationProvider>
      </Content>
    </Container>
  );
}
