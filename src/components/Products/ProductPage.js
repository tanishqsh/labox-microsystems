import React, {Component} from 'react';
import FadeIn from 'react-fade-in';

export class ProductPage extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let product = this.props.type;
        let productDes = "Sample Description";
        let productSpecs = "";
        switch (product){
            case 'axe-2000-f':
                productDes="";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <tr> <td> C shaped stable stand with plastic hand rest, Anti Fungus treated. </td> </tr>
                        <tr> <td> Monocular tube, 45 deg inclined, 360 rotatable </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm with pointer </td> </tr>
                        <tr> <td> Triple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> VA series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring Loaded) </td> </tr>
                        <tr> <td> Fixed Stage plate with spring clips for specimen </td> </tr>
                        <tr> <td> Sub-stage disc diaphragm with fixed condenser NA 0.65</td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Illumination system 6V-20W Halogen with intensity control</td> </tr>
                        <tr> <td> Accessories : Polarising kit, Video Adapter for use with Dual Tube, Plano Concave Reflector Mirror, LED Illumination system, Soft carrying case</td> </tr>
                        </tbody>
                    </table>;
                    break
            case 'axe-2000-m':
                productDes="";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <tr> <td> C shaped stable stand with plastic hand rest, Anti Fungus treated. </td> </tr>
                        <tr> <td> Monocular tube, 45 deg inclined, 360 rotatable </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm with pointer </td> </tr>
                        <tr> <td> Quadruple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> VA series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded) and 100x (Spring loaded, Oil immersion) </td> </tr>
                        <tr> <td> Stage rectangular 124 x 114mm double plate with mechanical stage cross travel 70 x 25mm on ball bearing with co-axial control </td> </tr>
                        <tr> <td> Moveable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter </td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Illumination system 6V-20W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Polarising kit, Video Adapter for use with Dual Tube, Plano Concave Reflector Mirror, LED Illumination system, Soft carrying case</td> </tr>
                        </tbody>
                    </table>;
                    break;
            case 'axe':
                productDes="";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <tr> <td> C shaped stable stand with plastic hand rest, Anti Fungus treated. </td> </tr>
                        <tr> <td> Binocular tube, 30 deg inclined, 360 deg rotatable </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm with pointer </td> </tr>
                        <tr> <td> Quadruple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> VA series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded) and 100x (Spring loaded, Oil immersion) </td> </tr>
                        <tr> <td> Stage rectangular 124 x 114mm double plate with mechanical stage cross travel 70 x 25mm on ball bearing with co-axial control </td> </tr>
                        <tr> <td> Moveable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter </td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Illumination system 6V-20W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Polarising kit, Video Adapter for use with Dual Tube, Plano Concave Reflector Mirror, LED Illumination system, Soft carrying case</td> </tr>
                        </tbody>
                    </table>;
                    break;
            case 'axe-2000':
                productDes="";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <tr> <td> C shaped stable stand with plastic hand rest, Anti Fungus treated. </td> </tr>
                        <tr> <td> Binocular tube, 45 inclined, 360 rotatable</td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm with pointer </td> </tr>
                        <tr> <td> Quadruple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> VA series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded) and 100x (Spring loaded, Oil immersion) </td> </tr>
                        <tr> <td> Stage rectangular 124 x 114mm double plate with mechanical stage cross travel 70 x 25mm on ball bearing with co-axial control </td> </tr>
                        <tr> <td> Moveable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter </td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Illumination system 6V-20W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Polarising kit, Video Adapter for use with Dual Tube, Plano Concave Reflector Mirror, LED Illumination system, Soft carrying case</td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'axem':
                productDes="";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Monocular, Dual View Tubes, 45 inclined, 360 rotatable </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm with pointer and eye guard. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quadruple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> BJ series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded). Optional 20x (SL), 60x (SL) & 100x ( SL, Oil) </td> </tr>
                        <tr> <td> Stage rectangular 142 x 133mm double plate with mechanical stage cross travel 75 x 50mm on ball bearing with co-axial control, Spring clip Double Slide Holder </td> </tr>
                        <tr> <td> Moveable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter </td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Illumination system 6V-20W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Plano Concave Reflector Mirror, Phase Contrast Kit, Dark Field Kit, Green Filter, Polarizing Kit, Photo Adapters for CCD Camera and Digital Still Camera </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'axl':
                productDes="The AXL utilizes the new AA series optics designed by LABO optical engineers for high contrast, sharpness and resolving power. " +
                    "The quality of the optical glass and design combine into a system which gives high correction for chromatic errors, " +
                    "which provide sharp and well-defined images beyond the average microscope. AXL gives you superior performance, comfort and unsurpassed quality. " +
                    "Whether for classroom or routine laboratory work, the new AXL microscope with its pre-configured systems " +
                    "provides selection for the entire application spectrum";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> L shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated</td> </tr>
                        <tr> <td> Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 48-75 mm with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quadruple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> AA series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional BJ Series DIN Semi Plan 20x (SL), 60x ( SL), FP Series Plan Din 4x, 10x, 20x (SL), 40x (SL), 60x (SL) & 100x ( SL, Oil) </td> </tr>
                        <tr> <td> Stage rectangular 142 x 132mm double plate with mechanical stage cross travel 75 x 50mm on ball bearing with co-axial control, Spring clip Double Slide Holder</td> </tr>
                        <tr> <td> Moveable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter</td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Built-in illumination system 6V-20W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Plano Concave Reflector Mirror, Phase Contrast Kit, Dark Field Kit, Green Filter, Polarizing Kit, Video Adapter, Photo Adapters for CCD Camera and Digital Still Camera </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'ax-20':
                productDes="The AX 20 utilizes the Superior quality SP series all-glass, finite-corrected optics for brilliant, high-contrast imaging, sharpness and resolving power, designed by LABO optical engineers. The quality of the optical glass and design combine into a system which gives high correction for chromatic errors, which provide sharp and well-defined images beyond the average microscope.";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 48-75 mm with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quadruple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> AA series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional BJ Series DIN Semi Plan 20x (SL), 60x ( SL), FP Series Plan Din 4x, 10x, 20x (SL), 40x (SL), 60x (SL) & 100x ( SL, Oil) </td> </tr>
                        <tr> <td> Stage rectangular 142 x 132mm double plate with mechanical stage cross travel 75 x 50mm on ball bearing with co-axial control, Spring clip Double Slide Holder</td> </tr>
                        <tr> <td> Movable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter</td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Built-in illumination system 6V-20W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Plano Concave Reflector Mirror, Phase Contrast Kit, Dark Field Kit, Green Filter, Polarizing Kit, Video Adapter, Photo Adapters for CCD Camera and Digital Still Camera </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'ax-21':
                productDes="The AX 21 utilizes the Superior quality IP series all-glass, infinity-corrected optics for brilliant, high-contrast imaging, sharpness and resolving power, designed by LABO optical engineers. The quality of the optical glass and design combine into a system which gives high correction for chromatic errors, which provide sharp and well-defined images beyond the average microscope.";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Infinity Optical System (IOS), Plan Achromatic </td> </tr>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 48-75 mm with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quadruple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> AA series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional BJ Series DIN Semi Plan 20x (SL), 60x ( SL), FP Series Plan Din 4x, 10x, 20x (SL), 40x (SL), 60x (SL) & 100x ( SL, Oil) </td> </tr>
                        <tr> <td> Stage rectangular 142 x 132mm double plate with mechanical stage cross travel 75 x 50mm on ball bearing with co-axial control, Spring clip Double Slide Holder</td> </tr>
                        <tr> <td> Movable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter</td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Built-in illumination system 6V-20W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Plano Concave Reflector Mirror, Phase Contrast Kit, Dark Field Kit, Green Filter, Polarizing Kit, Video Adapter, Photo Adapters for CCD Camera and Digital Still Camera </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'axr-20':
                productDes = "The AXR20 utilizes the Superior quality XP series all-glass, finite-corrected optics for brilliant, high-contrast imaging, sharpness and resolving power, designed by LABO optical. engineers The quality of the optical glass and design combine into a system which gives high correction for chromatic errors, which provide sharp and well-defined images beyond the average microscope.\n" +
                    "\n" +
                    "The AXR20’s illumination systems are designed to provide maximum image quality for a variety of applications, Designed to meet or exceed international safety standards \n" +
                    "CE – ISO 9001."
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Siedentopf Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular</td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/18mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quadruple nose piece (Ball bearing type) </td> </tr>
                        <tr> <td> 	XP series DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional XP Series DIN Semi Plan 20x (SL), 60x (SL), FP Series Din Plan 4x, 10x, 20x (SL), 40x (SL), 60x (SL) & 100x ( SL, Oil), FPP series Phase Plan 10x, 20x (SL), 40x (SL) & 100x ( SL, Oil) </td> </tr>
                        <tr> <td> Stage rectangular 180 x 148mm double plate with mechanical stage cross travel 76 x 50mm on ball bearing with co-axial control, Spring clip Double Slide Holder </td> </tr>
                        <tr> <td> Movable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter</td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Built-in illumination system 6V-20W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Plano Concave Reflector Mirror, Phase Contrast Kit, Dark Field Kit, Green Filter, Polarizing Kit, Video Adapter, Photo Adapters for CCD Camera and Digital Still Camera </td> </tr>
                        </tbody>
                    </table>;
                break;

                /** Research **/
            case 'axr-30':
                productDes = "";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Infinity Optical System (IOS) </td> </tr>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Siedentopf Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular</td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/22mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quintuple Reverse angle nosepiece (Ball bearing type) </td> </tr>
                        <tr> <td> IS series Infinity DIN Semi Plan Achromatic objectives 4x, 10x, 40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional IS Series Infinity D IN Semi Plan 20x (SL), 60x (SL)</td> </tr>
                        <tr> <td> Stage rectangular 180 x 148mm double plate with mechanical stage cross travel 76 x 50mm on ball bearing with co-axial control, Spring clip Double Slide Holder </td> </tr>
                        <tr> <td> Movable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter</td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Koehler Illumination system 6V-20W Halogen with intensity control</td> </tr>
                        <tr> <td> Accessories : Dark field kit, Phase Contrast Attachment, Polarizing kit, Photo Adapters for CCD Camera and Digital Still Cameras, Fluorescence Attachment, Soft carrying case
                        </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'axr-31':
                productDes = "";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Infinity Optical System (IOS) </td> </tr>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Siedentopf Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular</td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/22mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quintuple Reverse angle nosepiece (Ball bearing type) </td> </tr>
                        <tr> <td> IP series Infinity DIN PLAN Achromatic objectives 4x,10x, 40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional IP series Infinity Din Plan 20x (SL), 60x (SL), IPP series Infinity Phase Plan 10x, 20x (SL), 40x (SL) & 100x(SL, Oil) </td> </tr>
                        <tr> <td> Stage rectangular 180 x 148mm double plate with mechanical stage cross travel 76 x 50mm on ball bearing with co-axial control, Spring clip Double Slide Holder </td> </tr>
                        <tr> <td> Movable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter</td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Koehler Illumination system 6V-20W Halogen with intensity control</td> </tr>
                        <tr> <td> Accessories : Dark field kit, Phase Contrast Attachment, Polarizing kit, Photo Adapters for CCD Camera and Digital Still Cameras, Fluorescence Attachment, Soft carrying case
                        </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'axr-41':
                productDes = "The AXR 41 utilizes the Superior quality IP series all-glass, infinity-corrected optics for brilliant, high-contrast imaging, sharpness and resolving power, designed by LABO optical engineers. The quality of the optical glass and design combine into a system which gives high correction for chromatic errors, which provides high-end applications and has most modern design incorporating the latest in optical and mechanical advancements. beyond the average microscope. Anti-Fungus/mold warranty protects your microscope and investment\n" +
                    "The AXR 41 illumination systems are designed to provide maximum image quality for a variety of applications, Designed to meet or exceed international safety standards \n" +
                    "CE – ISO 9001.";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Infinity Optical System (IOS) </td> </tr>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Ergonomic Tiltable Binocular tube, tilting angle 0 - 45o, IPD 55-75 mm, with Dioptric adjustment on left ocular. </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/22mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quintuple Reverse angle nosepiece (Ball bearing type) </td> </tr>
                        <tr> <td> IP series Infinity DIN PLAN Achromatic objectives 4x,10x, 40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional IP series Infinity Din Plan 20x (SL), 60x (SL), IPP series Infinity Phase Plan 10x, 20x (SL), 40x (SL) & 100x(SL, Oil) </td> </tr>
                        <tr> <td> Stage rectangular 180 x 148mm double plate with mechanical stage cross travel 76 x 50mm on ball bearing with co-axial control, Spring clip Double Slide Holder </td> </tr>
                        <tr> <td> Movable Sub-stage ABBE condenser NA 1.25 with aspheric lens. Iris diaphragm and special day light blue filter</td> </tr>
                        <tr> <td> Co-axial coarse and fine focusing mechanism with tension control </td> </tr>
                        <tr> <td> Koehler Illumination system 6V-20W Halogen with intensity control</td> </tr>
                        <tr> <td> Accessories : Dark field kit, Phase Contrast Attachment, Polarizing kit, Photo Adapters for CCD Camera and Digital Still Cameras, Fluorescence Attachment, Soft carrying case
                        </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'afl-20':
                productDes = "AFL 20 is AXR series microscope with built-in fluorescent attachment so as to provide a suitable clinical microscopy solution. Long-life illumination: Fluorescent provides 10,000 hours of cool, bright light and Halogen provides 2,000 hours of stable and balanced light.";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Siedentopf Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/22mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> FL Series DIN Fluorescent Achromatic Objectives 4x,10x,40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional 20x (SL) or 60x (SL)</td> </tr>
                        <tr> <td> Transmitted Koehler Illumination system 6V-20W Halogen with intensity control</td> </tr>
                        <tr> <td> Epi-illumination is through 100 Watt High pressure Mercury Lamp in a Lamp House attached to the Fluorescence Filter Block</td> </tr>
                        <tr> <td> Fluorescence filter Blue & Green </td> </tr>
                        <tr> <td> Exciting filter (EX) comprising of - Blue light (EX-490), Green Light (EX-545) </td> </tr>
                        <tr> <td> Illumination Box with Power Supply Unit 220 Volt or 110 Volt & HBO, Super High – pressured Spherical mercury vapor lamp 100W </td> </tr>
                        <tr> <td> Accessories : Dark field kit, Phase Contrast Attachment, Polarizing kit, Photo Adapters for CCD Camera and Digital Still Cameras, Fluorescence Attachment, Soft carrying case</td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'afl-30':
                productDes = "AFL 30 is AXR series Infinity corrected microscope with built-in fluorescent attachment so as to provide a suitable clinical microscopy solution. Long-life illumination: Fluorescent provides 10,000 hours of cool, bright light and Halogen provides 2,000 hours of stable and balanced light.";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Infinity Optical System (IOS) </td> </tr>
                        <tr> <td> C shape corrosion resistant stand with convenient location of focus controls, Anti Fungus Treated </td> </tr>
                        <tr> <td> Siedentopf Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/22mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> FL Series DIN Fluorescent Achromatic Objectives 4x,10x,40x (Spring loaded) and 100x (Spring loaded), Oil immersion. Optional 20x (SL) or 60x (SL)</td> </tr>
                        <tr> <td> Transmitted Koehler Illumination system 6V-20W Halogen with intensity control</td> </tr>
                        <tr> <td> Epi-illumination is through 100 Watt High pressure Mercury Lamp in a Lamp House attached to the Fluorescence Filter Block</td> </tr>
                        <tr> <td> Fluorescence filter Blue & Green </td> </tr>
                        <tr> <td> Exciting filter (EX) comprising of - Blue light (EX-490), Green Light (EX-545) </td> </tr>
                        <tr> <td> Illumination Box with Power Supply Unit 220 Volt or 110 Volt & HBO, Super High – pressured Spherical mercury vapor lamp 100W </td> </tr>
                        <tr> <td> Accessories : Dark field kit, Phase Contrast Attachment, Polarizing kit, Photo Adapters for CCD Camera and Digital Still Cameras, Fluorescence Attachment, Soft carrying case</td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'ixl-40':
                productDes = "The IXL 40 is a compact research microscope with fast performance features; the microscope is designed for a wide range of research and bio-sciences applications. The observation and analysis of the cell cultures and In Vitro fertilization (IVF) studies are made easy through wide range of accessories.\n" +
                    "\n" +
                    "Equipped with IP series Long Working Distance infinity corrected optics providing images with needle sharp contrast and definition. teamed with accessories such as Phase Contrast, Fluorescence Technique System, Heated Stage and a variety of viewing bodies, the IXL 40 delivers high end performance at an unbelievable price.";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Infinity Optical System (IOS) </td> </tr>
                        <tr> <td> PHASE PLAN Achromatic (Positive Phase)</td></tr>
                        <tr> <td> Ergonomically designed sturdy stand, Anti Fungus Treated</td> </tr>
                        <tr> <td> Siedentopf Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/22mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quintuple Reverse angle nosepiece (Ball bearing type) </td> </tr>
                        <tr> <td> IX Series LWD DIN PLAN Achromatic Phase Objectives 10x/ NA 0.25, 25x/NA 0.40, 40x/NA 0.60 (Positive Phase)</td> </tr>
                        <tr> <td> Fixed plain stage with movement range 112mm x 79mm </td> </tr>
                        <tr> <td> Long working distance condenser, suitable for phase contrast/BF with phase contrast Rotating Turret, working distance 55 mm and Phase Telescope </td> </tr>
                        <tr> <td> Specimen holders include 35mm Petri dish holder and two dish/sample holders </td> </tr>
                        <tr> <td> Co-axial coarse fine focusing with tension control and refocus lock </td> </tr>
                        <tr> <td> Transmitted Illumination system 6V-30W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Image Capture Module with Image Analysis Software, Simple Polarizing Attachment </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'ixl-40fl':
                productDes = "Inverted Fluorescence Microscopy Solution";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Infinity Optical System (IOS). </td> </tr>
                        <tr> <td> PHASE PLAN Achromatic (Positive Phase)</td></tr>
                        <tr> <td> Ergonomically designed sturdy stand, Anti Fungus Treated</td> </tr>
                        <tr> <td> Siedentopf Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/22mm paired with eye guards. Optional WF 15x/16mm, WF 20x/12mm </td> </tr>
                        <tr> <td> Quintuple Reverse angle nosepiece (Ball bearing type) </td> </tr>
                        <tr> <td> IX Series LWD DIN PLAN Achromatic Phase Objectives 10x/ NA 0.25, 25x/NA 0.40, 40x/NA 0.60 (Positive Phase)</td> </tr>
                        <tr> <td> Fixed plain stage with movement range 112mm x 79mm </td> </tr>
                        <tr> <td> Long working distance condenser, suitable for phase contrast/BF with phase contrast Rotating Turret, working distance 55 mm and Phase Telescope </td> </tr>
                        <tr> <td> Specimen holders include 35mm Petri dish holder and two dish/sample holders </td> </tr>
                        <tr> <td> Co-axial coarse fine focusing with tension control and refocus lock </td> </tr>
                        <tr> <td> High Pressure Mercury Bulb:HB0100W/DC </td> </tr>
                        <tr> <td> Excitation filter : UV (Ultraviolet), V (Violet), B (Blue) and G (Green)</td> </tr>
                        <tr> <td> Transmitted Illumination system 6V-30W Halogen with intensity control </td> </tr>
                        <tr> <td> Voltage Transmitted Illumination system 6V-30W Halogen with intensity control </td> </tr>
                        <tr> <td> Accessories : Image Capture Module with Image Analysis Software, Simple Polarizing Attachment </td> </tr>
                        </tbody>
                    </table>;
                break;

                /** Stereo **/
            case 'asm-20':
                productDes = "";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Dual light stable stand with Ball bearing focusing controls </td> </tr>
                        <tr> <td> Built-in Illumination system 12V-15W Halogen reflector type incident light and sub-stage Fluorescent Light 12V-7W </td></tr>
                        <tr> <td> Binocular or Trinocular tube, 45° inclined, 360° rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Siedentopf Binocular or Trinocular tube, 30o inclined, 360o rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/20mm paired with eye guards </td> </tr>
                        <tr> <td> Revolving turret with objectives 2x - 4x or 1x - 3x </td> </tr>
                        <tr> <td> Magnification: 20x / 40x or 10x/30x </td> </tr>
                        <tr> <td> Darkfield attachment, Polarizing Kit, Adapter for Digital Camera.</td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'azm-60':
                productDes = "";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Dual light stable stand with Ball bearing focusing controls </td> </tr>
                        <tr> <td> Built-in Illumination system 12V-15W Halogen reflector type incident light and sub-stage Fluorescent Light 12V-7W </td></tr>
                        <tr> <td> Binocular or Trinocular tube, 45° inclined, 360° rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Auxiliary Objectives : 0.5x, 1.5x and 2.0x (Optional) Continuous Zoom Ratio: 1: 6.4</td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/20mm paired with eye guards </td> </tr>
                        <tr> <td> Magnification: 7x - 45x (with 10x Eyepieces)</td> </tr>
                        <tr> <td>	Darkfield attachment, Polarizing kit, Ring light, Fiber Optic illumination, Goose neck Dual Fiber Optic light, Adapter for CCD Camera, Adapter for Digital Still Camera. </td> </tr>
                        </tbody>
                    </table>;
                break;
            case 'azm-100':
                productDes = "";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Dual light stable stand with Ball bearing focusing controls </td> </tr>
                        <tr> <td> Built-in Illumination system 12V-15W Halogen reflector type incident light and sub-stage Fluorescent Light 12V-7W </td></tr>
                        <tr> <td> Binocular or Trinocular tube, 45° inclined, 360° rotatable, IPD 55-75 mm, with Dioptric adjustment on left ocular </td> </tr>
                        <tr> <td> Auxiliary Objectives : 0.5x, 1.5x and 2.0x (Optional) Continuous Zoom Ratio: 1: 6.4</td> </tr>
                        <tr> <td> Wide Field eyepiece WF 10x/20mm paired with eye guards </td> </tr>
                        <tr> <td> Magnification: 6.5x - 60x (with 10x Eyepieces) </td> </tr>
                        <tr> <td>	Darkfield attachment, Polarizing kit, Ring light, Fiber Optic illumination, Goose neck Dual Fiber Optic light, Adapter for CCD Camera, Adapter for Digital Still Camera. </td> </tr>
                        </tbody>
                    </table>;
                break;

                /** Surgical **/
            case 'op-10':
                productDes = "The OP 10 ENT System utilizes the new features : \n" +
                    "Ergonomicdesign, Ehanced Optical System for superb image quality, Apochromatic 5 Step Magnichanger and Objectives, Straight viewing tube with IPD adjustment knob, Counter Balanced Arm Mechanism, Motorized XYZ axis movement, Cold Light co-axial illumination \n" +
                    ", Easy changeover to standby bulb by rotation of a knob ";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Straight, 45° inclined</td> </tr>
                        <tr> <td> 10x/18mm with eyeguards </td></tr>
                        <tr> <td> APOCHROMATIC MAGNICHANGER - 0.4x,0.63x,1.0x,1.6x & 2.5x </td> </tr>
                        <tr> <td> Objectives: f=250mm manual fine focus </td> </tr>
                        <tr> <td> Light Source: 15v 150w halogen twin lamp </td> </tr>
                        <tr> <td> Built In Filters: Green & Yellow </td> </tr>
                        <tr> <td> Vertifical Movement Of Arms: 400mm </td> </tr>
                        <tr> <td> 120° ENT carrier</td> </tr>
                        <tr> <td>Assistoscope, Xpert Vu Camera Module ,Double Beam splitter, 0=250° tiltable ergo tube,eyepiece WF 12.5x/16mm</td></tr>
                        </tbody>
                    </table>;
                break;
            case 'op&-20':
                productDes = "The OP 20 OPHTHALMIC System utilizes the new features : \n" +
                    "Ergonomic design, Ehanced Optical System for superb image quality, Apochromatic 5 Step Magnichanger and Objectives, Straight viewing tube with IPD adjustment knob, Counter Balanced Arm Mechanism, Motorized XYZ axis movement, Cold Light co-axial illumination \n" +
                    ", Easy changeover to standby bulb by rotation of a knob";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> Straight, 45° inclined</td> </tr>
                        <tr> <td> 10x/18mm with eyeguards </td></tr>
                        <tr> <td> APOCHROMATIC MAGNICHANGER - 0.4x,0.63x,1.0x,1.6x & 2.5x </td> </tr>
                        <tr> <td> Objectives: f=250mm manual fine focus </td> </tr>
                        <tr> <td> Light Source: 15v 150w halogen twin lamp </td> </tr>
                        <tr> <td> Built In Filters: Green & Cobalt Blue</td> </tr>
                        <tr> <td> Vertifical Movement Of Arms: 400mm </td> </tr>
                        <tr> <td> XYZ coupling or Z-axis Ophthalmic carrier </td> </tr>
                        <tr> <td> Assistoscope, Xpert Vu Camera Module ,Double Beam splitter, 0=250° tilt-able ergo tube,eyepiece WF 12.5x/16mm</td></tr>
                        </tbody>
                    </table>;
                break;
            case 'sl-15':
                productDes = "The SL 15 OPHTHALMIC System utilizes the new features : \n" +
                    "Ergonomic design, Enhanced Optical System for superb image quality, 3 Step Magni-changer, Feather-touch XYZ joystick, Video compatibility with expert VU video imaging system ";
                productSpecs =
                    <table className={'table'}>
                        <tbody>
                        <br/>
                        <tr> <td> 3 step rotation; 10X,16X,25X </td> </tr>
                        <tr> <td> 1 Wild feild 12.5X.</td></tr>
                        <tr> <td>IPD Range: 48.5-80 mm dioptric adjustment ±6 </td> </tr>
                        <tr> <td> SLIT Length: 0-14 mm</td> </tr>
                        <tr> <td> SLIT Apertures: 0.3,5.5,9,14 mm </td> </tr>
                        <tr> <td> SLIT Rotation: 0-180° </td> </tr>
                        <tr> <td> Filters: Red free,cobalt blue,heat absorbing </td> </tr>
                        <tr> <td> Longitudinal: 90 mm </td> </tr>
                        <tr> <td> Lateral: 100 mm </td></tr>
                        <tr><td> Vertical: 30 mm </td></tr>
                        <tr><td> Voltage: Universal AC input 110V-240V(50-60Mz),CE</td></tr>
                        <tr> <td> 465 mm × 350 mm/25kg (packed) </td></tr>
                        </tbody>
                    </table>;
                break;


        }

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
                            <p className={'heading-text'}> {this.props.name} </p>
                            <p className={'paragraph-text subtitle-para'}>
                                {productDes}
                                {productSpecs}
                            </p>

                            <br/>
                            <button className={'labo-button'}>Catalog</button>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}