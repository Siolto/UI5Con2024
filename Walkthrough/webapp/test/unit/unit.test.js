describe('QUnit test page', () => {
    it('should pass QUnit tests', async () => {
        await browser.url('http://localhost:8080/test/unit/unitTests.qunit.html');
        const qunitResults = await browser.getQUnitResults();
        expect(qunitResults).toBeTruthy();
    });
});