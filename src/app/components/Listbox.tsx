"use client";

import React, { useState } from "react";
import DualListBox from "react-dual-listbox";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

type OptionProps = {
  value: string;
  label: string;
};

library.add(fas);

const ListBox = ({ options }: { options: OptionProps[] }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const onChange = (selected: string[]) => {
    setSelected(selected);
  };

  return (
    <DualListBox
      alignActions="top"
      options={options}
      selected={selected}
      onChange={onChange}
      canFilter
      icons={{
        moveLeft: <span className="fa fa-chevron-left" />,
        moveAllLeft: [
          <span key={0} className="fas fa-chevron-left" />,
          <span key={1} className="fas fa-chevron-left" />,
        ],
        moveRight: <span className="far fa-chevron-right" />,
        moveAllRight: [
          <span key={0} className="fab fa-chevron-right" />,
          <span key={1} className="fa fa-chevron-right" />,
        ],
      }}
    />
  );
};

export default ListBox;
