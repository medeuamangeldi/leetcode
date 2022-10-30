function isMonotonic(nums: number[]): boolean {
    
    if (nums.length == 1){
        return true
    } else {
        const monoDec: boolean = (nums[0]-nums[nums.length-1] > 0) ? true : false;
        
        for(let i = 0; i < nums.length-1; i++){
            if((!monoDec && nums[i+1]-nums[i]<0) || (monoDec &&  nums[i+1]-nums[i] > 0)){
                return false
            }
         }
    }

    
    return true
};

console.log(isMonotonic([1, 2, 2, 3, 3, 4, 6, 3]))