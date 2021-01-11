function mergeSort(arr) {
    
    // 将所有元素不断地两两组合，直到所有元素都被组合成一个组
    while(arr.length > 1){
        // 获取一下遍历前的数组长度，方便下面判断需要组合几次
        let length = arr.length
        
        // 创建空的新数组，用于存放所有组合后的元素
        let next_arr = []
        
        // 取两个元素进行组合，一共取 length / 2 次
        for(let i = 0; i < Math.floor(length / 2); i++){
            // 取出第一个元素
            let left = [].concat(arr.shift())
            // 取出第二个元素
            let right = [].concat(arr.shift())
            // 创建另一个新的空数组，用于存放组合后的所有元素
            let new_arr = []

            // 取两个数组中头部最小的值放到新数组中，直到一个数组为空
            while(left.length > 0 && right.length > 0){
                let min = left[0] > right[0]? right.shift() : left.shift()
                new_arr.push(min)
            }
            // 将合并好的数组添加到新的数组中
            next_arr.push(new_arr.concat(left.length == 0? right : left))
        }
        // 判断是否有一个未成组的数组
        if(arr.length == 1) next_arr.push(arr[0]);
        
        // 将所有组合后的元素构成的新数组作为下一次遍历的对象
        arr = next_arr

        console.log(arr);
    }

    // 返回完整有序数组
    return arr[0]
}
