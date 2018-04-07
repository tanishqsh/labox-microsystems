import React from 'react';


export class Separator extends React.Component{
    render(){
        return(
        <div className={'element-wrapper'}>
            <br/><br/><br/>
            <div className={'container text-center'}>
                <div className={'row'}>
                    <div className={'col-lg-12 centerAlign'}>
                        <div className={'labo-separator'}>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/>
        </div>

    );
    }
}


export default Separator;