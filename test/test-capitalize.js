import doCapitalize from '../src/capitalize.js';
import assert from 'assert';
import expect from 'chai';


describe('capitalizeFunction', function(){
   describe('#allBig', function(){
     it("True if parameter has upper first, lower rest", function(){   
         assert.strictEqual(doCapitalize("gaBBAge"),"Gabbage");
     });
   });
    
   describe('#allSmall', function(){
     it("True if parameter has upper first, lower rest", function(){   
         assert.strictEqual(doCapitalize("gABBAG3 -- LIfe. i say "),"Gabbag3 -- life. i say");
     });
   });

});

