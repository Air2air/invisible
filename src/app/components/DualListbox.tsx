"use client";

import React, { useState } from "react";
import DualListBox from "react-dual-listbox";
import "react-dual-listbox/lib/react-dual-listbox.css";

type optionsProps = {
  value: string;
  label: string;
};

const ListBox = ({ options }: { options: optionsProps[] }) => {
  const [selected, setSelected] = useState([]);

  {
const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { value, checked } = event.target;
  if (selected.includes(value)) {
    setSelected(selected.filter((item) => item !== value));
  } else {
    setSelected([...selected, value]);
  }
};
    return (
      <DualListBox
        options={options}
        selected={selected}
        // checked={selected.includes(option.value)}
        // onChange={handleCheckBoxChange}
      />
    );
  }
};

export default ListBox;
