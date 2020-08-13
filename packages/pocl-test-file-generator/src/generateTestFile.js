import fs from 'fs'
import builder from 'xmlbuilder2'
import moment from 'moment'
import generator from './generateRecord.js'
const { generateRecord } = generator

const generateHeader = () => ({
  HDR: {
    VER: '1.1',
    FN: `EAF1NewLicence${moment().format('YYYYMMDD')}${(`00000${Math.floor(Math.random() * 10**5)}`).slice(-5)}.xml`,
    DATE: moment().format('YYYYMMDD HH:mm:ss'),
    FTYPE: '1'
  }
})

const generateFooter = () => ({
  TRL: {
    VER: '1.1',
    TTXNS: ''
  }
})


const readJSONFile = path => {
  return JSON.parse(fs.readFileSync(path, {encoding: 'utf-8'}))
}
const addresses = readJSONFile('./addresses.json')
const names = readJSONFile('./names.json')


export default () => {
  const xml = {
    NewLicence: {
      ...generateHeader(),
      ...generateRecord(names, addresses),
      ...generateFooter()
    }
  }
  const doc = builder.create(xml)
  fs.writeFileSync('pocl-test-file', doc.end({ prettyPrint: true }))
}