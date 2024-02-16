import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (



        <>


            <div className='footer d-flex align-items-center justify-content-evenly w-100 mb-5'>
                <div style={{ width: "400px" }}>
                    <h4 >
                        <i class="fa-solid fa-video text-warning me-4"></i>
                        Media Player
                    </h4>
                    <h6>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                        liquid odio non et tenetur voluptates, doloremque fugit exe
                        ationem temporibus aperiam, provident voluptatum illum sunt
                        esse similique. Quidem ab commodi nulla?
                    </h6>
                </div>

                <div>
                    <h4>Links</h4>
                    <Link to={'./landing'} style={{ textDecoration: 'none' }}> <h6>Landing Page</h6></Link>
                    <Link to={'./home'} style={{ textDecoration: 'none' }}> <h6>Home</h6></Link>
                    <Link to={'./watch'} style={{ textDecoration: 'none' }}> <h6>watch History</h6></Link>




                </div>
                <div>
                    <h4>Guide</h4>
                    <h6>React</h6>
                    <h6>React Bootstrap</h6>
                    <h6>Bootwatch</h6>

                </div>
                <div>
                    <h4>Contact us</h4>
                    <div className='d-flex'>
                        <input type="text" name="" id=""
                            placeholder='Enter your Email' className='form-control' />
                        <button className='btn btn-warning ms-2'>Subscribe</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly fs-4 mb-3 ms-3 mt-3'>
                        <i style={{ fontSize: "30px" }} class="fa-brands fa-facebook "></i>
                        <i style={{ fontSize: "30px" }} class="fa-brands fa-instagram"></i>
                        <i style={{ fontSize: "30px" }} class="fa-brands fa-twitter "></i>
                        <i style={{ fontSize: "30px" }} class="fa-brands fa-linkedin "></i>
                    </div>

                </div>

            </div>
            <div className='text-center'>
                <p>Copyright &#169; 2023.Media Player built with React </p>
            </div>
        </>
    )
}

export default Footer;
