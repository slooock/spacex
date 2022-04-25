import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, Switch } from "@mui/material";
import { Container, Content } from "./styles";
import { useEffect, useState } from "react";
// import Stack from "@mui/material/Stack";
// import { DesktopDatePicker } from "@mui/x-date-pickers";

export interface FilterProps {
  updateFilter: (
    startDate: Date | null,
    endDate: Date | null,
    success: boolean,
    past: boolean,
    unsuccess: boolean,
    upcoming: boolean
  ) => void;
}

const Filter: React.FC<FilterProps> = ({ updateFilter }: FilterProps) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [past, setPast] = useState<boolean>(false);
  const [unsuccess, setUnsuccess] = useState<boolean>(false);
  const [upcoming, setUpcoming] = useState<boolean>(false);

  return (
    <Container>
      <Content>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div className="flex">
            <div className="dates">
              <span>
                <DatePicker
                  className="datePicker"
                  label="Start date"
                  value={startDate}
                  onChange={(newValue) => {
                    setStartDate(newValue);
                    updateFilter(
                      newValue,
                      endDate,
                      success,
                      past,
                      unsuccess,
                      upcoming
                    );
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </span>
              <span>
                <DatePicker
                  label="End date"
                  value={endDate}
                  onChange={(newValue) => {
                    setEndDate(newValue);
                    updateFilter(
                      startDate,
                      newValue,
                      success,
                      past,
                      unsuccess,
                      upcoming
                    );
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </span>
            </div>
            <div className="switchies">
              <div>
                <div>Success</div>
                <Switch
                  checked={success}
                  onChange={() => {
                    setSuccess(!success);
                    updateFilter(
                      startDate,
                      endDate,
                      !success,
                      past,
                      unsuccess,
                      upcoming
                    );
                  }}
                />
              </div>
              <div>
                <div>Unsucceeded</div>
                <Switch
                  checked={unsuccess}
                  onChange={(newValue) => {
                    setUnsuccess(!unsuccess);
                    updateFilter(
                      startDate,
                      endDate,
                      success,
                      past,
                      !unsuccess,
                      upcoming
                    );
                  }}
                />
              </div>
              <div>
                <div>Past</div>
                <Switch
                  checked={past}
                  onChange={(newValue) => {
                    setPast(!past);
                    updateFilter(
                      startDate,
                      endDate,
                      success,
                      !past,
                      unsuccess,
                      upcoming
                    );
                  }}
                />
              </div>

              <div>
                <div>Upcoming</div>
                <Switch
                  checked={upcoming}
                  onChange={(newValue) => {
                    setUpcoming(!upcoming);
                    updateFilter(
                      startDate,
                      endDate,
                      success,
                      past,
                      unsuccess,
                      !upcoming
                    );
                  }}
                />
              </div>
            </div>
          </div>
        </LocalizationProvider>
      </Content>
    </Container>
  );
};

export default Filter;
