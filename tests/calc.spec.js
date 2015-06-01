var calc = require('../src/calc');



describe('calc', function () {

    describe('add', function () {
        it('should add two numbers', function () {

            var result = calc.add(3, 5);
            expect(result, 'to equal', 8);

        });

    });
});