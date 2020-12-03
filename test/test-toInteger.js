import makeInteger from '../src/toInteger.js';
import assert from 'assert';
import expect from 'chai';


describe('makeInteger', function(){
   describe('#decimalToInteger', function(){
     it("True if parameter is an integer", function(){   
         assert.strictEqual(makeInteger(928478294.2), 928478294);
     });
   });
   
   describe('#negativeToInteger', function(){
     it("True if parameter is an integer", function(){   
         assert.strictEqual(makeInteger(-4.213234123425345636536343), -4);
     });
   });
   
   describe('#commaToInteger', function(){
     it("True if parameter is an integer", function(){   
         assert.strictEqual(makeInteger(-4,2), -4);
     });
   });
    
});
