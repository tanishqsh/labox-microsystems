import React from 'react';

const Header = props => (
    <div className={'element-wrap'}>
        <div className={'container-fluid primary-fill topBar'}/>
        <div className={'container-fluid header-container'}>
            <div className={'row hidden-lg'}>
                <div className={'col-xs-12 col-lg-6'}>
                    <div className={'logo-container'}>
                        LABO<span className={'sup-element'}>&reg;</span>
                    </div>
                </div>
                <div className={'col-lg-6 text-right mobileHide'}>
                    <div className={'menu-container'}>
                        <a className={'menu-item'}> Home </a>
                        <a className={'menu-item'}> Products </a>
                        <a className={'menu-item'}> Contact </a>
                        <a className={'menu-item'}> FAQ </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Header;