import React from "react";
import { useNavigate } from "react-router-dom";
import "./adminNavbar.css";
import { useDispatch } from "react-redux";

import { resetLoginDetails } from "../../../redux/reducers/userSlice";

function AdminNavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div class="navbar">
      <div class="logo-holder">
        <img onClick={() => navigate("/")} src="evotik logo.png" />{" "}
      </div>
      <div>
        {" "}
        <p onClick={() => navigate("/")}>Edit Home</p>{" "}
      </div>
      <div>
        {" "}
        <p onClick={() => navigate("/aboutus")}>Edit About Us</p>{" "}
      </div>
      <div>
        {" "}
        <p onClick={() => navigate("/services")}>Edit Services</p>
      </div>
      <div>
        {" "}
        <p onClick={() => navigate("/contactus")}>Edit Contact Us</p>
      </div>

      <div class="buttons">
        <div>
          {" "}
          <p onClick={() => dispatch(resetLoginDetails())}>Logout</p>
        </div>
      </div>
    </div>
  );
}
export default AdminNavBar;
