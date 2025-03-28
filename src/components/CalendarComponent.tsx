import React, { forwardRef } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { KeyboardArrowDown } from "@mui/icons-material";
import { format } from "date-fns";
import { enGB } from "date-fns/locale";
import { FaRegCalendarAlt } from "react-icons/fa";

interface CalendarComponentProps {
  variant: "dashboard" | "form";
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
}

const CalendarComponent = forwardRef<HTMLInputElement, CalendarComponentProps>(
  ({ variant, error, value, onChange, name }, ref) => {
    const today = new Date();

    const actualDate = (date: Date) => {
      const normalizedDate = new Date(date);
      normalizedDate.setHours(0, 0, 0, 0);
      const year = normalizedDate.getFullYear();
      const month = String(normalizedDate.getMonth() + 1).padStart(2, "0");
      const day = String(normalizedDate.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const handleDateChange = (newDate: Date | null) => {
        onChange?.(newDate ? actualDate(newDate) : "");
    };

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
        <DatePicker
          value={value ? new Date(value) : null}
          onChange={handleDateChange}
          maxDate={today}
          views={["year", "month", "day"]}
          dayOfWeekFormatter={(date) => format(date, "EEE").toUpperCase()}
          slots={{
            openPickerIcon: FaRegCalendarAlt,
            switchViewButton: KeyboardArrowDown,
          }}
          slotProps={{
            textField: {
              inputRef: ref,
              name,
              // error: !!error,
              placeholder:
                variant === "dashboard" ? "Date Range" : "DD/MM/YYYY",
              fullWidth: true,
              sx: {
                height: "100%",
                maxHeight: "2.875rem",
                // -------- custom styles for the text field --------
                // -------- calender icon --------
                "& .MuiSvgIcon-root": { color: "#59676E" },
                // -------- input box without icon --------
                ".MuiInputBase-input": {
                  fontFamily: "Inter",
                  ":focus": { outline: "none" },
                  paddingY: variant === "dashboard" ? "0.5625rem" : "0.625rem",
                  paddingX: variant === "dashboard" ? "0.5625rem" : "1.25rem",
                },
                // -------- text field container (input + icon) --------
                ".MuiOutlinedInput-root, .MuiTextField-root": {
                  borderRadius:
                    variant === "dashboard" ? "1.375rem" : "0.375rem",
                  display: variant === "dashboard" ? "flex" : "",
                  flexDirection: variant === "dashboard" ? "row-reverse" : "",
                  marginX: variant === "dashboard" ? "auto" : "",
                  height: "100%",
                  borderColor: error ? "var(--danger)" : "#D9D9D9",
                },
                // ".MuiTextField-root, .MuiFormControl-root": {
                //   width: "100%",
                // },
                ".MuiOutlinedInput-notchedOutline": {
                  borderColor: error ? "var(--danger)" : "#D9D9D9", // Default border color
                },
                // -------- Removes the border on hover --------
                ".MuiOutlinedInput-root": {
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: error ? "var(--danger)" : "#D9D9D9",
                    // paddingRight: '20px'
                  },
                  // -------- Removes the border on active (focus) --------
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: error ? "var(--danger)" : "#D9D9D9",
                    borderWidth: "1px",
                  },
                },
              },
            },
            // -------- actual calendar container --------
            popper: {
              // -------- custom styles for the calendar container --------
              sx: {
                // -------- calendar container --------
                ".MuiPickersPopper-paper": {
                  fontFamily: "Inter",
                  borderRadius: "20px",
                },
                // -------- calendar header, year and month on expand --------
                ".MuiPickersCalendarHeader-label, .MuiPickersYear-yearButton, .MuiPickersMonth-monthButton":
                  {
                    fontFamily: "Inter",
                    color: "#041822",
                  },
                // -------- calendar weekdays --------
                ".MuiDayCalendar-weekDayLabel": {
                  fontFamily: "Inter",
                  color: "#59676E",
                },
                // -------- calendar days --------
                ".MuiPickersDay-dayWithMargin": {
                  fontFamily: "Inter",
                  fontSize: "1rem",
                  color: "#041822",
                },
                // -------- calendar year and month buttons --------
                ".MuiSvgIcon-root": { color: "#041822" },
                // -------- selected date --------
                ".MuiPickersDay-root.Mui-selected": {
                  backgroundColor: "#0B9444",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#0B9444", // maintain on hover
                  },
                },
              },
            },
          }}
        />
      </LocalizationProvider>
    );
  }
);

CalendarComponent.displayName = "CalendarComponent";
export default CalendarComponent;