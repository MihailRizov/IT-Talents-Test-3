function loginController() {
    (async function getHtml() {
        try {
            var res = await fetch("Pages/login/login.htm");
            var html = await res.text();
            $('main').html(html)
        
        $('#addMail').on("click", function () {
            const mail = $("#mail").val()
                if (emailStorage.addEmail(mail)) {
                    location.replace('#page=home')
                } else {
                    $('#msg').text("INVALID EMAIL").css("color", "red");
                } 
        })
        } catch (error) {
            alert(error);
        }
    })()

}
