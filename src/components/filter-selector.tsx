import React from 'react';
import { SelectInput } from 'vcc-ui';

interface Props {
  label: string;
  list: string[];
  selectedListElement: string;
  setSelectedListElement: React.Dispatch<React.SetStateAction<string>>;
}
const FilterSelector: React.FC<Props> = ({
  label,
  list,
  selectedListElement,
  setSelectedListElement,
}) => (
  <SelectInput
    label={label}
    value={selectedListElement}
    onChange={(e) => setSelectedListElement(e.target.value)}
  >
    <option value=''>All</option>
    {list.map((element) => (
      <option value={element}>
        {element.charAt(0).toUpperCase() + element.slice(1)}
      </option>
    ))}
  </SelectInput>
);

export default FilterSelector;
