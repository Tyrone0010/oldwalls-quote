import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import MenuSection from './MenuSection'
import MenuItem from './MenuItem'
import {setSelectedMenuSection} from '../../actions/menus'
import {makeGetselectedMenu, makeGetselectedMenuSection} from '../../selectors/menuSectionsSelector';

const MenuThreeCourse = (props: any) => {
    return (
        <div>
        { !props.selectedMenu && 
            <div>
                Please select a menu to view its contents
            </div>
        }
        {
            props.selectedMenuSection && 
            <div className="panel panel-default" >
                <div className="panel-body menu">
                    <h3 className="menu">{props.selectedMenuSection.name} <span className="badge">Price per head: £{props.selectedMenuSection.price}</span></h3>
                    {/* row for menu image */}
                    <div className="row">
                        <div className="col-md-4">
                            <img className="img-responsive img-circle" src={props.selectedMenu.imageUrl}/>
                        </div>
                        <div className="col-md-8">&nbsp;</div>
                    </div>
                    <div className="list-group">
                    {
                        props.selectedMenuSection && props.selectedMenuSection.subSections.map((subSection: any, index:number) => {
                            return(
                                <div>
                                    <h4 className="menu">{subSection.name}</h4>
                                    {
                                        subSection.menuItems.map((menuItem:any, index:number) => {
                                            return(
                                                <MenuItem
                                                    key={index}
                                                    menuItem={menuItem} />
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

const makeMapStateToProps = () => {
    const getSelectedMenu = makeGetselectedMenu();
    const getSelectedMenuSection = makeGetselectedMenuSection();
    const mapStateToProps = (state: any, props: any) => {
        return {
            selectedMenu: getSelectedMenu(state, props),
            selectedMenuSection: getSelectedMenuSection(state, props)
        };
    }
    return mapStateToProps;
}

export default connect(makeMapStateToProps, {})(MenuThreeCourse);

