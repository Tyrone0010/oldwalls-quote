import * as React from 'react';
import {IPackageData, IPackagesData} from '../interfaces/IPackageData';

export default class QuotationDetail extends React.Component<IPackagesData, {}>  {
    constructor(props: IPackagesData){
        super(props);
    }

    render() {
        return (
            <div className="row">
                <h3>Your wedding package includes:</h3>
                {
                    this.props.packageData.map((item: IPackageData, index: number) => {
                        return (
                            <div className="row">
                                <div className="col-md-8">
                                    {item.title}
                                </div>
                                <div className="col-md-4">
                                    £{item.cost * item.amount}
                                </div>
                            </div>
                        )
                    })
                }
                <div className="row">
                    <div className="col-md-8">
                        Total cost:
                    </div>
                    <div className="col-md-4">
                        £{this.props.totalCost()}
                    </div>
                </div>
            </div>
        )
    }
}

