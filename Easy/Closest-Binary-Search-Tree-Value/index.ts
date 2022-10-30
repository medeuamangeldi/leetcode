 class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
 

 function closestValue(root: TreeNode | null, target: number): number {
    
    let closest: number | any = root?.val;
    
    while(root){
        
        // if(Math.abs(root.val-target) == 0){ return root.val }
        
        const statement = (Math.abs(root.val-target)<Math.abs(closest-target));
        
        closest = statement ? root.val : closest;
        root = (target < root.val) ? root.left : root.right;
        
    }
    return closest
};