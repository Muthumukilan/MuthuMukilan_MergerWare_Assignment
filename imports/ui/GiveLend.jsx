import React from "react";

export const GiveLend = ({ lends, onDeleteClick }) => {
  return (
    <>
      <tr>
        <td>{lends.borrower}</td>
        <td>{lends.amount}</td>
        <td>
          <button onClick={() => onDeleteClick(lends)}>Pay/Lend</button>
        </td>
      </tr>
    </>
  );
};
