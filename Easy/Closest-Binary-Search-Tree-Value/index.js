var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function closestValue(root, target) {
    var closest = root === null || root === void 0 ? void 0 : root.val;
    while (root) {
        // if(Math.abs(root.val-target) == 0){ return root.val }
        var statement = (Math.abs(root.val - target) < Math.abs(closest - target));
        closest = statement ? root.val : closest;
        root = (target < root.val) ? root.left : root.right;
    }
    return closest;
}
;
