

export class TopNews{

    async TopHeadings(){
    try{
    const Topnews = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=2e2283a8033e4a69a746d0a9b61aa5f6');
    const Topres = await Topnews.json();
    this.results = Topres.articles;
    }
    catch(error)
    {
        alert(error);
    }
 }
    
}//https://newsapi.org/v2/top-headlines?country=us&apiKey=02fbe3d555cf4e3483390b73a7a7bb24

export class Search{
constructor(query){
    this.query = query;
}
        async getSearchResults(query){
        try{
        const news = await fetch(`https://newsapi.org/v2/top-headlines?q=${this.query}&apiKey=2e2283a8033e4a69a746d0a9b61aa5f6`);
        const res = await news.json();
        this.results = res.articles;
        }
        catch(error)
        {
            alert(error);
        }
   }

}

