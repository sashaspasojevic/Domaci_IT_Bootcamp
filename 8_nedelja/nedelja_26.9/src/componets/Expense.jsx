import React from 'react'

const Expense = () => {
        return (
                <>
                 <div className="item clearfix" id="expense-0">
                            <div className="item__description">Stan</div>
                            <div className="right clearfix">
                                <div className="item__value">- 200.00</div>
                                <div className="item__percentage">51%</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn">X</button>
                                </div>
                            </div>
                        </div>

                        <div className="item clearfix" id="expense-1">
                            <div className="item__description">dadaf</div>
                            <div className="right clearfix">
                                <div className="item__value">- 165.28</div>
                                <div className="item__percentage">10%</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn">X</button>
                                </div>
                            </div>
                        </div>       
                </>
        )
}

export default Expense
