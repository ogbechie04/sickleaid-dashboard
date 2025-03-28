"use client";

import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers";
import { Paper } from "@mui/material";
import { format } from "date-fns/format";

interface CustomCalendarProps {
  value?: string;
  onChange?: (event: {
    target: { name?: string; value: string | null };
  }) => void;
  name?: string;
}

const CustomCalendar: React.FC<CustomCalendarProps> = ({
  value,
  onChange,
  name,
}) => {
  const actualDate = (date: Date) => {
    const normalizedDate = new Date(date);
    normalizedDate.setHours(0, 0, 0, 0);
    const year = normalizedDate.getFullYear();
    const month = String(normalizedDate.getMonth() + 1).padStart(2, "0");
    const day = String(normalizedDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (newDate: Date | null) => {
    if (onChange) {
      onChange({
        target: {
          name,
          value: newDate ? actualDate(newDate) : null,
        },
      });
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper
        elevation={0}
        sx={{
          borderRadius: "30px",
          padding: "20px",
          border: "1px solid black",
          width: "fit-content",
        }}
      >
        <DateCalendar
          value={value ? new Date(value) : null}
          onChange={handleDateChange}
          dayOfWeekFormatter={(date) => format(date, "EEE").toUpperCase()}
          sx={{
            width: "fit-content",
            height: "fit-content",
            fontFamily: "Inter",
            "& .MuiPickersCalendarHeader-root": {
              margin: 0,
              padding: 0,
              fontFamily: "Inter",
            },
            "& .MuiPickersCalendarHeader-label, & .MuiDayCalendar-weekDayLabel, & .MuiPickersDay-root ":
            { fontFamily: "Inter", fontSize: "14px", color: "black" },
            "& .MuiPickersCalendarHeader-label":
              { fontSize: "16px", },
          }}
        />
        {/* <StaticDatePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          renderInput={(params) => <TextField {...params} />}
          dayOfWeekFormatter={(date) => format(date, "EEE").toUpperCase()}
          sx={{
            "& .MuiPickersDay-root": {
              borderRadius: "50%", // Make days circular
            },
            "& .MuiPickersCalendarHeader-root": {
              fontWeight: "bold",
            },
            "& .MuiPickersDay-daySelected": {
              backgroundColor: "black",
              color: "white",
            },
          }}
        /> */}
      </Paper>
    </LocalizationProvider>
  );
};

export default CustomCalendar;
