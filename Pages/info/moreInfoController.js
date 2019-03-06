function moreInfoController () {
    (async()=>{
        try {
            const hashData = decodeURIComponent(location.hash.split("=")[2]);
            const id = hashData.substring(1,hashData.length-1);
            const content = await beerStorage.getBeerById(id);
            const beerMaker = await Handlebars.compile(await (await fetch("Pages/info/info.htm")).text());
            $("main").html(beerMaker(content))
            $("#back").on("click", ()=>{
                location.replace("#page=home")
            })
        } catch (error) {
            alert(error);
        }
    })()
}