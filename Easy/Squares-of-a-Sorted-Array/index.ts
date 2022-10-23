function sortedSquares(nums: number[]): number[] {
    
    let left: number = 0
    let right: number = nums.length - 1
    let res: number[] = new Array(nums.length)

    for(let i = res.length - 1; i >= 0; i--) {
        let L = Math.abs(nums[left])
        let R = Math.abs(nums[right])

        if(L < R) {
            res[i] = R*R
            right--
        } else {
            res[i] = L*L
            left++
        }
    }
    return res
};

console.log(sortedSquares([-4, -3, 0, 1]))