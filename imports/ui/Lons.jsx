import React from "react";

export const Lons = ({ lons }) => {
  return (
    <>
      <tr>
        <td>{lons.borrower}</td>
        <td>{lons.amount}</td>
        <td>{lons.lender}</td>
      </tr>
    </>
  );
};
