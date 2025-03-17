import React from "react";
import { Switch, SwitchProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 100,
  height: 40,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "500ms",
    "&.Mui-checked": {
      transform: "translateX(60px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#009444",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#2ECA45",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    // "&.Mui-disabled .MuiSwitch-thumb": {
    //   color: theme.palette.grey[100],
    //   ...theme.applyStyles("dark", {
    //     color: theme.palette.grey[600],
    //   }),
    // },
    // "&.Mui-disabled + .MuiSwitch-track": {
    //   opacity: 0.7,
    //   ...theme.applyStyles("dark", {
    //     opacity: 0.3,
    //   }),
    // },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 35,
    height: 35,
  },
  "& .MuiSwitch-track": {
    borderRadius: 40 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

interface SwitchToggleProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  id: string;
  mainDivClass?: string;
}

const SwitchToggle: React.FC<SwitchToggleProps> = ({
  checked,
  onChange,
  label,
  id,
  mainDivClass,
}) => {
  return (
    <div className={`flex flex-col gap-4 w-fit ${mainDivClass}`}>
      <p className="font-bold text-xl">{label}</p>
      <div className="w-fit">
        <MainSwitch id={id} checked={checked} onChange={onChange} />
        <div className="flex justify-between w-full">
          <p>Off</p>
          <p>On</p>
        </div>
      </div>
    </div>
  );
};

export default SwitchToggle;
