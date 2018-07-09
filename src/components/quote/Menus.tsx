import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import {setNextStep, setPreviousStep} from '../../actions/wizard'
import {makeGetAllMenus} from '../../selectors/menusSelector';
import {makeGetselectedMenu} from '../../selectors/menuSectionsSelector'
import MenuSectionList from './MenuSectionList'
import MenuOneCoure from './MenuOneCourse'
import MenuThreeCoure from './MenuThreeCourse'
import {MenuTypes} from '../../enums/menuType'

const MenusView = (props: any) => {
    return (
        <div >
            <h1>Choose Your Menu</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="panel-group" id="accordion">
                        {
                            props.allMenus && props.allMenus.map(function(menu:any, index:number){
                                return(
                                    <MenuSectionList key={index}
                                        menu = {menu} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    {
                        props.selectedMenu && props.selectedMenu.menuType === MenuTypes.ONE_COURSE && <MenuOneCoure />
                    }
                    {
                        props.selectedMenu && props.selectedMenu.menuType === MenuTypes.THREE_COURSE && <MenuThreeCoure />
                    }
                </div>
            </div>
            <div>
                <button type="button" className="btn btn-outline-light" 
                    onClick={e => {props.setPreviousStepAction()}}>
                    &lt; &lt; Chosen Package
                </button>
                <button type="button" 
                    className="btn btn-outline-secondary" 
                    onClick={e => {props.setNextStepAction()}}>
                    Cost Summary &gt; &gt;
                </button>
            </div>
        </div>
    )
}

const makeMapStateToProps = () => {
    const getAllMenus = makeGetAllMenus();
    const getSelectedMenu = makeGetselectedMenu();
    const mapStateToProps = (state: any, props: any) => {
        return {
            allMenus: getAllMenus(state, props),
            selectedMenu: getSelectedMenu(state, props)
        };
    }
    return mapStateToProps;
}

const makeMapDispatchToProps = {
    setNextStepAction: setNextStep,
    setPreviousStepAction: setPreviousStep
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(MenusView);