import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import MenuSection from './MenuSection'
import {setSelectedMenuSection} from '../../actions/menus'
import {makeGetMenuSections} from '../../selectors/menuSectionsSelector';

const MenuSectionList = (props: any) => {
    return (
        <div className="panel panel-default" key={'menuSection' + props.index}>
            <div className="panel-heading">
                <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href={'#menuAcc' + props.menu.id}>
                        {props.menu.name}
                    </a>
                </h4>
            </div>
            <div id={`menuAcc${props.menu.id}`} className="panel-collapse collapse">
                <div className="panel-body">
                    {
                        props.menuSections && 
                        Object.keys(props.menuSections).map(function(section:any, index:number){
                            return(
                                <MenuSection 
                                    key={index}
                                    section = {props.menuSections[section]} 
                                    menu={props.menu} 
                                    setSelectedMenuSection = {props.setSelectedMenuSectionAction} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const makeMapStateToProps = () => {
    const getMenuSections = makeGetMenuSections();
    const mapStateToProps = (state: any, props: any) => {
        return {
            menuSections: getMenuSections(state, props),
        };
    }
    return mapStateToProps;
}

const makeMapDispatchToProps = {
    setSelectedMenuSectionAction: setSelectedMenuSection
}

export default connect(makeMapStateToProps, makeMapDispatchToProps)(MenuSectionList);

