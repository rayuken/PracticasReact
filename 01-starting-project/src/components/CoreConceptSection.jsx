import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept/CoreConcept";
import Section from "./Section";

export default function CoreConceptSection() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.length > 0 &&
          CORE_CONCEPTS.map((concept) => (
            <li key={``}>
              <CoreConcept
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            </li>
          ))}
      </ul>
    </Section>
  );
}
