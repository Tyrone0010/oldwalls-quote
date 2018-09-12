import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import {makeGetSelectedMenus} from '../../selectors/menuSectionsSelector'

const MenuSection = (props: any) => {
    const isMenuSelected = (sectionId: number) => {
        var returnValue = false;
        Object.keys(props.selectedMenus).map((selectedMenu:any) => {
            //object keys are aleways of type string 
            if(selectedMenu == sectionId){
                returnValue = true;
            }
        })
        return returnValue;
    }

    return (
        <div key={props.section.title} className="radio">
            <label>
                <input type="radio" checked={isMenuSelected(props.section.id)}
                    name={props.menu.name} value={props.section.id} />
                    <a onClick={(e) => {props.setSelectedMenuSection(props.menu.id, props.section.id)}}>{props.section.name}</a>
            </label>
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

export default connect(makeMapStateToProps, makeMapDispatchToProps)(MenuSection);