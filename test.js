function submit(){

    let Q = document.getElementById(`Quizes`).value;
    console.log(Q);
    let M = document.getElementById(`Midterm`).value;
    console.log(M);
    let F = document.getElementById(`FinalTest`).value;
    console.log(F);
    let O = document.getElementById(`Oral`).value;
    console.log(O);
let calculatedgrade =(Q*100)+(M*100)+(F*100)+(O*100);
console.log( calculatedgrade);
let finalgrade = calculatedgrade/100;
console.log(finalgrade);
let total = document.getElementById('total_grades');
total.innerText =`${finalgrade}`;

if(finalgrade >=90 && finalgrade == 100){
    document.getElementById(`final_grade`).innerText = "A";

  }else if( finalgrade >= 80){
   document.getElementById(`final_grade`).innerText = "B";

  }else if (finalgrade>= 70){
   document.getElementById(`final_grade`).innerText =" C";

  }else if (finalgrade >= 60){
      document.getElementById(`final_grade`).innerText =" D";
  }
  else{
   document.getElementById(`final_grade`).innerText =" F ";
  }

 }

