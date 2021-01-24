    
    // https://github.com/Mesbaur/assignment.js
    
    
    //kilometerToMeter
    function kilometerToMeter(kilometer){
        var Meter = kilometer*1000 ;
        var fixedMeter = Meter.toFixed();
        return fixedMeter;
    }
    let result = kilometerToMeter(10);
    console.log(result);


    //budgetCalculator
    function budgetCalculator(Watch, Mobile, Laptop){
    let everyWatch = Watch * 1;
    let everyMobile = Mobile * 1;
    let everyLaptop = Laptop * 1;
    let total = everyWatch + everyMobile + everyLaptop;
    return total;   
    }
    let result = budgetCalculator(50, 100, 500);
    console.log(result);


    //hotelCost
    function hotelCost(hotelCost){
    var cost = 0;
    if(hotelCost <= 10){
        cost = hotelCost * 100;
    }
    else if(hotelCost <= 20){
        var first10 = 10 * 100;
        var remaining = hotelCost - 10;
        var second20 = remaining * (100 - 20);
        cost = first10 + second20;
    }
    else{
        var first10 = 10 * 100;
        var second20 = 10 * (100-20);
        var remaining = hotelCost - 20;
        var third30 = remaining * (100 - 50);
        cost = first10 + second20 + third30;
    }
    return cost;
    }
    total = hotelCost(12);
    console.log(total);

    
    //megaFriend
    function megaFriend(buddy) {
        return buddy.reduce(function (acc, val) {
            if (acc.length >= val.length) {
                return acc;
            } else {
                return val;
            }
        });
    }
    let allFriends = ['gulu', 'mulu', 'rakib', 'raiahan', 'Habibullah'];
    let result = megaFriend(allFriends);
    console.log(result);

