/**
 * JsStudy
 * solved
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 19.
 */
solution('z-+.^.');

function solution(new_id) {
    var s = new_id.toLowerCase();
    s = s.replace(/[^a-z0-9-_.]/g, '');
    s = s.replace(/\.+/g, '.');

    var f = function (s) {
        var i = s.indexOf('.');
        if (i === s.length - 1) {
            s = s.slice(0, s.length - 1);
        }
        return s;
    }
    var i = s.indexOf('.');

    if (i === 0) {
        s = s.replace('.', '');
    }

    s = f(s);
    s = s || 'a';
    s = s.slice(0, 15);
    s = f(s);
    if (s.length < 3) {
        var c = s.charAt(s.length - 1).repeat(3);
        s = s.concat(c);
        s = s.slice(0, 3);
    }

    return s;
}


function solution(new_id) {
    const answer = new_id.toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}