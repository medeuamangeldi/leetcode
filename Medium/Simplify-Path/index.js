function simplifyPath(path) {
    var stack = [];
    var res = '/';
    var pathArr = path.split('/');
    for (var _i = 0, pathArr_1 = pathArr; _i < pathArr_1.length; _i++) {
        var part = pathArr_1[_i];
        if (part == "..") {
            if (stack.length != 0) {
                stack.pop();
            }
        }
        else if (part == '.' || part.length == 0) {
            continue;
        }
        else {
            stack.push(part);
        }
    }
    res += stack.join('/');
    return res;
}
;
console.log(simplifyPath("/home/"));
