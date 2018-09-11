import * as React from 'react';
import { connect } from 'react-redux';
import {makeGetQuoteSummary} from '../../selectors/quote';
import {makeGetAllMenus} from '../../selectors/menusSelector'
import {setNextStep, setPreviousStep} from '../../actions/wizard'
import { IMenuSummaryModel } from '../../interfaces/IMenuSummaryModel';
import NumberFormat from 'react-number-format';

const QuoteSummary = (props: any) => {
    const getSelectedMenuDetail = (selectedMenu:any) => {
        var menuDetail:any = {};
        props.allMenus.forEach((menu: any) => {
            if(menu.id === selectedMenu.menuId){
                menuDetail.name = menu.name;
            }
        });
        var menuSection = props.allMenuSections[selectedMenu.sectionId];
        if(menuSection){
            menuDetail.sectionName = menuSection.name;
            menuDetail.price = menuSection.price;
        }
        return menuDetail;
    }

    return (
        <div>
            <h1>Congratulations</h1>
            <div>It’s time to start getting excited about your wedding booking</div>
            <strong>Save the date: {}</strong>
            <hr/>
            <h5>Your wedding venue is</h5>
            <div><strong>{props.quoteSummary.venueName}</strong> and the venue cost is 
                <NumberFormat 
                    value={props.quoteSummary.venuePrice} 
                    displayType={'text'} 
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix={'£'} renderText={value => <strong> {value}</strong>} />
            </div>
            <hr/>
            <h5>Your wedding package includes</h5>
            {
                props.quoteSummary.menuSummaries.map((menu: IMenuSummaryModel, index:number) => {
                    return(
                        <div className="row" key={`menuSummary${index}`} >
                            <div className="col-xs-8">
                                {menu.menuName} - {menu.sectionName}
                            </div>
                            <NumberFormat 
                                value={menu.price} 
                                displayType={'text'} 
                                decimalScale={2}
                                fixedDecimalScale={true}
                                prefix={'£'} renderText={value => <div className="col-xs-4"> {value}</div>} />
                        </div>
                    )
                })
            }
            <hr/>
            <div>Total cost:
                <NumberFormat 
                    value={props.quoteSummary.totalPrice} 
                    displayType={'text'} 
                    decimalScale={2}
                    fixedDecimalScale={true}
                    prefix={'£'} renderText={value => <strong>{value}</strong>} />
            </div>
            <div>Your wedding booking co-ordinator is {} who you can call on {}</div>
            <h3><u>THE NEXT STEPS</u></h3>
            <div>
                <button type="button" className="btn btn-outline-light" 
                    onClick={e => {props.setPreviousStepAction()}}>
                    &lt; &lt; Menus
                </button>
            </div>

        </div>
    )
}

const makeMapStateToProps = () => {
    const getQuoteSummary = makeGetQuoteSummary();
    const mapStateToProps = (state: any, props: any) => {
        return {
            quoteSummary: getQuoteSummary(state, props),
        };
    }
    return mapStateToProps;
}

const makeMapDispatchToProps = {
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(QuoteSummary);

