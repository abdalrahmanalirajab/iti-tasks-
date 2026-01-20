// task1  self invoking function  
(function summation ( a , b ){
    let sum = a+b ;
    alert (sum) ; 

}(5,7));
console.log("--------------task2--------")
// task 2  
function tryArrow(){
    let arr= [1,3,4,5,6,7,8] ;
    // filter 
    let f_arr= arr.filter(a=> a%2!==0); 
    console.log(f_arr);
    // forEach 
    arr.forEach(e=>{
        if(e%2==0) console.log(e); 
    });
    // map 
    let m_arr=arr.map(e=> e*e); 
    console.log(m_arr);

    
}
tryArrow();
console.log("--------------task3--------");
// task 3 

function sperated(...items){
    let sum=0  ; 
    for(const k of items) sum+= k ; 
    return sum ; 

}
console.log(sperated(1,2,3,4,5)) ;
console.log("--------------task4--------");


class Student {
    name;
    university;
    faculty;
    grad;

    constructor(_name, _university, _faculty, _grad) {
        this.name = _name;
        this.university = _university;
        this.faculty = _faculty;
        this.grad = _grad;
    }

    print() {
        console.log(`${this.name} is a student in faculty of ${this.faculty}
University ${this.university}
And his final grade is ${this.grad}`);
    }
}
const student = new Student("abdo", "Minia", "FCI", "Good");
student.print();





console.log("--------------task5--------");
const student1 = new Student("abdo", "Minia", "FCI", "Good");
const student2 = new Student("mo", "Minia", "FCI", "Good");
const student3 = new Student("zizo", "Minia", "FCI", "Good");
const student4 = new Student("abdo", "Minia", "FCI", "Good");
const student5= new Student("zizo", "Minia", "FCI", "Good"); 
let set = new Set([student1.name ,student2.name ,
    student3.name ,student4.name ,student5.name  ]); 

    for(const item of set) console.log(item);

    function printt(...items){
        for(const itme of items ) console.log(itme); 

    }
    printt(...set);

    console.log("--------------task6--------");

    function* tipsGenerator() {
    let tips = [
        "Stay focused",
        "Take breaks",
        "Practice coding",
        "Read documentation",
        "Sleep well",
        "Exercise",
        "Ask questions",
        "Review notes",
        "Stay positive",
        "Keep learning"
    ];
    for (let tip of tips) {
        yield tip; // gives one tip each time
    }
}

let gen = tipsGenerator();
console.log(gen.next().value); 
console.log(gen.next().value); 

function showalltips(){
    for (let tip of tipsGenerator()) { 
        console.log(tip); 
    }
}

let gen2 = tipsGenerator();

setInterval(() => {
    let tip = gen2.next().value;
    if (tip) {
        console.log(tip); 
    }
}, 3000);



  console.log("--------------task7--------");



  /// bouns 1 
  let dayTips = new Map([
    ["Saturday", "Relax and plan"],
    ["Sunday", "Prepare for week"],
    ["Monday", "Focus on work"]
]);


let today = new Date().toLocaleString('en-US', { weekday: 'long' });
alert(dayTips.get(today));

















