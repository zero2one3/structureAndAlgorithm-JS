function LinkedList() {
    //属性
    this.head = null
    this.length = 0

    //每个元素的定义类
    function Node(item) {
        this.item = item
        this.next = null
    }

    //方法
    //在链表尾部追加元素
    LinkedList.prototype.append = function (item) {
        let node = new Node(item)
        if(this.length === 0) {
            this.head = node
        }
        else {
            let current = this.head
            while(current.next) {
                current = current.next
            }
            current.next = node
        }

        this.length ++
    }

    //展示整个链表
    LinkedList.prototype.toString = function () {
        let string = ''
        let current = this.head
        while (current) {
            string += `${current.item} `
            current = current.next
        }
        return string
    }

    //在某个位置插入新的元素
    LinkedList.prototype.insert = function (position, item) {
        let node = new Node(item)

        if(position < 0 || position > this.length) return false

        if(position === 0) {
            node.next = this.head
            this.head = node
        }
        else {
            let current = this.head
            let prev = null
            let index = 0
            while (index++ < position) {
                prev = current
                current = current.next
            }

            prev.next = node
            node.next = current

        }
        this.length ++
        return true

    }

    //获取对应位置的元素
    LinkedList.prototype.get = function (position) {
        if(position < 0 || position >= this.length) return false

        let current = this.head
        let index = 0
        while (index++ < position) {
            current = current.next
        }
        return current.item


    }

    //获取元素的索引
    LinkedList.prototype.indexOf = function (item) {
        let current = this.head
        let index = 0
        while (index < this.length) {
            if(current.item === item) {
                return index
            }
            else {
                current = current.next
                index ++
            }
        }
        return -1
    }

    //修改某位置上的元素
    LinkedList.prototype.update = function (position, NewItem) {
        if(position < 0 || position >= this.length) return false
        else {
            let current = this.head
            let index = 0
            while (index < position) {
                current = current.next
                index ++
            }
            current.item = NewItem
            return true
        }
    }

    //移除某位置上的元素
    LinkedList.prototype.removeAt = function (position) {
        if(position < 0 || position >= this.length) return false

        let current = this.head
        let previous = null
        let index = 0
        if(position === 0) {
            this.head = current.next
        }
        else {
            while (index < position) {
                previous = current
                current = current.next
                index ++
            }
            previous.next = current.next
        }

        this.length --
        return current.item

    }

    //移除某元素
    LinkedList.prototype.remove = function (data) {
        let index = this.indexOf(data)

        this.removeAt(index)
        return index
    }

    //判断链表是否为空
    LinkedList.prototype.isEmpty = function () {
        if(this.length === 0) {
            return true
        }
        else {
            return false
        }
    }

    //返回链表的元素个数
    LinkedList.prototype.size = function () {
        return this.length
    }
}
