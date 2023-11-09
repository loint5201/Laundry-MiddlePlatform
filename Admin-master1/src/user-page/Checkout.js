import React, { useState, useEffect } from "react";
import "../styles/checkout.css";
import Cookies from "js-cookie";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";
import { ApiUrl } from "../services/ApiUrl";
import Logout from "../components/Logout";
import { useNavigate } from "react-router-dom";
import { message } from 'antd';
import {
    
    FacebookOutlined,
    GoogleCircleFilled,
    InstagramOutlined,
    GithubOutlined,
    MailFilled,
    
  } from '@ant-design/icons';


function Checkout() {
    const storeid = Cookies.get("store_id");
    const productid = Cookies.get("product_id");
    const userid = Cookies.get("id");

    const navigate = useNavigate();
    const [priceConst, setPrice] = useState([]);
    const [productNameConst, setproductName] = useState([]);
    
    const [storeNameConst, setstoreName] = useState([]);

    const [formData, setFormData] = useState({
        userId: userid,
        storeId: storeid,
        productId: productid,
        staffId: 1,
        price: 0,
        storeName: "",
        productName: "",
        
        createdAt: Date.now,
        status: "Waiting ...",
        phoneNum: "",
        address: "",
        quantity: "",
        totalPrice: "",
        daySubmit: "",
    });



    const [errors, setErrors] = useState({
        phoneNum: "",
        address : "",
        quantity : "",
    });

    const validateForm = () => {
        for (const key in errors) {
          if (errors[key]) {
            return false;
          }
        }
        return true;
      };
    

    const [totalPrice, setTotalPrice] = useState(0);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        if (name === "quantity") {
            const newTotalPrice = parseFloat(value) * priceConst;
            setTotalPrice(newTotalPrice);

            if(value.trim() === "") {
                setErrors({
                    ...errors,
                    [name]: "This field is required",
                });
            }
            else if (isNaN(value) || parseFloat(value) < 3 || parseFloat(value) > 30) {
                setErrors({
                    ...errors,
                    [name]: "Quantity must be between 3kg and 30kg",
                  });
            }
            else {
                setErrors({
                    ...errors,
                    [name]: "",

                });
            }
        }
        if(name === "phoneNum" || name === "address" || name === "daySubmit") {
            if(value.trim() === "") {
                setErrors({
                    ...errors,
                    [name] : "This field is required",
                });
            }
            else{
                setErrors({
                    ...errors,
                    [name]: "",
                });
            }
        }
        if (name === "phoneNum") {
            if (value.trim() === "") {
              setErrors({
                ...errors,
                [name]: "This field is required",
              });
            } else if (!value.startsWith("0") || !/^\d+$/.test(value) || value.length !== 10) {
              setErrors({
                ...errors,
                [name]: "Phone number must start with 0 and have 10 digits",
              });
            } else {
              setErrors({
                ...errors,
                [name]: "",
              });
            }
          }
          
          if (name === "address") {
            if (/\d/.test(value) && !/[a-zA-Z]/.test(value)) {
              // Nếu trường address chứa ít nhất một số và không có chữ cái
              setErrors({
                ...errors,
                [name]: "Address should contain letters in addition to numbers",
              });
            } else {
              setErrors({
                ...errors,
                [name]: "",
              });
            }
          }

          if (name === "daySubmit") {
            const selectedDate = new Date(value);
            const currentDate = new Date();
        
            if (selectedDate < currentDate) {
              setErrors({
                ...errors,
                [name]: "Expected Delivery Date not valid",
              });
            } else {
              setErrors({
                ...errors,
                [name]: "",
              });
            }
          }
        
      };

    
      
      
      
    
      const fetchProduct = () => {
        // Fetch orders from your API using Axios
        axios
          .get(`${ApiUrl.getProductbyId}/${productid}`)
          .then((response) => {
            const apiData = response.data.data;
            setFormData({
              ...formData,
              price: apiData.price,
              productName: apiData.productName,
            });
            setproductName(apiData.productName);
            setPrice(apiData.price);
            
          })
          .catch((error) => {
            console.error("Error fetching data from the API:", error);
          });
      };
    
      const fetchStore = () => {
        // Fetch orders from your API using Axios
        axios
          .get(`${ApiUrl.getStorebyId}/${storeid}`)
          .then((response) => {
            const apiData = response.data.data;
            setstoreName(apiData.storeName);
         
          })
          .catch((error) => {
            console.error("Error fetching data from the API:", error);
          });
      };
    
      useEffect(() => {
        fetchProduct();
        fetchStore();
      }, []);
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if(Object.values(errors).some((error) => error) || formData.daySubmit.trim() === "") {
            message.error("Fill full fields and input correct information before submitting!!!!");
        }
        else{
            try {
                console.log(formData);
                const response = await axios.post(`${ApiUrl.addOrder}`, formData);
                if (response.status === 200) {
                    // Handle success, e.g., show a success message or redirect
                    console.log("Data sent successfully");
                } else {
                    message.error('Received unexpected response status: ' + response.status);
                    console.error("Failed to send data");
                }
                } catch (error) {
                    message.error('Error: ' + error.message);
                    console.error("Error:", error);
                }
                finally {
                    navigate('/qr-code');
                }
        }

        
    };

    return (
        <body>
            <section id="header">
                <a href="#">
                    <img src={require("../assets/img/1.png")} class="logo" alt="" />
                </a>

                <div>
                    <ul id="navbar">
                        <li>
                            <a href="home">Home</a>
                        </li>
                        <li>
                            <a href="store">Our Services</a>
                        </li>
                        <li>
                            <a href="about">About</a>
                        </li>
                        <li>
                            <a href="contact">Contact</a>
                        </li>
                        <Logout></Logout>
                    </ul>
                </div>
            </section>
            <section class="about container" id="about">
                <h2 class="heading">Checkout</h2>
                
            </section>
            <div id="page" class="content-checkout">
                <div className="checkout-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="phone">Phone :</label>
                                <Input
                                    placeholder="Enter phone number for Contact :"
                                    type="text"
                                    id="phoneNum"
                                    name="phoneNum"
                                    size="large"
                                    prefix={<UserOutlined />}
                                    value={formData.phoneNum}
                                    onChange={handleChange}
                                />
                                <span className="error">{errors.phoneNum}</span>
                            </div>
                            <div>
                                <label htmlFor="address">Address :</label>
                                <Input
                                    placeholder="Enter address for delivery :"
                                    type="text"
                                    id="address"
                                    name="address"
                                    size="large"
                                    prefix={<UserOutlined />}
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                                <span className="error">{errors.address}</span>
                            </div>
                            <div>
                                <label htmlFor="productName">Product Name :</label>
                                <Input
                                    readOnly
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    size="large"
                                    prefix={<UserOutlined />}
                                    value={productNameConst}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="storeName">Store Name :</label>
                                <Input
                                    readOnly
                                    type="text"
                                    id="storeName"
                                    name="storeName"
                                    size="large"
                                    prefix={<UserOutlined />}
                                    value={storeNameConst}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="price">Price :</label>
                                <Input
                                    readOnly
                                    type="text"
                                    id="price"
                                    name="price"
                                    size="large"
                                    prefix={<UserOutlined />}
                                    value={priceConst}
                                    onChange={handleChange}
                                    suffix=",000 VND"
                                />
                            </div>

                            <div>
                                <label htmlFor="quantity">Quantity :</label>
                                <Input   
                                    type="text"
                                    id="quantity"
                                    name="quantity"
                                    size="large"
                                    prefix={<UserOutlined />}
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    suffix="KG"
                                />
                                <span className="error">{errors.quantity}</span>
                            </div>

                            <div>
                                <label htmlFor="totalPrice">Total Price :</label>
                                <Input
                                    readOnly
                                    
                                    type="text"
                                    id="totalPrice"
                                    name="totalPrice"
                                    size="large"
                                    prefix={<UserOutlined />}
                                    value={totalPrice}
                                    suffix=",000 VND"
                                />
                            </div>
                            <div>
                                <label htmlFor="daySubmit">Expected Delivery Date:</label>
                                <Input
                                    type="date" // Sử dụng type "date" để chọn ngày
                                    id="daySubmit"
                                    name="daySubmit"
                                    size="large"
                                    prefix={<UserOutlined />}
                                    value={formData.daySubmit}
                                    onChange={handleChange}
                                />
                                <span className="error">{errors.daySubmit}</span>
                            </div>


                            

                            <button className="btn-checkout" type="submit">
                                Submit
                            </button>
                        </form>
                        </div>
            </div>

            <section class="footer container" id="footer">
                <div class="social">
                    <a href="mailto:namdhse173582@fpt.edu.vn"><MailFilled className="bx"/></a>
                    <a href="https://www.youtube.com/watch?v=a0qC7lG3Vfc" target="_blank" rel="noreferrer"><GoogleCircleFilled className="bx" /></a>
                    <a href="https://www.instagram.com/_5thjuly_/" target="_blank" rel="noreferrer"><InstagramOutlined className="bx" /></a>
                    <a href="https://www.facebook.com/nam0507.orc" target="_blank" rel="noreferrer"><FacebookOutlined className="bx" /></a>
                    <a href="https://github.com/5thJuly" target="_blank" rel="noreferrer"><GithubOutlined className="bx"/></a>
                </div>
                <div class="footer-links">
                    <a href="https://docs.google.com/document/d/17o3KWvLfRAjSnGftBiv7JtIBD9eSEgRGTLFStxhcrsA/edit"
                        target="_blank" rel="noreferrer">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Disclaimer</a>
                </div>

                <p>&#169; FPT University</p>

            </section>
        </body>
    );
}
export default Checkout;