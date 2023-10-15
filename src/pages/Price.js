import React from 'react'

const Price = ({price}) => {
const numFor = Intl.NumberFormat('en-US');
const new_for = numFor.format(price);
  return (
    <>
   {new_for}
    </>
  )
}

export default Price