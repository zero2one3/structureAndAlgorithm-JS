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
    //返回队列中元素个数
    Queue.prototype.size = function () {
        return this.list.length
    }
    //返回队列中的第一个元素
    Queue.prototype.front = function () {
        return this.list[0]
    }
}


//传入人员个数以及每次数数的个数
function passFlower(member, num) {
    let queue = new Queue()

    for(let i=0; i < member.length; i++) {
        queue.enqueue(member[i])
    }

    while (queue.list.length !== 1) {
        for(let i=0; i < num - 1; i++) {
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }
    return queue.list[0]
}

console.log(passFlower(['V', 'W', 'X', 'Y', 'Z'], 3))
