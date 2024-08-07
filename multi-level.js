const price = 8000;

if(price >= 6000){
    // 10% discount
    const discount = price *10 / 100
    const payAmmount = price - discount
    console.log(payAmmount)
}
else if(price > 7000){
    // 20% discount
    const discount = price *20 / 100
    const payAmmount = price - discount
    console.log(payAmmount)
}
else{
    console.log(price)
}


