const cheerio = require('cheerio');
const axios = require('axios');

const link = 'https://time.com/';

let movies = [];
axios.get(link).
then((response) => {

    let $ = cheerio.load(response.data);
    $('.most-popular-feed__item-container li').each(function(el , index){
        let link = $(this).find('li.most-popular-feed__item div a').prop('href');
        let title = $(this).find('li.most-popular-feed__item h3').text();
    
        movies.push({ title: title, link : link});
    });
    console.log(movies);
    // console.log(response.data);

}).catch((error)=>{
    console.log(error);
})
