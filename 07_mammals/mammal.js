function Mammal(name)
{
	this.name = name;
	this.offspring = [];
}

Mammal.prototype.sayHello = function()
{
	return "My name is "+this.name+", I'm a Mammal";
}

Mammal.prototype.haveBaby = function()
{
	var babyName = "Baby "+this.name;
	var child = new Mammal(babyName);
	this.offspring.push(child);
	return child;
}

function Cat(name,color)
{
	Mammal.call(this,name);
	this.color = color;
}

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;
console.log(Cat);


Cat.prototype.haveBaby = function(color)
{
	var babyName = "Baby "+this.name;
	var child = new Cat(babyName,color);
	this.offspring.push(child);
	return child;

}