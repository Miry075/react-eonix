import React from "react";

function Home({ onIncrement, onDecrement, counter }) {
  const onclickIncrementBtn = (e) => {
    e.preventDefault();
    onIncrement();
  };

  const onClickDescrement = (e) => {
    e.preventDefault();
    onDecrement();
  };
  return (
    <div className="row d-flex justify-content-around">
      <h2 className="text-center">{counter}</h2>
      <div className="col-md-6 text-center">
        <button
          className="btn btn-primary"
          onClick={(e) => onclickIncrementBtn(e)}
        >
          Cliquez pour incrémenter
        </button>
      </div>
      <div className="col-md-6 text-center">
        <button
          className="btn btn-secondary"
          onClick={(e) => onClickDescrement(e)}
        >
          Cliquez pour décrémenter
        </button>
      </div>
    </div>
  );
}

export default Home;
