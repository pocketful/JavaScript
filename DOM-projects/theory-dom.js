/* Selection examples */
/* https://www.w3schools.com/jsref/dom_obj_all.asp */

// addEventListener:
console.log(event);               // matysis visas sarasas ka pasirinkti
console.log(event.target);        // pats elementas ant kurio eventListener
console.log(event.target.value) - // elemento value
  usernameEl.parentElement;
usernameEl.nextElementSibling;
formEl.children;

// style
h1El.style.color = "tomato";
h1El.style.fontSize = "16px";
const myListEl1 = document.querySelector(".my-list li:first-child");
const myListEl2 = document.querySelector(".my-list li:nth-child(2)");

/* ================================== insertAdjacentHTML() ======================================== */
// The insertAdjacentHTML() method inserts HTML code into a specified position.
// afterbegin	After the beginning of the element (first child)
// afterend	    After the element
// beforebegin	Before the element
// beforeend	Before the end of the element (last child)

/* ================================== CLASSLIST ======================================== */
// paima spalvas tik is html, inline, o ideda ir i css

// https://www.w3schools.com/jsref/prop_element_classlist.asp
// add(), remove(), replace(), and toggle() methods.

element.classList.add("myStyle", "anotherClass", "thirdClass");
cardEl.classList.add("naktis");
cardEl.classList.remove("naktis");
cardEl.classList.toggle("naktis");
cardEl.classList.replace("foo", "bar"); // replace class "foo" with class "bar"
cardEl.classList.contains("naktis");    // true, false - ar turi tokia klase
cardEl.classList; // grazins
const list = document.getElementById("cardEl").classList; // get the class names of the element
let className = element.classList.item(0);                // get the first class of an element

// old ways
cardEl.className = "naktis";    // overwrite visas pries tai klases, lieka viena
cardEl.className += "naktis";   // prides klase, bet nuimti sunkiau

// painspectinus elementa, ar pazymejus chrome, pasiziuret galima:
$0;
$0.parentElement;
$0.parentElement.classList.toggle("naktis");
buttonNight.parentElement.classlist.toggle("naktis"); //true false

// remove "anotherClass" if an element has a "myStyle" class.
if (element.classList.contains("mystyle")) {
  element.classList.remove("anotherClass");
}

// cards === NodeList(3) [div.card1.card, div.card2.card, div.card3.card]
// cards class === HTMLCollection(3) [div.card1.card, div.card2.card, div.card3.card]

// querySelectorAll vs getElementsByClassName
// querySelectorAll doesn't return live DOM elements. Subsequent changes to the structure of the underlying document won't be reflected in the NodeList object
// getElementsByClassName returns live DOM elements. Any subsequent change made to those DOM elements would be reflected in the list.

// chrome vietoj console.log galima rasyti, kad ismestu properties visas
console.dir();
console.dir(document);

/* https://www.w3schools.com/js/js_htmldom.asp */
/* https://www.w3schools.com/js/js_htmldom_navigation.asp */
this;
window;                 // pats globaliausias objektas
window.document.title;
window.aaa = 50;        // isides 50
window.location;        // kur esam, galim nukeliauti i kita puslapi

$0.id = "newId";                       // pazymejus elementa galima pakeisti id
$0.setAttribute("class", "blue");      // pazymetam elementui nauja class pridet
document.body.childNodes[nodenumber];  // grazins be [] su visokiais text nodes, kurie yra tarpai tarp elementu
previousSibling;                       // irgi grazina su text nodes, todel geriau previousElementSibling

window.subtitleEl = document.body.children[1];
// nudazom pries tai esancio el spalva
subtitleEl.previousElementSibling.style.color = "yellow";
// padidinti font size po subtitleEl esancio elemento antram vaikiniam el
subtitleEl.nextElementSibling.children[1].style.fontSize = "50px";

document.body.children;
document.body.children.vienas;   // (pagal id grazins)
document.body.children[0];       // (grazins 1 elementa)

/* ================================== Event Listener ======================================== */
// click() method simulates a mouse click on an element.
// blur() method removes keyboard focus from the current element
// focus() method sets focus on the specified element
// change event - fired for <input>, <select>, and <textarea> elements when an alteration to the element's value is committed by the user. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.
// input event - fires when the value of an <input>, <select>, or <textarea> element has been changed.

// target is the element that triggered the event (e.g., the user clicked on).
// currentTarget is the element that the event listener is attached to.
