
    function firstAlert(){
        var time="4567";
        var factor="421";
        result=time^factor+time^factor;
        alert("Your New Figure Is " + result);
    }

    function exitJs(){
        var ask = confirm("Are You Sure You Want To Exit?");

        if(ask==true){
            document.write("You Have Successfully Exited LiveScript");
            return true;
        }

        else{
            document.write("You Have Chosen To Stay With Js");
            return false;
        }
    }

    function collectFeed(){
        var feed = prompt("What Is Your Experience So Far Learning Js: ","A few words here or just a word if you like");

        document.write("Thank You! You Said: " + feed);
    }

    function redirectClick(){
        window.location="https://transfrontieresagencies.com";
        document.write("You will be redirected in 10 Seconds");

        setTimeout('redirectClick()', 10000); //executes the function after the given time interval
    }