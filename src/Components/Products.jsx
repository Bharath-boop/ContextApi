// src/Components/Products.jsx
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Products({ product }) {
  const [qty, setQty] = useState(1);

  const cardStyle = {
    maxWidth: "300px",
    margin: "auto",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px 0",
  };

  const descriptionStyle = {
    fontSize: "0.9rem",
    color: "#555",
  };

  const listGroupItemStyle = {
    fontSize: "0.9rem",
  };

  const quantityContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 0",
  };

  const totalAmountStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px 0",
  };
  const buttonStyle = {
    width: "100%",
    height: "35px",
    backgroundColor: "#008CBA",
    color: "white",
    borderRadius: "8px",
  };
  return (
    <div style={cardStyle}>
      <img src={product.images} alt={product.title} style={imgStyle} />
      <div style={{ padding: "15px" }}>
        <div className="container">
          <div style={titleStyle}>{product.title}</div>
          <div style={descriptionStyle}>{product.description}</div>
          <div>
            <ul className="list-group">
              <li className="list-group-item" style={listGroupItemStyle}>
                <strong>Price:</strong> ${product.price}
              </li>
              <li className="list-group-item" style={listGroupItemStyle}>
                <strong>Discount:</strong> {product.discountPercentage}%
              </li>
              <li className="list-group-item" style={listGroupItemStyle}>
                <strong>Rating:</strong> {product.rating}
              </li>
              <li className="list-group-item" style={listGroupItemStyle}>
                <strong>Stock Item:</strong> {product.stock}
              </li>
              <li className="list-group-item" style={listGroupItemStyle}>
                <strong>Brand:</strong> {product.brand}
              </li>
              <li className="list-group-item" style={listGroupItemStyle}>
                <strong>Category:</strong> {product.category}
              </li>
            </ul>
          </div>
        </div>

        <div style={quantityContainerStyle}>
          <select
            className="m-2 h-100 "
            onChange={(e) => setQty(e.target.value)}
          >
            {Array.from(Array(5), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
        </div>

        <div style={totalAmountStyle}>
          <strong>Total Amount: $ {qty * product.price} </strong>
        </div>
        <Button className="button" variant="primary" style={buttonStyle}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Products;
