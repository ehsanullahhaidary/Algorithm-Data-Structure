class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.unshift(value);
    }
    if (index === this.length) {
      return this.push(value);
    }

    const newNode = new Node(value);
    let before = this.get(index - 1);
    console.log("first");
    newNode.next = before.next;
    before.next.prev = newNode;
    before.next = newNode;
    newNode.prev = before;
    this.length++;
    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    let temp = this.get(index);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    temp.next = null;
    temp.prev = null;

    this.length--;
    return temp;
  }
}

let doubleLinkedList = new DoublyLinkedList(5);
doubleLinkedList.push(10);
doubleLinkedList.push(20);
doubleLinkedList.push(30);

console.log(doubleLinkedList);
