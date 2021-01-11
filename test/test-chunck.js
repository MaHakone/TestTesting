import chunk from '../src/chunk.js';
import assert from 'assert';
import expect from 'chai';


describe('chunk', function(){
   describe('#two pieces', function(){
     it("True if two arrays", function(){   
         assert.strictEqual(chunk([’a’, ’b’, ’c’, ’6’], 2), ([’a’, ’b’], [’c’, ’6’]));
     });
   });
    
   describe('#allSmall', function(){
     it("True if parameter has upper first, lower rest", function(){   
         assert.strictEqual(chunk([’a’, ’b’, ’c’, ’6’], 0), []);
     });
   });

});