function validezaEmail(){
    var frm = document.formular;
    var regExpEmail = /^.+\@.+\..+$/ ;// expresia regulata pentru verificare email
    var valid = regExpEmail.test(frm.email.value);

    if (!valid){
    alert ("Introduceti o adresa de mail valida!");
    frm.email.focus();

    }
    return valid;
    }
    

    function verifyLogin(){
        const Http = new XMLHttpRequest();
        const url='http://localhost:3000/users/isLoggin';
        Http.open("GET", url);
        Http.send();

        Http.onreadystatechange = (e) => {
            if(Http.responseText.includes("true")){
                 document.getElementById("userContent").innerHTML = '<p1>ESTI LOGAT</p1>';
            }
            else{
                document.getElementById("userContent").innerHTML = '<p1>NU ESTI LOGAT</p1>';
            }

        
}

        
    }