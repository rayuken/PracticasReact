/* eslint-disable react/prop-types */
import { calculateInvestmentResults, formatter } from "../util/investment.js";
const Results = ({ input }) => {
  const results = calculateInvestmentResults({
    initialInvestment: input.initialIvestment,
    annualInvestment: input.annualInvestment,
    ...input,
  });
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((yearData, index) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmount = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={`${yearData.year}-${index}`}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmount)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
