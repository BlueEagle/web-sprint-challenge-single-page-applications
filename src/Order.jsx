import React from 'react'
import styled from 'styled-components'

const getToppingsString = (toppings) => {
  let toppingRequests = []
  let toppingValues = []

  for (let key in toppings) {
    toppingRequests.push(toppings[key])
    toppingValues.push(key)
  }
  return toppingValues.filter((toppingValue, i) => toppingRequests[i] ).toString()
}

const OrderDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  background: lightcyan;
  width: 60%;
  padding: 3%;
  border-radius: 20px;
  margin: 2% 0;
`
const Detail = styled.p`
  /* box-sizing: border-box; */
  margin: 3%;
`

const Order = (props) => {
  const { name, size, specialInstructions } = props.order
  // const toppings = getToppingsString(props.order.toppings)

  return (
    <OrderDisplay>
      <Detail>Name: {name}</Detail>
      <Detail>Size: {size}</Detail>
      <Detail>Toppings: {getToppingsString(props.order.toppings)}</Detail>
      <Detail>Special Instructions: {specialInstructions}</Detail>
    </OrderDisplay>
  )
}

export default Order