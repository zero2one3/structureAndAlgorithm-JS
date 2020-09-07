function Queue() {
    this.list = []

    //入队列
    Queue.prototype.enqueue = function (e) {
        this.list.push(e)
    }
    //出队列
    Queue.prototype.dequeue = function () {
        return this.list.shift()
    }
    //判断队列是否为空
    Queue.prototype.isEmpty = function() {
        if(this.list.length === 0) {
            return true
        }
        else {
            return false
        }
    }
    //返回队列中元素个数
    Queue.prototype.size = function () {
        return this.list.length
    }
    //返回队列中的第一个元素
    Queue.prototype.front = function () {
        return this.list[0]
    }
    //返回当前队列
    Queue.prototype.toString = function () {
        let string = ''
        for(let i in this.list) {
            string += `${this.list[i]} `
        }
        return string
    }
}






