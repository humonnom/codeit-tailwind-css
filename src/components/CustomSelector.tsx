"use client";
import { Select, SelectItem } from "@nextui-org/react";
import React from "react";

type Selectable = {
  key: string;
  label: string;
};

type CustomSelectorProps = {
  items: Selectable[];
  onSelect: (key: string) => void;
  initialItem: Selectable;
};

function CustomSelector(props: CustomSelectorProps) {
  const { items, onSelect, initialItem } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const triggerRadius = isOpen ? "rounded-t-md rounded-b-none" : "rounded-md";
  const listItemHeight = "min-h-12";

  return (
    <Select
      isOpen={isOpen}
      onOpenChange={() => setIsOpen((prev) => !prev)}
      onSelectionChange={(keys) => {
        const selectedKey = (keys as Set<React.Key>).values().next()
          .value as string;
        onSelect(selectedKey);
      }}
      variant="bordered"
      defaultSelectedKeys={[initialItem.key]}
      classNames={{
        base: ["max-w-32"],
        trigger: [
          "border",
          listItemHeight,
          triggerRadius,
          "data-[open=true]:border-codeit_purple",
          "data-[focus=true]:border-codeit_purple",
          "data-[hover=true]:border-codeit_purple",
        ],
        selectorIcon: ["ease-in-out", "duration-[250ms]"],
      }}
      selectionMode="single"
      // disallowEmptySelection
      listboxProps={{
        variant: "light",
        className: "p-0",
      }}
      popoverProps={{
        offset: 0,
        classNames: {
          content: [
            "p-0",
            "border",
            "border-default-200",
            "shadow-none",
            "rounded-b-md rounded-t-none",
          ],
        },
      }}
    >
      {items.map((item, i) => (
        <SelectItem
          key={item.key}
          classNames={{
            base: ["m-0", "text-neutral-400", listItemHeight],
          }}
          showDivider={i !== items.length - 1}
          hideSelectedIcon
        >
          {item.label}
        </SelectItem>
      ))}
    </Select>
  );
}

export default CustomSelector;
