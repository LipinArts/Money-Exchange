// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let coins = {};

    if (currency > 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return coins;
    }else{

    let balance = 0;

    let half_amount =  Math.floor(currency / 50);
    balance = currency % 50;
    (half_amount === 0 || half_amount < 0) ? null : coins.H = half_amount;

    let quarters_amount = Math.floor(balance / 25);
    balance = balance % 25;
    quarters_amount === 0 ? null : coins.Q = quarters_amount;

    let dimes_amount = Math.floor(balance / 10);
    balance = balance % 10;
    dimes_amount === 0 ? null : coins.D = dimes_amount;

    let nickel_amount = Math.floor(balance / 5);
    balance = balance % 5;
    nickel_amount === 0 ? null : coins.N = nickel_amount;

    balance === 0 ? null : coins.P = balance;
    }
    return coins;
}
