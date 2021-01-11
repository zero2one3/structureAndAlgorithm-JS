class Queue {
    constructor() {
        this.list = []
    }

    // 入队列
    enqueue(e) {
        this.list.push(e)
    }

    // 出队列
    dequeue() {
        return this.list.shift()
    } 

    // 判断队列是否为空
    isEmpty() {
        return this.list.length ? false : true
    }

    // 返回队列中的元素个数
    size() {
        return this.list.length
    }

    // 返回队列中的第一个元素
    front() {
        return this.size() ? '' : this.list[0]
    }

    // 展示队列中的元素
    toString() {
        return this.list.reduce((a, b) => `${a} ${b}`)
    }
}
