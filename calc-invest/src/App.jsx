import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialIvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prev) => {
      const updatedState = { ...prev, [inputIdentifier]: Number(newValue) };
      return updatedState;
    });
  };
  const inputIsValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p>Please enter a duration greater than 0.</p>
      )}
    </>
  );
}

export default App;
