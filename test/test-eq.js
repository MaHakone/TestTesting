import eq from '../src/eq.js';
import assert from 'assert';
import expect from 'chai';


describe('eq', function(){
   describe('#Comparison between two values.', function(){
     it("True if values are equal", function(){   
         assert.strictEqual(eq('a', Object('a')), false);
     });
   });

describe('#Comparison between two values.', function(){
     it("True if values are equal", function(){   
         assert.strictEqual(eq(" ", " "), true);
     });
   });

});