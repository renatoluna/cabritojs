Function.prototype.extend = function (body) {
    var constructor = function () {};
    var prototype = constructor.prototype = new this;
    body.call(prototype, this.prototype);
    return constructor;
};

Function.prototype.create = function () {
    var instance = new this;
    instance.constructor.apply(instance, arguments);
    return instance;
};

var Person = Object.extend(function () {
    this.constructor = function (isDancing) {
        this.dancing = isDancing;
    };

    this.dance = function () {
        return this.dancing;
    };
});

var Ninja = Person.extend(function (base) {
    this.constructor = function () {
        base.constructor.call(this, false);
    };

    this.swingSword = function () {
        return true;
    };
});

var p = Person.create(true);
p.dance(); // => true

var n = Ninja.create();
n.dance(); // => false
n.swingSword(); // => true

// Should all be true
p instanceof Person && p instanceof Object &&
n instanceof Ninja && n instanceof Person && n instanceof Object