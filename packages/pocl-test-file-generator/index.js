// var builder = require('xmlbuilder');
// import builder from 'xmlbuilder'
import poclTestFileGenerator from 'commander'
//import fs from 'fs'
import generateRecord from './src/generateRecord.js'
import fs from 'fs'

const readJSONFile = path => {
  return JSON.parse(fs.readFileSync(path, {encoding: 'utf-8'}))
}
const addresses = readJSONFile('./addresses.json')
const names = readJSONFile('./names.json')

poclTestFileGenerator
  .description('Generates a test file')
  
console.log(generateRecord(addresses, names))