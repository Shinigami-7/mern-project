import React from "react";
import "./editservice.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
const baseUrl = process.env.REACT_APP_BASE_URL


function EditServicesGrid() {
  const [services, setServices] = useState([])
  try {
    const fetchServicesList = async () => {
        const response = await axios.get(`${baseUrl}/get-service`)
        if (response) {
            setServices(response.data.data)
        } else {
            console.log("Server error")
        }
    }
    useEffect(() => {
        fetchServicesList()
    }, [])
  } catch (error) {
    console.log("Failed to fetch data")
  }
  
  return (

      <div class="cart">
        {services.map((services, index) => (
          <div class="cart-item">
            <div class="product">
              <img src={`${services.image}`} alt="" />
              <span>{services.title}</span>
            </div>
            <div class="qty">
              <button class="qty-btn">-</button>
              <input type="text" value="1" />
              <button class="qty-btn">+</button>
            </div>
            <div class="price">
              <label>{services.price}</label>
            </div>
            <div class="action">
              <button class="remove-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>

  );
}

export default EditServicesGrid;
