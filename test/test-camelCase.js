import camelCase from '../src/camelCase.js';
import assert from 'assert';
import expect from 'chai';


describe('camelCase', function(){
   describe('#twoWords', function(){
     it("True if output has first word small, other capitalized", function(){   
         assert.strictEqual(camelCase("pine apple for pizza"),"pineAppleForPizza");
     });
   });
    
   describe('#manyWords', function(){
     it("True if output has first word small, other capitalized", function(){   
         assert.strictEqual(camelCase("pine---APPLE,,,for PiZzA"),"pineAppleForPizza");
     });
   });
  
});