//Call Hello World
function HelloWorld(){
    alert("Hello World!");
}

function test(){
    alert("Test!");
}

function getValues(){
    let startValue = Number.parseInt(document.getElementById("startValue").value);
    //let endValue = Number.parseInt(document.getElementById("endValue").value);
    
    let endValue = document.getElementById("endValue").value;
    

    if(Number.isNaN(endValue)){
        alert("NAN ALERT");
    }
    endValue = Number.parseInt(endValue);
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        if(startValue == endValue){
            alert("Please enter two different numbers.")
        }
        else{
            createNumbers(startValue, endValue);
        }
    }
    else{
        alert("Please only enter intergers.");
    } 
}

function createNumbers(sV, eV){
    let numbers = [];
    if(sV < eV){
        for(let i = sV; i <= eV; i++){
            numbers.push(i);
        }
    }
    else{
        for(let i = sV; i >= eV; i-- ){
            numbers.push(i);
        }
    }
    displayNumbers(numbers);  
}

function displayNumbers(numbers){
    let tempRows = "";

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i]%2 == 0){
            tempRows += `<tr><td class="even">${numbers[i]}</td></tr>\n`
        }
        else{
            tempRows += `<tr><td class="odd">${numbers[i]}</td></tr>\n`   
        }
    }
    document.getElementById("results").innerHTML = tempRows;
}