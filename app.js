const questions = ["Do you tell lies?","Do you stay online even after saying “Goodnight”?"];
let current=0;const $=id=>document.getElementById(id);
function show(id){["intro","question","result"].forEach(name=>$(name).classList.toggle("hidden",name!==id));window.scrollTo({top:0,behavior:"smooth"});}
function render(){$("step").textContent=`QUESTION ${current+1} OF ${questions.length}`;$("fill").style.width=`${((current+1)/questions.length)*100}%`;$("questionText").textContent=questions[current];}
$("start").addEventListener("click",()=>{current=0;render();show("question");});
document.querySelectorAll(".answer").forEach(button=>button.addEventListener("click",()=>{if(current<questions.length-1){current++;render();}else show("result");}));
$("again").addEventListener("click",()=>{current=0;show("intro");});