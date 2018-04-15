import React, {Component} from 'react';
import FadeIn from 'react-fade-in';

export class ProductPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const specs = ['Excepteur sint occaecat cupidatat non proident, sunt ', 'Quadruple nosepiece (Ball bearing type)'];
        return(
            <div className={'element-wrapper'}>
                <div className={'mobileHide'}>
                    <br/><br/><br/><br/>
                </div>
                <div className={'container '}>
                    <div className={'row'}>
                        <div className={'col-lg-6'}>
                            <FadeIn>
                                <div className={'placeholder'}>
                                </div>
                            </FadeIn>
                        </div>
                        <div className={'col-lg-6 mobilePadding'}>
                            <FadeIn>
                            <br/>
                            <p className={'heading-text'}> Product Name {this.props.name} </p>
                            <p className={'paragraph-text subtitle-para'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            {specs.map((spec, index) => (
                                <li className={'paragraph-text'}> {spec} </li>
                            ))}

                            <br/>
                            <button className={'labo-button'}>Catalogue</button>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}