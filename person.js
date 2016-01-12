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

//vitalik = new Vitalik('Vitalik', 32)
//vitalik.setRate(5)
//vitalik.