<<<<<<< HEAD
"use strict";

//Dark Theme To Light Theme && Vice Versa

const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})

//Scroll To Top Button Display Settings
window.addEventListener("scroll", () => {
    const toTop = document.getElementById("top_scroller");

    if(window.scrollY > 0){
        toTop.style.display = "flex";
    }
    else{
        toTop.style.display = "none";
    }
})


//Form Validation > Homepage

function formHandler() {
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");


        const alerts = document.getElementsByClassName("myalert"); // returns a live HTMLCollection containing all elements in class 'myalert'

        for (let k = 0; k < alerts.length; k++) {
            alerts[k].style.color = "red";
        }

        const focusOutliner = document.getElementsByClassName("alertfocus"); // returns a live HTMLCollection containing all elements in class 'alertfocus'

        for (let f = 0; f < focusOutliner.length; f++) {
            focusOutliner[f].style.outline = "1px solid red";
        }

    if (name.value == "") {document.getElementById("namefield_alert").innerHTML = "Please Enter Your Name!"; window.open("home.html#namelab", "_self");}

    if (phone.value == "") {document.getElementById("telfield_alert").innerHTML = "Please Enter Your Phone Number!"; window.open("home.html#phonelab", "_self");}

    if (email.value == "") {document.getElementById("mailfield_alert").innerHTML = "Please Enter Your E-Mail Address!"; window.open("home.html#emaillab", "_self");}

    if (subject.value == "") {
        document.getElementById("subfield_alert").innerHTML = "Please Enter The Subject You Wish To Address!";

        if (subject.value == "" && (name.value == "" || phone.value == "" || email.value)) {
            window.open("home.html#namelab", "_self");
        }
    }

    if (message.value == "") {
        document.getElementById("textbox_alert").innerHTML = "Please Enter Your Message Here!";

        if (message.value == "" && (name.value == "" || phone.value == "" || email.value)) {
            window.open("home.html#namelab", "_self");
        }
    }


    if (name.value !== "") {
        document.getElementById("namefield_alert").style.display = "none";
        document.getElementById("name").style.outline = "none";
    }
    if (phone.value !== "") {
        document.getElementById("telfield_alert").style.display = "none";
        document.getElementById("phone").style.outline = "none";
    }
    if (email.value !== "") {
        document.getElementById("mailfield_alert").style.display = "none";
        document.getElementById("email").style.outline = "none";
    }
    if (subject.value !== "") {
        document.getElementById("subfield_alert").style.display = "none";
        document.getElementById("subject").style.outline = "none";
    }
    if (message.value !== "") {
        document.getElementById("textbox_alert").style.display = "none";
        document.getElementById("message").style.outline = "none";
    }

    else {
        return true;
    }
}


//Js Demo > Page ID #js001 (Change Element with click of a button ++ Array declaration and operations)
function changePara() {

    //Declaration of an Array named message
    const message = ["JavaScript Frameworks:: Node.js", "React", "Express.js", "Vue.js","Angular", person.jobDesc];

    //Add an element to the array using push() method; Remove array element> pop()
    message.push(person.lastName);
    message.pop();//removes the element at the last index position of the array
    

    //Add an element to the array using length property
    message[message.length] = person.firstName;

    message.push(employee2.deptName);

    //message.splice(1,2) where the method splice() can been used to remove 2 elements starting from the elements at index 1

    document.getElementById("welcome").innerHTML = new Date()  + "<br><br>" + message.join(" || ");// join() method Overrides automatic toString() and displays joined array items using separator you specify as parameter.

    document.getElementById("welcome").style.color = "var(--color-lowerheadings)";
    document.getElementById("in_action").innerHTML = "Explore The Rest Of This Page, Let's Get To Know Each Other" + "<img src='images/javascript_icon.png' width='40px' height='40px'>";
}

