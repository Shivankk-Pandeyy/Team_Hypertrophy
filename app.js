let H_bmi=document.getElementById('height');
let W_bmi=document.getElementById('weight');
let btn_bmi=document.getElementById('btn');
const bmi=()=>{
    let height=(parseFloat(H_bmi.value))/100;
    let weight=parseFloat(W_bmi.value);
    if(height && weight){
    let bmi=(weight/(height*height)).toFixed(2);
    console.log(bmi);
    let bmi_ans=document.getElementById('output');
    bmi_ans.innerHTML=`BMI= ${bmi}`;
    let display=document.getElementById('display_bmi');
    if(bmi<18.5){
        display.innerHTML="UNDERWEIGHT";
    }
    else if(bmi>18.5 && bmi<24.9){
        display.innerHTML="NORMAL";
    }    
    else if(bmi>25 && bmi<29.9){
        display.innerHTML="OVERWEIGHT";
    }
    else if(bmi>30 && bmi<34.9){
        display.innerHTML="OBESE";
    }
    else if(bmi>35){
        display.innerHTML="EXTREMELY OBESE";
    }
}
    else{
        alert("You haven't added either Height or Weight");
    }
}
btn_bmi.addEventListener('click',bmi)
//BMR CALCULATION 
let H_bmr=document.getElementById('heightbmr');
let W_bmr=document.getElementById('weightbmr');
let btn_bmr=document.getElementById('btnbmr');
let age=document.getElementById('age');
let gen=document.getElementById('gender');
const bmr=() =>{
    let height=parseInt(H_bmr.value);
    let weight=parseInt(W_bmr.value);
    let agebmr=parseInt(age.value);
    let gender=gen.value;
    if(height && weight && agebmr &&gender){
    if(document.getElementById('gender').value.toString().toLowerCase()=='male'){
        let bmrans=(10*weight)+(6.25*height)-(5*agebmr)+5;
        console.log(bmrans);
        let bmr_ans=document.getElementById('display_bmr');
        bmr_ans.innerHTML=`Maintainence Calories = ${bmrans}Calories/Day`
    }
    else if(document.getElementById('gender').value.toString().toLowerCase()=='female'){
        let bmrans=(10*weight)+(6.25*height)-(5*agebmr)-16;
        console.log(bmrans);
        let bmr_ans=document.getElementById('display_bmr');
        bmr_ans.innerHTML=`Maintainence Calories = ${bmrans}Calories/Day`
    }
    }
    else{
        alert("Add gender as male or female");
    }
}

//MOTIVATION 

btn_bmr.addEventListener('click',bmr);
let index = Math.floor(Math.random()*1644);
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById("qot").innerHTML=(data[index].text);
        document.getElementById("author").innerHTML=(data[index].author);
    });



    //CALORIE CALCULATOR
    var query = '1lb brisket and fries'
    // $.ajax({
    //     method: 'GET',
    //     url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
    //     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
    //     contentType: 'application/json',
    //     success: function(result) {
    //         console.log(result);
    //     },
    //     error: function ajaxError(jqXHR) {
    //         console.error('Error: ', jqXHR.responseText);
    //     }
    // });
