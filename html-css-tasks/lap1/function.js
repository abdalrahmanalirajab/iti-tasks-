
console.log("=== PART 1: Student Object ===");
const student = {
  name: "abdo ali",
  university: "minia University",
  faculty: "Engineering",
  grade: 92
};

console.log(`${student.name} is a student in faculty of ${student.faculty} in university ${student.university}`);
console.log(`And his final grade is ${student.grade}.`);



// Queue Constructor
function Queue(maxSize) {
  const elements = [];
  let top = -1;
  
  this.inQueue = function(item) {
    if (top < maxSize - 1) {
      elements.push(item);
      top++;
      return true;
    }
    return false;
  };
  
  this.deQueue = function() {
    if (top >= 0) {
      top--;
      return elements.shift();
    }
    return null;
  };
  
  this.getCurrentSize = function() {
    return top + 1;
  };
  
  function getQueueElements() {
    console.log("Elements:", elements);
    return elements.length;
  }
  
  this.viewQueue = function() {
    return getQueueElements;
  };
  
  this.returnQueue = function() {
    return function() {
      return [...elements];
    };
  };
}

// Create and use queue
const q = new Queue(3);
q.inQueue("Task 1");
q.inQueue("Task 2");
q.inQueue("Task 3");

console.log("Current size:", q.getCurrentSize());
q.viewQueue();

const getElements = q.returnQueue();
const arr = getElements();
console.log("Returned array:", arr);

Queue.prototype.isEmpty = function() {
  return this.getCurrentSize() === 0;
};

console.log("Is queue empty?", q.isEmpty());

