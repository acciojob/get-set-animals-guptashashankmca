//complete this code
class Animal {
	constructor(species){
		this._species = species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log(`this ${this.species} make a sound`);
	}
}
class Dog extends Animal {
	bard(){
		console.log('woof');
	}
}

class Cat extends Animal {
	purr(){
		console.log('purr');
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
