import React from "react";

export const Lends = ({ lends }) => {
  return (
    <>
      <tr>
        <td>{lends.borrower}</td>
        <td>{lends.amount}</td>
        <td>{lends.lender}</td>
      </tr>
    </>
  );
};