//Js Demo > Page ID #js001 (Area of a circle with error handling)
function circleArea() {

    const radius = document.getElementById("radius_input").value;
    const myPieValue = Math.PI;

    const circArea = myPieValue * Math.pow(radius, 2);
    document.getElementById("circle").innerHTML = "The area of your imaginary circle is: " + Math.round(circArea) + "M² (rounded)";


    const errorDisplayer = document.getElementById("err_message");
    errorDisplayer.innerHTML = "";

    try{
        if(radius.trim() == "") throw "I cannot calculate the area if you don't give me the radius, Come on! it works if we both participate🤷🏿‍♂️";
        if(isNaN(radius)) throw "I mean... everyone knows a circle's radius has to be a number except you ? 🤷🏿‍♂️🤔. Don't make Mr. JavaScript give up on you already" + "<img src='images/BigEye_bot.gif' width='50px' height='50px'>";
        if(radius < 1 || radius > 100) throw "there is your area, but we agreed to work with values ranging in the region between 1 and 100. It's in the manual. I bet you didn't read it" + "<img src='images/BigEye_bot.gif' width='50px' height='50px'>";
    }

    catch(err) {
        errorDisplayer.innerHTML = "Hey! " + err;
    }

    finally {
        document.getElementById("radius_input").value = "";
    }
}



//Js Demo > Page ID #js001 (Age Calculator)
function ageCalc() {

    let usersName = prompt("Your Name", "Hello🖐️, enter your name here");
    let birthYear = prompt(usersName, "enter the year you were born in the format yyyy e.g. 1996");

    let currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    document.getElementById("result").innerHTML = usersName + ", You Are " + age + " Years Old";
    document.getElementById("result").style.color = "var(--color-lowerheadings)";

    const ageCalcError = document.getElementById("error_result");
    ageCalcError.innerHTML = "";

    try{
        if(birthYear < 1800) throw " your age indicates you are nowhere near from this century. You come from the past ages ey! Tell me about the rise of The Kingdom Of Ancient Kemet!😃";
        if(birthYear > 1800 && birthYear <= 1923) throw " you passed the 100 year old mark! It seems we can learn alot from each other in the next few years🥋";
        if(birthYear <= 2023 && birthYear >= 2013) throw " you are still a baby, come back after a few years, JS is for men!😁";
        if(birthYear > 2023) throw " a man of the future it seems... Impressive🫡, tell me about my future would you ? Do I get to achieve language supremacy by 2027 ?";
        if(isNaN(birthYear)) throw " surely you must have been born somewhere between the year 1 and 2023, or even 2096 ?🤔 Next time provide that year, this is an interactive atmosphere🤷🏿‍♂️";
    }

    catch(err){
        ageCalcError.innerHTML = "One more thing " + usersName + ", " + err;
    }
}

//ECMAScript Objects

const person = {
    firstName: "Kimutai", 
    middleName: "Arap", 
    lastName: "Tum", 
    idNum: 32931759, 
    jobDesc: "Software Engineer", 
    fullName: function(){return this.firstName + " " + this.middleName + " " + this.lastName;} //This is a method (A function stored as a property of an object. Keyword 'this' refers to the object 'person')
};

    document.getElementById("object_demo").innerHTML = JSON.stringify(person); //If String not needed, Use Object.values() in place of JSON.stringify();

    document.getElementById("object_demo").style.color = "var(--color-topheadings)";
    
    //Change A Property Value > person.firstName = "Allan";
    //Delete An Object Property(using keyword delete) > delete person.firstName;


//Creating Objects Using An Object Constructor

function Employee(name, id, telNum, deptName, deptId) {
    this.name = name;
    this.id = id;
    this.telNum = telNum;
    this.deptName = deptName;
    this.deptId = deptId;
    this.empDetails = function(){document.getElementById("constructor_obj").innerHTML = "Employee 1:: " + JSON.stringify(this)};

    this.emp1Details = function(){document.getElementById("constructor_obj1").innerHTML = "Employee 2:: " + JSON.stringify(this)};
};

    //Create new instances
const employee1 = new Employee("Newton Muriithi", 12345, "+254708090767", "DevOps", "DO#002");
const employee2 = new Employee("Kimutai Arap Tum", 12346, "+254742807455", "AI & Process Automation", "AI#001");

employee1.empDetails();
=======
"use strict";

