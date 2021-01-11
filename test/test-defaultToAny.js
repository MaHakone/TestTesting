import defaultToAny from '../src/defaultToAny.js';
import assert from 'assert';
import expect from 'chai';


describe('defaultToAny', function(){
   describe('#two pieces', function(){
     it("True if returns first that is not NaN, null or undefined", function(){   
         assert.strictEqual(defaultToAny(null, null, 10, NaN), (10));
     });
   });
    
   describe('#allSmall', function(){
     it("True if returns first that is not NaN, null or undefined", function(){   
         assert.strictEqual(defaultToAny(NaN, 10, 20), 10);
     });
   });

   describe('#allSmall', function(){
     it("True if returns first that is not NaN, null or undefined", function(){   
         assert.strictEqual(defaultToAny(undefined, 10, 20, 30), 10);
     });
   });


});