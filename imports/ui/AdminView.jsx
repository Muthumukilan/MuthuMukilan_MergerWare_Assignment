import React from "react";

export const AdminView = ({ lons }) => {
  const lender = () => {
    if (lons.lender == "") {
      return "-";
    } else return lons.lender;
  };
  return (
    <>
      <tr>
        <td>{lons.borrower}</td>
        <td>{lons.amount}</td>
        <td>{lender()}</td>
      </tr>
    </>
  );
};
