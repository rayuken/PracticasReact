import "./App.scss";
import { useCounterStore } from "./store/store";
function App() {
  const { bears, increasePopulation } = useCounterStore();
  const removeAllBears = useCounterStore((state) => state.removeAllBears);

  return (
    <>
      <div className="hello">Hello React with vite</div>
      <div>
        <h1>{bears} around here...</h1>
      </div>
      <div>
        <button onClick={increasePopulation}>one up</button>
        <button onClick={removeAllBears}>Remove all bears</button>
      </div>
    </>
  );
}

export default App;
