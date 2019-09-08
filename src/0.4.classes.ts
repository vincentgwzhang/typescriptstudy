// https://www.tslang.cn/docs/handbook/classes.html
// npm run 04

{

	class Greeter {//class definition
		greeting: string;// attribute
		constructor(message: string) {// constructor
			this.greeting = message;
		}
		greet() {//function
			return "Hello, " + this.greeting;//call with "this"
		}
	}

	let greeter = new Greeter("world");//use "new" keyword

}


{
	class Animal {
		move(distanceInMeters: number = 0) {
			console.log(`Animal moved ${distanceInMeters}m.`);
		}
	}

	class Dog extends Animal {//extend
		bark() {
			console.log('Woof! Woof!');
		}
	}

	const dog = new Dog();
	// dog.bark();
	// dog.move(10);
	// dog.bark();
}

{
	class Animal {
		name: string;
		constructor(theName: string) { this.name = theName; }
		move(distanceInMeters: number = 0) {
			console.log(`${this.name} moved ${distanceInMeters}m.`);
		}
	}

	class Snake extends Animal {
		constructor(name: string) { super(name); }//super
		move(distanceInMeters = 5) {//default
			console.log("Slithering...");
			super.move(distanceInMeters);
		}
	}

	class Horse extends Animal {
		constructor(name: string) { super(name); }
		move(distanceInMeters = 45) {
			console.log("Galloping...");
			super.move(distanceInMeters);
		}
	}

	let sam = new Snake("Sammy the Python");
	let tom: Animal = new Horse("Tommy the Palomino");

	// sam.move();
	// tom.move(34);
}

{
	// default is public
	class Animal {
		private name: string;
		public constructor(theName: string) { this.name = theName; }
		public move(distanceInMeters: number) {
			console.log(`${this.name} moved ${distanceInMeters}m.`);
		}
	}
}

{
	class Person {
		protected name: string;//also can use protected
		constructor(name: string) { this.name = name; }
	}

	class Employee extends Person {
		private department: string;

		constructor(name: string, department: string) {
			super(name)
			this.department = department;
		}

		public getElevatorPitch() {
			return `Hello, my name is ${this.name} and I work in ${this.department}.`;
		}
	}
}

{
	// if constructor is protected, then it could not be instanced, but able to be inherited
	class Person {
		protected name: string;
		protected constructor(theName: string) { this.name = theName; }
	}

	class Employee extends Person {
		private department: string;

		constructor(name: string, department: string) {
			super(name);
			this.department = department;
		}

		public getElevatorPitch() {
			return `Hello, my name is ${this.name} and I work in ${this.department}.`;
		}
	}
}

{
	class Grid {
		static origin = { x: 0, y: 0 };
		calculateDistanceFromOrigin(point: { x: number; y: number; }) {
			let xDist = (point.x - Grid.origin.x);
			let yDist = (point.y - Grid.origin.y);
			return Math.sqrt(xDist * yDist) / this.scale;
		}
		constructor(private scale: number) { }// This could be a variable
	}

	let grid1 = new Grid(1.0);  // 1x scale
	let grid2 = new Grid(5.0);  // 5x scale

	// console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
}

{
	abstract class Department {

		constructor(public name: string) {
		}

		printName(): void {
			console.log('Department name: ' + this.name);
		}

		abstract printMeeting(): void; // 必须在派生类中实现
	}

	class AccountingDepartment extends Department {

		constructor() {
			super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
		}

		printMeeting(): void {
			console.log('The Accounting Department meets each Monday at 10am.');
		}

		generateReports(): void {
			console.log('Generating accounting reports...');
		}
	}

	let department: Department; // 允许创建一个对抽象类型的引用
	//department = new Department(); // 错误: 不能创建一个抽象类的实例
	department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
	// department.printName();
	// department.printMeeting();
	// department.generateReports(); // 错误: 方法在声明的抽象类中不存在
}

{
	class Greeter {
		static standardGreeting = "Hello, there";
		greeting: string;
		greet() {
			if (this.greeting) {
				return "Hello, " + this.greeting;
			}
			else {
				return Greeter.standardGreeting;
			}
		}
	}

	let greeter1: Greeter;
	greeter1 = new Greeter();
	greeter1.greet();

	let greeterMaker: typeof Greeter = Greeter;
	greeterMaker.standardGreeting = "Hey there!";

	let greeter2: Greeter = new greeterMaker();
	greeter2.greet();
}














