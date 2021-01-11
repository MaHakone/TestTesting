import isBuffer from '../src/isBuffer.js';
import assert from 'assert';
import expect from 'chai';


describe('isBuffer', function(){
   describe('#Checks if value is a buffer', function(){
     it("True if input is buffer", function(){   
         assert.strictEqual(isBuffer(new Buffer(2)), true);
     });
   });

});