describe('Pageload', function () {

    it('Deve retornar true se a página tiver carregado', function () {
        var loaded = false;
        document.readyState = "complete";

        cabrito.PageLoad.ready(function () {
            loaded = true;
        });

        setTimeout(function () {
            expect(loaded).toBe(true);
        }, 100);
    });

    it('Deve retornar false se o parâmetro passado não for uma FN', function() {
        expect(cabrito.PageLoad.ready(1)).toBe(false);
        expect(cabrito.PageLoad.ready(['array'])).toBe(false);
        expect(cabrito.PageLoad.ready(true)).toBe(false);
        expect(cabrito.PageLoad.ready(undefined)).toBe(false);
        expect(cabrito.PageLoad.ready(null)).toBe(false); 
    });

    it('Deve retornar true se o elemento com o ID passado existir na página', function() {
        var loaded = false;
        var elem = document.createElement('div');
        elem.setAttribute('id', 'needed');
        document.body.appendChild(elem);

        cabrito.PageLoad.elementReady('needed', function() {
            loaded = true;
        });

        setTimeout(function () {
            expect(loaded).toBe(true);
        }, 100);
    });

});
