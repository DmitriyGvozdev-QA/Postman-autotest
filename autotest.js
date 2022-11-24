pm.test("первый автотест:статус 200", function () {
    pm.response.to.have.status(200);
});

pm.test("второй автотест: ответ приходит за 200мсек", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("третий автотест: кодовое имя содержит слово", function () {
    pm.response.to.have.status("OK");
}); 

pm.test("четвертый автотест: боди содержит слово", function () {
    pm.expect(pm.response.text()).to.include("Sentinel-class");
});

pm.test("пятый автотест: значение поля", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData["length"]).to.eql("38")
});
