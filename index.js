var score;
function submit(){
    score=0;
    let i;
    var q1=document.getElementsByName("q1");
    for(i=0;i<q1.length;i++){
        if(q1[i].checked){
            if(q1[i].value=="1"){
                score++;
            }
            break;
        }
    }
    var q2=document.getElementsByName("q2");
    for(i=0;i<q2.length;i++){
        if(q2[i].checked){
            if(q2[i].value=="3"){
                score++;
            }
            break;
        }
    }
    window.location.href="score.html?score=" + score;
}
function viewscore(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var score = urlParams.get("score");
    document.getElementById("result").innerHTML=score;
}