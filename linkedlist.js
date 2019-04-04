/* eslint-disable no-console */
class _Node {
  constructor(value, next){
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor(){
    this.head = null;
  }
  insertFirst (item){
    this.head = new _Node(item, null);
  }
  insertLast (item){
    if(this.head === null)
      this.insertFirst(item);
    else{
      let tempNode = this.head;
      while(tempNode.next !== null)
        tempNode = tempNode.next;
      tempNode.next = new _Node(item, null);
    }
  }
  remove (item) {
    if(!this.head)
      return null;
    if(this.head.value === item){
      this.head = this.head.next;
      return;
    } 
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  find (item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }
  insertBefore (item, key){
    if(this.head === null){
      console.log('Key does not exist');
      return null;
    }
    let currNode = this.head;
    let prevNode = this.head;
    while(currNode.value !== key && currNode !== null){
      prevNode = currNode;
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('key not found');
      return;
    }
    prevNode.next = new _Node(item, currNode);
  }
  insertAfter (item, key){
    if(this.head === null){
      console.log('Key does not exist');
      return null;
    }
    let currNode = this.head;
    while(currNode.value !== key && currNode !== null){
      currNode = currNode.next;
    }
    if(currNode === null){
      console.log('key not found');
      return;
    }
    let tempNode = currNode.next;
    currNode.next = new _Node(item, tempNode);
  }
  insertAt(item, position){
    if(this.head === null){
      if(position === 1){
        this.insertFirst(item);
        return;
      }
      else{
        console.log('position does\'nt exist');
        return null;
      }
    }
    let currentPosition = 1;
    let currNode = this.head;
    let prevNode = this.head;
    while(currentPosition !== position && currNode !== null){
      prevNode = currNode;
      currNode = currNode.next;
      currentPosition++;
    }
    if(currNode === null){
      console.log('Position not found');
      return;
    }
    let tempNode = currNode;
    prevNode.next = new _Node(item, tempNode);
  }
}

function display (list){
  let currNode = list.head;
  if(currNode === null){
    console.log('List is empty');
    return;
  } 
  return displayHelper(currNode, []);
}

function displayHelper(node, arr){
  if(node === null){
    return []; 
  }else{
    return [node.value, ...displayHelper(node.next)];
  }

}
function size (list){
  let currNode = list.head;
  if(currNode === null){
    return 'list is empty';
  }
  return displayHelper(currNode).length;
}
function isEmpty(){

}
function findPrevious(){

}

function findLast(){

}

function main(){
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
}



main();