//Dark Theme To Light Theme && Vice Versa

const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
    themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
})

//Scroll To Top Button Display Settings
window.addEventListener("scroll", () => {
    const toTop = document.getElementById("top_scroller");

    if(window.scrollY > 0){
        toTop.style.display = "flex";
    }
    else{
        toTop.style.display = "none";
    }
})


//Form Validation > Homepage

function formHandler() {
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");


        const alerts = document.getElementsByClassName("myalert"); // returns a live HTMLCollection containing all elements in class 'myalert'

        for (let k = 0; k < alerts.length; k++) {
            alerts[k].style.color = "red";
        }

        const focusOutliner = document.getElementsByClassName("alertfocus"); // returns a live HTMLCollection containing all elements in class 'alertfocus'

        for (let f = 0; f < focusOutliner.length; f++) {
            focusOutliner[f].style.outline = "1px solid red";
        }

    if (name.value == "") {document.getElementById("namefield_alert").innerHTML = "Please Enter Your Name!"; window.open("home.html#namelab", "_self");}

    if (phone.value == "") {document.getElementById("telfield_alert").innerHTML = "Please Enter Your Phone Number!"; window.open("home.html#phonelab", "_self");}

    if (email.value == "") {document.getElementById("mailfield_alert").innerHTML = "Please Enter Your E-Mail Address!"; window.open("home.html#emaillab", "_self");}

    if (subject.value == "") {
        document.getElementById("subfield_alert").innerHTML = "Please Enter The Subject You Wish To Address!";

        if (subject.value == "" && (name.value == "" || phone.value == "" || email.value)) {
            window.open("home.html#namelab", "_self");
        }
    }

    if (message.value == "") {
        document.getElementById("textbox_alert").innerHTML = "Please Enter Your Message Here!";

        if (message.value == "" && (name.value == "" || phone.value == "" || email.value)) {
            window.open("home.html#namelab", "_self");
        }
    }


    if (name.value !== "") {
        document.getElementById("namefield_alert").style.display = "none";
        document.getElementById("name").style.outline = "none";
    }
    if (phone.value !== "") {
        document.getElementById("telfield_alert").style.display = "none";
        document.getElementById("phone").style.outline = "none";
    }
    if (email.value !== "") {
        document.getElementById("mailfield_alert").style.display = "none";
        document.getElementById("email").style.outline = "none";
    }
    if (subject.value !== "") {
        document.getElementById("subfield_alert").style.display = "none";
        document.getElementById("subject").style.outline = "none";
    }
    if (message.value !== "") {
        document.getElementById("textbox_alert").style.display = "none";
        document.getElementById("message").style.outline = "none";
    }

    else {
        return true;
    }
}


//Js Demo > Page ID #js001 (Change Element with click of a button ++ Array declaration and operations)
function changePara() {

    //Declaration of an Array named message
    const message = ["JavaScript Frameworks:: Node.js", "React", "Express.js", "Vue.js","Angular", person.jobDesc];

    //Add an element to the array using push() method; Remove array element> pop()
    message.push(person.lastName);
    message.pop();//removes the element at the last index position of the array
    

    //Add an element to the array using length property
    message[message.length] = person.firstName;

    message.push(employee2.deptName);

    //message.splice(1,2) where the method splice() can been used to remove 2 elements starting from the elements at index 1

    document.getElementById("welcome").innerHTML = new Date()  + "<br><br>" + message.join(" || ");// join() method Overrides automatic toString() and displays joined array items using separator you specify as parameter.

    document.getElementById("welcome").style.color = "var(--color-lowerheadings)";
    document.getElementById("in_action").innerHTML = "Explore The Rest Of This Page, Let's Get To Know Each Other" + "<img src='images/javascript_icon.png' width='40px' height='40px'>";
}

