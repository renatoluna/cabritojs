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

        it('Deve retornar true se a hora for posterior à passada no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours() - 1;
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var fullYear = date.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

        it('Deve retornar true se o dia for posterior ao passado no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours();
            var day = date.getDate() - 1;
            var month = date.getMonth() + 1;
            var fullYear = date.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

        it('Deve retornar true se o mês for posterior ao passado no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours();
            var day = date.getDate();
            var month = date.getMonth();
            var fullYear = date.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

        it('Deve retornar true se o ano for posterior ao passado no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var fullYear = date.getFullYear() - 1;
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

        it('Deve retornar true se a hora for anterior à passada no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours() + 1;
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var fullYear = date.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(false);
        });

        it('Deve retornar true se o dia for anterior à passada no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours();
            var day = date.getDate() + 1;
            var month = date.getMonth() + 1;
            var fullYear = date.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(false);
        });

        it('Deve retornar true se o mês for anterior à passada no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours();
            var day = date.getDate();
            var month = date.getMonth() + 2;
            var fullYear = date.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(false);
        });

        it('Deve retornar true se o ano for anterior à passada no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var fullYear = date.getFullYear() + 1;
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(false);
        });

        it('Deve retornar true se a data for igual à passada no Toggle', function () {
            var date = new Date ();
            var hours = date.getHours();
            var day = date.getDate();
            var month = date.getMonth() + 1;
            var fullYear = date.getFullYear();
            expect(cabrito.AB.dateToggle(hours,day,month,fullYear)).toBe(true);
        });

    });

});
