import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { fetchProducts, updateProduct } from "../api";

const User = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [buy, setBuy] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Consider showing an error message to the user
      }
    };

    loadProducts();
  }, []);

  const handleClose = () => {
    setShow(false);
    setBuy(0);
    setCurrentIndex(null);
  };

  const handleShow = (index) => {
    setCurrentIndex(index);
    setBuy(0); // Reset the input field
    setShow(true);
  };

  const handleBuy = async () => {
    if (currentIndex !== null) {
      const selectedProduct = data[currentIndex];

      if (buy <= 0 || buy > selectedProduct.quantity) {
        alert("Invalid purchase quantity. Please enter a valid number.");
        return;
      }

      const updatedProduct = {
        ...selectedProduct,
        quantity: selectedProduct.quantity - buy,
      };

      try {
        await updateProduct(selectedProduct.id, updatedProduct);
        const updatedData = [...data];
        updatedData[currentIndex] = updatedProduct;
        setData(updatedData);
        handleClose();
      } catch (error) {
        console.error("Error updating product:", error);
        // Consider showing an error message to the user
      }
    }
  };

  return (
    <>
      {data.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>NO PRODUCTS AVAILABLE FOR PURCHASE</h1>
      ) : (
        <div className="container">
          <h1 align="center">Available Products</h1>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product</th>
                <th>Product Quality</th>
                <th>Product Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr key={entry.id}> {/* Use a unique key */}
                  <td>{index + 1}</td>
                  <td>{entry.product}</td>
                  <td>{entry.quality}</td>
                  <td>{entry.quantity}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleShow(index)}>
                      Buy
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {currentIndex !== null && (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Purchase {data[currentIndex].product}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Product Quality: {data[currentIndex].quality}</p>
                <p>Available Quantity: {data[currentIndex].quantity}</p>
                <Form.Group>
                  <Form.Label>Enter Quantity to Purchase</Form.Label>
                  <Form.Control
                    type="number"
                    value={buy}
                    onChange={(e) => setBuy(Number(e.target.value))}
                    min="1"
                    max={data[currentIndex].quantity}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={handleBuy}>
                  Confirm Purchase
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      )}
    </>
  );
};

export default User;
