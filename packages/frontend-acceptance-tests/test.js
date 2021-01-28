const p = require('./src/lib/create-permissions');

(async () => {
    try {
        //console.log(p)
        var res = await p.createPermission();
        console.log(res)
    } catch (e) {
        console.log(e);
    }
})();
