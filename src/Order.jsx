import React from 'react'

const getToppingsString = (toppings) => {
  console.log('converting toppings data')
  let toppingRequests = []
  let toppingValues = []
  
  for (let key in toppings) {
    toppingRequests.push(toppings[key])
    toppingValues.push(key)
  }
  return toppingValues.filter((toppingValue, i) => toppingRequests[i] ).toString()
}

const Order = (props) => {
  const { name, size, specialInstructions } = props.order
  // const toppings = getToppingsString(props.order.toppings)

  return (
    <div>
      <p>Name: {name}</p>
      <p>Size: {size}</p>
      <p>Toppings: {getToppingsString(props.order.toppings)}</p>
      <p>Special Instructions: {specialInstructions}</p>
    </div>
  )
}

export default Order