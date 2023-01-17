import React from "react";
import "./Profit.css";
const Profit = () => {
  return (
    <>
      <body className="profit">
        <div className="table-title">
          <h3>Data Table</h3>
        </div>
        <table className="table-fill">
          <thead>
            <tr>
              <th className="text-left">Month</th>
              <th className="text-left">Sales</th>
            </tr>
          </thead>
          <tbody className="table-hover">
            <tr>
              <td className="text-left">January</td>
              <td className="text-left">$ 5,000.00</td>
            </tr>
            <tr>
              <td className="text-left">February</td>
              <td className="text-left">$ 2,000.00</td>
            </tr>
            <tr>
              <td className="text-left">March</td>
              <td className="text-left">$ 5,000.00</td>
            </tr>
            <tr>
              <td className="text-left">April</td>
              <td className="text-left">$ 6,000.00</td>
            </tr>
            <tr>
              <td className="text-left">May</td>
              <td className="text-left">$ 8,000.00</td>
            </tr>
            <tr>
              <td className="text-left">June</td>
              <td className="text-left">$ 7,000.00</td>
            </tr>
            <tr>
              <td className="text-left">July</td>
              <td className="text-left">$ 2,000.00</td>
            </tr>
            <tr>
              <td className="text-left">August</td>
              <td className="text-left">$ 2,000.00</td>
            </tr>
            <tr>
              <td className="text-left">September</td>
              <td className="text-left">$ 2,000.00</td>
            </tr>
            <tr>
              <td className="text-left">October</td>
              <td className="text-left">$ 5,000.00</td>
            </tr>
            <tr>
              <td className="text-left">November</td>
              <td className="text-left">$ 4,000.00</td>
            </tr>
            <tr>
              <td className="text-left">December</td>
              <td className="text-left">$ 8,000.00</td>
            </tr>
          </tbody>
        </table>
      </body>
    </>
  );
};

export default Profit;
