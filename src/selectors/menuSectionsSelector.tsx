import { createSelector } from 'reselect';

const menuSectionsSelector =  (state:any, props:any) =>{
    const menuSections: any = {}
    Object.keys(state.menuSections).map(function (menuSection){
        if(state.menuSections[menuSection].menuId === props.menu.id){
            menuSections[menuSection] = state.menuSections[menuSection];
        }
    });

    return menuSections;
}

const selectedMenuSelector = (state: any, props:any) =>{
    //get menu
    var menu = state.menus[state.selectedMenuList.selectedMenu.menuId];
    if(!menu){
        return null;
    }
    return menu;
}

const selectedMenuSectionSelector = (state: any, props:any) =>{
    //get menu
    var menu = state.menus[state.selectedMenuList.selectedMenu.menuId];
    if(!menu){
        return null;
    }
    //get menu section
    var topMenuSection = state.menuSections[state.selectedMenuList.selectedMenu.sectionId]
    //get sub sections
    var subSections:any = [];
    state.menuSections.all.map(function(id:string){
        var menuSection = state.menuSections[id];
        if(menuSection.parentId === topMenuSection.id){
            subSections.push(state.menuSections[id])
        }
    })
    //get menu items
    if(subSections.length > 0){
        subSections.map(function(subSection:any){
            state.menuItems.all.map(function(menuItemId:string){
                if(state.menuItems[menuItemId].parentId === subSection.id){
                    subSections.forEach((parentSection:any) => {
                        if(parentSection.id === subSection.id){
                            if(!parentSection.menuItems){
                                parentSection.menuItems = [];
                            }
                            parentSection.menuItems.push(state.menuItems[menuItemId]);
                        }
                    });
                }
            })
        }) 
        topMenuSection.subSections = subSections;
    }else{
        topMenuSection.menuItems = [];
        state.menuItems.all.map(function(id:string){
            if(state.menuItems[id].parentId === topMenuSection.id){
                topMenuSection.menuItems.push(state.menuItems[id])
            }
        })
    }
    return topMenuSection;
}

const allMenuSectionsSelector = (state: any, props:any) =>{
    //get menu section
    return state.menuSections;
}

const selectedMenusSelector = (state: any, props:any) =>{
    var menus = state.selectedMenuList.selectedMenus
    if(!menus){
        return null;
    }
    return menus;
}

export const makeGetMenuSections= () => {
    return createSelector(
        [menuSectionsSelector],
        (menuSections) => {
            return  menuSections;
        }
    )
}

export const makeGetSelectedMenus = () => {
    return createSelector(
        [selectedMenusSelector],
        (selectedMenus) => {
            return  selectedMenus;
        }
    )
}

export const makeGetselectedMenu = () => {
    return createSelector(
        [selectedMenuSelector],
        (selectedMenu) => {
            return  selectedMenu;
        }
    )
}

export const makeGetselectedMenuSection = () => {
    return createSelector(
        [selectedMenuSectionSelector],
        (selectedSection:any) => {
            return selectedSection;
        }
    )
}

export const makeGetAllMenuSections = () => {
    return createSelector(
        [allMenuSectionsSelector],
        (allMenuSections:any) => {
            return allMenuSections;
        }
    )
}