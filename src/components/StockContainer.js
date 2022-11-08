import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handlePurchased, sorter, filter}) {
  
  const stocksClone = [...stocks]  
  const sortedStocks = stocksClone.sort( (a , b) => {
    if (sorter === "alpha") {
      const first = a.name.toLowerCase()
      const second = b.name.toLowerCase()
      return ( (first < second) ? -1 : 1)
    } else {
      return a.price - b.price
    }
  }).filter(stock => stock.type === filter)

  const allStocks = sortedStocks.map( stock => {
    return (
      <Stock key={stock.id} id={stock.id} ticker={stock.ticker} name={stock.name} type={stock.type} price={stock.price} handlePurchased={handlePurchased}/>
    )
  })
  
  return (
    <div>
      <h2>Stocks</h2>
      {allStocks}
    </div>
  );
}

export default StockContainer;
