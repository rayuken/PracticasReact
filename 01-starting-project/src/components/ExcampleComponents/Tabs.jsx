import TabButton from "./TabButton";

export default function Tabs({ handleSelect, selectedValue }) {
  return (
    <menu>
      <TabButton
        value="components"
        onSelect={handleSelect}
        selectedValue={selectedValue}
      >
        Components
      </TabButton>
      <TabButton
        value="jsx"
        onSelect={handleSelect}
        selectedValue={selectedValue}
      >
        JSX
      </TabButton>
      <TabButton
        value="props"
        onSelect={handleSelect}
        selectedValue={selectedValue}
      >
        Props
      </TabButton>
      <TabButton
        value="state"
        onSelect={handleSelect}
        selectedValue={selectedValue}
      >
        State
      </TabButton>
    </menu>
  );
}
