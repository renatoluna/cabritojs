(function (namespace) {
    if (!namespace) {
        return;
    }

    var PageLoad = function () {
        var $public = this;
        var hasLoaded = function (condition, fn, timeout) {
            eval('var result =' + condition);
            timeout = (timeout ? timeout + 10 : 0);
            if (typeof fn != "function") {
                return false;
            }
            if (result) {
                fn();
            } else {
                setTimeout(function() {
                    hasLoaded(condition, fn, timeout);
                }, timeout);
            }
        };
        this.elementReady = function (id, fn, timeout) {
            hasLoaded('document.getElementById("' + id + '")', fn, timeout);
        };
        this.ready = function (fn, timeout) {
            var condition = 'document.readyState && document.readyState == "complete"';
            hasLoaded(condition, fn, timeout);
        };
    };

    namespace.PageLoad = namespace.PageLoad || new PageLoad();

    return namespace.PageLoad;
})((window.cabrito) ? window.cabrito : undefined);
