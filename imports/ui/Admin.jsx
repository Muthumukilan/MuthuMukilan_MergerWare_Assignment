import React from "react";

export const Admin = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Borrower</th>
            <th>Amount</th>
            <th>Lender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>$5000</td>
            <td>Jane Smith</td>
          </tr>
          <tr>
            <td>Alice Johnson</td>
            <td>$3000</td>
            <td>Bob Williams</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
