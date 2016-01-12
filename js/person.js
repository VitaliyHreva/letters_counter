function Person (name, age) {
	this.name = name;
	this.age = age;

	this.show = function() {
		console.log('Hello my name is ' + this.name + ", i am  = " + this.age);  
	}

	this.setRate = function (hourlyRate) {
		this.hourlyRate = hourlyRate;
	}

	this.salary = function (numberOfHours) {
		return numberOfHours * this.hourlyRate;
	}
}

Person.getAll = function () {
	var result = [];
	$.ajax({
		url: "db.json",
		dataType: "json",
		async: false,
		success: function(data) {
			$.each(data.persons, function(i, person) {
				var newPerson = new Person(person.name, person.age);
				newPerson.setRate(person.hourly_rates);
				result.push(newPerson);
			}) 
		}
	})	

	return result;	
}

Person.drawTable = function () {
	var table = $('<table></table>');
	var header = $('<tr><th>Name</th><th>Age</th><th>Hourly rates</th></tr>');
	table.append(header);

	var persons = Person.getAll();
	$.each(persons, function (i, person) {
		var row = $('<tr><td>' + person.name + '</td><td>' + person.age + '</td><td>' + person.hourlyRate + '</td></tr>');
		table.append(row);
	});
	
	$('body').append(table);
}

$( document ).ready(function() {
  Person.drawTable();
});