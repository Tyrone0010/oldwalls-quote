const weddingMenu = (menuData: any) => {
    let data = [
        {
            title: "Wedding Breakfast",
            items: [
                {
                    name: "Platinum Menu",
                    pricePerHead: 35,
                    imageUrl: "",
                    menu: {
                        starters: {
                            title: "STARTERS",
                            items: [
                                {
                                    title: "SEARED KING SCALLOPS",
                                    subText: "Serrano ham, dressed baby leaf salad, edible flowers, avocado, lime and wasabi foam"
                                }
                            ]
                        }
                    }
                },
                {
                    name: "Gold Menu",
                    pricePerHead: 25,
                    imageUrl: "",
                    menu: {
                        starters: {
                            title: "To Start",
                            items: [
                                {
                                    title: "Soup of the season",
                                }
                            ]
                        }
                    }
                }
            ]
        },
        {
            title: "Drinks",
            items: [
                {
                    name: "Drinks 1",
                    pricePerHead: 5,
                    imageUrl: "",
                    menu: {
                    }
                }
            ]
        },
        {
            title: "Evening Buffet",
            items: [
                {
                    name: "Picnic",
                    pricePerHead: 15,
                    imageUrl: "",
                    menu: {
                        main: {
                            items: [
                                {title: "House pressed terrine"},
                                {title: "Finger sandwiches (chef selection)"},
                                {title: "Coronation chicken bruschetta"},
                            ]
                        }
                    }
                }
            ]
        },
    ];

    return data;
}

export {weddingMenu}