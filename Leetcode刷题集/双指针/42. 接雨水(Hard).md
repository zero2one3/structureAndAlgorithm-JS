```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let len = height.length;
    let res = 0;
    let L = 0, R = len - 1;
    let leftMax = 0, rightMax = 0;   // 定义左边的最大值和右边的最大值

    while(L < R) {
        if(height[L] < height[R]) {
            leftMax = Math.max(leftMax, height[L])
            res += leftMax - height[L]
            L ++
        } else {
            rightMax = Math.max(rightMax, height[R])
            res += rightMax - height[R]
            R --
        }
    }

    return res;
};
```
