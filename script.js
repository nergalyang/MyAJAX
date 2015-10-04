
var count=-1;

function aaa(){
    var myRequest;
    
    if (window.XMLHttpRequest) { 
        myRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
        myRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    myRequest.onreadystatechange = function(){
        if (myRequest.readyState === 4) {
            
            var data = JSON.parse(myRequest.responseText);
            var k = document.getElementById('haha').setAttribute("src",data.url[count]);
        }
    };
        
    count+=1;
    if (count >=3){
        count = count%3;

    }
    console.log(count);

    myRequest.open('GET', 'http://localhost:8080/Basic_Ajax/simple.json', true);
    myRequest.send(null);
    ccc();
    setTimeout(bbb,2500)
}

function bbb(){
    $("#haha").fadeOut("slow");
}
function ccc(){
    // document.getElementById("haha").style.display="block";
    $("#haha").fadeIn("slow");
}

window.onload = function(){

    
    var run = setInterval(aaa,3000);
    setTimeout(ccc,3001);
    setTimeout(bbb,2500);
    // var run1 = setInterval(bbb,900);
    // var run2 = setInterval(ccc,1100);



};