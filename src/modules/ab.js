(function (namespace) {
    if (!namespace) {
        return;
    }

    var AB = function () {
        var $public = this;

        var deadLine = function (hours, day, month, year) {
            var date = new Date();
            if (typeof hours != undefined) {
                date.setHours(hours);
            }
            if (typeof day != undefined) {
                date.setDate(day);
            }
            month = month - 1;
            date.setMonth(month);
            if (year) {
                date.setYear(year);
            }
            return date;
        };

        this.dateToggle = function (hours, day, month, year) {
            var today = new Date();
            var deadline = deadLine(hours, day, month, year);
            return today >= deadline;
        };

        var getCookieValue = function (cookieName) {
            var cookie = document.cookie;
            var startIndex = cookie.indexOf(cookieName);

            if (startIndex === -1) {
                return "";
            }

            var middleIndex = cookie.indexOf('=', startIndex) + 1;
            var endIndex = cookie.indexOf(';', middleIndex);
            if (endIndex === -1){
                endIndex = cookie.length;
            }

            return unescape(cookie.substring(middleIndex, endIndex));
        };

        this.cookieToggle = function (name, value) {
            return value == getCookieValue(name);
        };

    };

    namespace.AB = namespace.AB || new AB();

    return namespace.AB;
})((window.cabrito) ? window.cabrito : undefined);