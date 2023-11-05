import React from "react";
import "../styles/contact.css";
import Logout from "../components/Logout";
function contactPage() {
    return (

        <body>
            <section id="header">
                <a href="home"><img src={require('../assets/img/1.png')} class="logo" alt="" /></a>

                <div>
                    <ul id="navbar">
                        <li><a href="home">Home</a></li>
                        <li><a href="service">Our Services</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="contact">Contact</a></li>
                    <Logout></Logout>

                    </ul>
                </div>
            </section>



            <section class="about container" id="about">
                <h2 class="heading">Confessions</h2>
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


            <div class="contact-section">
                <div class="contact-info">
                    <div><i class="fa fa-map-marker-alt"></i> Thu Duc, Ho Chi Minh City , VietNam</div>
                    <div><i class="fa fa-envelope"></i> namdhse173582@fpt.edu.vn</div>
                    <div><i class="fa fa-phone"></i> +84 48700532</div>
                    <div><i class="fa fa-clock"></i> Mon - Fri 8:00 - 16:30</div>

                </div>

                <div class="contact-form">
                    <h2>Contact Us</h2>
                    <form class="contact" action="" method="post">
                        <input type="text" class="text-box" placeholder="Your Name" required />
                        <input type="email" name="email" class="email" placeholder="Your gmail" required />
                        <textarea name="" class="message" rows="5" placeholder="Your Message....." required></textarea>
                        <input type="submit" name="submit" class="send-btn" value="Send" />
                    </form>
                </div>
            </div>





            <section class="footer container" id="footer">
                <div class="social">
                    <a href="mailto:namdhse173582@fpt.edu.vn"><i class='bx fa fa-envelope-open'></i></a>
                    <a href="https://www.youtube.com/watch?v=a0qC7lG3Vfc" target="_blank"><i class='bx fa fa-google'></i></a>
                    <a href="https://www.instagram.com/_5thjuly_/" target="_blank"><i class='bx fa fa-instagram'></i></a>
                    <a href="https://www.facebook.com/nam0507.orc" target="_blank"><i class='bx fa fa-facebook'></i></a>
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
        </body>
    )
};
export default contactPage;