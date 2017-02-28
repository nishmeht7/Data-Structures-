var Queue = function() { 
	this.arr = [];
	this.head = 0; 
	this.tail = 0; 
	this.enqueue = function(val){
		this.arr[this.tail] = val;
		this.tail++; 
	}
	this.dequeue = function(){
		if(this.size() > 0){
			this.head++;
			return this.arr[this.head-1];	
			 
		}
		else {
			return undefined; 
		}

	}
	this.size = function(){
		return this.tail - this.head; 
	}
	}; 