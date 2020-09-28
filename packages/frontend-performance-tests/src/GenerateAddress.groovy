def generateRandomString(length) {
    def pool = ['A'..'Z'].flatten()
    Random rand = new Random()
    def chars = (0..length-1).collect { pool[rand.nextInt(pool.size())] }
    return chars.join()
}

/*
    For now we'll generate random addresses in Afghanistan
 */
vars.put("Premises", generateRandomString(2))
vars.put("Town", generateRandomString(10))
vars.put("Postcode", generateRandomString(5))
vars.put("Country", "AF")

