var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let cur = head, pre = head
    while(cur && cur.next) {
        let next = cur.next
        let nextCur = next.next
        next.next = cur
        cur.next = nextCur
        pre.next = next
        pre = cur
        cur = nextCur
        console.log(head);
    }

    return head
};

 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
 }

 let head = new ListNode(1)
 let cur = head
 let arr = [2, 3, 4]
arr.forEach(v => {
    cur.next = new ListNode(v)
    cur = cur.next
})

console.log(swapPairs(head));