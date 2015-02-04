var d;

describe('AB', function () {

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
            var hours = d.getHours() - 1;
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var fullYear = d.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

        it('Deve retornar true se o dia for posterior ao passado no Toggle', function () {
            var hours = d.getHours();
            var day = d.getDate() - 1;
            var month = d.getMonth() + 1;
            var fullYear = d.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

        it('Deve retornar true se o mês for posterior ao passado no Toggle', function () {
            var hours = d.getHours();
            var day = d.getDate();
            var month = d.getMonth();
            var fullYear = d.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

        it('Deve retornar true se o ano for posterior ao passado no Toggle', function () {
            var hours = d.getHours();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var fullYear = d.getFullYear() - 1;
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

        it('Deve retornar true se a hora for anterior à passada no Toggle', function () {
            var hours = d.getHours() + 1;
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var fullYear = d.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(false);
        });

        it('Deve retornar true se o dia for anterior à passada no Toggle', function () {
            var hours = d.getHours();
            var day = d.getDate() + 1;
            var month = d.getMonth() + 1;
            var fullYear = d.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(false);
        });

        it('Deve retornar true se o mês for anterior à passada no Toggle', function () {
            var hours = d.getHours();
            var day = d.getDate();
            var month = d.getMonth() + 2;
            var fullYear = d.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(false);
        });

        it('Deve retornar true se o ano for anterior à passada no Toggle', function () {
            var hours = d.getHours();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var fullYear = d.getFullYear() + 1;
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(false);
        });

        it('Deve retornar true se a data for igual à passada no Toggle', function () {
            var hours = d.getHours();
            var day = d.getDate();
            var month = d.getMonth() + 1;
            var fullYear = d.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

    });

});
