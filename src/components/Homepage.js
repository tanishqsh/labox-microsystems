import React from 'react';

const Homepage = props => (
    <div className={'element-wrapper'}>
        <div className={'homepage-container'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-6'}>
                        <p className={'heading-text'}> World leader In <br/> <span className={'primary-text'}> modern microscopy. </span> </p>
                        <p className={'paragraph-text subtitle-para'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed   Lorem ipsum </p>
                        <br/>
                        <div className={'text-center'}>
                            <button className={'labo-button'}> Discover </button>
                        </div>
                    </div>
                    <div className={'col-lg-6 centerAlign'}>
                        <div className={'placeholder'}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;