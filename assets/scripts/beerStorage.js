var beerStorage = {
    getMoreBeer: async page => {
        try {
            const data = await (await fetch("https://api.punkapi.com/v2/beers?page="+(+page)+"&per_page=30")).json(); console.log(data)
            return data
        } catch (error) {
            alert(error);
        }
    },
    getBeerById: async id => {
        try {
            const [beer] = await (await fetch("https://api.punkapi.com/v2/beers?ids=" + id)).json();
            return beer;
        } catch (error) {
            alert(error)
        }
    },
    getBeerByFoodCriteria: async food => {
        try {
            const beers = await (await fetch("https://api.punkapi.com/v2/beers?food=" + food)).json();
            return beers;
        } catch (error) {
            alert(error)
        }
    }
}