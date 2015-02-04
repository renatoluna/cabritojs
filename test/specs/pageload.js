describe('Pageload', function () {

    beforeEach(function(done) {
        done();
    }, 5000);

    it('Deve retornar true se a página tiver carregado', function (done) {

        var interval = setInterval(function () {
            if (document.readyState == 'complete') {
                expect(cabrito.PageLoad.ready(function () {})).toBe(true);
                done();
                clearInterval(interval);
            }
        }, 1);
    });

    it('Deve retornar false se o parâmetro passado não for uma FN', function() {
        expect(cabrito.PageLoad.ready(1)).toBe(false);
        expect(cabrito.PageLoad.ready(['array'])).toBe(false);
        expect(cabrito.PageLoad.ready(true)).toBe(false);
        expect(cabrito.PageLoad.ready(undefined)).toBe(false);
        expect(cabrito.PageLoad.ready(null)).toBe(false);
    });

    it('Deve retornar true se o elemento com o ID passado existir na página', function(done) {
        var elem = document.createElement('div');
        elem.setAttribute('id', 'needed');
        document.body.appendChild(elem);

        var interval = setInterval(function () {
            if (document.getElementById('needed')) {
                expect(cabrito.PageLoad.elementReady('needed', function () {})).toBe(true);
                elem.parentElement.removeChild(elem);
                done();
                clearInterval(interval);
            }
        }, 1);
    });

    it('Deve retornar undefined se o elemento com o ID passado não existir na página', function(done) {
        setTimeout(function () {
            expect(cabrito.PageLoad.elementReady('needed', function () {})).toBe(undefined);
            done();
        }, 1);
    });

});
