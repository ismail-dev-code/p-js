
let height = 172;
let weight = 60;
let bmi = weight / ((height / 100) * (height / 100));
if(bmi<=18.5){
    console.log('you are underweight.');
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log('you are normal.');
}
else if(bmi>=25 && bmi <=29.9){
    console.log('you are overweight.');
}
else{
    console.log('you are obese.');
}