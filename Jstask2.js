var data = [
    {principal:2500,time:1.8}, { principal:1000, time:5}, { principal:3000, time:1},{ principal:2000,time:3}
];
function interestCalculator(param) {
    for (let i = 0; i < param.length; i++) {
        if (param[i].principal >= 2500 && param[i].time >1 && param[i].time < 3) { 
            param[i].rate = 3;  
        } else if(param[i].principal >= 2500 && param[i].time >= 3) {
           param[i].rate = 4; 
        }
        else if (param[i].principal < 2500 || param[i].time <= 1 ) {
            param[i].rate = 2;
        } else { param[i].rate = 1;
            
        }
        param[i].interest = (param[i].principal * param[i].time * param[i].rate) / 100;
    }
    var interestData = [param];
console.log(interestData);
return interestData;
}

interestCalculator(data);
