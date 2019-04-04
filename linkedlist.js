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
      while(this.head.next !== null)
        tempNode = tempNode.next;
      tempNode.next = new _Node(item, null);
    }
  }
  remove (item) {
    if(!this.head)
      return null;
    if(this.head.value === value)
  }
  find (item) {

  }

}

function main(){
  
}

main();