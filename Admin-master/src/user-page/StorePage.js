import React, { useState, useEffect } from 'react';
import { Card, Space,Button } from 'antd';
import axios from 'axios';
import '../styles/store.css'; // Import the style.css file
import { Typography } from 'antd';
import Cookies from "js-cookie";
import { Link } from 'react-router-dom'; // Import Link for navigation
import Logout from '../components/Logout';


const { Title } = Typography;
const StorePage = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/store/all')
      .then((response) => {
        setStores(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

      const storeid = Cookies.get("store_id");
      console.log(storeid);
  }, []);

  const handleChooseStore = (storeId) => {
    Cookies.set("store_id", storeId);
  };

  return (
    <div>
        <section id="header">
                <a href="home"><img src={require('../assets/img/1.png')} class="logo" alt="" /></a>

                <div>
                    <ul id="navbar">
                    <li><a href="home">Home</a></li>
                        <li><a href="store">Our Services</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="contact">Contact</a></li>
                    <Logout></Logout>
                    </ul>
                </div>
            </section>

            <section class="about container" id="about">
                <h2 class="heading">Choose Store</h2>
                <div class="about-text">
                    <p>Greetings everyone! <span class="color">F Laundry</span>, as a team from <span
                        class="color">SWP391</span> in class <span class="color">JS1701</span>,
                        want to acknowledge that we're tackling a project we find quite
                        challenging for the first time. Various unexpected obstacles have
                        arisen along the way, making it even more demanding. We sincerely
                        hope you'll be open-hearted and receptive to our project. We appreciate each
                        and every one of you!
                    </p>
                </div>
            </section>

    <div className="space"> {/* Apply the space class */}

      {stores.map((store) => (
        <Card
          key={store.storeId}
          title={store.storeName}
          
          style={{
            width: 300,
          }}
        >
          <p>Location: {store.location}</p>
          <p>Owner Name: {store.ownerName}</p>
          { <Link to="/product" onClick={() => handleChooseStore(store.storeId)}>
          <div className='btn-choose'>
          <Button type="primary">Choose</Button>
          </div>
        </Link>}
        </Card>
      ))}
    </div>
    <section class="footer container" id="footer">
                <div class="social">
                    <a href="mailto:namdhse173582@fpt.edu.vn"><i class='bx fa fa-envelope-open fa-xl'></i></a>
                    <a href="https://www.youtube.com/watch?v=a0qC7lG3Vfc" target="_blank"><i class='bx fa fa-google'></i></a>
                    <a href="https://www.instagram.com/_5thjuly_/" target="_blank"><i class='bx fa fa-instagram'></i></a>
                    <a href="https://www.facebook.com/nam0507.orc" target="_blank"><i class='bx fa fa-facebook fa-xl'></i></a>
                    <a href="https://github.com/5thJuly" target="_blank"><i class='bx fa fa-github'></i></a>

                </div>
                <div class="footer-links">
                    <a href="https://docs.google.com/document/d/17o3KWvLfRAjSnGftBiv7JtIBD9eSEgRGTLFStxhcrsA/edit"
                        target="_blank">Privacy Policy</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Disclaimer</a>
                </div>

                <p>&#169; FPT University</p>

            </section>
    </div>
  );
};

export default StorePage;
