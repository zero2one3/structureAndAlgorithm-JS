function knapsack(capacity, size, value, n) {
    // 返回较大的值
    function max(v1, v2) {
        return v1 > v2 ? v1 : v2
    }

    let table = []

    // 生成长度为n的表
    for(let i = 0; i <= n; i++) {
        table[i] = []
    }
    
    // 判断每种物品面对不同背包容量时的最大收益
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= capacity; j++) {
            // 物品种类序列为0或者背包容量为0时，最大收益为0
            if(i == 0 || j == 0) table[i][j] = 0;
            // 背包容量小于物品重量时，最大收益等于上一种物品在此背包容量下的最大收益
            else if(size[i - 1] > j) {
                table[i][j] = table[i - 1][j]
            }
            /* 背包容量大于物品重量时，最大收益分两种情况：
               第一种情况：不放此物品。则最大收益等于上一种物品在此背包容量下的最大收益；
               第二种情况：放此物品。则最大收益等于该物品的收益加上剩余背包容量下，上一种物品的最大收益
            */ 
            else {
                table[i][j] = max(table[i - 1][j], value[i - 1] + table[i - 1][j - size[i - 1]])
            }
        }
    }
    console.log(table);
    // 最大收益值
    let max_value = 0
    let which = -1
    // 寻找在背包容量为capacity时的最大收益值，以及最大收益值所对应的物品种类
    for(let i in table) {
        let k = table[i][capacity]
        if(k > max_value) {
            max_value = k
            which = i
        } 
    }

    // 记录所装的物品
    let goods = []
    // 记录背包剩余容量
    let rest = capacity
    
    while(rest > 0 && which > 0) {
        // 若此时的最大收益不等于上一种物品在此背包容量下的最大收益，则放了此物品；否则就没放此物品
        if(table[which][rest] !== table[which - 1][rest]) {
            goods.push(which)
            rest -= size[which - 1]
            
        }

        which --
    }

    console.log(`背包最大的收益为：${max_value}，拿取的物品有${goods.join(',')}`);
}

// 代码测试
let size = [3, 3, 4, 5]
let value = [4, 6, 7, 9]

knapsack(8, size, value, 4)

/*
size = [3, 3, 4, 5]
value = [4, 6, 7, 9]

    0   1   2   3   4   5   6   7   8
0   0   0   0   0   0   0   0   0   0
1   0   0   0   4   4   4   4   4   4
2   0   0   0   6   6   6   10  10  10
3   0   0   0   6   7   7   10  13  13
4   0   0   0   6   7   9   10  13  15        
*/
