(function (namespace) {
    if (!namespace) {
        return;
    }

    var AB = function () {
        var $public = this;

        var getValueFromKeyInString = function (str, name, separator) {
            if (typeof name !== 'string') {
                return;
            }

            if (str.substring(str.length - 1)) {
                str += separator;
            }

            name += '=';

            var startIndex = str.indexOf(name);
            if (startIndex === -1) {
                return '';
            }

            var middleIndex = str.indexOf('=', startIndex) + 1;
            var endIndex = str.indexOf(separator, middleIndex);
            if (endIndex === -1){
                endIndex = str.length;
            }

            return unescape(str.substring(middleIndex, endIndex));
        };

        var deadLine = function (hours, day, month, year) {
            var date = new Date();
            if (typeof hours !== undefined) {
                date.setHours(hours);
            }
            if (typeof day !== undefined) {
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
            return getValueFromKeyInString(document.cookie, cookieName, ';');
        };

        this.cookieToggle = function (name, value) {
            return value == getCookieValue(name);
        };

    };

    namespace.AB = namespace.AB || new AB();

    return namespace.AB;
})((window.cabrito) ? window.cabrito : undefined);
