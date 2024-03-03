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
