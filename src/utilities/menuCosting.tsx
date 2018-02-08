
const menuCosting = (adultNumbers: number, childNumbers: number, teenNumbers: number, eveningNumbers: number, menu: any) => {
    switch(menu.typeName){
        case "drinks":
            return adultNumbers * menu.pricePerHead;
        case "breakfast":
            return (adultNumbers + childNumbers + teenNumbers) * menu.pricePerHead;
        case "evening":
            return eveningNumbers * menu.pricePerHead;
        default:
            return 0;
    }
}

const totalCosting = (adultNumbers: number, childNumbers: number, teenNumbers: number, eveningNumbers: number, weddingMenus: any) => {
    let totalCost = 0;
    weddingMenus.keys.map((menu: any) =>{
        totalCost += menuCosting(adultNumbers, childNumbers, teenNumbers, eveningNumbers, weddingMenus[menu]);
    })
    return totalCost;
}

export {menuCosting, totalCosting}