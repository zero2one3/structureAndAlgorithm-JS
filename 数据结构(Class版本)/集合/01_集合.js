class Set {
    constructor() {
        this.items = {}
    }

    // 添加元素
    add(value) {
        this.items[value] = value
    }

    // 判断集合中是否有该元素
    has(value) {
        return this.items.hasOwnProperty(value)
    }

    // 删除元素
    delete(value) {
        if(this.has(value)) delete this.items[value];
    }

    // 清空集合
    clear() {
        this.items = {}
    }

    // 判断集合内的元素个数
    size() {
        return Object.keys(this.items).length
    }

    // 返回集合内的所有元素
    values() {
        return Object.keys(this.items)
    }

    // 获取并集
    union(otherSet) {
        let newSet = new Set()
        let currentValues = this.values()
        let otherValues = otherSet.values()

        currentValues.forEach(v => newSet.add(v))
        otherValues.forEach(v => newSet.add(v))

        return newSet
    }

    // 获取交集
    intersect(otherSet) {
        let newSet = new Set()
        let currentValues = this.values()
        
        currentValues.forEach(v => {
            if(otherSet.has(v)) newSet.add(v);
        })

        return newSet
    }

    // 获取差集
    difference(otherSet) {
        let newSet = new Set()
        let currentValues = this.values()

        currentValues.forEach(v => {
            if(!otherSet.has(v)) newSet.add(v);
        })

        return newSet
    }

    // 判断是否为另一个集合的子集
    subset(otherSet) {
        let currentValues = this.values()
        let len = currentValues.length
        for(let i = 0; i < len; i++) {
            if(!otherSet.has(currentValues[i])) return false;
        }

        return true
    }
}
