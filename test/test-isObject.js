import isObject from '../src/isObject.js';
import assert from 'assert';
import expect from 'chai';


describe('isObject', function(){
   describe('#isObjects 'value' is object.', function(){
     it("True if value is object.", function(){   
         assert.strictEqual(isObject(new String('gabbage')), true);
     });
   });
   
   describe('#isObjects 'value' is object.', function(){
     it("True if value is object.", function(){     
         assert.strictEqual(isObject(false), false);
     });
   });

});