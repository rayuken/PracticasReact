import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import CoreConceptSection from "./components/CoreConceptSection";
import ExamplesSection from "./components/ExcampleComponents/ExamplesSection";

function App() {
  return (
    <div>
      <HeaderComponent />
      <main>
        <CoreConceptSection />
        <ExamplesSection />
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
