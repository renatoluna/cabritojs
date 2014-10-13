var Cabrito = (function (window, document, undefined) {
    function Cabrito () {
        var $public = this, 
            $protected = this.constructor.prototype;
            $public.class = function (newClass) {
                return (function (newClass) {
                    newClass.prototype = $protected;
                    return new newClass(this);
                })(newClass);
            };
        $public.extends = $public.class;
        return $protected;
    }
    return new Cabrito();
})(this, document);

var a = Cabrito.class(function () {
    this.method1 = function () {
        console.log(1);
    }
    console.log(this.class);
    console.log(this.extends);
});

console.log(a);
