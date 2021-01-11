function insertionSort(arr) {
    let length = arr.length

    for(let i = 1; i < length; i++) {
        // 取出局部有序右边第一个元素
        let temp = arr[i]

        let j = i
        while(temp < arr[j - 1] && j > 0) {
            arr[j] = arr[j - 1]
            j --
        }
        arr[j] = temp
    }

    return arr
}
