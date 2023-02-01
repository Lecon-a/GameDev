// Classes with Inheritance
//set up the class GameObject
class GameObject {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}

//this helps inherit the parent's class properties
class Movable extends GameObject {
    constructor(x, y, type) {
        super(x, y, type);
    }

    //move method
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

//this inherits from both GameObject and Movable classes
class Hero extends Movable {
    constructor(x, y) {
        super(x, y, 'Hero');
    }
}

//since this gameObject doesn't move, therefore, doesn't inherit anything from Movable class but rather inherits only from GameObject class
class Tree extends GameObject {
    constructor(x, y) {
        super(x, y, 'Tree');
    }
}

//instantiate hero and tree objects
const hero = new Hero();
hero.move(5, 5);

const tree = new Tree();

// Composition is another different way inheritance can be handled
const gameObject = {
    x: 0,
    y: 0,
    type: ''
}

const movable = {
    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

//then the constant movableObject is composed of the gameObject
//and movable constants
const movableObject = { ...gameObject, ...movable };

function createHero(x, y) {
    return {
        ...movableObject,
        x,
        y,
        type: 'Hero'
    }
}

function createStatic(x, y, type) {
    return {
        ...gameObject,
        x,
        y,
        type
    }
}

const hero_c = new createHero(10, 10);
hero_c.moveTo(5, 5)

//and create a static tree which only stands around
const tree_c = createStatic(0, 0, 'Tree'); 