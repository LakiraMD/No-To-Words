

const oneToTen = {'0': "", '1': "one", '2': "two", '3': "three", '4': "four", '5': "five", '6': "six", '7': "seven", '8': "eight", '9': "nine"}
const tenByTen = {'0': "", '1': "ten", '2': "twenty", '3': "thirty", '4': "forty", '5': "fifty", '6': "sixty ", '7': "seventy", '8': "eighty", '9': "ninety"}
const tenToTwenty = {'0': "ten", '1': "eleven", "2": "twelve", '3': "thirteen", '4': "fourteen", '5': "fifteen", '6': "sixteen", '7': "seventeen", '8': "eighteen", '9': "nineteen"}
const base =["" , " thousand " , " million " , " billion " , " trillion " , " quadrillion " , " quintillion " , " sextillion " , " septillion " , " octillion " , " nonillion " , " decillion " , " undecillion " , " undecillion " , " tredecillion " , " quattuordecillion " , " quindecillion " , " sexdecillion "]
let groups = []

const numberBox = document.getElementById("number");
const convertBtn = document.getElementById("convert");
const textBox = document.getElementById("text");
const clearBtn = document.getElementById("clear");
const pasteBtn = document.getElementById("paste");
const copyBtn = document.getElementById("copy");




  function finalAnswer(){
	let number = numberBox.value;
	textBox.value = convert(number);
	console.log()
}

function copy(){
	navigator.clipboard.writeText(textBox.value);
}

function paste() {
	// body...
}
function clear(){

}

function test(){
	console.log(convert(numberBox.value));
}

function noToWords(no){
	let x = no.length;
	let firstNo = no.charAt(no.length-1);
	let secondNo = no.charAt(no.length-2);
	let thirdNo = no.charAt(no.length-3);

	let firstWord ="";
	let secondWord =""; 
	let thirdWord ="";

	if(secondNo == "1"){
		secondWord = tenToTwenty[firstNo];
		firstWord = "";
	}
	else if(secondNo == ""){
		firstWord = oneToTen[firstNo];
		secondWord = "";
	}
	else{
		firstWord = oneToTen[firstNo];
		secondWord = tenByTen[secondNo];
	}
	if(thirdNo == "0" || thirdNo != ""){
		thirdWord = oneToTen[thirdNo] + " hundred ";
	}
	return thirdWord + secondWord + " "+ firstWord;
}

function split_grps(no){
	let a = 0;
	let a2 = 0;
	let b = "";
	groups = [];
	for (let i = 0; i < Math.ceil(no.length/3); i++ ){
		a = i * -3 ;
		a2 = a -3;
		b = no.substring(no.length +a,no.length +a2);
		groups.push(b);
	}
	return groups;
}

function convert(no){
	let answer = "";
	split_grps(no);
	for (let i = 0; i < groups.length; i++) {
		answer = noToWords(groups[i]) + base[i] + answer;
	}
	return answer;
}



convertBtn.addEventListener('click', finalAnswer);