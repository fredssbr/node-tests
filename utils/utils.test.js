const expect = require('expect');
/**
 * A test case is function that runs some code
 */
const utils = require('./utils');

describe('Utils', () => {
    
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        // if(res !== 44){
        //     throw new Error(`Expected 44, but got ${res}.`);
        // }
        expect(res).toBe(44).toBeA('number');
    });

    /**
     * Async tests - you need an argument function to tell mocha
     * it's asynchronous
     */
    it('should async add two numbers', (done) =>{
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should square a number', () => {
        var res = utils.square(5);
        // if(res !== 25){
        //     throw new Error(`Expected 25, but got ${res}.`)
        // }
        expect(res).toBe(25).toBeA('number');
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(3, (square) => {
            expect(square).toBe(9).toBeA('number');
            done();
        });
    });
    
});



// it('should expect some values', () => {
//     /**
//      * toBe and toNotBe work for strings, numbers, booleans
//      * But not for objects or arrays
//      */
//     //expect(12).toNotBe(12);
//     /**
//      * This line does not work because toBe / toNotBe uses ===
//      * Which in this case is not the same object (memory position, type, etc)
//      */
//     //expect({name: 'Fred'}).toBe({name: 'Fred'});
//     /**
//      * For objects and arrays, use toEqual
//      */
//     expect({name: 'Fred'}).toEqual({name: 'Fred'});
//     expect({name: 'Junior'}).toNotEqual({name: 'Fred'});
//     expect([2, 3, 4]).toInclude(4);
//     expect([1, 2, 3]).toExclude(4);

//     expect({
//         name: 'Fred',
//         age: '30',
//         location: 'São Paulo'
//     }).toExclude({
//         age: 23
//     });
// });

//should verify first and last names are set
//assert it includes firstName and lastName with proper values
//and type is an object
it('should expect my first and last name', () => {
    var user = {
        age: 30,
        location: 'São Paulo'
    };
    var res = utils.setName(user, 'Fred Silva');
    /**
     * Objects are passed by reference so res is equal user at this point
     */
    expect(res).toEqual(user);
    
    expect(user).toInclude({
        firstName: 'Fred',
        lastName: 'Silva'
    }).toBeAn('object');
});