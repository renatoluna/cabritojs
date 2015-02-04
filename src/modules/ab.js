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

        this.getDeadLine = function (minutes, hours, day, month, year) {
            var date = new Date();
            date.setSeconds(0);
            if (typeof minutes == 'number') {
                date.setMinutes(minutes);
            }
            if (typeof hours == 'number') {
                date.setHours(hours);
            }
            if (typeof day == 'number') {
                date.setDate(day);
            }
            if (typeof month == 'number') {
                month = month - 1;
                date.setMonth(month);
            }
            if (typeof year == 'number') {
                date.setFullYear(year);
            }
            return date;
        };

        this.dateToggle = function (minutes, hours, day, month, year) {
            var today = new Date();
            return today >= this.getDeadLine(minutes, hours, day, month, year);
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
