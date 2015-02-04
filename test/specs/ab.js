function dateFormat (date) {
    return {
        'minutes' : date.getDate(),
        'hours' : date.getHours(),
        'date' : date.getDate(),
        'month' : date.getMonth() + 1,
        'fullYear' : date.getFullYear()
    };
};

describe('AB', function () {

    describe('QueryStringToggle', function () {

        it('Deve retornar true se a queryString existir no toggle', function () {
            var queryString = 'toggle';
            var value = '1';
            cabrito.AB.queryString = queryString + '=' + value;
            expect(cabrito.AB.queryStringToggle(queryString, value)).toBe(true);
        });

        it('Deve retornar false se a queryString existir no toggle e tiver um valor diferente', function () {
            var queryString = 'toggle';
            var value = '1';
            cabrito.AB.queryString = queryString + '=' + value;
            expect(cabrito.AB.queryStringToggle(queryString, '0')).toBe(false);
        });

        it('Deve retornar false se a queryString não existir no toggle', function () {
            var queryString = 'toggle';
            var value = '1';
            cabrito.AB.queryString = '';
            expect(cabrito.AB.queryStringToggle(queryString, value)).toBe(false);
        });

    });

    describe('CookieToggle', function () {

        beforeEach(function() {
            document.cookie = "toggle='';expires=TUE, 31 May 1990 00:00:01 GMT;path=/;";
        });

        it('Deve retornar true se o cookie existir no toggle', function () {
            var cookie = 'toggle';
            var value = '1';
            document.cookie = cookie + '=' + value;
            expect(cabrito.AB.cookieToggle(cookie, value)).toBe(true);
        });

        it('Deve retornar false se o cookie existir no toggle e tiver um valor diferente', function () {
            var cookie = 'toggle';
            var value = '1';
            document.cookie = cookie + '=' + value;
            expect(cabrito.AB.cookieToggle(cookie, '0')).toBe(false);
        });

        it('Deve retornar false se o cookie não existir no toggle', function () {
            var cookie = 'toggle';
            var value = '1';
            expect(cabrito.AB.cookieToggle(cookie, value)).toBe(false);
        });

    });

    describe('dateToggle', function () {

        beforeEach(function() {
            d = new Date ();
        });

        it('Deve retornar true se a hora for posterior à passada no Toggle', function () {
            d.setHours(d.getHours() - 1);
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(true);
        });

        it('Deve retornar true se o dia for posterior ao passado no Toggle', function () {
            d.setDate(d.getDate() - 1);
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(true);
        });

        it('Deve retornar true se o mês for posterior ao passado no Toggle', function () {
            d.setMonth(d.getMonth() - 1);
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(true);
        });

        it('Deve retornar true se o ano for posterior ao passado no Toggle', function () {
            d.setFullYear(d.getFullYear() - 1);
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(true);
        });

        it('Deve retornar true se a hora for anterior à passada no Toggle', function () {
            d.setHours(d.getHours() + 1);
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(false);
        });

        it('Deve retornar true se o dia for anterior à passada no Toggle', function () {
            d.setDate(d.getDate() + 1);
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(false);
        });

        it('Deve retornar true se o mês for anterior à passada no Toggle', function () {
            d.setMonth(d.getMonth() + 1);
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(false);
        });

        it('Deve retornar true se o ano for anterior à passada no Toggle', function () {
            d.setFullYear(d.getFullYear() + 1);
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(false);
        });

        it('Deve retornar true se a data for igual à passada no Toggle', function () {
            expect(cabrito.AB.dateToggle(dateFormat(d).minutes, dateFormat(d).hours, dateFormat(d).date, dateFormat(d).month, dateFormat(d).fullYear)).toBe(true);
        });

    });

});
