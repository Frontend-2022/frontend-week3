import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import "../basic/grid.css";

function Navigation() {
    return(
        <div class="navigation"> 
            <div className="grid">
<<<<<<< HEAD
                <Link to="/" style={{textDecoration:"none", color:"#FFFF"}}>
                    <span className="navigation__name">TKB</span>
                </Link>
                <Link to="/transcript" style={{textDecoration:"none", color:"#FFFF"}}>
                    <span className="navigation__name">Bảng điểm</span>
                </Link>
                <Link to="/tuitionFee" style={{textDecoration:"none", color:"#FFFF"}}>
                    <span className="navigation__name">Học phí</span>
                </Link>
=======
                <div className="navCSS">
                    <Link to="/">
                        <span className="navigation__name">TKB</span>
                    </Link>
                    <Link to="/transcript">
                        <span className="navigation__name">Bảng điểm</span>
                    </Link>
                    <Link to="/tuitionFee">
                        <span className="navigation__name">Học phí</span>
                    </Link>
                </div>
>>>>>>> bb5a371b8bbdb132e8d441acc3d69d6606d86321
            </div>   
        </div>
    )
}

export default Navigation;