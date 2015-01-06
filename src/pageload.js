(function (namespace) {
    if (!namespace) {
        return;
    }

    var PageLoad = function () {
        var $public = this;
        this.ready = function (fn, timeout) {
            var readyState = document.readyState;
            timeout = (timeout ? timeout + 10 : 0);
            if (typeof fn != "function") {
                return false;
            }
            if (readyState && readyState == "complete") {
                fn();
            } else {
                setTimeout(function() {
                    $public.ready(fn, timeout);
                }, timeout);
            }
        };
    };

    namespace.PageLoad = namespace.PageLoad || new PageLoad();

    return namespace.PageLoad;
})((window.cabrito) ? window.cabrito : undefined);
