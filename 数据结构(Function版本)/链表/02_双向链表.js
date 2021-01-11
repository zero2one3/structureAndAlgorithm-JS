function DoubleLinkedList() {
    //属性
    this.head = null
    this.tail = null
    this.length = 0

    //元素的构造函数
    function Node(item) {
        this.item = item
        this.next = null
        this.prev = null
    }

    //方法

    //在末尾加入元素
    DoubleLinkedList.prototype.append = function (item) {
        let node = new Node(item)
        if(this.length === 0) {
            this.head = node
            this.tail = node
        }
        else {
            node.prev = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.length ++
    }

    //向指定位置插入元素
    DoubleLinkedList.prototype.insert = function (position, item) {
        //判断位置
        if(position < 0 || position > this.length) {
            return false
        }
        let node = new Node(item)
        let index = 0
        let current = this.head
        let prev = null
        if(position === this.length) {
            this.append(item)
        }
        else if(position === 0) {
            node.next = this.head
            this.head.prev = node
            this.head = node
            this.length ++
        }
        else {
            while (index < position) {
                prev = current
                current = current.next
                index ++
            }
            prev.next = node
            current.prev = node
            node.prev = prev
            node.next = current
            this.length ++
        }
    }

    //展示链表数据
    DoubleLinkedList.prototype.toString = function () {
        let current = this.head
        let string = ''
        while (current) {
            string += current.item + ' '
            current = current.next
        }
        return string
    }

    //获取对应位置上的元素
    DoubleLinkedList.prototype.get = function (position) {
        if(position < 0 || position > this.length - 1) {
            return false
        }
        let index = 0
        let current = this.head
        while (index < position) {
            current = current.next
            index ++
        }
        return current.item
    }

    //获取元素的索引
    DoubleLinkedList.prototype.indexOf = function (item) {
        let current = this.head
        let index = 0
        while (index < this.length) {
            if(current.item === item) {
                return index
            }
            else {
                index ++
                current = current.next
            }
        }
        return -1

    }

    //修改某位置上的元素
    DoubleLinkedList.prototype.update = function (position, item) {
        if(position < 0 || position >= this.length) {
            return false
        }
        let index = 0
        let current = this.head
        while (index < position) {
            index ++
            current = current.next
        }
        current.item = item
        return true
    }

    //移除某位置上的元素
    DoubleLinkedList.prototype.removeAt = function (position) {
        //判断是否越界
        if(position < 0 || position >= this.length) {
            return false
        }

        // 判断清除的元素是否为链表的唯一元素
        if(position === 0 && position === this.length - 1) {
            this.head = null
            this.tail = null
        }
        //判断清除的元素是否为链表的第一个元素
        else if(position === 0) {
            this.head.next.prev = null
            this.head = this.head.next
        }
        //判断清除的元素是否为链表的最后一个元素
        else if(position === this.length - 1) {
            this.tail.prev.next = null
            this.tail = this.tail.prev
        }
        else {
            let current = this.head
            let prev = null
            let index = 0
            while (index < position) {
                index ++
                prev = current
                current = current.next
            }
            prev.next = current.next
            current.next.prev = prev
        }
        this.length --
        return true
    }

    //移除某元素
    DoubleLinkedList.prototype.remove = function (data) {
        let index = this.indexOf(data)

        this.removeAt(index)

        return index
    }

    //判断双向链表是否为空
    DoubleLinkedList.prototype.isEmpty = function () {
        if(this.length === 0) {
            return true
        }
        else {
            return false
        }
    }

    //返回双向链表元素个数
    DoubleLinkedList.prototype.size = function () {
        return this.length
    }
}
