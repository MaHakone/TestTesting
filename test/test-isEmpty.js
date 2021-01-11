
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const isEmpty = require('../src/isEmpty.cjs');
import assert from 'assert';
import expect from 'chai';


describe('isEmpty', function(){
   describe('#Checks if value is a buffer', function(){
     it("True if input is buffer", function(){   
         assert.strictEqual(isEmpty('gabbage'), false);
     });
   });
   
   describe('#Checks if value is a buffer', function(){
     it("True if input is buffer", function(){   
         assert.strictEqual(isEmpty([]), true);
     });
   });

   describe('#Checks if value is a buffer', function(){
     it("True if input is buffer", function(){   
         assert.strictEqual(isEmpty({'gabbage' : 'best'}), false);
     });
   });


});