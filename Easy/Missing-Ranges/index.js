function findMissingRanges(nums, lower, upper) {
    if (nums.length == 0) {
        return (lower == upper) ? ["".concat(lower)] : ["".concat(lower, "->").concat(upper)];
    }
    var missingRanges = [];
    var diff;
    if (lower != nums[0]) {
        diff = nums[0] - lower;
        if (diff == 1) {
            missingRanges.push("".concat(lower));
        }
        else if (diff == 2) {
            missingRanges.push("".concat(lower, "->").concat(nums[0] - 1));
        }
        else if (diff > 2) {
            missingRanges.push("".concat(lower, "->").concat(nums[0] - 1));
        }
    }
    var i = 0;
    while (i < nums.length) {
        while (i < nums.length && nums[i + 1] - nums[i] == 1) {
            i++;
        }
        if (i < nums.length - 1) {
            diff = nums[i + 1] - nums[i];
            if (diff == 2) {
                missingRanges.push("".concat(nums[i] + 1));
            }
            else {
                missingRanges.push("".concat(nums[i] + 1, "->").concat(nums[i + 1] - 1));
            }
        }
        i++;
    }
    if (upper != nums[nums.length - 1]) {
        diff = upper - nums[nums.length - 1];
        if (diff == 1) {
            missingRanges.push("".concat(upper));
        }
        else {
            missingRanges.push("".concat(nums[nums.length - 1] + 1, "->").concat(upper));
        }
    }
    return missingRanges;
}
;
console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
