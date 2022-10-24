/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    
    k %= nums.length;
    
    function swap(nums: number[], x: number,y: number) {
          let b = nums[x];
          nums[x] = nums[y];
          nums[y] = b;
    }
    
    function reverse(nums: number[], left: number, right: number){
        while(left<right){
            
            swap(nums, left, right);
            
            left++
            right--
        }
    }

    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);

    // console.log(nums);
};

rotate([123, 12, 123, 123], 3)