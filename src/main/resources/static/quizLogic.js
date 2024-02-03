var Question2 = {
    Question : "What do dogs like to eat",
    Answer1 : "Meat",
    Answer2 : "Plastic",
    Answer3 : "Chocolate",
    Answer4 : "Electricity"
}

var Question1 = {
    Question : "Which animal is best?",
    Answer1 : "Dog",
    Answer2 : "Cat",
    Answer3 : "Duck",
    Answer4 : "Snake"
}

var Question3 = {
    Question : "What is food",
    Answer1 : "Game controller",
    Answer2 : "Door bell",
    Answer3 : "Jacket",
    Answer4 : "Sandwich"
}

let Questions = [
    Question1,
    Question2,
    Question3
]
let c_ans = [1, 1, 4]
let ans = [1,1,1]
var max = 3;

var i = 0;

function updateQuestion(k)
{

    var QuestionI = document.getElementById("question");
    QuestionI.innerHTML = Questions[k].Question;
    
    var Input1 = document.getElementById("at1");
    Input1.innerHTML = Questions[k].Answer1;
    
    var Input1 = document.getElementById("at2");
    Input1.innerHTML = Questions[k].Answer2;
    
    var Input1 = document.getElementById("at3");
    Input1.innerHTML = Questions[k].Answer3;
    
    var Input1 = document.getElementById("at4");
    Input1.innerHTML = Questions[k].Answer4;
}

function updateChoice()
{ 
    console.log(ans[i]);
    if(ans[i]== "1")
    {
        var Check = document.getElementById("answer1");
        Check.checked = true;
    }
    else if(ans[i]== "2")
    {
        var Check = document.getElementById("answer2");
        Check.checked = true;
    }
    else if(ans[i]== "3")
    {
        var Check = document.getElementById("answer3");
        Check.checked = true;
    }
    else if(ans[i]== "4")
    {
        var Check = document.getElementById("answer4");
        Check.checked = true;
    }
}

function getChoice()
{
    var ele = document.getElementsByName('choice');
 
    for (k = 0; k < ele.length; k++) {
        if (ele[k].checked)
            {
                ans[i]=ele[k].value
            }
    }
    
}

let update = function (evt)
{
    evt.preventDefault()
    updateQuestion(2)
}

let go_next = function (evt)
{
    evt.preventDefault()
   
    //save current answer
    //can do if statements instead if this donw work
    // getChoice;
    var ele = document.getElementsByName('choice');
    var chosen = false;
            for (k = 0; k < ele.length; k++) {
                if (ele[k].checked)
                    {
                        chosen = true;
                        ans[i]=ele[k].value
                        ele[k].checked = false;
                    }
            }
            console.log(ans[i]);
    if(i < 3 && chosen)
    {
        i = i +1;
        updateQuestion(i);
        updateChoice();
    }
    
    
}

let go_prev = function (evt)
{
    evt.preventDefault()
    //save current answer
    //can do if statements instead if this donw work
    var ele = document.getElementsByName('choice');
    var chosen = false;
    for (k = 0; k < ele.length; k++) {
        if (ele[k].checked)
            {
                chosen = true;
                ans[i]=ele[k].value;
                ele[k].checked = false;
            }
    }
    

    if(i > 0 && chosen)
    {
        i = i - 1;
        updateQuestion(i);
        updateChoice();
    }
}


let final = function(evt)
{
    evt.preventDefault()
    //we need to have disabled table with score
    let score = 0;
    for( var j = 0; j < max; j+= 1)
    {
        if ( ans[j] == c_ans[j])
        {
            score += 1;
        }
       
    }
    let ver = document.getElementById("ya1");
    ver.innerHTML = score;

    //need a table saying which answers are correc which are not

}


    // var Check = document.getElementById("answer1");
    // Check.checked = true;

//document.querySelector("#form").addEventListener("submit", go_next);
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", final);
    } else {
        console.error("Form not found");
    }
});

//document.querySelector("#next").addEventListener("click", go_next)

 document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector("#next");
    if (form) {
        form.addEventListener("click", go_next);
    } else {
        console.error("Form not found");
    }
});

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector("#prev");
    if (form) {
        form.addEventListener("click", go_prev);
    } else {
        console.error("Form not found");
    }
});
