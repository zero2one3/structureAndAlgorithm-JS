function Graph() {
    // 属性
    this.vertexes = []
    this.edges = {}

    // 方法
    // 添加顶点
    Graph.prototype.addVertex = function(v) {
        this.vertexes.push(v)
        this.edges[v] = []
    }

    // 添加边
    Graph.prototype.addEdge = function(v1, v2) {
        this.edges[v1].push(v2)
        this.edges[v2].push(v1)
    }

    // 展示邻接表
    Graph.prototype.toString = function() {
        let string = ''
        
        for(let i in this.vertexes) {

            let vertex = this.vertexes[i]

            string += `${vertex} => `
            
            let edges = this.edges[vertex]
            for(let i in edges) {
                string += `${edges[i]} `
            }
            string += '\n'
        }

        return string
    }

    // 顶点颜色初始化（内部函数）
    Graph.prototype.initColor = function() {
        let color = {}
        
        // 将所有顶点的颜色初始化为白色
        for(let i in this.vertexes) {
            color[this.vertexes[i]] = 'white'
        }

        return color       
    }

    // 广度优先搜索
    Graph.prototype.breadthFirstSearch = function(firstVertex, handle) {
        // 1. 初始化所有顶点颜色
        const color = this.initColor()
        
        // 2. 新建一个队列
        const queue = new Queue()
        
        // 3. 将第一个顶点加入队列
        queue.enqueue(firstVertex)

        // 4. 开始广度优先搜索
        while(!queue.isEmpty()) {

            // 4.1 从队列中取出一个顶点
            let vertex = queue.dequeue()

            // 4.2 获取与该顶点相关的其他顶点
            let otherVertexes = this.edges[vertex]

            // 4.3 将该顶点设为黑色，表示已被访问过，防止后面重复访问
            color[vertex] = 'black'

            // 4.4 遍历与该顶点相关的其它顶点
            for(let i in otherVertexes) {

                // 4.4.1 获取与该顶点相关的顶点
                let item = otherVertexes[i]

                // 4.4.1 若未被访问，则加入到队列中
                if(color[item] === 'white') {
                    color[item] = 'black'
                    queue.enqueue(item)
                }
            }

            // 4.5 执行我们的回调函数
            handle(vertex)

        }
        
    }

    // 深度优先搜索
    Graph.prototype.depthFirstSearch = function(firstVertex, handle) {
        // 1. 初始化所有顶点颜色
        const color = this.initColor()

        // 2. 开始递归访问各个顶点
        this.depthVisit(firstVertex, color, handle)
    }

    // 深度优先搜索的递归访问（内部函数）
    Graph.prototype.depthVisit = function(vertex, color, handle) {
        // 1. 先将访问到的顶点颜色设为黑色，防止后面重复访问
        color[vertex] = 'black'

        // 2. 执行回调函数
        handle(vertex)

        // 3. 获取与该顶点相关的其它顶点
        let otherVertexes = this.edges[vertex]

        // 4. 遍历所有相关的顶点
        for(let i in otherVertexes) {
            let item = otherVertexes[i]
            // 4.1 访问没有被访问过的相邻顶点
            if(color[item] === 'white') {
                this.depthVisit(item, color, handle)
            }
        }

    }
   
}

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
