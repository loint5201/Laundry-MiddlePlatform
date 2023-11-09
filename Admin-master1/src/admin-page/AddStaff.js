import React, { useState } from "react";
import axios from "axios";
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { ApiUrl } from "../services/ApiUrl";


const {Title} = Typography;

function AddStaff(){
const [formData, setFormData] = useState({
    userId: 0.0,
    storeId: 0,
    lastName: '',
    firstName: '',
    userName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post(
        ApiUrl.addStaff,
        formData
      );
      console.log(response);
      if (response.status === 200) {
        // Handle success, e.g., show a success message or redirect
        console.log("Data sent successfully");
      } else {
        // Handle error, e.g., show an error message
        console.error("Failed to send data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


    return(

        <div>
        <Title level={2}>Add Staff</Title>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="userId">User ID:</label>
            <Input
              placeholder="Enter Product Name :"
              type="text"
              id="userId"
              name="userId"
              size="large"
              prefix={<UserOutlined />} 
              value={formData.userId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="firstName">First name:</label>
            <Input
              placeholder="Enter First name :"
              type="text"
              id="firstName"
              name="firstName"
              size="large"
              prefix={<UserOutlined />} 
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">User ID:</label>
            <Input
              placeholder="Enter Last Name :"
              type="text"
              id="lastName"
              name="lastName"
              size="large"
              prefix={<UserOutlined />} 
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="userName">UserName: </label>
            <Input
              placeholder="Enter Product Name :"
              type="text"
              id="userName"
              name="userName"
              size="large"
              prefix={<UserOutlined />} 
              value={formData.userName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="storeId">Store ID:</label>
            <Input
              placeholder="Enter product description"
              id="storeId"
              name="storeId"
              size="large"
              prefix={<UserOutlined />} 
              value={formData.storeId}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
}
export default AddStaff;