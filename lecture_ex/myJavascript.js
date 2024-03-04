// alert("Hello world!");

function myFunction(a,b){
    return a+b;
}

function myFirstFunction(number){
    for(var i=0; i< number;i++){
        console.log(i);
    }

return 10;
}

function buttonFunction(){
    console.log("This is event listener function");
    var element = document.getElementById("demo");
    element.innerHTML="This is event listener text";
}

function showXY(e){
    var x = e.clientX;
    var y = e.clientY;

    var coords = "X coords: " + x + ", <br> Y Coords: " +y;
    document.getElementById("coordinates").innerHTML=coords;
}
function validateForm(){
    var fname = document.forms["myForm"]["fname"].value;
    var lname = document.forms.myForm.lname.value;

    if(fname==null || fname=="" || fname.length < 3 ){
        document.forms.myForm.fname.style.borderColor = "red";
        document.getElementById("feedback").innerHTML = "<b>Please fill correctly</b>";
        return false;
    } else {
        document.forms.myForm.fname.style.borderColor = "lightgray";
        document.getElementById("feedback").innerHTML= "";
        return true;
    }
}

var x = document.getElementById("myFieldset");
x.style.display = "none";

    function showExtraFields(){
        var y = document.getElementById("myFieldset");
        var t = document.getElementById("comments").value;
        if (t=true){
            y.style.display="block";
        } else if (t=false){
            y.style.display="none";
        }
       
    }