import castArray from '../src/castArray.js';
import assert from 'assert';
import expect from 'chai';


describe('castArray', function(){
   describe('#Casts "value" as array if it is not already', function(){
     it("True if result is array", function(){   
         assert.deepEqual(castArray(1), [1]);
     });
   });

   describe('#Casts "value" as array if it is not already', function(){
     it("True if result is array", function(){   
         assert.deepEqual(castArray(''), ['']);
     });
   });
   
   describe('#Casts "value" as array if it is not already', function(){
     it("True if result is array", function(){   
         assert.deepEqual(castArray([1, 2]), [1, 2]);
     });
   });



});