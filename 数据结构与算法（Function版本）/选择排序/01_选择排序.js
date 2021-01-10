function selectionSort(arr) {
    
    function exchange(v1, v2) {
        let temp = arr[v1]
        arr[v1] = arr[v2]
        arr[v2] = temp
    }

    let length = arr.length
    for(let i = 0; i < length - 1; i++) {
        let min = i
        for(let j = min + 1; j < length; j++) {
            if(arr[min] > arr[j]) {
                min = j
            }
        }
        exchange(min, i)
    }

    return arr
}
