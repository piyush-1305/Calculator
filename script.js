var number_buttons = ["zero_button", "one_button", "two_button", "three_button", "four_button", "five_button", "six_button", "seven_button", "eight_button", "nine_button"];
var operand_turn = 1;
var operand1 = 0;
var operand2 = 0;
var operator = "";
var dot_attached = false;
var output_area = document.getElementById("output_area");

function updateOperand(num){
	if(!dot_attached)
	{
		if(operand_turn==1)
		{
			operand1 = operand1 * 10 + num;
			output_area.innerHTML = operand1;
		}
		else
		{
			operand2 = operand2 * 10 + num;
			output_area.innerHTML = operand2;
		}
		console.log(operand1);
		console.log(operand2);
	}
	else
	{
		if(operand_turn==1)
		{
			operand1 = operand1 + num;
			output_area.innerHTML = operand1;
		}
		else
		{
			operand2 = operand2 + num;
			output_area.innerHTML = operand2;
		}
		console.log(operand1);
		console.log(operand2);
	}
};

var clear_button = document.getElementById("clear_button");
clear_button.addEventListener("click", function(){
	if(operand_turn==1)
	{
		operand1=0;
	}
	else 
	{
		operand2=0;
	}
	operator = '+';
	output_area.innerHTML = "";
	dot_attached=false;
});

var divide_button = document.getElementById("divide_button");
divide_button.addEventListener("click", function(){
	operator = '/';
	operand_turn = 2;
	dot_attached=false;
});

var multiply_button = document.getElementById("multiply_button");
multiply_button.addEventListener("click", function(){
	operator = '*';
	operand_turn = 2;
	dot_attached=false;
});

var minus_button = document.getElementById("minus_button");
minus_button.addEventListener("click", function(){
	operator = '-';
	operand_turn = 2;
	dot_attached=false;
});

var plus_button = document.getElementById("plus_button");
plus_button.addEventListener("click", function(){
	operator = '+';
	operand_turn = 2;
	dot_attached=false;
});

var dot_button = document.getElementById("dot_button");
dot_button.addEventListener('click', function(){
	if(dot_attached==true)
	{
		output_area.innerHTML = "Error, Resetting both operands";
		operand1 = 0;
		operand2 = 0;
		operator = "+";
		dot_attached=false;
		operand_turn=1;
	}
	else
	{
		if(operand_turn==1)
		{
			operand1 = operand1 + ".";
			output_area.innerHTML = operand1;
		}
		else
		{
			operand2 = operand2 + ".";
			output_area.innerHTML = operand2;
		}
		dot_attached = true;
	}
});

var one_button = document.getElementById("one_button");
one_button.addEventListener("click", function(){
	updateOperand(1);
});

var two_button = document.getElementById("two_button");
two_button.addEventListener("click", function(){
	updateOperand(2);
});

var three_button = document.getElementById("three_button");
three_button.addEventListener("click", function(){
	updateOperand(3);
});

var four_button = document.getElementById("four_button");
four_button.addEventListener("click", function(){
	updateOperand(4);
});

var five_button = document.getElementById("five_button");
five_button.addEventListener("click", function(){
	updateOperand(5);
});

var six_button = document.getElementById("six_button");
six_button.addEventListener("click", function(){
	updateOperand(6);
});

var seven_button = document.getElementById("seven_button");
seven_button.addEventListener("click", function(){
	updateOperand(7);
});

var eight_button = document.getElementById("eight_button");
eight_button.addEventListener("click", function(){
	updateOperand(8);
});

var nine_button = document.getElementById("nine_button");
nine_button.addEventListener("click", function(){
	updateOperand(9);
});

var zero_button = document.getElementById("zero_button");
zero_button.addEventListener('click', function(){
	updateOperand(0);
});

var equal_button = document.getElementById("equal_button");
equal_button.addEventListener("click", function(){
	var result = 1;
	operand_turn = 1;
	if((operator == '/') && (operand2 == "0"))
	{
		result = "Error, Resetting both operands";
		output_area.innerHTML = result;
		operand1 = 0;
		operand2 = 0;
	}
	else
	{
		result = eval(operand1 + " " + operator + " " + operand2);
		output_area.innerHTML = result;
		operand1 = result;
		operand2 = 0;
	}
	operator = "+";
	console.log(result);
	var tmp = result % 1;
	if(tmp==0)
		dot_attached = false;
	else
		dot_attached = true;
});
