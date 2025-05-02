class HashMap{
  constructor(){
    this.map = [];
    this.loadfactor = 0.8;
    this.capacity = 16;
    this.keys = [];
    this.values = [];
  }
  
  hash(key) {
   let hashCode = 0;
      
   const primeNumber = 31;
   for (let i = 0; i < key.length; i++) {
     hashCode = primeNumber * hashCode + 					key.charCodeAt(i);
   }

   return hashCode;
 }
  
 set(key, value){
   this.keys.push(key);
   this.values.push(value);
   let hashKey = hash(key) % this.capacity;
   this.map[hashKey] = new LinkedListed();
   this.map[hashKey].append(value);
 }
  
 get(key){
   let hashKey = hash(key) % this.capacity;
   if(!this.map[hashKey]) return null;
   return this.map[hashKey].toString();
 }
  
 has(key){
   let hashKey = hash(key) % this.capacity;
   if(!this.map[hashKey]) return false;
   return true;
 }
  
 remove(key){
   let hashKey = hash(key) % this.capacity;
   if(!this.map[hashKey]) return false;
   this.map[hashKey] = null;
   return true;
 }
  
}





class LinkedList {
  constructor() {
    this.root = null;
  }
  

  append(value) {
    let newNode = new Node(value);
    if(this.root == null){
      this.root = newNode;
      return;
    }
    let curr = this.root;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  prepend(value) {
    let newNode = new Node(value, this.root);
    this.root = newNode;
  }

  size() {
    let size = 0;
    let curr = this.root;
    while (curr != null) {
      curr = curr.next;
      size++;
    }
    return size;
  }

  head() {
    return this.root;
  }

  tail() {
    let curr = this.root;
    while (curr.next != null) {
      curr = curr.next;
    }
    return curr;
  }

  at(index) {
    let size = 0;
    let curr = this.root;
    while (curr != null) {
      if (size == index) {
        return curr;
      }
      curr = curr.next;
      size++;
    }
  }

  pop() {
    let curr = this.root;
    if(curr == null) return null;
    if(curr.next = null){
      let hold = curr;
      this.root = null;
      return hold;
    }
    while (curr.next.next != null) {
      curr = curr.next;
    }
    let hold = curr.next;
    curr.next = null;
    return hold;
  }

  contains(value) {
    let curr = this.root;
    while (curr != null) {
      if (curr.value == value) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }

  find(value) {
    let size = 0;
    let curr = this.root;
    while (curr != null) {
      if (curr.value == value) {
        return size;
      }
      curr = curr.next;
      size++;
    }
    return null;
  }

  toString() {
    let curr = this.root;
    let result = '';
    while (curr != null) {
      result += `( ${curr.value} ) -> `;
      curr = curr.next;
    }
    result += ` null`;
    return result;
  }


}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
