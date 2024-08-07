const age = 20;
const price = 5000;
const toy = true;
 
if (age <= 8 && toy == true) {
    console.log('free khao and khelo');
}
else if (age >= 8) {
    // 15% discount
    const discount = price * 15 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount);
}
else if (age == 20 && toy == true){
    // 3% discount
    const discount = price * 3 / 100;
    const payAmmount = price - discount;
    console.log(payAmmount);
}
else {
    console.log(price);
}
