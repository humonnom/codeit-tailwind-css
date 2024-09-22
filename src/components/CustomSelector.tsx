import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

function CustomSelector() {
  const items = [
    { key: "1", label: "Item 1" },
    { key: "2", label: "Item 2" },
  ];
  return (
    <Select items={items} variant="bordered">
      {(item) => <SelectItem key={item.key}>{item.label}</SelectItem>}
    </Select>
  );
}

export default CustomSelector;
