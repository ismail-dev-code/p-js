let countries = ["bangladesh", "pakistan", "india", "indonesia", "uae"];
const isCountryBangladesh = true;
const isPakistanRich = false;

if(countries.includes("bangladesh") && isCountryBangladesh===true){
    if(countries.includes("uae")){
        console.log("you are emirati 1");
    }
    else{
        console.log("you are unknown");
    }
}
else if(countries.includes("pakistan") && isPakistanRich===false){
    console.log("you are pakistani");
}
else if(countries.includes("india")){
    console.log("you are indian");
}
else if(countries.includes("uae")){
    console.log("you are emirati");
}
else{
    console.log("you are mango people");
}
