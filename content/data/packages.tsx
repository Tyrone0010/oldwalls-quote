const weddingPackage = (packageData: any, date: Date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let data = [
        {
            name: "Ultimate Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [5],//["Fri"],
            monthsAvailable: [4,5,6,7,8],//["May", "Jun", "Jul", "Aug", "Sep"],
            cost: 5900
        },
        {
            name: "Ultimate Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [6],//["Sat"],
            monthsAvailable: [4,5,6,7,8],//["May", "Jun", "Jul", "Aug", "Sep"],
            cost: 6900
        },
        {
            name: "Mid-Week Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [1,2,3],//["Mon", "Tue", "Wed"],
            monthsAvailable: [4,5,6,7,8],//["May", "Jun", "Jul", "Aug", "Sep"],
            cost: 2900
        },
        {
            name: "Mid-Week Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [4],//["Thur"],
            monthsAvailable: [4,5,6,7,8],//["May", "Jun", "Jul", "Aug", "Sep"],
            cost: 3900
        },
        {
            name: "Mid-Week Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [0],//["Sun"],
            monthsAvailable: [4,5,6,7,8],//["May", "Jun", "Jul", "Aug", "Sep"],
            cost: 4500
        },
        {
            name: "Mid-Season Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [1,2,3,4],//["Mon", "Tue", "Wed", "Thur"],
            monthsAvailable: [2,3,9],//["Mar", "Apr", "Oct"],
            cost: 2500
        },
        {
            name: "Mid-Season Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [5],//["Fri"],
            monthsAvailable: [2,3,9],//["Mar", "Apr", "Oct"],
            cost: 3900
        },
        {
            name: "Mid-Season Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [6],//["Sat"],
            monthsAvailable: [2,3,9],//["Mar", "Apr", "Oct"],
            cost: 1900
        },
        {
            name: "Mid-Season Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [0],//["Sun"],
            monthsAvailable: [2,3,9],//["Mar", "Apr", "Oct"],
            cost: 3400
        },
        {
            name: "Winter Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [5,6],//["Fri", "Sat"],
            monthsAvailable: [10,11,0,1],//["Nov", "Dec", "Jan", "Feb"],
            cost: 2900
        },
        {
            name: "Winter Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [0,1,2,3,4],//["Sun", "Mon","Tue", "Wed", "Thur"],
            monthsAvailable: [10,11,0,1],//["Nov", "Dec", "Jan", "Feb"],
            cost: 1900
        },
        {
            name: "Whirlwind Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [5,6,0],//["Fri", "Sat", "Sun"],
            monthsAvailable: [0,1,2,3,4,5,6,7,8,9,10,11],//["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            cost: 2900
        },
        {
            name: "Whirlwind Wedding Package",
            season: "high season",
            getDayString: (day: number) => {return days[day]},
            daysAvailable: [1,2,3,4],//["Mon","Tue", "Wed", "Thur"],
            monthsAvailable: [0,1,2,3,4,5,6,7,8,9,10,11],//["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            cost: 2200
        }
    ];

    if(packageData){
        data = packageData
    }

    const day = date.getDay();
    const month = date.getMonth();

    for(let p = 0; p < data.length; p++){
        // const dataX = data[p];
        // const daysX = dataX.daysAvailable.indexOf(day);
        // const monthsX = dataX.monthsAvailable.indexOf(month);

        if(data[p].daysAvailable.indexOf(date.getDay()) >= 0 && data[p].monthsAvailable.indexOf(date.getMonth()) >= 0){
            return data[p];
        }
    }

    return null;

}

export {weddingPackage}