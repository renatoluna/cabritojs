var Feline = UOLPD.TagManager.Commons.Class.extends(function () {
    this.constructor = function (isWalking) {
        this.walking = isWalking;
    };

    this.walk = function () {
        return this.walking;
    };
});

var Cat = Feline.extends(function (base) {
    this.meow = function () {
        return true;
    };
});

var Lion = Cat.extends(function (base) {
    this.king = function () {
        return true;
    };
});

var feline = Feline.create(true);
feline.walk(); // => true

var c1 = Cat.create();
c1.walk(); // => false
c1.meow(); // => true

var c2 = Cat.create(true);
c2.walk(); // => false
c2.meow(); // => true

var l1 = Cat.create();
l1.walk(); // => false
l1.meow(); // => true

var l2 = Cat.create(true);
l2.walk(); // => false
l2.meow(); // => true
