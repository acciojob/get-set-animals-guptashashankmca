// //complete this code
// class Animal {
// 	constructor(species){
// 		this.species = species;
// 	}
// 	get species(){
// 		return this.species;
// 	}
// 	makeSound(){
// 		console.log(`this ${this.species} make a sound`);
// 	}
// }
// class Dog extends Animal {
// 	bard(){
// 		console.log('woof');
// 	}
// }

// class Cat extends Animal {
// 	purr(){
// 		console.log('purr');
// 	}
// }

// // Do not change the code below this line
// window.Animal = Animal;
// window.Dog = Dog;
// window.Cat = Cat;


class Animal {
  constructor(species) {
    this._species = species; // Use a private property for internal storage
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log the sound the animal makes
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Dog extends Animal {
  // Method to log "woof"
  bark() {
    console.log('woof');
  }
}

class Cat extends Animal {
  // Method to log "purr"
  purr() {
    console.log('purr');
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;





























