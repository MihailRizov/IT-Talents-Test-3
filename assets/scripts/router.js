function router() {
    let page = location.hash.split("=")[1];
    if (!emailStorage.doWeHaveUserMail()){
        loginController();
    } else {
        if (location.hash.includes("q")){
            page = "q"
        }
        switch (page) {
            case 'login' : loginController(); break;
            case 'home': homeController(); break;
            case 'q': moreInfoController(); break;
            default: homeController();  break;
    
        }
    }
    
}
router()
$(window).on('hashchange', router);


