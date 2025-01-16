import { useState } from "react";
import TabButton from "./TabButton";
import TabContent from "./TabContent";
import Section from "../Section";
import Tabs from "./Tabs";

export default function ExamplesSection() {
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelect = (selectedButton) => {
    setSelectedValue(selectedButton);
  };
  return (
    <Section id="examples" title="Examples">
      <Tabs handleSelect={handleSelect} selectedValue={selectedValue} />
      <TabContent selectedValue={selectedValue} />
    </Section>
  );
}
