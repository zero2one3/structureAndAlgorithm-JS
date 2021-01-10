function publicStr(s1, s2) {
    // 创建一个表
    let table = []

    // 记录最大的公共子串长度
    let max = 0

    // 子串进行比较，将表填完整
    for(let i = 0; i <= s1.length; i++) {
        table[i] = []
        for(let j = 0; j <= s2.length; j++) {
            if(i == 0 || j == 0) table[i][j] = 0;
            else if(s1[i - 1] !== s2[j - 1]) table[i][j] = 0;
            else {
                table[i][j] = table[i - 1][j - 1] + 1
                if(table[i][j] > max) max = table[i][j]
            } 
        }
    }

    // 记录所有的最大公共子串的信息
    let items = []
    
    // 遍历整个表，找到所有子串长度为max的子串
    for(let i = 0; i < s1.length; i ++) {
        let current = table[i]

        for(let j = 0; j < s2.length; j ++) {
            if(current[j] === max) items.push(i)
        }
    }

    console.log(`最大公共子串长度为${max}`);
    console.log(`长度为${max}的子串有：`);
    for(let i in items) {
        let start = items[i] - max
        console.log(`${s1.slice(start, start + max)}`);
    }
}

// 测试代码
let s1 = 'abaccd'
let s2 = 'badacef'

publicStr(s1, s2)

/*
s1 = 'abaccd'
s2 = 'badacef'

max = 2
index = 3
2
4
ba ac
    0   1   2   3   4   5   6   7
0   0   0   0   0   0   0   0   0
1   0   0   1   0   1   0   0   0   
2   0   1   0   0   0   0   0   0
3   0   0   2   0   1   0   0   0   
4   0   0   0   0   0   2   0   0
5   0   0   0   0   0   1   0   0
6   0   0   0   1   0   0   0   0
*/