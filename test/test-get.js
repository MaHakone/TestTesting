import get from '../src/get.js';
import assert from 'assert';
import expect from 'chai';


describe('get', function(){
   describe('#gets `number` within the inclusive `lower` and `upper` bounds.', function(){
     it("True if output is geted", function(){   
         assert.strictEqual(get(18, -1, 6), 6);
     });
   });
   
   describe('#gets `number` within the inclusive `lower` and `upper` bounds.', function(){
     it("True if output is geted", function(){   
         assert.strictEqual(get(-312, -5.5, 5), -5.5);
     });
   });

});