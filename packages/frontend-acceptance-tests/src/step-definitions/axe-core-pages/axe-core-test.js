'use strict';

const {Given, Then, When} = require('cucumber');
const axeSource = require('axe-core').source;
const assert = require('assert');
var jsonToCSV = require('json-to-csv');

Given('I go to licence length page', function () {
  browser.url(‘localhost:3000/buy’);
  // inject the script
  browser.execute(axeSource);
  // run inside browser and get results
  let results = browser.executeAsync(function(done){
    axe.run(function (err, results) {
      if(err) done(null,err)
      done(results);
    });
  });

  console.log(results.value);
  //assert.equal(results.value.violations.length, 0, 'doesn\'t pass Accessibility test, see the violation details above');

  const violationsObj = results.value.violations;
  var element = {}, violations = [];
  for(var i=0;i<violationsObj.length;i++){
    element.description = violationsObj[i].description;
    element.help = violationsObj[i].help;
    element.helpUrl = violationsObj[i].helpUrl;
    element.id = violationsObj[i].id;
    element.impact = violationsObj[i].impact;
    element.nodes = violationsObj[i].nodes;
    element.tags = violationsObj[i].tags;
    violations.push(cloneMessage(element));


  };


  function cloneMessage(element) {
    var clone ={};
    for( var key in element){
      if(element.hasOwnProperty(key)) //ensure not adding inherited props
        clone[key]=element[key];
    }
    return clone;
  }
  jsonToCSV(violations,'test-results.csv')
      .then(() => {
        // success
        console.log("SUCCESS");
      })
      .catch(error => {
        // handle error
        console.log("FAILURE");
      })
});
