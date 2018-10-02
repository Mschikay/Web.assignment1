


//to keep the footer at the bottom, make the dom at least the size as the window

function mainElemHeight(id) {
    var mainElem=document.getElementById(id);//获得main元素
    mainElem.style.minHeight = document.documentElement.clientHeight + "px";//初始化最小高度
    return;
}

//get the original height of navigation bar
var originalHeight;
function getHeight(){
    var navDiv = document.getElementById('navContainer');
    originalHeight = navDiv.offsetHeight;
    return;
}

//the navigation bar will get higher and wider, so does its mask
function expand(){
    var navDiv = document.getElementById('navContainer');
    var navHeight = navDiv.offsetHeight;
    document.getElementById('navMask').style.height = navHeight.toString()+'px';
    return;
}

//when the navigation bar gets smaller, so does its mask
function collapse(){
    document.getElementById('navMask').style.height = originalHeight.toString()+'px';
    return;
}

//resize the window, the mask will remain the same size as navigation bar
function resize(){
    expand();
    getHeight();
}

function getMusicComment1() {
    var urlstring = "https://api.imjad.cn/cloudmusic/?type=comments&id=28012031";
    // $.ajax({url: urlstring, success: function(result) {
    //         $("#musicComment").html(result);
    //         alert(result);
    //     }});
    // //
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("musicComment").innerHTML = this.responseJSON;
        }
        else{
            document.getElementById("musicComment").innerHTML = "no response";
        }
    };
    xhttp.open("GET", urlstring, true);
    xhttp.send();
    return;
}