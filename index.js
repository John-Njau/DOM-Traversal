//Appending a new div in the html file through script --> way 1
// var newDiv = document.createElement('div');
// newDiv.className = 'hello';
// newDiv.id = "helloId";
// newDiv.innerText= 'Learning DOM manipulation' //innerText should be written just like aa common sentence

// document.body.append(newDiv);


//Appending a new div in the html file through script --> way 2
var newDiv = document.createElement('div');
newDiv.setAttribute('class', 'myclass');
newDiv.setAttribute('id',"helloId");
//adding content to our web page using javascript
newDiv.innerHTML= '<h1>Learning DOM manipulation</h1> \
<p>This is a basic introduction to DOM</p> \
<p><img src="images/christina-morillo-1181519.jpg" height=50% width="20%"</p> \
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis.</p><br> \
<img src="images/vyuop.jpg" height=50% width="20%"<br>\
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis.</p>'; //innerText should be written just like aa common sentence


var newSection = document.createElement('section');
//setting an attribute
newSection.setAttribute('id','sectionId');
newSection.setAttribute('class','sectionClass');
newSection.innerHTML= '<h1>Learning DOM manipulation</h1> \
<p>This is a basic introduction to DOM</p> \
<p><img src="images/GODELIVER.jpg" height=50% width="20%"</p> \
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis.</p><br> \
<img src="images/futwitz.png" height=50% width="20%"<br>\
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, omnis.</p>'; //innerText should be written just like aa common sentence

//Adding a button via Js
var myBtn = document.createElement('button');
// myBtn.setAttribute('class', 'btn');
myBtn.setAttribute('id', 'btn1');
// myBtn.setAttribute('onclick', 'changeTheme()');


//getting an attribute
var myDiv = document.getElementById('divId');
var title = myDiv.getAttribute('title') ;
console.log('title');

var classN = document.getElementById('divId').getAttribute('divClass');
console.log('classN');

//Appending
document.body.append(myBtn);
document.body.append(newDiv);
document.body.append(newSection);

// button function
// var myBtn2 = document.querySelector("#btnId");
// document.addEventListener('click', ()=>{
//     // document.body.style.backgroundColor='red';
//     document.body.classList.toggle('dark');
// });
var btn1 = document.querySelector("#btn1");
document.addEventListener('click', ()=>{
    document.body.classList.add('dark', );
    // document.body.style.color="white"
});

// Adding Css style via Js
// document.body.style.backgroundColor='blue';
document.getElementById('sectionId').style.border="2px solid lightgray";
document.getElementById('sectionId').style.background="darkblue";
document.getElementById("btn1").style.padding="15px 32px";
document.getElementById("btn1").innerText="Click Me";

//creating elements and appending to a Div
var divToAppendTo = document.getElementById("divId");
var myH1 = document.createElement('h1');
    myH1.innerHTML="<h1>This h1 element is appended via Js</h1><br>\
    Below is a button that changes the background color.";
    divToAppendTo.append(myH1);

//creating elements and appending to the Div we created earlier
var divToAppendTo = document.getElementById('helloId');
var pText = document.createElement('p');
    pText.innerText = 'This a paragraph type appended via Js';
var myH2 = document.createElement('h2')
    myH2.innerHTML='<h2>This is a h2 tag</h2>'
    divToAppendTo.append(myH2, pText);



var btn2 = document.querySelector("#btnId2");
document.addEventListener('click', ()=>{
    document.body.classList.toggle('yellow')
});