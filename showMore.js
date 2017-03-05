var newsArr = [
    {
        time: "14:44",
        sportClass: "hockey",
        sport: "Хоккей",
        text: "Андрей Николишин: Ближайши матчи 'Трактора' с 'Ладой' и 'Нефтехимиком' - это битва за 12 очков"
    },
    {
        time: "14:43",
        sportClass: "football",
        sport: "Футбол",
        text: "Ибрагимович собирается выступить на Олимпиаде-2016"
    },
    {
        time: "14:43",
        sportClass: "football",
        sport: "Футбол",
        text: "Футбол</span>Владимир Стогниенко: То, что сейчас происходит с 'Зенитом', вряд ли кого-то устраивает"
    },
    {
        time: "14:29",
        sportClass: "hockey",
        sport: "Хоккей",
        text: "'Автомобилист' обыграл 'Амур' в матче регулярного чемпионата КХЛ"
    },
    {
        time: "14:26",
        sportClass: "box",
        sport: "Бокс",
        text: "Андрей Рябинский: 'Мир бокса' не будет подписывать контракт с Проводниковым"
    },
    {
        time: "14:10",
        sportClass: "hockey",
        sport: "Хоккей",
        text: "КХЛ. ЦСКА - 'Локомотив', СКА - 'Динамо' Мск и другие матчи. LIVE "
    },
    {
        time: "13:41",
        sportClass: "football",
        sport: "Футбол",
        text: "Сергею Овчинникову на день рождения подарили торт "
    }
]

function createElement(tag, tagClass, text) {
    var elem = document.createElement(tag);
    elem.className = tagClass;
    var content = document.createTextNode(text);
    elem.appendChild(content);
    return elem;
}

function getNewsItem(time, sportClass, sport, text) {
    var timeInfo = createElement("div", "time", time);
    var sportInfo = createElement("span", sportClass, sport);
    var content = document.createTextNode(text);
    
    var contentWrapper = document.createElement("div");
    contentWrapper.className = "sport_news_col_item_text"
    contentWrapper.appendChild(sportInfo);
    contentWrapper.appendChild(content);
    
    var newsItem = document.createElement("div");
    newsItem.className = "sport_news_col_item";
    
    newsItem.appendChild(timeInfo);
//    newsItem.appendChild(sportInfo);
    newsItem.appendChild(contentWrapper);
    
    return newsItem
} 

function getMoreNews(){
    var moreNews = document.getElementById("more_news");
    
    for (i in newsArr){
        console.log(newsArr[i]);
        var newsItem = getNewsItem(newsArr[i].time, newsArr[i].sportClass, newsArr[i].sport, newsArr[i].text)
        
        moreNews.appendChild(newsItem);
    }    
}

