var emailStorage = (()=>{
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    if (localStorage.getItem("emailList")){
        var emailList = JSON.parse(localStorage.getItem('emailList'));
    } else {
        var emailList = [];
    }

    if (sessionStorage.getItem('currentUserEmail')){
        var currentUserEmail = JSON.parse(sessionStorage.getItem('currentUserEmail')); 
    } else {
        var currentUserEmail = '';
    }

    function addEmail(email) {
        if (email && validateEmail(email)){
            emailList.push(email);
            currentUserEmail = email;
            localStorage.setItem('userList', JSON.stringify(emailList));
            sessionStorage.setItem('currentUserEmail', JSON.stringify(currentUserEmail));
            return true;
        } else {
            return false;
        }
    }
    function doWeHaveUserMail() {
        if (currentUserEmail.length) {
            return true;
        } else {
            return false;
        }
    }


    return{
        addEmail,
        doWeHaveUserMail
    }
})()