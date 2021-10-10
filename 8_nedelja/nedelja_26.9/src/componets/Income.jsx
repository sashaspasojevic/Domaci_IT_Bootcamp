import React from 'react'

const Income = () => {
        return (
                <>
                   <div className="item clearfix" id="income-0">
                            <div className="item__description">Plata</div>
                            <div className="right clearfix">
                                <div className="item__value">+ 200</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn">X</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="item clearfix" id="income-1">
                            <div className="item__description">Prodaja</div>
                            <div className="right clearfix">
                                <div className="item__value">+ 150</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn">X</button>
                                </div>
                            </div>
                        </div>     
                </>
        )
}

export default Income
