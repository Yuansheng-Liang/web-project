let myimage = document.querySelector('img');

myimage.onclick = function(){
	let mysrc = myimage.getAttribute('src');
	if(mysrc === 'images/mpu6050.png'){
		myimge.setAttribute('src','images/1mpu6050.png');
	}else{
		myimage.setAttribute('src','images/mpu6050.png');
	}
}


let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');
function setusername(){
	let uname = prompt('怎么称呼您呢？');
	localStorage.setItem('name',uname);
	myheading.textContent = '热烈欢迎'+uname+'的到来' ;
}

if(!localStorage.getItem('name',uname)){
	setusername();
}else {
	let sname = localStorage.getItem('name');
	myheading.textContent = '热烈欢迎'+sname+'的到来' ;
}

mybutton.onclick = function(){
	setusername();
}