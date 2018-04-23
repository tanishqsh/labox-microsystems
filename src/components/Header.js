import React from 'react';
import {Link} from "react-router-dom";
import {OffCanvasMenu} from "./Elements/OffCanvasMenu";


const Header = props => (
    <div className={'element-wrap'}>
        <div className={'container-fluid primary-fill topBar'}/>
        <div className={'container header-container'}>
            <div className={'row hidden-lg'}>
                <div className={'col-xs-2 onTop'}>
                    <OffCanvasMenu/>
                </div>
                <div className={'col-xs-10 col-lg-6 onBottom'}>
                    <Link to={'/'}>
                        <div className={'logo-container'}>
                            LABO<span className={'sup-element'}>&reg;</span><br/>
                            <div className={'logo-sub-title'}> Worlds Within </div>

                        </div>
                    </Link>
                </div>
                <div className={'col-lg-6 text-right mobileHide'}>
                    <div className={'menu-container'}>
                        <Link to={'/'} className={'menu-item'}> Home </Link>
                        <Link to={'/products'} className={'menu-item'}> Products </Link>
                        <Link to={'/contact'} className={'menu-item'}> Contact </Link>
                        <Link to={'/faq'} className={'menu-item'}> FAQ </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;