var UOLPD = {};
UOLPD.TagManager = {};
UOLPD.TagManager.Commons = {};

(function (namespace) {
    if (!namespace) {
        return;
    }

    var Class = function () {
        this.constructor = function Class () {};
        this.create = function () {
            var instance = this;
            instance.constructor.apply(instance, arguments);
            return instance;
        };
        this.extends = function (body) {
            var constructor = function () {};
            var prototype = constructor.prototype = this;
            body.call(this);
            return constructor.prototype;
        };
    };

    namespace.Class = namespace.Class || new Class();

    return namespace.Class;
})((window.UOLPD.TagManager.Commons) ? window.UOLPD.TagManager.Commons : undefined);