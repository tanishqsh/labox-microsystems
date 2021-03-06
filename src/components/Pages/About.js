import React from 'react';
import FadeIn from "react-fade-in";
import Separator from "../Elements/Separator";
import TextLoop from "react-text-loop";

export class About extends React.Component{
    render(){
        return(
            <div className={'element-wrapper mobilePadding'}>
                <br/><br/>
                <div className={'mobileHide'}>
                <br/><br/>
                </div>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-6'}>
                            <FadeIn>
                            <p className={'heading-text text-center'}> About Us </p>
                            <p className={'paragraph-text'}>
                            With clarity of vision to respond to the growing needs in modern microscopy,
                            LABO was founded on its unique abilities to design and manufacture high precision Microscopes and Optical instruments.
                            From design concepts to finished products, LABO captures the essence of optical perfection.
                            LABO offers a modular line of microscopes from the elementary level to fully extendable systems for laboratory and medical use.
                            Continuous innovation, adherence to strict quality norms and precision manufacture.
                            </p>
                            </FadeIn>
                        </div>
                        <div className={'col-lg-6'}>
                            <FadeIn>
                            <div className={'placeholder'}>
                            </div>
                            </FadeIn>
                        </div>
                    </div>
                    <Separator/>
                    <div className={'row'}>
                        <div className={'col-lg-12 heading-text text-center'}>
                        LABO Means&nbsp;
                            <span className={'primary-text'}>
                        <TextLoop>
                            <p>Quality</p>
                            <p>Economy</p>
                            <p>Trust</p>
                            <p>Tradition</p>
                            <p>Microscopy</p>
                            <p>Market Leader</p>
                        </TextLoop>
                        </span>
                        </div>
                    </div>
                </div>
                <br/><br/><br/><br/>
            </div>
        );
    }
}

export default About;