import poclTestFileGenerator from 'commander'
import generateTestFile from './src/generateTestFile.js'

poclTestFileGenerator
  .description('Generates a test file')
  .option('-q, --quantity <number>', 'Specify quantity of records, defaults to 1', Number)

poclTestFileGenerator.parse(process.argv)

console.log(`Generating test file with ${poclTestFileGenerator.quantity} records`)

generateTestFile({
  quantity: poclTestFileGenerator.quantity
})

console.log(`Generated test file 'pocl-test-file'`)
