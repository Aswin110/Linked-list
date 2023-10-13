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
  
	get head() {
		return this._root;
	}
  
	constructor(arr) {
		arr.forEach(e => {
			let node = new Node(e);
			this.append(node);
		});    
	}
  
	isEmpty() {
		return this._root === null;
	}
  
	append(node) {
		if ( this.isEmpty() ) {
			this._root = node;
		} else {
			this.tail().next = node;
		}
  
		node.next = null;
	}
  
	prepend(node) {
		if (this.isEmpty()){
			this._root = node;
		} else {
			node.next = this._root;
			this._root = node;
		}
	}
    
	tail() {
		if ( this.isEmpty() ) return null;
  
		let current = this._root;
		while (current.next !== null) {
			current = current.next;
		}
		return current;
	}
  
	at(index) {
		if ( this.isEmpty() ) {
			console.log('the linked list is empty');
			return 0;
		}

		if(index < 1){
			console.log('enter an positive integer number');
			return 'invalid number';
		}

		if(index){
			return this.valueIndex(index).data;
		}
		console.log('index out of range');
	}

	valueIndex(index) {
		let current = this._root;
		let listIndex = 1;
		while((current !==null)){
			if(listIndex === index){
				return current;
			}
			current = current.next;
			listIndex +=1;
		}
	}

	insertAt(value, index) {
		let newNode = new Node(value);
		if ( this.valueIndex(index-1) === this.tail() ) {
			this.valueIndex(index - 1).next = newNode;
			return 'inserted new value to the end';
		} else {
			newNode.next = this.valueIndex(index);
			this.valueIndex(index - 1).next = newNode;
			return `added the ${newNode.data} into ${index}'s index `;
		}
	}

	removeAt(index) {
		if ( this.valueIndex(index) === this.tail() ) {
			this.valueIndex(index - 1).next = null;
			return 'last node removed';
		} else {
			let value = this.valueIndex(index).data;
			this.valueIndex(index - 1).next = this.valueIndex(index + 1);
			return `${value} in the ${index}'s index is removed`;
		}
	}

	size() {
		let num = 0;
		let current = this._root;
		if(this.isEmpty()){
			console.log('the linked list is empty');
			return 0;
		}

		while(current !==null){
			current = current.next;
			num += 1;
		}
		return num; 
	}

	pop() {
		this.valueIndex(this.size() - 1).next = null;
		return 'last element removed';
	}

	contains(value) { 
		let current = this._root;
		if( this.isEmpty() ) {
			console.log('the linked list is empty');
			return 0;
		}

		while ( (current !==null) ) {
			if(current.data === value) {
				return true ;
			}
			current = current.next;
		}
		return false;
	}

	find(value) {
		let current = this._root;
		let listIndex = 1;
		if ( this.isEmpty() ) { 
			console.log('the linked list is empty');
			return 0;
		}
		while (current !== null) {
			if (current.data === value) {
				return listIndex;
			}
			current = current.next;
			listIndex += 1;
		}
		return 'this number is not in the linked list';
	}

	toString() {
		let current = this._root;
		let string = '';
		if ( this.isEmpty() ) { 
			console.log('the linked list is empty');
			return null;
		}
		while(current !== null){
			string += `(${current.data}) -> `;
			current = current.next;
		}
		string += 'null';
		return string;
	}

	display() {
		if (this.isEmpty()) console.log('empty');
		let current = this._root;
		let num = 1;
		do {
			console.log('data-',current.data,', index-', num);
			num +=1;
			current = current.next;
		} while (current.next !== null);
		console.log('data-',current.data,', index-', num);
	}
  
}
  
const array = [1, 34, 2, 5];
const linkedList = new LinkedList(array);
const gh = new Node(9);
linkedList.prepend(gh);
linkedList.display();
console.log(linkedList.at(5));
console.log(linkedList.size());
console.log(linkedList.pop());
linkedList.display();
console.log(linkedList.contains(1));
console.log(linkedList.find(1));
console.log(linkedList.toString());
console.log(linkedList.tail());
console.log(linkedList.insertAt(10, 5));
linkedList.display();
console.log(linkedList.insertAt(20, 3));
linkedList.display();
console.log(linkedList.removeAt(3));
linkedList.display();