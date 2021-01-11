import isLength from '../src/isLength.js';
import assert from 'assert';
import expect from 'chai';


describe('isLength', function(){
   describe('#isLength checks value is valid array-like length.', function(){
     it("True if value is valid", function(){   
         assert.strictEqual(isLength(345678), true);
     });
   });
   
   describe('#isLength checks value is valid array-like length.', function(){
     it("True if value is valid", function(){   
         assert.strictEqual(isLength(NaN), false);
     });
   });

});