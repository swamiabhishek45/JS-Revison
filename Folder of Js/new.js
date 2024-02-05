console.log(this);

function Pet(name){
    console.log(this);
    
    this.name = name;

    this.getName = () => this.name;
}

const cat = new Pet("Fluppy")
console.log(cat);

console.log(cat.getName());

const { getName } = cat;
console.log(getName());

