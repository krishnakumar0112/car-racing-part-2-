canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Create an array "nasa_mars_images_array" and store all the image file names.


//Generate random number and store it in variable "random_number"


console.log(random_number);
rover_width = 100;
rover_height = 90;

/*Pass this random_number as the index to the array and update the background_image variable 
with the following*/


//console this background_image variable to see when images come, everytime we refresh the page.



rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = rover_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
}

//Add the code for up() function:
function car1_up()
{
	if(car1_y >=0)
	{
		car1_y = car1_y - 10;
		console.log("when up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
//Add the code for down() function:
function car1_down()
{
	if(car1_y <=500)
	{
		car1_y =car1_y + 10;
		console.log("when down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
//Add the code for left() function:
function car1_left()
{
	if(car1_x >= 0)
	{
		car1_x =car1_x - 10;
		console.log("when left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
//Additional Activity
//Add the code for right() function:
function car1_right()
{
	if(car1_x >= 700)
	{
		car1_x =car1_x + 10;
		console.log("when right arrow is pressed, x = " + car1_x + " | y = " +car1_y);
		uploadBackground();
		uploadcar1();
		uploadcar2();
	}
}
if(car1_x > 700)
{
	console.log("car1 Won");
	document.getElementById('game_status').innerHTL = "Car 1 Won! !";
}