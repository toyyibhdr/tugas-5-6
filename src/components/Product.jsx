import React from 'react'

const Product = (props) => {

const produkStyle = {
  color : 'black',
  backgroundColor : 'pink',
  width : '200px',
  padding : '15px',
  textAlign : 'center',
  border : '10px solid white',
  borderRadius : '20px'
}

  return (
    <div style={produkStyle}>
    <h3>{props.id}</h3>
    <h3>{props.name}</h3>
    <h4>Harga : {props.price}</h4>
    </div>
  )
}

export default Product