/* eslint-disable no-console */
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
    this.head = new _Node(item, null);
  }
  insertLast(item) {
    if (this.head === null) this.insertFirst(item);
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) tempNode = tempNode.next;
      tempNode.next = new _Node(item, null);
    }
  }
  remove(item) {
    if (!this.head) return null;
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== item) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
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
  insertBefore(item, key) {
    if (this.head === null) {
      console.log('Key does not exist');
      return null;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while (currNode.value !== key && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('key not found');
      return;
    }
    prevNode.next = new _Node(item, currNode);
  }
  insertAfter(item, key) {
    if (this.head === null) {
      console.log('Key does not exist');
      return null;
    }
    let currNode = this.head;
    while (currNode.value !== key && currNode !== null) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('key not found');
      return;
    }
    let tempNode = currNode.next;
    currNode.next = new _Node(item, tempNode);
  }
  insertAt(item, position) {
    if (this.head === null) {
      if (position === 1) {
        this.insertFirst(item);
        return;
      } else {
        console.log("position does'nt exist");
        return null;
      }
    }
    let currentPosition = 1;
    let currNode = this.head;
    let prevNode = this.head;
    while (currentPosition !== position && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
      currentPosition++;
    }
    if (currNode === null) {
      console.log('Position not found');
      return;
    }
    let tempNode = currNode;
    prevNode.next = new _Node(item, tempNode);
  }
}

function display(list) {
  let currNode = list.head;
  if (currNode === null) {
    console.log('List is empty');
    return;
  }
  return displayHelper(currNode, []);
}

function displayHelper(node, arr) {
  if (node === null) {
    return [];
  } else {
    return [node.value, ...displayHelper(node.next)];
  }
}
function size(list) {
  let currNode = list.head;
  if (currNode === null) {
    return 'list is empty';
  }
  return displayHelper(currNode).length;
}
function isEmpty(list) {
  return list.head === null;
}
function findPrevious(list, key) {
  if (list.head === null) {
    console.log('no nodes in list');
    return null;
  }

  if (list.head === key) {
    console.log('key is head, previous node is null');
    return null;
  }

  let prev = list.head;
  let curr = list.head;

  while (curr !== null && curr.value !== key) {
    prev = curr;
    curr = curr.next;
  }

  if (curr === null) {
    console.log('key does not exist');
    return null;
  } else {
    return prev;
  }
}

function findLast(list) {
  if (list.head === null) {
    console.log('no nodes in list');
    return null;
  }

  let curr = list.head;

  while (curr.next !== null) {
    curr = curr.next;
  }

  return curr;
}

function main() {
  const SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  console.log(SLL.remove('squirrel'));
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  console.log('display', display(SLL));
  console.log('size', size(SLL));
  console.log('previous', findPrevious(SLL, 'Helo'));
  console.log('last', findLast(SLL));

  console.log(reverseListIterative(SLL));
  console.log(display(SLL));
  console.log(display(reverseList(SLL)));
  console.log('MIDDLE', middleOfList(SLL));

  /*const SLL = new LinkedList();
  SLL.insertLast('1');
  SLL.insertLast('3');
  SLL.insertLast('5');
  insertInSortedOrder(0, SLL);
  console.log(display(SLL));*/

  const SLL2 = new LinkedList();
  SLL2.insertLast('1');
  SLL2.insertLast('2');
  SLL2.insertLast('3');
  SLL2.insertLast('4');
  SLL2.insertLast('5');
  
  console.log('THIRD', thirdFromEnd(SLL2));
}

function insertInSortedOrder(value, list) {
  let head = list.head;
  if (head === null) {
    return 'no nodes';
  }

  let currNode = head;
  let prevNode = head;

  if (currNode.value > value) {
    list.head = new _Node(value, currNode);
    return;
  }

  while (currNode !== null && prevNode.value < value) {
    if (prevNode.next === null || prevNode.next.value > value) {
      currNode = prevNode.next;
      prevNode.next = new _Node(value, currNode);
      return;
    } else {
      currNode = currNode.next;
      prevNode = prevNode.next;
    }
  }
}

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

function reverseList(list) {
  if (list.head === null) {
    console.log('list is empty');
  }

  let curr = list.head;
  reverseHelper(list.head, list);
  curr.next = null;
  return list;
}

function reverseHelper(node, list) {
  if (node.next === null) {
    list.head = node;
    return node;
  }

  //reverseHelper(node.next).next =
  return (reverseHelper(node.next, list).next = node);
}

function reverseListIterative(SLL) {
  let revserNode = SLL.head;
  let currentNode = SLL.head.next;
  revserNode.next = null;
  while (currentNode !== null) {
    let tempNode = currentNode;
    currentNode = currentNode.next;
    tempNode.next = revserNode;
    revserNode = tempNode;
  }
  return (SLL.head = revserNode);
}

function thirdFromEnd(list) {
  if (list.head === null) {
    console.log('list is empty');
  }

  let curr = list.head;

  while (curr !== null) {
    if (curr.next === null || curr.next.next === null) {
      return 'not enough items';
    } else if (curr.next.next.next === null) {
      return curr;
    }
    curr = curr.next;
  }
}

function middleOfList(list) {
  if (list.head === null) {
    console.log('list is empty');
  }
  debugger;
  let curr = list.head;
  let counter = 1;
  while (curr !== null) {
    if (middleHelper(curr, counter) === null) {
      return curr;
    }
    curr = curr.next;
    counter++;
  }
}

function middleHelper(node, counter) {
  debugger;
  for (let i = 0; i < counter; i++) {
    node = node.next;
    if (node === null) return node;
  }

  return node;
}

//[1, 2, 3];

main();
