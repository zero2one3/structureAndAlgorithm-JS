```js
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let len = nums.length;
    if (len < 2) return []
    let res = []
    nums.sort((a, b) => a - b); // 从小到大进行排序
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue; // 去重
        let L = i + 1
        let R = len - 1
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R]; // 三数之和
            if (sum === 0) {
                res.push([nums[i], nums[L], nums[R]]);
                while (L < R && nums[L] == nums[L + 1]) L++; // 去重
                while (L < R && nums[R] == nums[R - 1]) R--;
                L++
                R--
            } else if (sum < 0) {
                L++
            } else if (sum > 0) {
                R--
            }
        }
    }
    return res
};
```