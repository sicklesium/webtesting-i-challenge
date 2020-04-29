const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('enhancer', () => {

        describe('enhancer.repair()', () => {
            it('should accept an item object and return a new item with the durability restored to 100.', () => {
                expect(repair({ name: 'Canopus Lux', durability: 10, enhancement: 2 })).toEqual({
                    name: 'Canopus Lux',
                    durability: 100,
                    enhancement: 2
                });
                expect(repair({ name: 'Anabasis Lux', durability: 99, enhancement: 5 })).toEqual({
                    name: 'Anabasis Lux',
                    durability: 100,
                    enhancement: 5
                });
                expect(repair({ name: 'Mimesis Lux', durability: 69, enhancement: 12 })).toEqual({
                    name: 'Mimesis Lux',
                    durability: 100,
                    enhancement: 12
                });
            });
        });


    });
});