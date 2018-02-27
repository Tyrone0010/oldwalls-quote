import * as React from 'react';
import {weddingMenu} from '../../../content/data/menus';

export default (props: any) => {
    const updatePanel = (menu: any) => {
        props.updateState('weddingMenus', menu);
    }

    return (
        <div >
            <h1>Choose Your Menu</h1>
            <div className="row">
                <div className="col-md-4">
                    {
                        weddingMenu(null).map((menus: any) => {
                            return (
                                <div>
                                    <div key={menus.title}>{menus.title}</div>
                                    {
                                        menus.items.map((menu: any) => {
                                            return(
                                                <div key={menu.name} className="radio">
                                                    <label>
                                                        <input type="radio" name={menus.typeName} value={menu.name} />
                                                        <a onClick={(e) => {updatePanel(menu)}}>{menu.name}</a>
                                                    </label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="col-md-8">
                    {props.chosenMenu &&
                    <div className="panel panel-default" >
                        <div className="panel-body menu">
                            <h3 className="menu">{props.chosenMenu.name} <span className="badge">Price per head: £{props.chosenMenu.pricePerHead}</span></h3>
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="img-responsive img-circle" src={props.chosenMenu.imageUrl}/>
                                </div>
                                <div className="col-md-8">&nbsp;</div>
                            </div>
                            {/*Starters*/}
                            {
                                props.chosenMenu.menu.starters &&
                                <h4 className="menu">
                                    {props.chosenMenu.menu.starters.title}
                                </h4>
                            }
                            <div className="list-group">
                                {
                                    props.chosenMenu.menu.starters &&
                                    props.chosenMenu.menu.starters.items.map((starters: any) => {
                                        return(
                                            <a href="#" className="list-group-item">
                                                <h5 className="list-group-item-heading menu">{starters.title}</h5>
                                                <p className="list-group-item-text menu-description">{starters.subText}</p>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            {/*Main*/}
                            {
                                props.chosenMenu.menu.main &&
                                <h4 className="menu">
                                    {props.chosenMenu.menu.main.title}
                                </h4>
                            }
                            <div className="list-group">
                                {
                                    props.chosenMenu.menu.main &&
                                    props.chosenMenu.menu.main.items.map((m: any) => {
                                        return(
                                            <a href="#" className="list-group-item">
                                                <h5 className="list-group-item-heading menu">{m.title}</h5>
                                                <p className="list-group-item-text menu-description">{m.subText}</p>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                            {/*Desert*/}
                            {
                                props.chosenMenu.menu.desserts &&
                                <h4 className="menu">
                                    {props.chosenMenu.menu.desserts.title}
                                </h4>
                            }
                            <div className="list-group">
                                {
                                    props.chosenMenu.menu.desserts &&
                                    props.chosenMenu.menu.desserts.items.map((dessert: any) => {
                                        return(
                                            <a href="#" className="list-group-item">
                                                <h5 className="list-group-item-heading menu">{dessert.title}</h5>
                                                <p className="list-group-item-text menu-description">{dessert.subText}</p>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}