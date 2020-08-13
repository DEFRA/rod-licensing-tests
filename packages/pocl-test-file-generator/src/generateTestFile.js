import fs from 'fs'
import builder from 'xmlbuilder2'
import moment from 'moment'

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

export default () => {
  const xml = {
    NewLicence: {
      ...generateHeader(),
      ...generateFooter()
    }
  }
  const doc = builder.create(xml)
  fs.writeFileSync('pocl-test-file', doc.end({ prettyPrint: true }))
}