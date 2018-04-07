import React from 'react';

const Header = props => (
    <div className={'element-wrap'}>
        <div className={'container-fluid primary-fill topBar'}/>
        <div className={'container-fluid header-container'}>
            <div className={'col-lg-6'}>
                <div className={'logo-container'}>
                    LABO<span className={'sup-element'}>&reg;</span>
                </div>
            </div>
            <div className={'col-lg-6'}>
                <div className={'menu-container'}>
                </div>
            </div>
        </div>
    </div>
);

export default Header;