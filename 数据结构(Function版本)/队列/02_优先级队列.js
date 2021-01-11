function PriorityQueue() {
    this.list = []

    function EachElement(e, num) {
        this.element = e
        this.priority = num
    }
    
    //入列
    PriorityQueue.prototype.enqueue = function (e, priority) {
        let element = new EachElement(e, priority)

        if(this.list.length === 0) {
            this.list.push(element)
            return;
        }

        for(let i in this.list) {
            if(element.priority < this.list[i].priority) {
                this.list.splice(i, 0, element)
                return;
            }
        }

        this.list.push(element)
    }
    //出列
    PriorityQueue.prototype.dequeue = function () {
        return this.list.shift()
    }
    //返回当前队列的元素个数
    PriorityQueue.prototype.size = function () {
        return this.list.length
    }
    //返回当前队列第一个元素
    PriorityQueue.prototype.front = function () {
        return this.list[0]
    }

    //判断优先级队列是否为空
    PriorityQueue.prototype.isEmpty = function() {
        if(this.list.length === 0) {
            return true
        }
        else {
            return false
        }
    }

    //返回当前队列
    PriorityQueue.prototype.toString = function () {
        let string = ''
        for(let i in this.list) {
            string += `${this.list[i].element}:${this.list[i].priority} `
        }
        return string
    }
}

