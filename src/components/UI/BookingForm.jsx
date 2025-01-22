import React from "react";
import { useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from "axios";


const BookingForm = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fromAddress: "",
    toAddress: "",
    passengers: "1 person",
    luggage: "1 luggage",
    journeyDate: "",
    journeyTime: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const submitHandler = async (event) => {
    event.preventDefault();


  try {
      const response = await axios.post("http://localhost:5000/api/bookings", formData);
      alert(response.data.message);
    } catch (error) {
      console.error("Error submitting booking:", error);
      alert("Failed to submit booking");
    }
  };

  return (
    <Form onSubmit={submitHandler}>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" 
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
        />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" 
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
        />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input  type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
           />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text"
          name="fromAddress"
          placeholder="From Address"
          value={formData.fromAddress}
          onChange={handleChange}
          required/>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text"
          name="toAddress"
          placeholder="To Address"
          value={formData.toAddress}
          onChange={handleChange}
          required />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select 
          name="passengers" 
          id=""
          value={formData.passengers}
          onChange={handleChange}
          required>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="luggage" id=""
          value={formData.luggage}
          onChange={handleChange}
          required>
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Journey Date"
        name="journeyDate"
        value={formData.journeyDate}
        onChange={handleChange}
        required />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
          name="journeyTime"
          value={formData.journeyTime}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;