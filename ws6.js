if(localStorage.getItem("destArrList")== null){
    var values1=[];
    localStorage.setItem("destArrList",JSON.stringify(values1));
}

function getData(){
    //retrive destArrList from local storage
    var values1 = JSON.parse(localStorage.getItem("destArrList"));

    var destination = document.getElementById("destination").value;
    var arrival = document.getElementById("arrival").value;
    var internetCB = document.getElementById("CheckboxGroup1_0");
    var internet;
    var acCB = document.getElementById("CheckboxGroup1_1");
    var airCon;
    var minibarCB = document.getElementById("CheckboxGroup1_2");
    var minibar;
    var carRentCB = document.getElementById("CheckboxGroup1_3");
    var carrent;
    var saunaCB = document.getElementById("CheckboxGroup1_4");
    var sauna;

    if (internetCB.checked){
        internet = internetCB.value;
    } else {
        internet = "no";
    }

    if(acCB.checked){
        airCon = acCB.value;
    } else {
        airCon = "no";
    }

    if(minibarCB.checked){
        minibar=minibarCB.value;
    } else {
        minibar = "no";
    }
    
    if(carRentCB.checked){
        carrent=carRentCB.value;
    } else {
        carrent = "no";
    }

    if(saunaCB.checked){
        sauna = saunaCB.value;
    } else {
        sauna = "no";
    }

// create a new object

var dAObject = {
    dest: destination,
    arr: arrival,
    internet: internet,
    airCon: airCon,
    minibar: minibar,
    carrent: carrent,
    sauna: sauna,
}

// save name to list

values1.push(dAObject);

// save list to local storage

localStorage.setItem("destArrList", JSON.stringify(values1));
}

function loadSessionData(){
    var savedData = localStorage.getItem("destArrList");
    var dataArray = JSON.parse(savedData);

    var table = "<table border='1'><tr><th>Nro</th><th>Destination</th><th>Arrival</th><th>Internet</th><th>Air Conditioning</th><th>Minbar</th><th>Car Rent</th><th>Sauna<th></tr>";
    for(var i =0; i <dataArray.length;i++){
        table += "<tr><td>" + (i + 1) + "</td><td>" + dataArray[i].dest + "</td><td>" + dataArray[i].arr + "</td><td>" + dataArray[i].internet + "</td><td>" + dataArray[i].airCon + "</td><td>" + dataArray[i].minibar + "</td><td>" + dataArray[i].carrent + "</td><td>" + dataArray[i].sauna + "</td></tr>"
    }
    var place = document.getElementById("sessiondata");
    place.innerHTML= table;
}

