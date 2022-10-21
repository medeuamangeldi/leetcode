function findMissingRanges(nums: number[], lower: number, upper: number): string[] {
    
    if(nums.length == 0){
        return (lower == upper) ? [`${lower}`] : [`${lower}->${upper}`]
    }
    
    const missingRanges: string[] = [];
    let diff: number;
    
    if(lower != nums[0]){
        diff = nums[0] - lower;
        
        if(diff == 1){
            missingRanges.push(`${lower}`)
        } else if(diff == 2){
            missingRanges.push(`${lower}->${nums[0]-1}`)
        } else if(diff > 2) {
             missingRanges.push(`${lower}->${nums[0]-1}`)
        }
    }
    
    let i: number = 0;
    
    while(i < nums.length){
        
        while(i < nums.length && nums[i+1]-nums[i] == 1){
            i++
        }
        
        if(i < nums.length - 1){
            diff = nums[i+1] - nums[i];
            if(diff == 2){
                missingRanges.push(`${nums[i]+1}`)
            } else {
                missingRanges.push(`${nums[i]+1}->${nums[i+1]-1}`)
            }
            
        }
        
        i++
    }
    
    if(upper != nums[nums.length-1]){
        diff = upper - nums[nums.length-1];
        
        if(diff == 1){
            missingRanges.push(`${upper}`)
        } else {
            missingRanges.push(`${nums[nums.length-1]+1}->${upper}`)
        }
    }
    

    return missingRanges
};

console.log(findMissingRanges([0,1,3,50,75], 0, 99))