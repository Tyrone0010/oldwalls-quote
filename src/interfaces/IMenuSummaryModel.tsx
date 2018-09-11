interface IMenuSummaryModel{
    menuName: string,
    sectionName: string,
    price: number,
}

class MenuSummaryModel implements IMenuSummaryModel {
    menuName: '';
    sectionName: '';
    price: 0;
    
    constructor(){
        
    }
}


export {IMenuSummaryModel, MenuSummaryModel}