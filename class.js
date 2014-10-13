var $class = function() {
    this.method1 = function() {
        console.log(1);
    };

    this.factory = function(childClass) {
        childClass.prototype = this;    
        return new childClass(this);
    };
};

var myClass = function() {
    return new $class().factory(function(parent) {

    });
};
