"use client";

const TotalCart = ({ activeNumber, totalNumber, status }:any) => {
  return (
    <>
      <span className={"text-sm font-digit"}>
        {status} {activeNumber}
      </span>
      <span className={"text-sm font-digit"}>مجموع:{totalNumber}</span>
    </>
  );
};

export default TotalCart;
