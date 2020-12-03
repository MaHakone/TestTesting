import sliceSlice from '../src/slice.js';
import assert from 'assert';
import expect from 'chai';

describe('sliceSlice', function(){

   describe('#testingSlice', function(){
     it("True if parameter is sliced", function(){   
         assert.strictEqual(sliceSlice([1, 2, 3, 4], 1, 3), [2, 3]);
     });
   });

   describe('#testingSliceWithHipsu', function(){
     it("True if parameter is sliced", function(){   
         assert.strictEqual(sliceSlice([1, 2, 3, 4], 1, 3), ['2', '3']);
     });
   });
});
