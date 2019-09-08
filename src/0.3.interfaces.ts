// https://www.tslang.cn/docs/handbook/interfaces.html
// npm run 03

{
	function printLabel(labelledObj: { label: string }) {
		console.log(labelledObj.label); //Size 10 Object
		//console.log(labelledObj.size); //Wrong, because only label is allow
	}

	function print(labelledObj: { label: string, size: number }) {
		console.log(labelledObj.label); //Size 10 Object
		console.log(labelledObj.size); //10
	}

	interface LabelledObj {
		label: string;
		size: number;
	}

	function printObject(labelledObj: LabelledObj) {
		console.log(labelledObj.label); //Size 10 Object
		console.log(labelledObj.size); //10
	}

	let myObj = { size: 10, label: "Size 10 Object" };
	// printObject(myObj);
}



{
	interface SquareConfig {// ? stand for optional
		color?: string;
		width?: number;
	}

	function createSquare(config: SquareConfig): { color: string; area: number } { // { color: string; area: number } is return value
		let newSquare = { color: "white", area: 100 };
		if (config.color) {
			newSquare.color = config.color;
		}
		if (config.width) {
			newSquare.area = config.width * config.width;
		}
		return newSquare;
	}

	let mySquare = createSquare({ color: "black" });
}

// this stands for readonly property, only could assign value on constructor
{
	interface Point {
		readonly x: number;
		readonly y: number;
		m?: number;
	}
	let a: Point = { x: 1, y: 2 };
	a.m = 10;
	//a.x = 11; Wrong, x is readonly
}

{
	// 
	let a: number[] = [1, 2, 3, 4];
	let ro: ReadonlyArray<number> = a;
	//console.log(ro[0]);
}

{
	//variable even could define for an interface, a function!
	interface SearchFunc {
		(source: string, subString: string): boolean;
	}

	let mySearch: SearchFunc = function (source: string, subString: string) {
		let result = source.search(subString);
		return result > -1;
	}

	//console.log(mySearch('abbc','bb'));
}

{
	interface StringArray {
		[index: number]: string;
	}

	let myArray: StringArray;
	myArray = ["Bob", "Fred"];

	let myStr: string = myArray[1];
	console.log(myStr);
}






















