import * as React from 'react';

const getRandomImage = (min: number, max: number) => {
    return Math.floor(min + Math.random() * (max - min));
}

export default (props: any) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-7">
                    <img className="img-responsive img-rounded" src={`content/images/login-image-${getRandomImage(1, 6)}.jpg`} />
                </div>
                <div className="col-sm-5">
                    {props.children}
                </div>
            </div>
        </div>
    )
}