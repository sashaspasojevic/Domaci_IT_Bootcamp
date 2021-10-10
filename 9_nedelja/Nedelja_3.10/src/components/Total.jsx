import React, { useState } from 'react'
import {totalPrice, tax, totalIncTax} from './Product'

const Total = () => {

const [totalPrice, setTotalPrice] = useState(0)
const [tax, setTax] = useState(0)
const [totalIncTax, setTotalIncTax] = useState(0)

        return (
                <div>
                        <p>total price : $ {totalPrice}</p>
                        <p>tax(15%) : $ {tax}</p>
                        <h3>total inc tax : $ {totalIncTax}</h3>
                </div>
        )
}

export default Total
