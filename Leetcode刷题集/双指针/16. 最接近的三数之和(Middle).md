```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = 2 * 10 ** 3;
    let len = nums.length
    nums.sort((a, b) => a - b)   // 从小到大排序
    for(let i = 0; i < len - 2; i++) {
        let L = i + 1
        let R = len - 1
        while(L < R) {
            let sum = nums[i] + nums[L] + nums[R]     // 求和
            if (sum === target) return sum;           // 如果和与target相等，则可以直接返回
            if(Math.abs(sum - target) < Math.abs(res - target)) {   // 如果sum值更接近target，则赋值给res
                res = sum
            }
            sum > target ? R -- : L ++;      // 根据sum与target的大小比较，决定左右指针的移动
        }
    }
    return res
};
```
