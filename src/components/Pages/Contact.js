import React from 'react';


export default class Contact extends React.Component{
    render(){
        return(
            <div className={'element-wrapper'}>
                <br/><br/><br/>
                <div className={'container'}>
                    <div className={'row'}>
                       <div className={'col-lg-6'}>
                           <p className={'paragraph-heading'}> Marketing Enquires </p>
                           <p className={'paragraph-text'}> sales@labomicrosystems.com </p>
                           <br/>
                           <br/>
                           <p className={'paragraph-heading'}> Corporate </p>
                           <p className={'paragraph-text'}> labo@labomicrosystems.com </p>
                           <br/>
                           <br/>
                           <p className={'paragraph-heading'}> Service Issues </p>
                           <p className={'paragraph-text'}> support@labomicrosystems.com </p>
                           <br/>
                           <br/>
                       </div>
                        <div className={'col-lg-6'}>
                            <br/>
                            <p className={'paragraph-heading'}> LABO Microsystems GmbH </p>
                            <p className={'paragraph-text'}> Backertrasse 5 <br/>
                                2144 Buchholz, Germany <br/>
                                hq@labomicrosystems.com </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}