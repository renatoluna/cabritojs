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

});
