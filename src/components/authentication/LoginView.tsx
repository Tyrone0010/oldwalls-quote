import * as React from 'react';

export default (props: any) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <img className="img-responsive img-rounded" src="content/images/login-image-1.jpg"/>
                </div>
                <div className="col-sm-5">
                    {props.children}
                </div>
            </div>
        </div>
    )
}