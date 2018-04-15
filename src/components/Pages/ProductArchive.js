import React from 'react';
import FadeIn from 'react-fade-in';
import {Separator} from "../Elements/Separator";
import Link from "react-router-dom/es/Link";


export class ProductArchive extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const CompoundMicroscopes = ['Compound Microscopes', '/compound-microscopes', 'image.jpg'];
        const ResearchMicroscopes = ['Research Microscopes', '/research-microscopes', 'image.jpg'];
        const StereoMicroscopes = ['Stereo Microscopes', '/stereo-microscopes', 'image.jpg'];
        const DigitalMicroscopes = ['Digital Microscopes', '/digital-microscopes', 'image.jpg'];
        const SurgicalMicroscopes = ['Surgical Microscopes', '/surgical-microscopes', 'image.jpg'];
        const IndustrialMicroscopes = ['Industrial Microscopes', '/industrial-microscopes', 'image.jpg'];


        const productCat =
            [   CompoundMicroscopes,
                ResearchMicroscopes,
                StereoMicroscopes,
                DigitalMicroscopes,
                SurgicalMicroscopes,
                IndustrialMicroscopes
            ];


        return(
            <div className={'element-wrapper'}>
                <br/><br/><br/><br/>
                <div className={'container'}>
                    <FadeIn>
                    <h1 className={'heading-text text-center'}> Products </h1>
                    <Separator/>
                    <div className={'row text-center'}>

                        {productCat.map((category, index) =>
                            (

                                    <div className={'col-lg-4'}>
                                        <Link to={category[1]}>
                                        <div className={'placeholder'}>
                                        </div>
                                        <p className={'item-heading'}> {category[0]} </p>
                                        </Link>
                                    </div>

                            ))
                        }
                    </div>
                    </FadeIn>
                </div>

            </div>
        );
    }
}