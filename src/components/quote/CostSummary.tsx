import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import MenuSection from './MenuSection'
import {setSelectedMenuSection} from '../../actions/menus'
import {makeGetSelectedMenus, makeGetMenuSections, makeGetAllMenuSections} from '../../selectors/menuSectionsSelector';
import {makeGetAllMenus} from '../../selectors/menusSelector'
import {setNextStep, setPreviousStep} from '../../actions/wizard'

const CostSummary = (props: any) => {
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
            <strong>{}</strong>
            <div>It’s time to start getting excited about your wedding booking</div>
            <strong>Save the date: {}</strong>
            <hr/>
            <h5>Your wedding package includes</h5>
            {
                Object.keys(props.selectedMenus).map((menu: any) => {
                    var menuDetail = getSelectedMenuDetail(props.selectedMenus[menu]);
                    return(
                        <div className="row">
                            <div className="col-xs-8">
                                {menuDetail.name} - {menuDetail.sectionName}
                            </div>
                            <div className="col-xs-4">
                                £{menuDetail.price}
                            </div>
                        </div>
                    )
                })
            }
            <hr/>
            <div>Total cost:</div>
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
    const getSelectedMenus = makeGetSelectedMenus();
    const getAllMenus = makeGetAllMenus();
    const getAllMenuSections = makeGetAllMenuSections();
    const mapStateToProps = (state: any, props: any) => {
        return {
            selectedMenus: getSelectedMenus(state, props),
            allMenus: getAllMenus(state, props),
            allMenuSections: getAllMenuSections(state, props)
        };
    }
    return mapStateToProps;
}

const makeMapDispatchToProps = {
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(CostSummary);

