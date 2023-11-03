//Dark Theme To Light Theme && Vice Versa

const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})




//Js Demo > Page ID #js001
function changePara(){

    let message = "You Changed Me, I Am The New Welcome Message! See The Power !?🫡";

    document.getElementById("welcome").innerHTML = message;
    document.getElementById("welcome").style.color = "#d78129";
}

//Js Demo > Page ID #js001
function circleArea(){

    let retRadius = prompt("Enter A Radius For Your Circle","enter any numerical value here in metres");
    let radius = retRadius;
    const myPieValue = 3.14;
    const area = myPieValue * (radius**2);

        window.alert("The Area Is " + area + "M²");
}

//Using CallBack Functions

/**
function divideNum(n, callback){ //function takes two arguments a number n and a callback function
    let operationEnd = n / 4;// a variable operationEnd is declared and initialized to a division operation

    callback(operationEnd);// the callback function is invoked and the result of the division passed as an argument
}

function logResult(operationEnd){
    document.getElementById("circle").innerHTML = operationEnd;//prints result within HTML element
}

divideNum(20, logResult); //logs 5


End*/


//Age Calculator Js Demo > Page ID #js001
function ageCalc(){

    let nameProm = prompt("Your Name", "enter your name here");
    let retProm = prompt(nameProm, "Hello, enter the year you were born in the format yyyy e.g. 1996");

    let yob = retProm;
    let cry = 2023;
    const age = cry-yob;

    document.getElementById("result").innerHTML = nameProm + ", You Are " + age + " Years Old";
    document.getElementById("result").style.color = "#d78129";
}


//Form Validation > Homepage


function formHandler(){
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");


        const alerts = document.getElementsByClassName("myalert");
        for (var k = 0; k < alerts.length; k++){
            alerts[k].style.color = "red";
        }

        const focusOutliner = document.getElementsByClassName("alertfocus");
        for (var f = 0; f < focusOutliner.length; f++){
            focusOutliner[f].style.outline = "1px solid red";
        }

    if(name.value == ""){document.getElementById("namefield_alert").innerHTML = "Please Enter Your Name!"; window.open("home.html#namelab", "_self");}

    if(phone.value == ""){document.getElementById("telfield_alert").innerHTML = "Please Enter Your Phone Number!"; window.open("home.html#phonelab", "_self");}

    if(email.value == ""){document.getElementById("mailfield_alert").innerHTML = "Please Enter Your E-Mail Address!"; window.open("home.html#emaillab", "_self");}

    if(subject.value == ""){
        document.getElementById("subfield_alert").innerHTML = "Please Enter The Subject You Wish To Address!"; 

        if(subject.value == "" && (name.value == "" || phone.value == "" || email.value)){
            window.open("home.html#namelab", "_self");
        }
    }

    if(message.value == ""){
        document.getElementById("textbox_alert").innerHTML = "Please Enter Your Message Here!";

        if(message.value == "" && (name.value == "" || phone.value == "" || email.value)){
            window.open("home.html#namelab", "_self");
        }
    }


    if(!name.value == ""){
        document.getElementById("namefield_alert").style.display = "none";
        document.getElementById("name").style.outline = "none";
    }
    if(!phone.value == ""){
        document.getElementById("telfield_alert").style.display = "none";
        document.getElementById("phone").style.outline = "none";
    }
    if(!email.value == ""){
        document.getElementById("mailfield_alert").style.display = "none";
        document.getElementById("email").style.outline = "none";
    }
    if(!subject.value == ""){
        document.getElementById("subfield_alert").style.display = "none";
        document.getElementById("subject").style.outline = "none";
    }
    if(!message.value == ""){
        document.getElementById("textbox_alert").style.display = "none";
        document.getElementById("message").style.outline = "none";
    }
}