//Js Demo > Page ID #js001 (Area of a circle with error handling)
function circleArea() {

    const radius = document.getElementById("radius_input").value;
    const myPieValue = Math.PI;

    const circArea = myPieValue * Math.pow(radius, 2);
    document.getElementById("circle").innerHTML = "The area of your imaginary circle is: " + Math.round(circArea) + "M² (rounded)";


    const errorDisplayer = document.getElementById("err_message");
    errorDisplayer.innerHTML = "";

    try{
        if(radius.trim() == "") throw "I cannot calculate the area if you don't give me the radius, Come on! it works if we both participate🤷🏿‍♂️";
        if(isNaN(radius)) throw "I mean... everyone knows a circle's radius has to be a number except you ? 🤷🏿‍♂️🤔. Don't make Mr. JavaScript give up on you already" + "<img src='images/BigEye_bot.gif' width='50px' height='50px'>";
        if(radius < 1 || radius > 100) throw "there is your area, but we agreed to work with values ranging in the region between 1 and 100. It's in the manual. I bet you didn't read it" + "<img src='images/BigEye_bot.gif' width='50px' height='50px'>";
    }

    catch(err) {
        errorDisplayer.innerHTML = "Hey! " + err;
    }

    finally {
        document.getElementById("radius_input").value = "";
    }
}



//Js Demo > Page ID #js001 (Age Calculator)
function ageCalc() {

    let usersName = prompt("Your Name", "Hello🖐️, enter your name here");
    let birthYear = prompt(usersName, "enter the year you were born in the format yyyy e.g. 1996");

    let currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    document.getElementById("result").innerHTML = usersName + ", You Are " + age + " Years Old";
    document.getElementById("result").style.color = "var(--color-lowerheadings)";

    const ageCalcError = document.getElementById("error_result");
    ageCalcError.innerHTML = "";

    try{
        if(birthYear < 1800) throw " your age indicates you are nowhere near from this century. You come from the past ages ey! Tell me about the rise of The Kingdom Of Ancient Kemet!😃";
        if(birthYear > 1800 && birthYear <= 1923) throw " you passed the 100 year old mark! It seems we can learn alot from each other in the next few years🥋";
        if(birthYear <= 2023 && birthYear >= 2013) throw " you are still a baby, come back after a few years, JS is for men!😁";
        if(birthYear > 2023) throw " a man of the future it seems... Impressive🫡, tell me about my future would you ? Do I get to achieve language supremacy by 2027 ?";
        if(isNaN(birthYear)) throw " surely you must have been born somewhere between the year 1 and 2023, or even 2096 ?🤔 Next time provide that year, this is an interactive atmosphere🤷🏿‍♂️";
    }

    catch(err){
        ageCalcError.innerHTML = "One more thing " + usersName + ", " + err;
    }
}

//ECMAScript Objects

const person = {
    firstName: "Kimutai", 
    middleName: "Arap", 
    lastName: "Tum", 
    idNum: 32931759, 
    jobDesc: "Software Engineer", 
    fullName: function(){return this.firstName + " " + this.middleName + " " + this.lastName;} //This is a method (A function stored as a property of an object. Keyword 'this' refers to the object 'person')
};

    document.getElementById("object_demo").innerHTML = JSON.stringify(person); //If String not needed, Use Object.values() in place of JSON.stringify();

    document.getElementById("object_demo").style.color = "var(--color-topheadings)";
    
    //Change A Property Value > person.firstName = "Allan";
    //Delete An Object Property(using keyword delete) > delete person.firstName;


//Creating Objects Using An Object Constructor

function Employee(name, id, telNum, deptName, deptId) {
    this.name = name;
    this.id = id;
    this.telNum = telNum;
    this.deptName = deptName;
    this.deptId = deptId;
    this.empDetails = function(){document.getElementById("constructor_obj").innerHTML = "Employee 1:: " + JSON.stringify(this)};

    this.emp1Details = function(){document.getElementById("constructor_obj1").innerHTML = "Employee 2:: " + JSON.stringify(this)};
};

    //Create new instances
const employee1 = new Employee("Newton Muriithi", 12345, "+254708090767", "DevOps", "DO#002");
const employee2 = new Employee("Kimutai Arap Tum", 12346, "+254742807455", "AI & Process Automation", "AI#001");

employee1.empDetails();
>>>>>>> origin/main
employee2.emp1Details();