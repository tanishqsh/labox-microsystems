import React, {Component} from 'react';
import FadeIn from 'react-fade-in';
import '../../../node_modules/hover.css/css/hover.css';
import Slider from 'react-slick';
import {Separator} from '../Elements/Separator';
import {Link} from "react-router-dom";




export class Homepage extends React.Component {
    render() {
        let settings = {
            dots: false,
            easing: 'linear',
            slidesToScroll: 1,
            swipeToSlide: true,
            variableWidth: true,
            adaptiveHeight: true
        };
        return(
            <div className={'element-wrapper'}>
                <div className={'homepage-container'}>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-lg-6'}>
                                <FadeIn>
                                    <p className={'heading-text'}> World leader In <br/> <span className={'primary-text'}> modern microscopy. </span> </p>
                                    <p className={'paragraph-text subtitle-para'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed   Lorem ipsum </p>
                                    <br/>
                                    <div className={'text-center'}>
                                        <Link to={'/about'}><button className={'labo-button'}> Discover </button></Link>
                                    </div>
                                </FadeIn>
                            </div>
                            <div className={'col-lg-6 centerAlign'}>
                                <FadeIn>
                                    <div className={'placeholder'}>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>

                <br/><br/><br/><br/>

                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-12'}>
                            <Slider {...settings}>
                                <div className={'sliderItem-container hvr-grow'}>
                                    <div className={'sliderItem'}>
                                    </div>
                                    <p className={'item-heading'}> Compound </p>
                                    <p className={'item-description'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </p>
                                </div>

                                <div className={'sliderItem-container hvr-grow'}>
                                    <div className={'sliderItem'}>
                                    </div>
                                    <p className={'item-heading'}> Digital </p>
                                    <p className={'item-description'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </p>

                                </div>

                                <div className={'sliderItem-container hvr-grow'}>
                                    <div className={'sliderItem'}>
                                    </div>
                                    <p className={'item-heading'}> Industrial </p>
                                    <p className={'item-description'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </p>
                                </div>

                                <div className={'sliderItem-container hvr-grow'}>
                                    <div className={'sliderItem'}>
                                    </div>
                                    <p className={'item-heading'}>Research  </p>
                                    <p className={'item-description'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </p>
                                </div>


                                <div className={'sliderItem-container hvr-grow'}>
                                    <div className={'sliderItem'}>
                                    </div>
                                    <p className={'item-heading'}> Stereo </p>
                                    <p className={'item-description'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </p>
                                </div>


                                <div className={'sliderItem-container hvr-grow'}>
                                    <div className={'sliderItem'}>
                                    </div>
                                    <p className={'item-heading'}> Surgical </p>
                                    <p className={'item-description'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  </p>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
                <Separator/>

                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-12 centerAlign'}>
                            <p className={'heading-text'}> Learn to see microscopically. </p>
                            <p className={'paragraph-text text34'}> -Rudolf Virchow </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Homepage;