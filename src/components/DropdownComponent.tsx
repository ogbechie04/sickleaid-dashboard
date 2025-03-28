import React from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

interface DropdownItems {
  name: string;
  value: string;
}

interface DropdownComponentProps {
  placeholder: string;
  optionItems: DropdownItems[];
  value?: string;
  onChange?: (value: string | null) => void;
  error?: string;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  placeholder,
  optionItems,
  value,
  onChange,
  error,
}) => {
  //   const [value, setValue] = useState<string | null>(null);
  return (
    <Select
      value={value || ""}
      placeholder={placeholder}
      indicator={<KeyboardArrowDown />}
      onChange={(_, newValue) => onChange?.(newValue)}
      sx={{
        width: "100%",
        height: "100%",
        maxHeight: "2.875rem",
        backgroundColor: "white",
        boxShadow: "none",
        border: "1px solid",
        borderColor: error ? "var(--danger)" : "#D9D9D9",
        color: error ? "var(--danger)" : "#000000",
        borderRadius: "6px",
        "::placeholder": { color: "#FF0F0F" },
        ":active": { backgroundColor: "white" },
        ":focus": { backgroundColor: "white" },
        ":hover": { backgroundColor: "white" },
        [`& .${selectClasses.indicator}`]: {
          transition: "0.2s",
          [`&.${selectClasses.expanded}`]: {
            transform: "rotate(-180deg)",
          },
        },
      }}
    >
      {optionItems.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.name}
        </Option>
      ))}
    </Select>
  );
};

export default DropdownComponent;
