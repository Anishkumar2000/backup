async function one(){
    setTimeout(two,10000);
}
async function two(){
    let a=60;
    let b=20;
    let c = a+b;
    console.log(c);
}

one()