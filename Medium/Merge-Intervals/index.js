function merge(intervals) {
    intervals = intervals.sort(function (a, b) { return a[0] - b[0]; });
    var merged = [];
    var localLeft = intervals[0][0];
    var localRight = intervals[0][1];
    for (var _i = 0, intervals_1 = intervals; _i < intervals_1.length; _i++) {
        var l = intervals_1[_i];
        if (l[0] > localRight) {
            merged.push([localLeft, localRight]);
            localLeft = l[0];
            localRight = l[1];
        }
        else {
            if (l[1] >= localRight) {
                localRight = l[1];
            }
            if (l[0] < localLeft) {
                if (l[0] == l[1]) {
                    merged.push([l[0], l[1]]);
                }
                else {
                    localLeft = l[0];
                }
            }
        }
    }
    if ((merged.length > 0 && merged[merged.length - 1][0] != localLeft && merged[merged.length - 1][1] != localRight) || (merged.length == 0)) {
        merged.push([localLeft, localRight]);
    }
    return merged;
}
;
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]));
