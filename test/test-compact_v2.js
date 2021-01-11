import compact from '../src/compact.js';
import assert from 'assert';
import expect from 'chai';


describe('compact', function(){
   describe('#Removes falsey values, function(){
     it("True if returns array of non false values", function(){   
         assert.deepEqual(compact([0, false, 1, NaN, 2, null], [1, 2]);
     });
   });
/*
describe('compact', function(){
   describe('#Removes falsey values, function(){
     it("True if returns array of non false values", function(){   
         assert.strictEqual(compact([3, ””, 9, 5, 6, undefined, 8, 0], [3, 9, 5, 6, 8]);
     });
   });

describe('compact', function(){
   describe('#Removes falsey values, function(){
     it("True if returns array of non false values", function(){   
         assert.strictEqual(compact([-3, 0, 3], [-3, 3]);
     });
   });
*/
});