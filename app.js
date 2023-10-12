class Node {
	_data;
  
	_next;
  
	constructor(data = null, next = null) {
		this._data = data;
		this._next = next;
	}
  
	set data(data) {
		this._data = data;
	}
  
	get data() {
		return this._data;
	}
  
	set next(next) {
		this._next = next;
	}
  
	get next() {
		return this._next;
	}
}
  
class LinkedList {
	_root = null;
  
	get root() {
		return this._root;
	}
  
	constructor(arr){
		arr.forEach(e => {
			let node = new Node(e);
			this.append(node);
		});    
	}
  
	isEmpty() {
		return this._root === null;
	}
  
	append(node) {
		if (this.isEmpty()) {
			this._root = node;
		} else {
			this.tail().next = node;
		}
  
		node.next = null;
	}
  
	prepend(node){
		if (this.isEmpty()){
			this._root = node;
		} else {
			node.next = this._root;
			this._root = node;
		}
	}
    
	tail() {
		if (this.isEmpty()) return null;
  
		let current = this._root;
		while (current.next !== null) {
			current = current.next;
		}
		return current;
	}
  
	display() {
		if (this.isEmpty()) console.log('empty');
		let current = this._root;
      
		do {
			console.log(current.data);
  
			current = current.next;
		} while (current.next !== null);
		console.log(current.data);
	}
  
}
  
const array = [1, 34, 2, 5];
  
const linkedList = new LinkedList(array);
  
// linkedList.display();
  
const gh = new Node(9);
linkedList.prepend(gh);
linkedList.display();
console.log('root', linkedList.root);