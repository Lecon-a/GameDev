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

