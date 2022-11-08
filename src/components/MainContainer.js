import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [sorter, setSorter] = useState("alpha")
  const [filter, setFilter] = useState("Tech")

  useEffect( () => {
    fetch("http://localhost:3001/stocks")
    .then(resp => resp.json())
    .then(data => {
      const newStocks = data.map( stock => {
        return {...stock, purchased: false}
      })
      setStocks(newStocks)
    })
  }, [])
  
  function handlePurchased(id) {
    const newStocks = stocks.map( stock => {
      if (stock.id === id) {
        return {...stock, purchased: !stock.purchased}
      } else {
        return stock
      }
    })
    setStocks(newStocks)
  }


  const purchasedStocks = stocks.filter(stock => stock.purchased === true)

  return (
    <div>
      <SearchBar sorter={sorter} setSorter={setSorter} setFilter={setFilter}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} handlePurchased={handlePurchased} sorter={sorter} filter={filter}/>
        </div>
        <div className="col-4">
          <PortfolioContainer handlePurchased={handlePurchased} stocks={purchasedStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
