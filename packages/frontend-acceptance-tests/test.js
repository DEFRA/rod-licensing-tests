const p = require('./src/lib/createPermissions');

(async () => {
    try {
        //console.log(p)
        var res = await p.createPermission();
        console.log(res)
        console.log('ho');
    } catch (e) {
        console.log(e);
    }
})();
