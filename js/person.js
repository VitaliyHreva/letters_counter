function Person (name, age) {
	this.name = name;
	this.age = age;

	this.show = function () {
		console.log('Hello my name is ' + this.name + ", i am  = " + this.age);  
	}

	this.setId = function (id) {
		this.id = id;
	}

	this.setRate = function (hourlyRate) {
		this.hourlyRate = hourlyRate;
	}

	this.salary = function (numberOfHours) {
		return numberOfHours * this.hourlyRate;
	}

	this.setCompany = function (company) {
		this.company = company;
	}

	this.setStreet = function (street) {
		this.street = street;
	}
}

Person.getAll = function () {
	var result = [];
	$.ajax({
		url: "db.json",
		dataType: "json",
		async: false,
		success: function (data) {
			$.each(data.persons, function (i, person) {
				var newPerson = new Person(person.name, person.age);
				newPerson.setId(person.id)
				newPerson.setRate(person.hourly_rates);
				newPerson.setCompany(person.company)
				result.push(newPerson);
			}) 
		}
	});	

	return result;	
}

Person.getAdresses = function () {
	var adresess = [];
	$.ajax({
		url: "db.json",
		dataType: "json",
		async: false,
		success: function (data) {
			adresess = data.persons_adresses;
		}
	});

	return adresess;
}

Person.drawTable = function () {
	var persons = Person.getAll();
	var adresses = Person.getAdresses();

	$.each(adresses, function (i, adress) {
		var name = '';
		$.each(persons, function(i, person) {
			if (adress.person_id == person.id) {
				name = person.name
			};
		});
		adress['name'] = name;
	});

	var personsFromKyiv = [];
	$.each(persons, function  (i, person) {
		var city = ''
		$.each(adresses, function(i, adress) {
			if (person.id == adress.person_id) {
				city = adress.city;
			};

		});
		if (city == 'Kyiv') {
			personsFromKyiv.push(person);
		};
	});

	var table = new Table(persons, ['name', 'age', 'hourlyRate', 'company']);
	var secondTable = new Table(adresses, ['name', 'city', 'street']);
	var city = new Table(personsFromKyiv, ['name', 'age', 'hourlyRate', 'company'])
	
	$('body').append(table.draw());
	$('body').append(secondTable.draw());
	$('body').append(city.draw());

}

$( document ).ready(function() {
  Person.drawTable();
});
