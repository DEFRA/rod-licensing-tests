import java.time.*
def ageVal = vars.get('Age') as Integer
LocalDate dob = LocalDate.now().plusYears(-ageVal)
//log.info 'Age ' + ageVal + ' gives dob= ' + dob.toString()
vars.put("BirthDateDay", "" + dob.getDayOfMonth())
vars.put("BirthDateMonth", "" + dob.getMonthValue())
vars.put("BirthDateYear", "" + dob.getYear())
