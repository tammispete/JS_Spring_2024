var text = '{ "employees" : [' +
			'{ "firstName":"John" , "lastName":"Doe" },' +
			'{ "firstName":"Anna" , "lastName":"Smith" },' +
			'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text); //parse the var text

function fNameLname() {	
	var nameList = ""; // create a list of names to print out
	for (var i=0; i < obj.employees.length; i++){ //for loop 
	nameList += obj.employees[i].firstName + " " + obj.employees[i].lastName + "<br>"; // gather the fname and lname
	}
	document.getElementById("jsondata").innerHTML = nameList; // print the nameList to div jsondata
	}

function allData() {	
		const myJSON = JSON.stringify(obj); // convert to a String
		document.getElementById("jsondata").innerHTML = myJSON; // print all data to div jsondata
}

function loadRawData(){
	fetch('http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750') // fetch API to send an HTTP request
		.then(response => response.json()) // accept the response from the HTTP request
		.then(json => document.getElementById("rawdata").innerHTML = JSON.stringify(json)); // use then method again to accept response, and then stringify to print all raw data to div id rawdata

}

function makeTable(){
	fetch('http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750') // fetch API to send an HTTP request
		.then(response => response.json())
		.then(data => {
			const searchResults = data.Search; // extract the search results from the data

			//create table
			let table = "<table border='1'><tr><th>Title</th><th>Year</th><th>Type</th><th>Poster</th></tr>";

			//Iterate over each search result and create table rows
			searchResults.forEach(result => {
				table +="<tr>";
				table += "<td>" + result.Title + "</td>";
				table += "<td>" + result.Year + "</td>";
				table += "<td>" + result.Type + "</td>";
				table += "<td><img src='"+result.Poster+"'></td>";
				table += "</tr>";				
			});
			// close table
			table += "</table>"

			// print to div id tabledata
			document.getElementById("tabledata").innerHTML = table;
			})
}
function helsinkiData(){
	fetch('https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=fcc15d865deec54546779ddc1191025e&units=metric')
		.then(response => response.json())
		.then(data => {	
			// extract temperature, clouds , humidity
			const temperature = data.main.temp;
			const clouds = data.weather[0].description;
			const humidity = data.main.humidity;
		// create list with data
		const weatherList = 
		"<ul>"+
		"<li>Temperature: " + temperature + " Celcius</li>"+
		"<li>Clouds: "+ clouds + "</li>"+
		"<li>Humidity: "+ humidity + "%</li>"+
		"</ul>" 

		//print this list to div weatherdata
		document.getElementById("weatherdata").innerHTML = weatherList;
	})
}
function selectCity(){
	var selectCity = document.getElementById("city").value; // see what city is selected

	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectCity}&appid=fcc15d865deec54546779ddc1191025e&units=metric`) // fetch that citys information
		.then(response => response.json())
		.then(data => {
			//extract temperature, clouds, humidity
			const temperature = data.main.temp;
			const clouds = data.weather[0].description;
			const humidity = data.main.humidity;

		//create list with data
		const cityWeather =
		"<ul>"+
		"<li>Temperature: " + temperature + "Celcius</li>"+
		"<li>Clouds: " + clouds + "</li>" +
		"<li>Humidity: " + humidity + "%</li>"+
		"</ul>"
		
		//print list to div weatherdata
		document.getElementById("weatherdata").innerHTML = cityWeather;
		})
	
}
function searchCity(){
	var city = document.getElementById("citysearch").value; // see what city has been written
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fcc15d865deec54546779ddc1191025e&units=metric`) //fecth that citys info
		.then(response => response.json())
		.then(data => {
			//extract temperature, clouds, humidity
			const temperature = data.main.temp;
			const clouds = data.weather[0].description;
			const humidity = data.main.humidity;

		//create list with data
		const cityWeather =
		"<ul>"+
		"<li>Temperature: " + temperature + "Celcius</li>"+
		"<li>Clouds: " + clouds + "</li>" +
		"<li>Humidity: " + humidity + "%</li>"+
		"</ul>"
		
		//print list to div weatherdata
		document.getElementById("weatherdata").innerHTML = cityWeather;
		})
}
// when pressed enter on the query-window, execute searchCity()
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        searchCity();
    }
}


