if(localStorage.getItem("nameList")== null){
    var names=[];
    localStorage.setItem("nameList",JSON.stringify(names));
}

function saveData() {
    names = JSON.parse(localStorage.getItem("nameList"));
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;

    //create a new object
    var fullName = {
        fname: firstName,
        lname: lastName,
    }
    // save name to list
    names.push(fullName);

    //save list to local storage
    localStorage.setItem("nameList", JSON.stringify(names));
    showData();
}

function showData(){
    var allNames = localStorage.getItem("nameList");
    var jsonNames = JSON.parse(allNames);

    var table = "<table border='1'><tr><th>Nro</th><th>Firstname</th><th>Lastname</th><tr>";
    for(var i =0; i <jsonNames.length;i++){
        table += "<tr><td>"+(i)+"</td><td>"+jsonNames[i].fname+"</td><td>"+jsonNames[i].lname+"</td></tr>"
    }
    var place = document.getElementById("storage_place");
    place.innerHTML= table;
}

function deleteData(){
    var delNum = document.getElementById("delNumber").value;

    var myNames = localStorage.getItem("nameList");
    var jsonNames = JSON.parse(myNames);

    jsonNames.splice(delNum,1);

    localStorage.setItem("nameList", JSON.stringify(jsonNames));
    showData();

}