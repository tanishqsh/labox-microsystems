import React from 'react';
import FadeIn from 'react-fade-in';
import {Separator} from "../Elements/Separator";
import Link from "react-router-dom/es/Link";
export class ProductArchive extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        /** Compound Microscopes **/
        let AXE2000F = ['AXE 2000 (F)', 'axe-2000-f', 'image.jpg'];
        let AXE2000M = ['AXE 2000 (M)', 'axe-2000-m', 'image.jpg'];
        let AXE = ['AXE', 'axe', 'image.jpg'];
        let AXE2000 = ['AXE 2000', 'axe-2000', 'image.jpg'];
        let AXLM = ['AXE (M)', 'axem', 'image.jpg'];
        let AXL = ['AXL', 'axl', 'image.jpg'];
        let AX20 = ['AX (20)', 'ax-20', 'image.jpg'];
        let AX21 = ['AX 21', 'ax-21', 'image.jpg'];
        let AXR20 = ['AXR 20', 'axr-20', 'image.jpg'];

        /** Research Microscopes **/
        let AXR30 = ['AXR 30', 'axr-30', 'image.jpg'];
        let AXR31 = ['AXR 31', 'axr-31', 'image.jpg'];
        let AXR41 = ['AXR 41', 'axr-41', 'image.jpg'];
        let AFL20 = ['AFL 20', 'afl-20', 'image.jpg'];
        let AFL30 = ['AFL 30', 'afl-30', 'image.jpg'];
        let IXL40 = ['IXL 40', 'ixl-40', 'image.jpg'];
        let IXL40FL = ['IXL 40FL', 'ixl-40fl', 'image.jpg'];
        let AXPOL = ['AX POL', 'ax-pol', 'image.jpg'];

        /** Stereo Types **/
        let ASM20 = ["ASM 20", "asm-20", "image.jpg"];
        let AZM60 = ["AZM 60", "azm-60", "image.jpg"];
        let AZM100 = ["AZM100", "azm-100", "image.jpg"];

        /** Digital Types **/
        let DG10 = ["DG 10", "dg-10", "image.jpg"];
        let DGLAB = ["DG LAB", "dg-lab", "image.jpg"];
        let DG20 = ["DG 20", "dg-20", "image.jpg"];
        let DG30 = ["DG 30", "dg-30", "image.jpg"];
        let DGE2000 = ["DGE 2000", "dge-2000", "image.jpg"];
        let DGS20 = ["DGS 20", "dgs-20", "image.jpg"];
        let DGZ60 = ["DGZ 60", "dgz-60", "image.jpg"];
        let DGCAM1000 = ["DG CAM 1000", "dgcam-1000", "image.jpg"];
        let DGCAM1300 = ["DG CAM 1300", "dgcam-1300", "image.jpg"];
        let DGCAM3000 = ["DG CAM 3000", "dgcam-3000", "image.jpg"];

        /** Surgical Types **/
        let OP10 = ["OP 10", "op-10", "image.jpg"];
        let OPAND20 = ["OP& 20", "op&-20", "image.jpg"];
        let SL15 = ["SL 15", "sl-15", "image.jpg"];

        /** Industrial Types **/
        let FE10 = ["FE 10", "fe-10", "image.jpg"];
        let FE20M = ["FE 20M", "fe-20m", "image.jpg"];
        let FEPRO9000 = ["FE PRO 9000", "fe-pro-9000", "image.jpg"];


        let compoundTypes = [AXE2000F, AXE2000M, AXE, AXE2000, AXLM, AXL, AX20, AX21, AXR20];
        let researchTypes = [AXR30, AXR31, AXR41, AFL20, AFL30, IXL40, IXL40FL, AXPOL];
        let stereoTypes = [ASM20, AZM60, AZM100];
        let digitalTypes =[DG10, DGLAB, DG20, DG30, DGE2000, DGS20, DGZ60, DGCAM1000, DGCAM1300, DGCAM3000];
        let surgicalTypes = [OP10, OPAND20, SL15];
        let industrialTypes = [FE10, FE20M, FEPRO9000];


        let pageHeading = "Microscopes";
        let pageType = this.props.type;

        switch (pageType){
            case 'Compound':
                pageHeading = "Compound Microscopes";
                return(<div className={'element-wrapper'}>
                        <br/><br/>
                        <div className={'mobileHide'}>
                            <br/><br/>
                        </div>
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col-lg-12 padding'}>
                                    <FadeIn>
                                        <h1 className={'heading-text text-center'}> {pageHeading}  </h1>
                                        <Separator/>
                                        <div className={'row text-center'}>

                                            {compoundTypes.map((compoundType, index) =>
                                                (
                                                    <div className={'col-sm-4 col-xs-4 hvr-grow'}>
                                                        <Link to={/products/+compoundType[1]}>
                                                            <div className={'placeholder'}>
                                                            </div>
                                                            <p className={'item-heading'}> {compoundType[0]} </p>
                                                        </Link>
                                                    </div>

                                                ))
                                            }
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        </div>
                    </div>);
            case 'Stereo':
                pageHeading = "Stereo Microscopes";
                return(<div className={'element-wrapper'}>
                    <br/><br/>
                    <div className={'mobileHide'}>
                        <br/><br/>
                    </div>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-lg-12 padding'}>
                                <FadeIn>
                                    <h1 className={'heading-text text-center'}> {pageHeading}  </h1>
                                    <Separator/>
                                    <div className={'row text-center'}>

                                        {stereoTypes.map((stereoType, index) =>
                                            (

                                                <div className={'col-sm-4 col-xs-4 hvr-grow'}>
                                                    <Link to={/products/+stereoType[1]}>
                                                        <div className={'placeholder'}>
                                                        </div>
                                                        <p className={'item-heading'}> {stereoType[0]} </p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>);
            case 'Research':
                pageHeading = "Research Microscopes";
                return(<div className={'element-wrapper'}>
                    <br/><br/>
                    <div className={'mobileHide'}>
                        <br/><br/>
                    </div>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-lg-12 padding'}>
                                <FadeIn>
                                    <h1 className={'heading-text text-center'}> {pageHeading}  </h1>
                                    <Separator/>
                                    <div className={'row text-center'}>

                                        {researchTypes.map((researchType, index) =>
                                            (
                                                <div className={'col-sm-4 col-xs-4 hvr-grow'}>
                                                    <Link to={/products/+researchType[1]}>
                                                        <div className={'placeholder'}>
                                                        </div>
                                                        <p className={'item-heading'}> {researchType[0]} </p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>);
            case 'Digital':
                pageHeading = "Digital Microscopes";
                return(<div className={'element-wrapper'}>
                    <br/><br/>
                    <div className={'mobileHide'}>
                        <br/><br/>
                    </div>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-lg-12 padding'}>
                                <FadeIn>
                                    <h1 className={'heading-text text-center'}> {pageHeading}  </h1>
                                    <Separator/>
                                    <div className={'row text-center'}>

                                        {digitalTypes.map((digitalType, index) =>
                                            (

                                                <div className={'col-sm-4 col-xs-4 hvr-grow'}>
                                                    <Link to={/products/+digitalType[1]}>
                                                        <div className={'placeholder'}>
                                                        </div>
                                                        <p className={'item-heading'}> {digitalType[0]} </p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>);
            case 'Industrial':
                pageHeading = "Industrial Microscopes";
                return(<div className={'element-wrapper'}>
                    <br/><br/>
                    <div className={'mobileHide'}>
                        <br/><br/>
                    </div>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-lg-12 padding'}>
                                <FadeIn>
                                    <h1 className={'heading-text text-center'}> {pageHeading}  </h1>
                                    <Separator/>
                                    <div className={'row text-center'}>

                                        {industrialTypes.map((industrialType, index) =>
                                            (

                                                <div className={'col-sm-4 col-xs-4 hvr-grow'}>
                                                    <Link to={/products/+industrialType[1]}>
                                                        <div className={'placeholder'}>
                                                        </div>
                                                        <p className={'item-heading'}> {industrialType[0]} </p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>);
            case 'Surgical':
                pageHeading = "Surgical Microscopes";
                return(<div className={'element-wrapper'}>
                    <br/><br/>
                    <div className={'mobileHide'}>
                        <br/><br/>
                    </div>
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className={'col-lg-12 padding'}>
                                <FadeIn>
                                    <h1 className={'heading-text text-center'}> {pageHeading}  </h1>
                                    <Separator/>
                                    <div className={'row text-center'}>

                                        {surgicalTypes.map((surgicalType, index) =>
                                            (

                                                <div className={'col-sm-4 col-xs-4 hvr-grow'}>
                                                    <Link to={/products/+surgicalType[1]}>
                                                        <div className={'placeholder'}>
                                                        </div>
                                                        <p className={'item-heading'}> {surgicalType[0]} </p>
                                                    </Link>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </div>);
            default:
                return null;
        }

    }
}
