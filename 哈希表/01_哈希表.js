//封装哈希表
function HashTable() {
    //属性

    //用于存储
    this.storage = []
    //哈希表内数据个数
    this.count = 0
    //数组长度
    this.length = 7

    //方法

    //封装哈希函数
    HashTable.prototype.hashFunc = function (str, size) {
        let hashCode = 0

        //取一个很大的数
        for (let i = 0; i < str.length; i ++) {
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }
        //取余
        return hashCode % size
    }

    //插入或修改数据
    HashTable.prototype.put = function (key, value) {
        //哈希化获得下标值
        let index = this.hashFunc(key, this.length)
        let current = this.storage[index]

        //判断该下标值的位置是否有数据
        if(!current) {
            this.storage[index] = [[key, value]]
            this.count ++
            return;
        }

        for (let i = 0; i < current.length; i ++) {
            //已存在相同数据
            if(current[i][0] === key) {
                current[i][1] = value
                return;
            }
            //未存在相同数据,直接添加数据
            current.push([key, value])
            this.count ++
        }

    }

    //获取数据
    HashTable.prototype.get = function (key) {
        //获取相应的下标值
        let index = this.hashFunc(key, this.length)
        let current = this.storage[index]

        //若该下标值位置不存在任何数据，则查找失败
        if(!current) {
            return false
        }

        //若该下标值位置有数据，则进行遍历查找
        for(let i in current) {
            //找到对应数据并返回value
            if(current[i][0] === key) {
                return current[i][1]
            }
        }

        //没有找到对应数据，返回false
        return false
    }

    //删除数据
    HashTable.prototype.del = function (key) {
        //获取相应的下标值
        let index = this.hashFunc(key, this.length)

        let current = this.storage[index]

        //该下标值位置没有数据，则删除失败，返回false
        if(!current) {
            return false
        }

        //该下标值位置有数据,则遍历数组找到对应数据删除
        for (let i in current) {
            //找对对应数据了，删除该数据
            if(current[i][0] === key) {
                current.splice(i, 1)
                this.count --
                return true
            }
        }

        //遍历完后依然没有找到对应数据，则删除失败，返回false
        return false
    }

    //判断哈希表是否为空
    HashTable.prototype.isEmpty = function () {
        if(this.count === 0) {
            return true
        }

        return false
    }

    //返回哈希表内元素个数
    HashTable.prototype.size = function () {
        return this.count
    }

}



