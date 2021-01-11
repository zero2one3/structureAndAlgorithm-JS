function Set() {
    // 属性
    this.items = {}

    // 添加元素
    Set.prototype.add = function(value) {
        if(this.has(value)) return false;

        this.items[value] = value

        return this.items
    }

    // 判断是否存在元素
    Set.prototype.has = function(value) {
        return this.items.hasOwnProperty(value)
    }

    // 删除元素
    Set.prototype.delete = function(value) {
        if(!this.has(value)) return false;
        
        delete this.items[value]

        return true
    }

    // 清空集合
    Set.prototype.clear = function() {
        this.items = {}
    }

    // 判断集合内元素个数
    Set.prototype.size = function() {
        return Object.keys(this.items).length
    }

    // 返回集合内所有元素
    Set.prototype.values = function() {
        return Object.keys(this.items)
    }

    // 获取并集
    Set.prototype.union = function(otherSet) {
        let newSet = new Set()

        let oldSetValue = this.values()
        for(let i = 0; i < oldSetValue.length; i++) {
            newSet.add(oldSetValue[i])
        }

        let otherSetValue = otherSet.values()
        for(let j = 0; j < otherSetValue.length; j++) {
            newSet.add(otherSetValue[j])
        }

        return newSet
    }

    // 获取交集
    Set.prototype.intersect = function(otherSet) {
        let newSet = new Set()
        
        let oldSetValue = this.values()
        for(let i = 0; i < oldSetValue.length; i++) {
            let item = oldSetValue[i]
            if(otherSet.has(item)) {
                newSet.add(item)
            }
        }

        return newSet
    }

    // 获取差集
    Set.prototype.difference = function(otherSet) {
        let newSet = new Set()

        let oldSetValue = this.values()
        for(let i = 0; i < oldSetValue.length; i++) {
            let item = oldSetValue[i]
            if(!otherSet.has(item)) {
                newSet.add(item)
            }
        }

        return newSet
    }

    // 判断是否为另一个集合的子集
    Set.prototype.subset = function(otherSet) {
        let oldSetValue = this.values()
        for(let i = 0; i < oldSetValue.length; i++) {
            if(!otherSet.has(oldSetValue[i])) {
                return false
            }
        }

        return true
    }
}



