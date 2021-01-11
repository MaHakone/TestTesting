import every from '../src/every.js';
import assert from 'assert';
import expect from 'chai';


describe('every', function(){
   describe('#Are everything what is told?', function(){
     it("True if everything is what is told", function(){   
         assert.strictEqual(every(['a', 'b', 'c'], String), true);
     });
   });

   describe('#Are everything what is told?', function(){
     it("True if everything is what is told", function(){   
         assert.strictEqual(every([1, 'p', ''], Boolean), false);
     });
   });

});