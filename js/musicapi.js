
function getMusicComment(value) {

    var urlstring = "https://api.imjad.cn/cloudmusic/?type=comments&id="+value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var result = JSON.parse(this.responseText);
            var display =
                '<p>'+result.hotComments[0].user.nickname+ '：'+result.hotComments[0].content+'</p>'+
                '<p>'+result.hotComments[1].user.nickname+ '：'+result.hotComments[1].content+'</p>'+
                '<p>'+result.hotComments[2].user.nickname+ '：'+result.hotComments[2].content+'</p>'+
                '<p>'+result.hotComments[3].user.nickname+ '：'+result.hotComments[3].content+'</p>'+
                '<p>'+result.hotComments[4].user.nickname+ '：'+result.hotComments[4].content+'</p>'+
                '<p>'+result.hotComments[5].user.nickname+ '：'+result.hotComments[5].content+'</p>'+
                '<p>'+result.hotComments[6].user.nickname+ '：'+result.hotComments[6].content+'</p>'+
                '<p>'+result.hotComments[7].user.nickname+ '：'+result.hotComments[7].content+'</p>'+
                '<p>'+result.hotComments[8].user.nickname+ '：'+result.hotComments[8].content+'</p>'+
                '<p>'+result.hotComments[9].user.nickname+ '：'+result.hotComments[9].content+'</p>'+
                '<p>'+result.hotComments[10].user.nickname+ '：'+result.hotComments[10].content+'</p>'+
                '<p>'+result.hotComments[11].user.nickname+ '：'+result.hotComments[11].content+'</p>'+
                '<p>'+result.hotComments[12].user.nickname+ '：'+result.hotComments[12].content+'\r';
            document.getElementById("4237923").innerHTML = display;
        }
        else{
            // document.getElementById("musicComment").innerHTML = "no response";
        }
    };
    xhttp.open("POST", urlstring, true);
    xhttp.send();

    return;
}

function getMusicLyric(value) {
    var urlstring = "https://api.imjad.cn/cloudmusic/?type=lyric&id="+value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            var result = JSON.parse(this.responseText);
            document.getElementById("4237923").innerHTML = result.lrc.lyric;
        }
        else{
            // document.getElementById("musicComment").innerHTML = "no response";
        }
    };
    xhttp.open("POST", urlstring, true);
    xhttp.send();
    return;
}

function close(){
    // document.getElementById("4237923").innerHTML = "";
    document.getElementById("4237923").style.display = 'none';
}
