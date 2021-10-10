import React from "react";

const BudgetController = () => {
  return (
    <div className="top">
      <div className="budget">
        <div className="budget__title">
          Dostupan budžet <span className="budget__title--month">%Month%</span>:
        </div>

        <div className="budget__value">+ 400</div>

        <div className="budget__income clearfix">
          <div className="budget__income--text">Prihodi</div>
          <div className="right">
            <div className="budget__income--value">456</div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>

        <div className="budget__expenses clearfix">
          <div className="budget__expenses--text">Rashodi</div>
          <div className="right clearfix">
            <div className="budget__expenses--value">- 189</div>
            <div className="budget__expenses--percentage">45%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetController;
