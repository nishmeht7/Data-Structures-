function LinkedList() {
   this.head = null;
   this.tail = null;
   this.addToHead = function(val) {
       var node = new Node(val);
       if (this.head === null) {
           this.head = node;
           this.tail = node;
       } else {
           this.head.previous = node;
           node.next = this.head;
           this.head = node;
       }
   };
   this.addToTail = function(val) {
       var node = new Node(val);
       if (this.head === null) {
           this.head = node;
           this.tail = node;
       } else {
           this.tail.next = node;
           node.previous = this.tail;
           this.tail = node;
       }
   };
   this.removeHead = function() {
       if (this.head === null) {
           return null
       };
       var oldHead = this.head;
       this.head = oldHead.next;
       if (oldHead.next !== null) {
           this.head.previous = null
       } else {
           this.head = null;
           this.tail = null;
       };
       return oldHead.value;
   };
   
   this.removeTail = function() {
       if (this.tail === null) {
           return null
       };
       var oldTail = this.tail;
       this.tail = oldTail.previous;
       if (oldTail.previous !== null) {
           this.tail.next = null
       } else {
           this.tail = null;
           this.head = null;
       };
       return oldTail.value;
   };

   this.search = function(str) {
       var s = this.head;
       while (s !== null) {
       		if(typeof str === "string" && s.value === str){
               return s.value
       		}
         	else if (typeof str !== "string" && str(s.value) === true){
       			return s.value; 
       		}
        	 else {
               s = s.next
           }
       }
       return null; 
   }
}

function Node(val) {
   this.value = val;
   this.previous = null;
   this.next = null;
}