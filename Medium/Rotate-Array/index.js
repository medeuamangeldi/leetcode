/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    k %= nums.length;
    function swap(nums, x, y) {
        var b = nums[x];
        nums[x] = nums[y];
        nums[y] = b;
    }
    function reverse(nums, left, right) {
        while (left < right) {
            swap(nums, left, right);
            left++;
            right--;
        }
    }
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    console.log(nums);
}
;
rotate([123, 12, 123, 123], 3);
