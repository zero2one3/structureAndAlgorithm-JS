class Stack {
    constructor() {
        this.list = []
    }

    // 进栈
    push(e) {
        this.list.push(e)
    }

    // 出栈
    pop() {
        return this.list.pop()
    }

    // 获取栈顶元素
    getTopElement() {
        return this.list[this.list.length - 1]
    }

    // 判断栈是否为空
    isEmpty() {
        return this.list.length ? false : true
    }

    // 返回栈内元素个数
    size() {
        return this.list.length
    }

    // 展示栈内元素
    toString() {
        return this.list.reduce((a, b) => `${a} ${b}`)
    }
}
