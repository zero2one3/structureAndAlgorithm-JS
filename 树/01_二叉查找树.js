function BinarySearchTree() {
    // 属性
    this.root = null
    
    // 节点生成构造函数
    function Node(key, value) {
        this.key = key
        this.value = value
        this.right = null
        this.left = null
    }

    // 插入数据
    BinarySearchTree.prototype.insert = function(key, value = null) {
        // 1. 创建节点
        let node = new Node(key, value)

        // 2. 判断根节点是否存在
        // 2.1 不存在
        if(!this.root) {
            this.root = node
            return;
        }

        // 2.2 存在
        this.insertNode(this.root, node)
        
    }

    // 插入节点函数（内部）
    BinarySearchTree.prototype.insertNode = function(oldNode, newNode) {
        // 1. 判断我们插入的数据的 key是否大于父节点的 key
        if(newNode.key < oldNode.key) {
            // 1.1 判断父节点的左节点是否为空
            if(oldNode.left === null) {
                oldNode.left = newNode
            } else {
                this.insertNode(oldNode.left, newNode)
            }
        } else {
            if(oldNode.right === null) {
                oldNode.right = newNode
            } else {
                this.insertNode(oldNode.right, newNode)
            }
        }
    }

    // 先序遍历并返回结果（外部函数）
    BinarySearchTree.prototype.preOrder = function(handle) {

        this.preOrderNodes(this.root, handle)
       
    }

    // 以先序遍历的方式遍历整个树（内部函数）
    BinarySearchTree.prototype.preOrderNodes = function(node, handle) {
        if(node !== null) {
            
            handle(node.key)

            this.preOrderNodes(node.left, handle)

            this.preOrderNodes(node.right, handle)
        }
        
    }

    // 中序遍历并返回结果（外部函数）
    BinarySearchTree.prototype.inOrder = function(handle) {

        this.inOrderNodes(this.root, handle)
        
    }

    // 以中序遍历的方式遍历整个树（内部函数）
    BinarySearchTree.prototype.inOrderNodes = function(node, handle) {
        if(node !== null) {
            this.inOrderNodes(node.left, handle)
            handle(node.key)
            this.inOrderNodes(node.right, handle)
        }
             
    }

    // 后序遍历并返回结果（外部函数）
    BinarySearchTree.prototype.postOrder = function(handle) {

        this.postOrderNodes(this.root, handle)
        
    }

    // 以后序遍历的方式遍历整个树（内部函数）
    BinarySearchTree.prototype.postOrderNodes = function(node, handle) {
        if(node !== null) {
            this.postOrderNodes(node.left, handle)
            this.postOrderNodes(node.right, handle)
            handle(node.key)
        }
             
    }

    // 获取二叉树中的最大值
    BinarySearchTree.prototype.getMax = function() {
        let node = this.root
        while(node.right !== null) {
            node = node.right
        }
        return node
    }

    // 获取二叉树中的最小值
    BinarySearchTree.prototype.getMin = function() {
        let node = this.root
        while(node.left !== null) {
            node = node.left
        }
        return node
    }

    // 查找指定的 key对应的数据
    BinarySearchTree.prototype.search = function(key) {

        let node = this.root

        while(node !== null) {
            if(key > node.key) {
                node = node.right
            } else if(key < node.key) {
                node = node.left
            } else {
                return node.value
            }
        }

        return false
    }

    // 删除指定 key的数据
    BinarySearchTree.prototype.remove = function(key) {
        let node = this.root
        let parent = null
        let direction = ''

        // 1. 找到需要被删除的节点
        while(node !== null) {
            if(key < node.key) {
                parent = node
                direction = 'left'
                node = node.left
            } else if(key > node.key) {
                parent = node
                direction = 'right'
                node = node.right
            } else {
                break;
            }
        }

        // 1.1 未找到对应节点，删除失败
        if(node === null) return false;

        // 1.2 找到对应节点
        // 2. 判断节点类型（叶子节点、只有一个子节点、有两个子节点）

        // 2.1 节点类型为叶子节点
        if(node.left === null && node.right === null) {

            if(node === this.root) {
                this.root = null
            } else {
                parent[direction] = null
            }

        } 
        
        // 2.2.1 节点只有一个右子节点
        else if(node.left === null) {
            if(node === this.root) {
                this.root = this.root.right
            } else {
                parent[direction] = node.right
            }
        } 

        // 2.2.2 节点只有一个左子节点
        else if(node.right === null) {
            if(node === this.root) {
                this.root = this.root.left
            } else {
                parent[direction] = node.left
            }
        } 

        // 2.3 节点有两个子节点
        else {
            let minNode = node.right
            let minNode_parent = node
            // 2.3.1 找到被删除节点右子节点的子孙节点中最小的节点
            while(minNode.left !== null) {
                minNode_parent = minNode
                minNode = minNode.left
            }
            
            // 2.3.2 判断 minNode是否有右子节点
            // 2.3.2.1 无右子节点
            if(minNode.right === null) {
                if(node === this.root) {
                    this.root = minNode                 
                } else {
                    parent[direction] = minNode      
                }
                minNode.left = node.left
                minNode.right = node.right
                minNode_parent.left = null      
            }

            // 2.3.2.2 有右子节点
            else {
                if(node === this.root) {
                    this.root = minNode                
                } else {
                    parent[direction] = minNode
                }
                minNode_parent.left = minNode.right
                minNode.left = node.left
                minNode.right = node.right      
            }
        }
        
    }

}
