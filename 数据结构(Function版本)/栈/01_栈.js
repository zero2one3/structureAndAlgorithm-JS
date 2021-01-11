function Stack() {
    this.list = []

    //入栈
    Stack.prototype.push = function (e) {
        this.list.push(e)
    }
    //出栈
    Stack.prototype.pop = function (e) {
        return this.list.pop()
    }
    //获取栈顶元素
    Stack.prototype.getTopElement = function () {
        return this.list[this.list.length - 1]
    }
    //判断栈是否为空
    Stack.prototype.isEmpty = function () {
        let size = this.list.length
        if(size === 0) {
            return true
        }
        else {
            return false
        }
    }
    //判断栈内元素个数
    Stack.prototype.size = function () {
        return this.list.length
    }
    //展示当前栈内所有元素
    Stack.prototype.toString = function () {
        let string = ''
        for(let i in this.list) {
            string += `${this.list[i]} `
        }
        return string
    }
}
