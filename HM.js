class HashMap {
  constructor() {
    this.map = [];
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.entriesNum = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    let hashKey = this.hash(key) % this.capacity;
    this.entriesNum++;
    if (this.entriesNum > (this.capacity * this.loadFactor)) {
      this.resize();
    }
    if (this.map[hashKey] == null) {
      this.map[hashKey] = [];
      this.map[hashKey].push(new HMNode(hashKey, key, value));
    } else {
      for (let i = 0; i < this.map[hashKey].length; i++) {
        if (this.map[hashKey][i].key == key) {
          this.map[hashKey][i].value = value;
          return;
        }
      }
      this.map[hashKey].push(new HMNode(hashKey, key, value));
    }
  }

  resize() {
    let entries = this.entries();
    this.clear();
    this.capacity *= 2;
    for (let i = 0; i < entries.length; i++) {
      this.set(entries[i][0], entries[i][1]);
    }

  }

  get(key) {
    let hashKey = this.hash(key) % this.capacity;
    if (!this.map[hashKey]) return null;
    let bucket = this.map[hashKey];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key == key) {
        return bucket[i];
      }
    }
    return null;
  }

  has(key) {
    let hashKey = this.hash(key) % this.capacity;
    if (!this.map[hashKey]) return false;
    let bucket = this.map[hashKey];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key == key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    let hashKey = this.hash(key) % this.capacity;
    if (!this.map[hashKey]) return false;
    let bucket = this.map[hashKey];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key == key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  length() {
    let length = 0;
    for (let i = 0; i < this.capacity; i++) {
      if (this.map[i] != null) {
        for (let j = 0; j < this.map[i].length; j++) {
          length++;
        }
      }
    }
    return length;
  }

  clear() {
    this.map = [];
    this.entriesNum = 0;
  }

  keys() {
    let keys = []
    for (let i = 0; i < this.capacity; i++) {
      if (this.map[i] != null) {
        for (let j = 0; j < this.map[i].length; j++) {
          keys.push(this.map[i][j].key);
        }
      }
    }
    return keys;
  }

  values() {
    let values = []
    for (let i = 0; i < this.capacity; i++) {
      if (this.map[i] != null) {
        for (let j = 0; j < this.map[i].length; j++) {
          values.push(this.map[i][j].value);
        }
      }
    }
    return values;
  }
  
  entries() {
    let entries = [];
    for (let i = 0; i < this.capacity; i++) {
      if (this.map[i] != null) {
        for (let j = 0; j < this.map[i].length; j++) {
          entries.push([this.map[i][j].key, this.map[i][j].value])
        }
      }
    }
    return entries;
  }
}


class HMNode {
  constructor(hashKey, key, value) {
    this.hashKey = hashKey;
    this.key = key;
    this.value = value;
  }
}

const test = new HashMap()

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test);

test.set('moon', 'silver');

console.log(test);

console.log(test.get('apple'));
console.log(test.has('apple'));
console.log(test.remove('apple'));
console.log(test.has('apple'));
console.log(test.length());
console.log(test.keys());
console.log(test.values());
