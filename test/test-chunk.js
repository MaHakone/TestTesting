import makeChunk from '../src/chunk.js';
import assert from 'assert';
import expect from 'chai';


describe('chunkFunction', function(){
   describe('#positiveCase', function(){
     it("True if input is put in two chunks", function(){   
         assert.strictEqual(makeChunk(['a', '1', 'b', '2'], 3), ([['a', '1'], ['b', '2']]));
     });
   });
    
});

