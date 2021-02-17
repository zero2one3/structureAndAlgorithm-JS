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
        }

        //未存在相同数据,直接添加数据
        current.push([key, value])
        this.count ++

        //判断是否需要进行扩容
        if(this.count / this.length >= 0.75) {
            //将哈希表容量扩大一倍
            let newLength = this.length * 2
            //获取质数容量
            newLength = this.toPrime(newLength)
            //扩容
            this.resize(newLength)
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
            let inner = current[i]
            //找对对应数据了，删除该数据
            if(inner[0] === key) {
                current.splice(i, 1)
                this.count --

                // 判断是否需要减容
                if(this.count / this.length < 0.25 && this.length > 7) {
                    // 将哈希表容量减小一倍
                    let number = Math.floor(this.length / 2)

                    // 获取质数容量
                    number = this.toPrime(number)

                    // 减容
                    this.resize(number)
                }

                return inner[1]
            }
        }

        //遍历完后依然没有找到对应数据，则删除失败，返回false
        return false
    }

    //判断哈希表是否为空
    HashTable.prototype.isEmpty = function () {
        return this.count === 0
    }

    //返回哈希表内元素个数
    HashTable.prototype.size = function () {
        return this.count
    }

    //改变哈希表的容量
    HashTable.prototype.resize = function(newLength) {
        // 1.将旧的哈希表赋值给新变量
        let oldStorage = this.storage

        // 2.创建新的空数组作为新的哈希表容器
        this.storage = []

        // 3.修改哈希表容量
        this.length = newLength

        // 4.遍历旧的哈希表
        for(let i = 0; i < oldStorage.length; i++) {

            let box = oldStorage[i]

            // 4.1 某索引位置上没有数据
            if(box === null) {
                continue;
            }

            // 4.2 某索引上有数据
            for(let j = 0; j < box.length; j++) {

                let inner_box = box[j]

                // 4.2.1 将数据重新经过哈希化插入到新的哈希表中
                this.put(inner_box[0], inner_box[1])
            }
        }
    }

    //判断是是否为质数
    HashTable.prototype.isPrime = function(number) {
        //获取算数平方根，并取整
        let sqrt = Math.floor(Math.sqrt(number))

        //从2开始遍历到算数平方根
        for(let i = 2; i <= sqrt; i++) {
            //能被整除，返回 false
            if(number % i === 0) return false;
        }
        //不能被整除，返回 true
        return true
    }

    //获取离某个数最近地质数并返回
    HashTable.prototype.toPrime = function(number) {

        while(!this.isPrime(number)) {
            number ++
        }
        return number
    }

}



