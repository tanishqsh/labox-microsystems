import React from 'react';


export class Footer extends React.Component {
    render(){
        return(
            <div className={'element-wrapper'}>
                <br/><br/><br/><br/><br/><br/>
            <div className={'footer-wrapper'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-lg-12'}>
                            <br/>
                            <p className={'footer-primary-text'}> LABO© is a registered trademark of Labo Microsystems. <br/> </p>
                            <div className={'footer-secondary-text'}>Labo Microsystems follows a policy of continuous innovation.
                                    Design and specifications are subject to change without prior notice.
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Footer;