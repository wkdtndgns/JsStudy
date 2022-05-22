/**
 * JsStudy
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 23.
 */
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);

    for( var i = 0; i < b; i++ ){
        var s = '';
        s.concat('*',a);

        console.log(s);
    }
});