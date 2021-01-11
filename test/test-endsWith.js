import endsWith from '../src/endsWith.js';
import assert from 'assert';
import expect from 'chai';


describe('endsWith', function(){
   describe('#Compares the string', function(){
     it("True if target exists at given position", function(){   
         assert.strictEqual(endsWith('gaBBage', 'a', 5), true);
     });
   });

   describe('#Compares the string', function(){
     it("True if target exists at given position", function(){   
         assert.strictEqual(endsWith('gaBBage', 'b', 3), false);
     });
   });
   
   describe('#Compares the string', function(){
     it("True if target exists at given position", function(){   
         assert.strictEqual(endsWith('gaBBage for life', 'r', 11), true);
     });
   });

});