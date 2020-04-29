const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

describe('enhancer.js', () => {
    describe('enhancer', () => {

        describe('enhancer.repair()', () => {
            it('should accept an item object and return a new item with the durability restored to 100', () => {
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

        describe('enhancer.succeed()', () => {
            it('should accept an item object and return a new item with the enhancement increased by 1, up to 20', () => {
                expect(succeed({ name: 'Canopus Lux', durability: 55, enhancement: 10 })).toEqual({
                    name: 'Canopus Lux',
                    durability: 55,
                    enhancement: 11
                });
                expect(succeed({ name: 'Anabasis Lux', durability: 20, enhancement: 20 })).toEqual({
                    name: 'Anabasis Lux',
                    durability: 20,
                    enhancement: 20
                });
                expect(succeed({ name: 'Mimesis Lux', durability: 11, enhancement: 1 })).toEqual({
                    name: 'Mimesis Lux',
                    durability: 11,
                    enhancement: 2
                });
            });
        });


        describe('enhancer.fail()', () => {
            it('should accept an item object and return a new item with durability and sometimes enhancement adjusted', () => {
                expect(fail({ name: 'Canopus Lux', durability: 55, enhancement: 16 })).toEqual({
                    name: 'Canopus Lux',
                    durability: 45,
                    enhancement: 15
                });
                expect(fail({ name: 'Anabasis Lux', durability: 3, enhancement: 10 })).toEqual({
                    name: 'Anabasis Lux',
                    durability: 0,
                    enhancement: 10
                });
                expect(fail({ name: 'Mimesis Lux', durability: 69, enhancement: 19 })).toEqual({
                    name: 'Mimesis Lux',
                    durability: 59,
                    enhancement: 18
                })
            })
        })


    });
});