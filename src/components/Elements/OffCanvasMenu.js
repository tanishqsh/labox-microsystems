import React from 'react';
import "./OffCanvasMenu.css";
import Link from "react-router-dom/es/Link";

export class OffCanvasMenu extends React.Component{
    render(){

        function openNav() {
            document.getElementById("OffCanvasMenu").style.width = "250px";

        }
        
        function closeNav() {
            document.getElementById("OffCanvasMenu").style.width = "0";

        }
        
        return(
            <div className={'component-wrapper'}>
                <div className={'mobileOnly sidenav'} id={'OffCanvasMenu'}>
                    <a href="javascript:void(0)" className="closebtn burger-icon" onClick={closeNav}>&times;</a>
                    <Link onClick={closeNav} to={'/products'}>Products</Link>
                    <Link onClick={closeNav} to={'/contact'}>Contact</Link>
                    <Link onClick={closeNav} to={'/faq'}>FAQs</Link>
                    <Link onClick={closeNav} to={'/about'}>About</Link>
                </div>

                <Link to={''} onClick={openNav} className={'mobileOnly primary-text margin-left'}> &#9776; </Link>
            </div>
        );
    }
}


export default OffCanvasMenu;