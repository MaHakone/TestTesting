import difference from '../src/difference.js';
import assert from 'assert';
import expect from 'chai';


describe('difference', function(){
   describe('#first_difference', function(){
     it("True if returns array of unique values", function(){   
         assert.deepEqual(difference([1, 2, 3], [2, 3]), [1]);
     });
   });
   
   describe('#empty', function(){
     it("True if returns array of unique values", function(){   
         assert.deepEqual(difference([11, 112], [11, 112]), []);
     });
   });
   
  describe('#negative_values', function(){
     it("True if returns array of unique values", function(){   
         assert.deepEqual(difference([-1, 1, 12], [1, 12]), [-1]);
     });
   });
   
   describe('#different values', function(){
     it("True if returns array of unique values", function(){   
         assert.deepEqual(difference([1, 3, 5], [1, 4, 6]), [3, 5]);
     });
   });
   
});