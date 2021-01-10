```js
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let len = height.length;
    let L = 0, R = len - 1;
    let leftHeight = 0, rightHeight = 0;
    let res = 0;
    while (L < R) {
        if (height[L] < height[R]) { // 左边高度小，当然看左边
            leftHeight = Math.max(leftHeight, height[L]);
            res += leftHeight - height[L]; // 当前柱子能存放的水
            L++;
        } else { // 右边高度小，看右边
            rightHeight = Math.max(rightHeight, height[R]);
            res += rightHeight - height[R]; // 当前柱子能存放的水
            R--;
        }
    }
    return res;
};
```
