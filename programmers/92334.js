/**
 * baekJoon
 *
 * @author shjang02 < shjang02@simplexi.com >
 * @since 2022. 05. 13.
 */
function solution(id_list, report, k) {
    var aStopId = [];
    var aResult = [];
    var obj = {};

    id_list.forEach(function (v) {
        obj[v] = {count: 0, reportId: []};
    });

    report.forEach(function (v) {
        var aReporter = v.split(' ');
        var iReportCount = obj[aReporter[1]].count;
        var i = parseInt(iReportCount);
        var arr = obj[aReporter[0]].reportId;

        if (arr.includes(aReporter[1]) === true) {
            return false;
        }

        arr.push(aReporter[1]);
        obj[aReporter[1]].count = ++i;
        obj[aReporter[0]].reportId = arr;

        if (i >= k && aStopId.includes(aReporter[1]) === false) {
            aStopId.push(aReporter[1]);
        }
    });

    Object.keys(obj).forEach(function (v) {
        var f = function (v) {
            return aStopId.includes(v);
        };
        var arr = Object.values(obj[v].reportId).filter(f);
        aResult.push(arr.length);
    });

    return aResult;
}

/**
 * set, map 잘써서 위에 코드보다는 짧고 잘 만들었음
 * @param id_list
 * @param report
 * @param k
 * @returns {*}
 */
function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a => {
        return a.split(' ')
    });
    let counts = new Map();
    for (const bad of reports) {
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1)
    }
    let good = new Map();
    for (const report of reports) {
        if (counts.get(report[1]) >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1)
        }
    }
    let answer = id_list.map(a => good.get(a) || 0)
    return answer;
}
