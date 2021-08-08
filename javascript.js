let inputEl=document.getElementById("input-el");
let inputEl2=document.getElementById("input-el2");
let ouputEl=document.getElementById("output-el");

function calculate(params) {
    let x=inputEl.value**inputEl2.value;
    ouputEl.textContent=inputEl.value+"^"+inputEl2.value+"="+x;
}
