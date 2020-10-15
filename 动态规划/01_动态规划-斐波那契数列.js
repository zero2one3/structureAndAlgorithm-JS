function fibonacci(n) {
    // 创建一个数组，保存整个斐波那契数列
    let arr = [1, 1]
    
    // 从索引为2的位置开始计算所有的数并记录在数组中
    for(let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    // 直接返回指定位置的数
    return arr[n - 1]
}
