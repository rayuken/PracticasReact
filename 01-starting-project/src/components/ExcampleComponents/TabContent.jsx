import { EXAMPLES } from "../../data";

export default function TabContent({ selectedValue = "" }) {
  return !selectedValue ? (
    <p>Please select a topic</p>
  ) : (
    selectedValue && EXAMPLES[selectedValue] && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedValue].title}</h3>
        <p>{EXAMPLES[selectedValue].description}</p>
        <pre>
          <code>{EXAMPLES[selectedValue].code}</code>
        </pre>
      </div>
    )
  );
}
