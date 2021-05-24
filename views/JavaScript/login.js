var button = document.getElementById('quiz-btn');
button.addEventListener('click',hideshow,false);

function hideshow() {
        document.getElementById('div-btn').style.display = 'block'; 
        this.style.display = 'none';
    }   
   
 document.querySelector("#quiz-btn").innerHTML = "Apasa AICI pentru a incepe";
 document.querySelector("p").style.color = "brown";
 document.querySelector("p").style.marginLeft = "60px";
 document.querySelector("p").style.marginTop = "50px";
 document.querySelector("p").style.fontSize = "30px";

// generare test 
var quiz = [
    {
        intrebare : "Care dintre urmatoarele carti au fost scrise de LEV TOLSTOI?",
        raspunsuri : [["Razboi si pace ", true], ["Crima si pedeapsa", false], ["Suflete moarte ", false], ["Anna Karenina", true]
                    ,[" Fratii Karamazov ", false], ["Moartea lui Ivan Ilici ", true]]
    },
    {
        intrebare : "Cine este autorul cartii 'Alchimistul' ? ",
        raspunsuri : [["J.D. Salinger", false], ["Paulo Coelho", true], ["Murakami", false], ["Ernest Hamingway", false]]
    },
    {
        intrebare : "Care este personajul principal al cartii 'Crima din Orient Express'?",
        raspunsuri : [["Markus Zusak", false], ["Hercule Poirot", false], ["Liesel Meminger", true], ["Elizabeth Bennet", false]] 
    },
    {
        intrebare : "Care este nationalitatea scriitorului Franz Kafka ?",
        raspunsuri : [["germana", false], ["britanica", false], ["ceha", true], ["romana", false]]
    },
    {
        intrebare : " Cine este autorul cartii 'Visul unei nopti de vara'? ",
        raspunsuri : [["Jane Austen", false], ["William Shakespeare", true], ["Charlotte Bronte", false], ["Oscar Wilde", false]]
    }
]

function display_quiz()
{
    let main = document.getElementById('main-section');
    main.innerHTML = `<main class = 'main-div'> 
        <ol id = "main-quiz-ol" style = "text-align:left">
 
            </ol>
    </main>`;
    main = document.getElementById('main-quiz-ol');
    for (let i = 0; i < quiz.length; i++)
    {

        main.innerHTML += "<li>" + quiz[i].intrebare + "<ol type = 'a'> </ol> </li>";
        let ans = main.lastChild;
        ans = ans.getElementsByTagName("ol")[0];
        for (let j = 0; j < quiz[i].raspunsuri.length; j++)
        {
            ans.innerHTML +=`<li><input type='checkbox' name = '${j}'> <label for = '${j}'>` + quiz[i].raspunsuri[j][0] + `</label></li>`
        }

    }
    main = main.parentElement;
    main.innerHTML += '<button type = "button" class = "submit-button" id = "get-result-btn">Show result</button>';
    document.getElementById("get-result-btn").addEventListener("click", function(){
        getResult();
    });

}


function getResult()
{
    let score = 0;
    let count_quiz = 0;
    let count_ans = 0;
    let intrebari = document.getElementById("main-quiz-ol").children;
    //console.log(intrebari);
    //console.log(intrebari[0]);
    for (let i = 0; i < intrebari.length; i++)
    {
        let intrebare = intrebari[i];
        //console.log(intrebare.innerHTML);
        let raspunsuri = intrebare.getElementsByTagName("ol")[0].children;
        let ok = 1;
        for (let j = 0; j < raspunsuri.length; j++)
        {
            let raspuns = raspunsuri[j];
            //console.log(raspuns.getElementsByTagName("input")[0].checked);
            if (quiz[i].raspunsuri[j][1] && !raspuns.getElementsByTagName("input")[0].checked)
            {
                ok = 0;
            }
            if (!quiz[i].raspunsuri[j][1] && raspuns.getElementsByTagName("input")[0].checked)
            {
                ok = 0;
            }
            raspuns.getElementsByTagName("input")[0].disabled = true;

        }
        if (ok == 1)
            score += 1;
    }

    // selectare dupa clasa 
    let main = document.getElementsByClassName("main-div")[0];
    main.innerHTML += `<p style = 'font-size:40px'">Scorul tau este: ${score} </p>`;
}


document.addEventListener("click", function(e)
{
    if (e.target && e.target.id == 'quiz-btn')
    {
        display_quiz();
    }

});

