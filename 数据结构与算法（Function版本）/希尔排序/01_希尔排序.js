function shellSort(arr) {
    // 1. 获取数组长度
    let length = arr.length

    // 2.获取初始的间隔长度
    let interval = Math.floor(length / 2)

    // 3. 不断地缩小间隔的大小，进行分组插入排序
    while(interval >= 1) {

        // 4. 从 arr[interval] 开始往后遍历，将遍历到的数据与其小组进行插入排序
        for(let i = interval; i < length; i++) {
            let temp = arr[i]
            let j = i
            while(arr[j - interval] > temp && j - interval >= 0) {
                arr[j] = arr[j - interval]
                j -= interval 
            }

            arr[j] = temp           
        }

        // 5. 缩小间隔
        interval = Math.floor(interval / 2)
    }

    return arr
}
