"use client";

import React, { useState } from "react";
import DualListBox from "react-dual-listbox";

type OptionProps = {
  value: string;
  label: string;
};

const ListBox = ({ options }: { options: OptionProps[] }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const onChange = (selected: string[]) => {
    setSelected(selected);
  };

  return (
    <DualListBox
      options={options}
      selected={selected}
      onChange={onChange}
      canFilter
    />
  );
};

export default ListBox;