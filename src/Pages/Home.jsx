import { Link } from "react-router-dom";
import Add from "../Components/Add";
import Category from "../Components/Category";
import View from "../Components/View";
import { useState } from "react";




function Home() {
    const [uploadVedioStatus,setUploadVedioStatus]=useState({

    })
    return (
        <div>
            <div className="container mt-5  md-5 d-flex align-items-center justify-content-between align-item-center">
                <div className="add_vedios">
                    <Add setUploadVedioStatus={setUploadVedioStatus}/>
                    {/* add uplod new vedio component */}
                </div>
                <div>
                    <Link to={'./watch'} style={{ textDecoration: "none", color: "white", fontSize: "30px" }}> Watch History</Link>
                </div>

               
            </div>
            <div className="container mt-5  md-5 d-flex align-items-center justify-content-between align-item-center">
                <div className="all-vedio col-md-6 mt-5">
                    <h4>All Vedios</h4>
                    
                    <View uploadVedioStatus={uploadVedioStatus} />
                   
                </div>
                <div>
                    <Category/>
                </div>

            </div>
        </div>
    )
}
export default Home;