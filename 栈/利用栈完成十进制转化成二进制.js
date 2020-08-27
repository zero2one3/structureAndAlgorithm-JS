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
}



//输入需要转化的十进制数
function d2b(number) {
    let stack = new Stack()

    while (number > 0) {

        stack.push(number % 2)

        number = Math.floor(number / 2)
    }

    let string = ''
    while (!stack.isEmpty()) {
        string += stack.pop()
    }

    return string
}

console.log(d2b(100))

