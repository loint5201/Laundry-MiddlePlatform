import React from "react";
import "../styles/services.css";

function servicePage() {
    return (
        <body>

            <header>
                <div class="nav container">
                    <a href="home"><img src={require('../assets/img/1.png')} class="logo" alt="" /></a>
                    <li><a href="home">Home</a></li>
                    <li><a href="service">Our Services</a></li>

                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                    <i class='bx fa fa-shopping-cart' id="cart-icon" data-quantity="0"></i>

                    <div class="cart">
                        <h2 class="cart-title">Your cart</h2>

                        <div class="cart-content"></div>
                        <div class="total">
                            <div class="total-title">Total</div>
                            <div class="total-price">$0</div>
                        </div>
                        <button type="button" class="btn-buy">Pay Now</button>
                        <i class='bx bx-x' id="close-cart"></i>
                    </div>

                </div>
            </header>

            <section class="shop container">
                <br/>
                <h2 class="section-title">Shop Service</h2>
                <a href="store">Let order</a>
                <div class="shop-content">
                    <div class="product-box">
                        <img src={require('../assets/img/homesv1.jpg')} alt="" class="product-img" />
                        <h2 class="product-title">REGULAR WASH</h2>
                        <i class='bx fa fa-shopping-cart add-cart'></i>
                    </div>
                    <div class="product-box">
                        <img  src={require('../assets/img/homesv2.jpg')} alt="" class="product-img" />
                        <h2 class="product-title">QUICK WASH</h2>
                        <i class='bx fa fa-shopping-cart add-cart'></i>
                    </div>
                    <div class="product-box">
                        <img src={require('../assets/img/homesv3.jpg')} alt="" class="product-img" />
                        <h2 class="product-title">EXPRESS WASH</h2>
                        <i class='bx fa fa-shopping-cart add-cart'></i>
                    </div>

                    <div class="product-box">
                        <img src={require('../assets/img/homesv4.jpg')} alt="" class="product-img" />
                        <h2 class="product-title">DRY WASH</h2>
                        <i class='bx fa fa-shopping-cart add-cart'></i>
                    </div>
                </div>

                <div class="fpt">
                    <p>&#169; FPT University</p>
                </div>
            </section>
            {/* <script src="service.js"></script>
    <script src="cart.js"></script> */}

        </body>
    )
};

export default servicePage;
