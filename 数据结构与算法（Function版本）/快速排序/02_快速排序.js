function quickSort(arr) {
    // 两个数据进行交换
    function exchange(v1, v2) {
        let temp = arr[v1]
        arr[v1] = arr[v2]
        arr[v2] = temp
    }
    
    // 找到相对合适的元素放到数组索引为0的位置作为基点pivot
    function init(left, right) {
        let center = Math.floor((left + right) / 2)

        // 比较索引为left、center、right三个值的大小，从小到大排列
        if(arr[left] > arr[right]) exchange(left, right)
        if(arr[center] > arr[right]) exchange(center, right)
        if(arr[left] > arr[center]) exchange(left, center)

        // 判断数组长度是否大于3，若小于3，则数组已经排序好了，不需要做任何处理
        if(right - left > 2) exchange(left, center)
    }

    function quick(left, right) {
        init(left, right)
        // 若数组长度小于等于2，则不需要做任何操作了，因为init函数已经排序好了
        if(right - left <= 2) return;
        
        // 创建指针i和j，分别指向left和right
        let i = left
        let j = right
        // 将该数组区域的第一个元素作为基点pivot
        let pivot = arr[i]

        // 不断让指针i和j寻找合适的值填坑，直到两个指针重合
        while(i < j) {
            // 指针j不断向左找小于pivot的值，但指针j不能找到指针i的左边
            while(arr[j] > pivot && j > i) {
                j --
            }
            // 将找到的小于pivot的值填到指针i所指向的坑中
            arr[i] = arr[j]

            // 指针i不断向右找大于pivot的值，但指针i不能找到指针j的右边
            while(arr[i] < pivot && i < j) {
                i ++
            }
            // 将找到的大于pivot的值填到指针j所指向的坑中
            arr[j] = arr[i]
        }

        // 将pivot填到指针i和指针j共同指向的坑中
        arr[i] = pivot

        // 对此时pivot的左边所有元素进行快排
        quick(left, i - 1)
        // 对此时pivot的右边所有元素进行快排
        quick(i + 1, right)
    }

    quick(0, arr.length - 1)

    return arr  
}
