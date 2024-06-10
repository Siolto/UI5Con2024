describe('QUnit test page', () => {
    it('should pass Integration tests', async () => {
        await browser.url('http://localhost:8080/test/integration/opaTests.qunit.html');
        const qunitResults = await browser.getQUnitResults();
        expect(qunitResults).toBeTruthy();
    });
});