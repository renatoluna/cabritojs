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

});
