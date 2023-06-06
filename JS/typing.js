if(document.getElementById('home_pre') != null){
    var i = 0;
    /*var txt = 'Lorem ipsum dummy text blabla.';*/
    var txt = document.getElementById('home_pre').innerHTML;
    document.getElementById('home_pre').innerHTML = ''
    var speed = 5;
    window.onload=function(){
        typeWriter();
    }
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("home_pre").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
}
