function sortedSquares(nums) {
    var left = 0;
    var right = nums.length - 1;
    var res = new Array(nums.length);
    for (var i = res.length - 1; i >= 0; i--) {
        var L = Math.abs(nums[left]);
        var R = Math.abs(nums[right]);
        if (L < R) {
            res[i] = R * R;
            right--;
        }
        else {
            res[i] = L * L;
            left++;
        }
    }
    return res;
}
;
console.log(sortedSquares([-4, -3, 0, 1]));
