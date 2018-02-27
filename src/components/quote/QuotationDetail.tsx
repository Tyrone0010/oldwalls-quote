import * as React from 'react';
import {menuCosting, totalCosting} from '../../utilities/menuCosting';

export default class QuotationDetail extends React.Component<any, {}>  {
    constructor(props: any){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">
                        {this.props.weddingPackage.name}
                    </div>
                    <div className="col-md-4">
                        £{this.props.weddingPackage.cost}
                    </div>
                </div>
                {
                    this.props.weddingMenus.keys.map((item: any) => {
                        return (
                            <div className="row">
                                <div className="col-md-8">
                                    {this.props.weddingMenus[item].name}
                                </div>
                                <div className="col-md-4">
                                    £{menuCosting(this.props.adultNumbers, this.props.childNumbers, this.props.teenNumbers, this.props.eveningNumbers, this.props.weddingMenus[item])}
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
                        £{totalCosting(this.props.adultNumbers, this.props.childNumbers, this.props.teenNumbers, this.props.eveningNumbers, this.props.weddingMenus) + this.props.weddingPackage.cost}
                    </div>
                </div>
            </div>
        )
    }
}

