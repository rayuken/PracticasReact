/* eslint-disable react/prop-types */

const UserInput = ({ userInput, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Invesment</label>
          <input
            name="initialIvestment"
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
            type="number"
            value={userInput.initialIvestment}
            required
          />
        </p>

        <p>
          <label>Annual Invesment</label>
          <input
            name="annualInvestment"
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
            type="number"
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expectedReturn"
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
            value={userInput.expectedReturn}
            required
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
