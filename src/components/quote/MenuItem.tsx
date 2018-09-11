import * as React from 'react';

export default (props: any) => {
    return (
        <div className="list-group-item">
            <h5 className="list-group-item-heading menu">{props.menuItem.title}</h5>
            {
                props.menuItem.shortDescription &&
                <p className="list-group-item-text menu-description">{props.menuItem.shortDescription}</p>
            }
        </div>
    )
}



