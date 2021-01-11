class PriorityQueue {
    constructor() {
        this.list = []   // 数字小的，权重越大，优先级越高
    }

    // 创建优先级队列的新元素
    element(e, priority) {
        return {e, priority}
    }

    // 入队列
    enqueue(e, priority) {
        let newElement = this.element(e, priority)
        let size = this.size()

        if(!size) this.list.push(newElement);
        else {
            for(let i = 0; i < size; i++) {
                if(newElement.priority < this.list[i].priority) {
                    this.list.splice(i, 0, newElement)
                    return;
                }
            }
            this.list.push(newElement)
        }
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

    // 展示优先级队列中的元素
    toString() {
        return this.list.reduce((a, b) => `${a}\n${b.e}:${b.priority}`, `${this.list[0].e}:${this.list[0].priority}`)
    }
}
