import * as React from 'react';
import QuotationDetail from './QuotationDetail';

export default (props: any) => {
    return (
        <div>
            <h1>Congratulations</h1>
            <div className="row">
                <div className="col-md-12">
                    <div>
                        {
                            props.customerNames.map((name: any, index: number) => {
                                return(
                                    <span>{index !== 0 ?' & ' : ' '}{name.firstName}</span>
                                )
                            })
                        }
                    </div>
                    <div>
                        Save the Date: {props.weddingDate}
                    </div>
                    <hr />
                    <div>
                        <h4>Your wedding package includes:</h4>
                        {<QuotationDetail {...props} />}
                    </div>
                    <div>
                        Your wedding booking co-ordinator is {props.staffMember} who you can call on 07814??????
                    </div>
                </div>
            </div>
            <div className="row">
                <h3>THE NEXT STEPS</h3>
                <div className="col-md-4">
                    <h4>Within 7 days</h4>
                    <div>
                        Confirm your booking with a £500 deposit or we will see you again on the ??th Month 2018
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>Within 30-60 days</h4>
                    <div>
                        Full deposit required and introduction to your dedicated wedding co-ordinator
                    </div>
                </div>
                <div className="col-md-4">
                    <h4>Within 8-12 months (approx)</h4>
                    <div>
                        Prior to your wedding day an invitation to your lavish wedding taster evening
                    </div>
                </div>
            </div>
        </div>
    )
}