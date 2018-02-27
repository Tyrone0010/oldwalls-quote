import * as React from 'react';
import {weddingPackage} from '../../../content/data/packages';

export default (props: any) => {
    let chosenPackage: any = null;
    const day: number = null;

    const setPackage = (date: string) => {

        props.updateState('weddingDate', date);
        chosenPackage = weddingPackage(null, new Date(date));
        props.updateState('chosenPackage', chosenPackage);
    }

    const weddingDate = new Date(props.weddingDate);
    return (
        <div>
            <h1>Packages</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="proposedDate">Choose Your Date</label>
                        <input id="proposedDate" defaultValue={props.weddingDate} className="form-control" type="date"
                               onChange={e => setPackage(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        {props.chosenPackage &&
                        <div>
                            The date chosen falls into our <b>{props.chosenPackage.name}</b> in the <b>{props.chosenPackage.season}</b> on
                            a {props.chosenPackage.getDayString(weddingDate.getDay())} and starts at <b>£{props.chosenPackage.cost}.00</b>
                            <img className="img-responsive img-circle" src="content/images/ultimate-castle.jpg"/>
                        </div>
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    {props.chosenPackage &&
                    <div>
                        Information about the package can go here.
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}