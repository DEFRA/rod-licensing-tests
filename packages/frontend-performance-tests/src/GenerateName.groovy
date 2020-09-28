def generateRandomString(length) {
    def pool = ['A'..'Z'].flatten()
    Random rand = new Random()
    def chars = (0..length-1).collect { pool[rand.nextInt(pool.size())] }
    return chars.join()
}

vars.put("FirstName", generateRandomString(10))
vars.put("LastName", generateRandomString(20))
