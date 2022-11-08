import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { handlePurchased, stocks }) {
  
  const allStocks = stocks.map( stock => {
    return (
      <Stock key={stock.id} id={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} handlePurchased={handlePurchased}/>
    )
  })
  
  return (
    <div>
      <h2>My Portfolio</h2>
      {allStocks}
    </div>
  );
}

export default PortfolioContainer;
