import clamp from '../src/clamp.js';
import assert from 'assert';
import expect from 'chai';


describe('clamp', function(){
   describe('#Clamps `number` within the inclusive `lower` and `upper` bounds.', function(){
     it("True if output is clamped", function(){   
         assert.strictEqual(clamp(18, -1, 6), 6);
     });
   });
   
   describe('#Clamps `number` within the inclusive `lower` and `upper` bounds.', function(){
     it("True if output is clamped", function(){   
         assert.strictEqual(clamp(-312, -5.5, 5), -5.5);
     });
   });

});