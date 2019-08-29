class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }

    find(item) {
        let currNode = this.head;

        if (!this.head) {
            return null;
        }

        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }

        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }

        let currNode = this.head;
        let prevNode = this.head;

        while ((currNode !== null) && (currNode.value !== item)) {
            prevNode = currNode;
            currNode = currNode.next;
        }

        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        prevNode.next = currNode.next;
    }

    insertBefore(item, itemAfter) {
        let after = this.find(itemAfter);
        if (this.head === null) {
            this.insertFirst(item);
        } else {
            let currNode = this.head;
            let prevNode;
            while (currNode.value !== after.value) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = new _Node(item, after);
        }
    }

    insertAfter(item, itemBefore) {
        let currNode = this.head;
        let before = this.find(itemBefore);
        while (currNode.value !== before.value) {
            currNode = currNode.next;
        }
        currNode.next = new _Node(item, currNode.next);
    }

    insertAt(item, index) {
        let currNode = this.head;
        let count = 1;
        if (index === 0) {
            this.head = new _Node(item, currNode);
            return;
        }
        while (count < index) {
            currNode = currNode.next;
            count++;
        }
        currNode.next = new _Node(item, currNode.next);
    }

}

function display(list) {
    let currNode = list.head;

    if (!list.head) {
        return null;
    }
    while (currNode.next !== null) {
        currNode = currNode.next;
        console.log(currNode)
    }
    currNode.next = currNode.next;
}

function size(list) {
    let count;
    let currNode = list.head;
    if (!list.head) {
        count = 0;
        return count;
    }
    count = 1;
    while (currNode.next !== null) {
        currNode = currNode.next;
        count++;
    }
    console.log(count);
    return count;
}

function isEmpty(list) {
    console.log(!list.head);
    return !list.head;
}

function findPrevious(list, item) {
    let currNode = list.head;
    let prevNode;
    if (list.head === null) {
        console.log('No items in list');
        return;
    }
    if (currNode.value === item) {
        console.log('This is first item in list')
        return;
    }
    while (currNode.value !== item && currNode.next !== null) {
        prevNode = currNode;
        currNode = currNode.next;
    }
    // console.log(prevNode);
    console.log(prevNode.value);
    return prevNode.value;

}

function findLast(list) {
    let currNode = list.head;
    if (list.head === null) {
        console.log('No items in list');
        return;
    }
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    console.log(currNode.value);
    return currNode.value;
}

function reverseList(list) {
    let currNode = list.head;
    let prevNode = null;
    let nextNode;
    if (this.head === null) {
        console.log('No items in list');
        return;
    }
    while (currNode !== null) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    this.head = prevNode;
    console.log(prevNode);
    return prevNode;
}

function findMiddleElement(list) {
    let currNode = list.head;
    let nextNode = list.head;
    while (nextNode !== null && nextNode.next !== null) {
        currNode = currNode.next;
        nextNode = nextNode.next.next;
    }

    console.log('Current', currNode);




    // let count;
    // let currNode = list.head;
    // let index = 0;
    // let middleNode = list.head;
    // //If empty list
    // if (!list.head) {
    //     count = 0;
    //     return count;
    // }
    // count = 1;
    // //Traverse through list
    // //Count each node
    // while (currNode.next !== null) {
    //     currNode = currNode.next;
    //     count++;
    // }
    // //Find middle
    // let middleIndex = (Math.floor(count / 2));
    // console.log(middleIndex);

    // while (index !== middleIndex) {
    //     middleNode = middleNode.next;
    //     index++;
    // }
    // console.log(middleNode.value);
    // return middleNode.value;

}

function main() {
    let SLL = new LinkedList();
    // let emptyLL = new LinkedList();
    // SLL.insertFirst('A');
    // SLL.insertLast('B');
    // SLL.insertLast('C');
    // SLL.insertLast('E');
    // SLL.insertBefore('D', 'E');
    // SLL.insertAfter('F', 'E');
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
    SLL.insertLast('Test1');
    SLL.insertLast('Test2');
    SLL.insertLast('Test3');
    SLL.insertLast('Test4');
    SLL.insertLast('Test5');
    SLL.insertLast('Test6');
    SLL.insertLast('Test7');
    // SLL.insertBefore('Athena', 'Boomer');
    // SLL.insertAfter('Hotdog', 'Helo');
    // SLL.insertAt('Kat', 2);
    // SLL.remove('Tauhida');
    // display(SLL);
    // size(SLL);
    // // isEmpty(SLL);
    // isEmpty(emptyLL);
    // findPrevious(SLL, 'Husker');
    // findLast(SLL);
    // reverseList(SLL);
    findMiddleElement(SLL);


    // SLL.remove('squirrel');

    // console.log(JSON.stringify(SLL));
}

main();

/*
4. Mystery Program
-Takes in a list.
-while the list head is not null{
-Declare newNode value equal to the list head/first node.
-if newNode's next value is equal to itself, the newNode's next is set to the second succeding node.*"Eliminating duplicate values"*
-else the newNode is equal to the next nodes value.
}
-If list head is null, current value equals the next value.
Time complexity:
O(n^2)
*/
