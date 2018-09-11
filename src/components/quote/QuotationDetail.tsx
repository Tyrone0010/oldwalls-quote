import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import {makeGetSelectedMenus} from '../../selectors/menuSectionsSelector'

const QuotationDetail = () =>  {

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
                this.props.selectedMenus.keys.map((item: any) => {
                    return (
                        <div className="row">
                            <div className="col-md-8">
                                {item.name}
                            </div>
                            <div className="col-md-4">
                                £2000
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
                    £2000
                </div>
            </div>
        </div>
    )
}

const makeMapStateToProps = () => {
    const getSelectedMenus = makeGetSelectedMenus();
    const mapStateToProps = (state: any, props: any) => {
        return {
            selectedMenus: getSelectedMenus(state, props)
        };
    }
    return mapStateToProps;
}

const makeMapDispatchToProps = {
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(QuotationDetail);

