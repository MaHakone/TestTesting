import map from '../src/map.js';
import assert from 'assert';
import expect from 'chai';


describe('map', function(){
   describe('#maps BADABUMTSIH.', function(){
     it("True if output is mapped", function(){   
     assert.deepEqual(map([3, 9], n => n * n), [9, 81]);
     });
   });
   


});