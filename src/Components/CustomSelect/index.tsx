import React, { useState, ChangeEvent } from "react";
import { SelectWrapper, StyledSelect } from "./styles";

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = Number(event.target.value);
    setSelectedOption(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <SelectWrapper>
      <StyledSelect value={selectedOption} onChange={handleOptionChange}>
        <option value="">Choose a level.</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default CustomSelect;
