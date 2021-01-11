import makeInteger from '../src/toInteger.js';
import assert from 'assert';
import expect from 'chai';


describe('makeInteger', function(){
   describe('#decimalToInteger', function(){
     it("True if parameter is an integer", function(){   
         assert.strictEqual(makeInteger(94.2), 94);
     });
   });
   
   describe('#negativeToInteger', function(){
     it("True if parameter is an integer", function(){   
         assert.strictEqual(makeInteger(-4.213), -4);
     });
   });
   
});
