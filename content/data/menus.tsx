const weddingMenu = (menuData: any) => {
    let data = [
        {
            title: "Wedding Breakfast",
            typeName: "breakfast",
            items: [
                {
                    name: "Platinum Menu",
                    typeName: "breakfast",
                    pricePerHead: 59,
                    imageUrl: "/content/images/platinum-main.jpg",
                    menu: {
                        starters: {
                            title: "STARTERS",
                            items: [
                                {
                                    title: "SEARED KING SCALLOPS",
                                    subText: "Serrano ham, dressed baby leaf salad, edible flowers, avocado, lime and wasabi foam"
                                },
                                {
                                    title: "BEETROOT AND VODKA CURED SALMON",
                                    subText: "Crème fraiche, pickled cucumber, thyme crusted bruschetta"
                                },
                                {
                                    title: "FIG TART TATIN",
                                    subText: "Perl wen, roasted red shallot, herb salad, textured parmesan, walnut and pink peppercorn alioli"
                                },
                                {
                                    title: "TARRAGON CHICKEN AND HAM HOCK TERRINE",
                                    subText: "Honey, mustard and pea salad"
                                },
                                {
                                    title: "TIAN OF HARISSA & ALMOND ROASTED AUBERGINE",
                                    subText: "Lemon & parsley taboulet, sauce Choron, confit cherry plum tomatoes"
                                },
                                {
                                    title: "FAIRYHILL FRESH FISH AND SEAFOOD CHOWDER",
                                    subText: "Garlic aioli, rarebit beignet"
                                },
                                {
                                    title: "GOWER GARDEN SOUP OF THE SEASON",
                                    subText: "homemade rustic bread"
                                },
                            ]
                        },
                        main: {
                            title: "MAIN DISHES",
                            items: [
                                {
                                    title: "FILLET OF WELSH BEEF",
                                    subText: "Beef marrow, braised ox cheek, wild mushroom puree, Anna potatoes, truffled Madeira Jus"
                                },
                                {
                                    title: "RACK OF GOWER LAMB",
                                    subText: "Baked aubergine and tomato gateau, potato dauphinoise, rosemary jus, minted hollandaise"
                                },
                                {
                                    title: "ROAST BREAST & CONFIT LEG OF GUINEA FOWL",
                                    subText: "Creamed baby gem, garden peas, lardons of bacon, warm crushed potato salad, mustard grain sauce"
                                },
                                {
                                    title: "PAN SEARED LOCAL SEABASS",
                                    subText: "Potato puree, wilted baby spinach, roast fennel, champagne emulsion, vegetable julienne"
                                },
                                {
                                    title: "ROASTED VEGETABLE BELL PEPPER AND SAFFRON RICE STRUDEL",
                                    subText: "Studded with Perl Wen, Lyonnaise potatoes, Provençale style dressing"
                                },
                                {
                                    title: "FREE RANGE CHICKEN BREAST",
                                    subText: "Wild mushrooms, pendryn cream sauce, Carmarthenshire wrapped asparagus, laverbread potato rosti"
                                },
                            ]
                        },
                        desserts: {
                            title: "DESSERTS",
                            items: [
                                {
                                    title: "CHOUX BUNS, CHOCOLATE, CRÈME PATTISIER",
                                    subText: "Praline & Tonka bean ice cream"
                                },
                                {
                                    title: "DECONSTRUCTED LEMON MERINGUE PIE",
                                    subText: "Red berries, yogurt ice cream"
                                },
                                {
                                    title: "COCONUT PANNA COTTA",
                                    subText: "Honey & almond granola, fresh mango, passion fruit coulis"
                                },
                                {
                                    title: "SALTED CARAMEL CRÈME BRULEE",
                                    subText: "Vanilla shortbread, berry compote"
                                },
                                {
                                    title: "DARK CHOCOLATE TART",
                                    subText: "Pistachio anglaise & honeycomb"
                                },
                                {
                                    title: "SUGAR GLAZED BRIOCHE BREAD AND BUTTER PUDDING",
                                    subText: "Grilled pears, sauce anglaise"
                                },
                            ]
                        }
                    }
                },
                {
                    name: "Diamond Menu",
                    typeName: "breakfast",
                    pricePerHead: 69,
                    imageUrl: "",
                    menu: {
                        starters: {
                            title: "STARTERS",
                            items: [
                                {
                                    title: "SEARED KING SCALLOPS",
                                    subText: "Serrano ham, dressed baby leaf salad, edible flowers, avocado, lime and wasabi foam"
                                },
                                {
                                    title: "BEETROOT AND VODKA CURED SALMON",
                                    subText: "Crème fraiche, pickled cucumber, thyme crusted bruschetta"
                                },
                                {
                                    title: "FIG TART TATIN",
                                    subText: "Perl wen, roasted red shallot, herb salad, textured parmesan, walnut and pink peppercorn alioli"
                                },
                                {
                                    title: "TARRAGON CHICKEN AND HAM HOCK TERRINE",
                                    subText: "Honey, mustard and pea salad"
                                },
                                {
                                    title: "TIAN OF HARISSA & ALMOND ROASTED AUBERGINE",
                                    subText: "Lemon & parsley taboulet, sauce Choron, confit cherry plum tomatoes"
                                },
                                {
                                    title: "FAIRYHILL FRESH FISH AND SEAFOOD CHOWDER",
                                    subText: "Garlic aioli, rarebit beignet"
                                },
                                {
                                    title: "GOWER GARDEN SOUP OF THE SEASON",
                                    subText: "homemade rustic bread"
                                },
                            ]
                        },
                        main: {
                            title: "MAIN DISHES",
                            items: [
                                {
                                    title: "FILLET OF WELSH BEEF",
                                    subText: "Beef marrow, braised ox cheek, wild mushroom puree, Anna potatoes, truffled Madeira Jus"
                                },
                                {
                                    title: "RACK OF GOWER LAMB",
                                    subText: "Baked aubergine and tomato gateau, potato dauphinoise, rosemary jus, minted hollandaise"
                                },
                                {
                                    title: "ROAST BREAST & CONFIT LEG OF GUINEA FOWL",
                                    subText: "Creamed baby gem, garden peas, lardons of bacon, warm crushed potato salad, mustard grain sauce"
                                },
                                {
                                    title: "PAN SEARED LOCAL SEABASS",
                                    subText: "Potato puree, wilted baby spinach, roast fennel, champagne emulsion, vegetable julienne"
                                },
                                {
                                    title: "ROASTED VEGETABLE BELL PEPPER AND SAFFRON RICE STRUDEL",
                                    subText: "Studded with Perl Wen, Lyonnaise potatoes, Provençale style dressing"
                                },
                                {
                                    title: "FREE RANGE CHICKEN BREAST",
                                    subText: "Wild mushrooms, pendryn cream sauce, Carmarthenshire wrapped asparagus, laverbread potato rosti"
                                },
                            ]
                        },
                        desserts: {
                            title: "DESSERTS",
                            items: [
                                {
                                    title: "CHOUX BUNS, CHOCOLATE, CRÈME PATTISIER",
                                    subText: "Praline & Tonka bean ice cream"
                                },
                                {
                                    title: "DECONSTRUCTED LEMON MERINGUE PIE",
                                    subText: "Red berries, yogurt ice cream"
                                },
                                {
                                    title: "COCONUT PANNA COTTA",
                                    subText: "Honey & almond granola, fresh mango, passion fruit coulis"
                                },
                                {
                                    title: "SALTED CARAMEL CRÈME BRULEE",
                                    subText: "Vanilla shortbread, berry compote"
                                },
                                {
                                    title: "DARK CHOCOLATE TART",
                                    subText: "Pistachio anglaise & honeycomb"
                                },
                                {
                                    title: "SUGAR GLAZED BRIOCHE BREAD AND BUTTER PUDDING",
                                    subText: "Grilled pears, sauce anglaise"
                                },
                            ]
                        }
                    }
                },
                {
                    name: "Gold Menu",
                    typeName: "breakfast",
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
            typeName: "drinks",
            items: [
                {
                    name: "SIGNATURE",
                    typeName: "drinks",
                    pricePerHead: 15,
                    imageUrl: "",
                    menu: {
                        main: {
                            items:[
                                {title: "Pimms/Winter Pimms and Corona on arrival"},
                                {title: "1/3 bottle of wine"},
                                {title: "Prosecco toast"},
                            ]
                        }
                    }
                },
                {
                    name: "GOLD",
                    typeName: "drinks",
                    pricePerHead: 20,
                    imageUrl: "",
                    menu: {
                        main: {
                            items:[
                                {title: "Prosecco, Peroni or Salitos on arrival"},
                                {title: "Half a bottle of wine (Gold selection)"},
                                {title: "Prosecco toast"},
                            ]
                        }
                    }
                },
                {
                    name: "PLATINUM",
                    typeName: "drinks",
                    pricePerHead: 25,
                    imageUrl: "",
                    menu: {
                        main: {
                            items:[
                                {title: "A choice of our house champagne, Welsh sparkling wine, Peroni or Salitos on arrival"},
                                {title: "Half a bottle of wine (Platinum selection)"},
                                {title: "House champagne for toasting"},
                            ]
                        }
                    }
                },
                {
                    name: "DIAMOND",
                    typeName: "drinks",
                    pricePerHead: 30,
                    imageUrl: "",
                    menu: {
                        main: {
                            items:[
                                {title: "Taittinger champagne, bespoke cocktail, Gower Gold or Peroni on arrival"},
                                {title: "Half a bottle of wine (Diamond selection)"},
                                {title: "Taittinger champagne for toasting"},
                            ]
                        }
                    }
                },
                {
                    name: "RUSTIC",
                    typeName: "drinks",
                    pricePerHead: 25,
                    imageUrl: "",
                    menu: {
                        main: {
                            items:[
                                {title: "Gower Brewery cask or Birra Moretti or bespoke cocktail on arrival"},
                                {title: "A shot of Penderyn Whisky or Welsh sparkling wine for toast"},
                                {title: "Half bottle of Welsh wine for table"},
                            ]
                        }
                    }
                }
            ]
        },
        {
            title: "Evening Buffet",
            typeName: "evening",
            items: [
                {
                    name: "PICNIC",
                    typeName: "evening",
                    pricePerHead: 15,
                    imageUrl: "",
                    menu: {
                        main: {
                            items: [
                                {title: "House pressed terrine"},
                                {title: "Finger sandwiches (chef selection)"},
                                {title: "Coronation chicken bruschetta"},
                                {title: "Welsh Hafod cheese beignet"},
                                {title: "Scotch Eggs"},
                                {title: "Tomato and cardamom chutney"},
                                {title: "Triple cooked chips"},
                                {title: "Dressed green salad"},
                                {title: "Mini Lemon meringue Tart"},
                                {title: "Artisan breads"},
                            ]
                        }
                    }
                },
                {
                    name: "DEEP SOUTH",
                    typeName: "evening",
                    pricePerHead: 18.50,
                    imageUrl: "",
                    menu: {
                        main: {
                            items: [
                                {title: "Bourbon glazed pulled pork"},
                                {title: "Brioche baps"},
                                {title: "Spiced fruit coleslaw"},
                                {title: "Dressed leaf salad"},
                                {title: "Sweetcorn & bell pepper fritters"},
                                {title: "Cajun rubbed potato wedges"},
                                {title: "Boston bean burger with Monterey Jack cheese (v)"},
                            ]
                        }
                    }
                },
                {
                    name: "BBQ",
                    typeName: "evening",
                    pricePerHead: 21.50,
                    imageUrl: "",
                    menu: {
                        main: {
                            items: [
                                {title: "Lamb & feta burger, with caramelised red onions and Moroccan spices"},
                                {title: "Beef burger with smoked bacon, jalapeno jam and Monterey Jack cheese"},
                                {title: "Chickpea, courgette & halloumi patty (v)"},
                                {title: "Brioche baps"},
                                {title: "Dressed leaf salad"},
                                {title: "Beef tomato, mozzarella, basil"},
                                {title: "Rainbow coleslaw"},
                                {title: "Pickles, relishes"},
                                {title: "Fries"},
                            ]
                        }
                    }
                },
                {
                    name: "ASIAN FUSION",
                    typeName: "evening",
                    pricePerHead: 23.50,
                    imageUrl: "",
                    menu: {
                        main: {
                            items: [
                                {title: "Marinated chicken skewers, satay, crushed peanuts"},
                                {title: "Panko crumbed salmon & prawn fish cakes, wasabi and lime"},
                                {title: "Shredded beef, black bean & oyster glaze stir fry"},
                                {title: "Chili and coconut egg noodles"},
                                {title: "Shitake fried rice, edamame beans, spring onions dressed in lime and ginger (v)"},
                                {title: "Chinese leaf salad with spring onions, almonds sesame oil"},
                                {title: "Crispy vegetable and hoisin spring rolls"},
                            ]
                        }
                    }
                },
                {
                    name: "SEAFOOD",
                    typeName: "evening",
                    pricePerHead: 30,
                    imageUrl: "",
                    menu: {
                        main: {
                            items: [
                                {title: "Stacked on high tiered stands"},
                                {title: "Mussels, clams, molasses, oysters and sweet crab served on crushed ice"},
                                {title: "Local seaweed with red wine & shallot dressing"},
                                {title: "Cucumber jelly"},
                                {title: "Bloody Mary gazpacho"},
                                {title: "Lemon and garlic aioli"},
                                {title: "Dressed mixed leaf salad"},
                                {title: "Artisan breads"},
                            ]
                        }
                    }
                },
            ]
        },
    ];

    return data;
}

export {weddingMenu}