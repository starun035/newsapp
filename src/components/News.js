import React from 'react';
import { NewsItem } from './NewsItem';

export class News extends React.Component {
  articles = [{
      "source": {
        "id": null,
        "name": "Business Today"
      },
      "author": "Smita Tripathi",
      "title": "India is a key priority market in 2022: Oetker Collection’s Hugues Miranda",
      "description": "In a conversation with Business Today, Hugues Miranda, Vice President Sales, Europe, Russia, CIS &amp; Asia Pacific, Oetker Collection talks about the importance of India as a source market, conducting Indian weddings at its properties, plans for Asia, and ma…",
      "url": "https://www.businesstoday.in/latest/economy/story/india-is-a-key-priority-market-in-2022-oetker-collections-hugues-miranda-333549-2022-05-13",
      "urlToImage": "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202205/1200_28_0-sixteen_nine.jpg",
      "publishedAt": "2022-05-13T14:20:04Z",
      "content": "Germany's the Oetker Collection comprises of hotels, estates and villas in Europe, the UK, Brazil and the Caribbean. With properties located in some of the worlds most desirable destinations, each pr… [+5216 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Aktualne.cz"
      },
      "author": "Domácí, Dan Poláček",
      "title": "Kdo je nový pražský arcibiskup Graubner? Konzervativec, který kritizoval lídra SPD",
      "description": "Graubner kardinála Duku nahradil už před dvěma lety, tehdy to však bylo ve funkci předsedy České biskupské konference, kterým se stal již podruhé.",
      "url": "https://zpravy.aktualne.cz/domaci/foto-jan-graubner/r~8edbf844d29211eca9b1ac1f6b220ee8/",
      "urlToImage": "https://cdn.xsd.cz/original/693460a4baef3976a0a6fd3b61b9d4fc.jpg",
      "publishedAt": "2022-05-13T14:19:44Z",
      "content": "Plán pevzetí internetové spolenosti Twitter zhruba za 44 miliard dolar (více ne bilion korun), které za podnik nabídl šéf americké spolenosti Tesla Elon Musk, je pozastaven. Musk to v pátek uvedl na … [+800 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Electrek"
      },
      "author": "Fred Lambert",
      "title": "Tesla abandons plans to enter the Indian market for now",
      "description": "Tesla has officially abandoned its effort to enter the Indian market and even started to reassign local employees. The automaker couldn’t get the government to change its mind on high import tariffs for foreign electric vehicles. India has the biggest auto ma…",
      "url": "https://electrek.co/2022/05/13/tesla-abandons-plans-enter-indian-market/",
      "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2021/08/Tesla-Model-3-India-hero.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-05-13T14:18:51Z",
      "content": "Tesla has officially abandoned its effort to enter the Indian market and even started to reassign local employees. The automaker couldn’t get the government to change its mind on high import tariffs … [+2688 chars]"
    },
    {
      "source": {
        "id": "axios",
        "name": "Axios"
      },
      "author": "Dan Primack",
      "title": "Elon Musk's Twitter clown car",
      "description": "Before dawn on Friday the 13th, Elon Musk may have murdered his Twitter takeover.Driving the news: The mercurial Musk at 5:44am ET tweeted: \"Twitter deal temporarily on hold pending details supporting calculation that spam/fake accounts do indeed represent le…",
      "url": "https://www.axios.com/2022/05/13/elon-musk-twitter-clown-car",
      "urlToImage": "https://images.axios.com/b-bKPLr-O6btN3o7yGgly0_1lus=/0x0:1920x1080/1366x768/2022/05/13/1652451243752.jpg",
      "publishedAt": "2022-05-13T14:17:50Z",
      "content": "Before dawn on Friday the 13th, Elon Musk may have murdered his Twitter takeover.\r\nDriving the news: The mercurial Musk at 5:44am ET tweeted: \"Twitter deal temporarily on hold pending details support… [+2337 chars]"
  }];
  constructor() {
    super();
    console.log('in constructor');
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
  async componentDidMount() {
    console.log('in cdm');
    let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3172980fe9dc4b1c9fe49206633d8b15';
    // let data = await fetch(url);
    // let parsedData = await data.json();
    let parsedData = {
      "status": "ok",
      "totalResults": 69,
      "articles": [
        {
          "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
          },
          "author": "Dean Seal and Anna Hirtenstein",
          "title": "Elon Musk Puts His Twitter Deal on Hold - The Wall Street Journal",
          "description": "Elon Musk said his deal to buy Twitter was on hold, sending shares of the messaging service lower, but he later added that he remains committed to the acquisition.",
          "url": "https://www.wsj.com/articles/elon-musk-tweets-that-twitter-deal-is-temporarily-on-hold-11652436335",
          "urlToImage": "https://images.wsj.net/im-543725/social",
          "publishedAt": "2022-05-13T13:42:00Z",
          "content": "Elon Musk said his deal to buy Twitter was on hold, raising questions about the takeover and sending shares of the messaging service lower, but he later added that he remains committed to the acquisi… [+337 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Jim Cramer",
          "title": "What Cramer is watching Friday — Elon saves Tesla, Cathie saves Coinbase, Sam saves Robinhood - CNBC",
          "description": "Elon Musk, Ark's Cathie Wood and FTX CEO Sam Bankman-Fried were big newsmakers heading into the week's final trading day.",
          "url": "https://www.cnbc.com/2022/05/13/cramer-friday-elon-saves-tesla-cathie-saves-coinbase-sam-saves-hood.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107059219-1652251399779-gettyimages-1238366977-AFP_9ZH26X.jpeg?v=1652338243&w=1920&h=1080",
          "publishedAt": "2022-05-13T13:09:16Z",
          "content": null
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Daniella Diaz, CNN",
          "title": "Baby formula shortage spurs action from Congress - CNN",
          "description": "A nationwide shortage of baby formula has spurred a response from several House committees in an effort to figure out what's caused the issue and how the government can ease the problems causing the shortages.",
          "url": "https://www.cnn.com/2022/05/13/politics/baby-formula-congress-hearing-reaction/index.html",
          "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220508102513-03-us-baby-formula-shortage-super-tease.jpg",
          "publishedAt": "2022-05-13T12:51:00Z",
          "content": "(CNN)A nationwide shortage of baby formula has spurred a response from several House committees in an effort to figure out what's caused the issue and how the government can ease the problems causing… [+3093 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Hannah Miao",
          "title": "Morgan Stanley upgrades Ford, says parts of the automaker's business are underestimated - CNBC",
          "description": "Morgan Stanley upgraded Ford to an equal-weight rating from underweight.",
          "url": "https://www.cnbc.com/2022/05/13/morgan-stanley-upgrades-ford-says-parts-of-the-automakers-business-are-underestimated.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107053150-16511673622022-04-28t165351z_1741682125_rc2ewt9ylzd7_rtrmadp_0_usa-stocks.jpeg?v=1651167400&w=1920&h=1080",
          "publishedAt": "2022-05-13T12:25:08Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "CoinDesk"
          },
          "author": "Jamie Crawley",
          "title": "Terra Blockchain Resumes Following 9-Hour Halt - CoinDesk",
          "description": "Blocks 7607790 and 7607791 came through at around 11:27 UTC Friday.",
          "url": "https://www.coindesk.com/business/2022/05/13/terra-blockchain-resumes-following-9-hour-halt/",
          "urlToImage": "https://www.coindesk.com/resizer/qg4XdMogbuoqP1ktG3YSFv_rgXk=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/JIEDWKPGBVC2TEVR6TPRKDG6OM.jpg",
          "publishedAt": "2022-05-13T11:52:00Z",
          "content": "Please note that ourprivacy policy,terms of use,cookies, anddo not sell my personal informationhas been updated.\r\nThe leader in news and information on cryptocurrency, digital assets and the future o… [+540 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Yahoo Entertainment"
          },
          "author": "Emily McCormick",
          "title": "Stock market news live updates: Stock futures rise as indexes aim to pare weekly losses - Yahoo Finance",
          "description": "U.S. stock futures opened lower Thursday evening, with the major indexes heading for weekly losses as concerns over persistent inflation and the resilience...",
          "url": "https://finance.yahoo.com/news/stock-market-news-live-updates-may-13-2022-221242098.html",
          "urlToImage": "https://s.yimg.com/ny/api/res/1.2/hG5bCWyIfdw2AkowQ69Dfw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-05/cf991e10-d239-11ec-b65d-c8d3ecc61e9d",
          "publishedAt": "2022-05-13T11:47:00Z",
          "content": "U.S. stock futures gained Friday morning, though the major indexes are still headed for losses for the week after concerns over persistent inflation and the resilience of the U.S. economy stirred up … [+6086 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "MarketWatch"
          },
          "author": "Barbara Kollmeyer",
          "title": "This portfolio manager's strategy uses just one ETF and his own 'crash indicator' to beat the market by 530% - MarketWatch",
          "description": "Critical information for the U.S. trading day",
          "url": "https://www.marketwatch.com/story/dont-just-fear-the-market-lows-after-a-hard-drop-stocks-are-ripe-to-come-back-says-this-money-manager-11652440436",
          "urlToImage": "https://images.mktw.net/im-543711/social",
          "publishedAt": "2022-05-13T11:13:00Z",
          "content": "Markets are off to a stronger start on Friday, but its been a rough few days, with the S&amp;P 500 facing a six-week losing streak, its longest in a decade.With a war raging in Europe, surging prices… [+5853 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Fox Business"
          },
          "author": "Gary Gastelu",
          "title": "Foxconn to build Fisker's PEAR electric SUV at Ohio factory in 2024 - Fox Business",
          "description": "Foxconn will build the Fisker PEAR electric SUV at its new Ohio factory starting in 2024.",
          "url": "https://www.foxbusiness.com/lifestyle/foxconn-fiskers-pear-electric-suv-ohio",
          "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/05/0/0/fisker-pear.jpg?ve=1&tl=1",
          "publishedAt": "2022-05-13T11:06:53Z",
          "content": "The Apple car may still be in the works, but you'll soon be able to drive a PEAR.\r\nThe Fisker PEAR is a compact electric SUV. (Fisker)\r\nElectric car startup Fisker has reconfirmed that Foxconn's comp… [+1523 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Times"
          },
          "author": "Melina Delkic",
          "title": "Latest Earnings, Stocks and Business News: Live Updates - The New York Times",
          "description": "The Nasdaq composite, a benchmark that’s heavily weighted toward tech stocks, is already in bear market territory.",
          "url": "https://www.nytimes.com/live/2022/05/13/business/economy-news-stocks-inflation",
          "urlToImage": "https://static01.nyt.com/images/2022/05/09/business/09economy-briefing-bear-market-promo/09economy-briefing-bear-market-promo-facebookJumbo.png",
          "publishedAt": "2022-05-13T11:03:21Z",
          "content": "Jerome Powell was confirmed to a second four-year term at the head of the Fed on Thursday afternoon.Credit...Win Mcnamee/Getty Images\r\nJerome H. Powell, the chair of the Federal Reserve, said the cen… [+2396 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Gizmodo.com"
          },
          "author": "Matt Novak",
          "title": "Crypto Investor Who Lost Big Money Spooks Luna Founder's Wife at Home: Report - Gizmodo",
          "description": "Luna, once the fourth largest cryptocurrency in the world, plunged to $0 on Thursday.",
          "url": "https://gizmodo.com/luna-price-do-kwon-police-south-korea-home-apartment-bi-1848921120",
          "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/d62e38808d3d2cdf010c64d6b23acc82.png",
          "publishedAt": "2022-05-13T10:45:00Z",
          "content": "Do Kwon, the founder of the cryptocurrency Luna and the stablecoin TerraUSD, has reportedly been in contact with police after a possible investor in the coin trespassed at his home, according to a ne… [+2891 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WESH Orlando"
          },
          "author": null,
          "title": "Florida gas prices rise to new all-time high - WESH 2 Orlando",
          "description": "Florida is one of the 10 states with the largest increases.",
          "url": "https://www.wesh.com/article/florida-gas-prices-today/39989160",
          "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/gettyimages-1318989230.jpg?crop=1.00xw:0.846xh;0,0&resize=1200:*",
          "publishedAt": "2022-05-13T10:37:00Z",
          "content": "Overnight into Friday, Florida gas prices rose yet again to an all-time record high. \r\nAs of Friday morning, the average price was $4.46, up 7 cents from Thursday, and up from $4.19 a week ago. \r\nFlo… [+1762 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Cbslocal.com"
          },
          "author": "CBS3 Staff",
          "title": "More Than 75 New Jersey Gas Stations Lowering Prices On Friday To Promote Self-Service - CBS Philly",
          "description": "It's all part of the \"Fuel Your Way NJ\" campaign that supports the \"Motorist Fueling Choice and Convenience Act\" which would allow New Jersey residents the option to pump their own gas if they wish.",
          "url": "https://philadelphia.cbslocal.com/2022/05/13/new-jersey-gas-stations-lowering-prices-friday-promote-self-service/",
          "urlToImage": "https://philadelphia.cbslocal.com/wp-content/uploads/sites/15116066/2022/05/thumbnail_Image.jpg?w=1280",
          "publishedAt": "2022-05-13T10:37:00Z",
          "content": "CHERRY HILL, N.J. (CBS) More than 75 gas stations across New Jersey are lowering fuel prices on Friday in an effort to promote self-service. Its all part of the Fuel Your Way NJ campaign that support… [+6374 chars]"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "EXCLUSIVE Tesla puts India entry plan on hold after deadlock on tariffs-sources - Reuters",
          "description": "Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> has put on hold plans to sell electric cars in India, abandoned a search for showroom space and reassigned some of its domestic team after failing to secure lower import…",
          "url": "https://www.reuters.com/business/autos-transportation/exclusive-tesla-puts-india-entry-plan-hold-after-deadlock-tariffs-sources-2022-05-13/",
          "urlToImage": "https://www.reuters.com/resizer/_aGVT_YG2XZi9WvLN8WQ5x2ihOI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SOHETNSLQBPEHE6AQ7NBJZ5NSU.jpg",
          "publishedAt": "2022-05-13T10:33:00Z",
          "content": "NEW DELHI, May 13 (Reuters) - Tesla Inc (TSLA.O) has put on hold plans to sell electric cars in India, abandoned a search for showroom space and reassigned some of its domestic team after failing to … [+2826 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Ryan Browne",
          "title": "World's biggest stablecoin regains dollar peg after $3 billion in withdrawals - CNBC",
          "description": "The collapse of another so-called stablecoin called terraUSD had shaken crypto investors' confidence in tether.",
          "url": "https://www.cnbc.com/2022/05/13/tether-usdt-stablecoin-regains-peg-after-3-billion-in-withdrawals.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/106905363-1625143405663-gettyimages-1233100876-CRYPTO_MARKET.jpeg?v=1652436902&w=1920&h=1080",
          "publishedAt": "2022-05-13T10:27:08Z",
          "content": "Tether has long faced questions over whether it has enough assets to justify its peg to the dollar.\r\nTether, the world's largest stablecoin, regained its peg to the dollar after more than $3 billion … [+3213 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "YouTube"
          },
          "author": null,
          "title": "Twitter sacks two top executives ahead of Elon Musk's takeover | Latest English News | WION - WION",
          "description": "As Twitter prepares for Elon Musk's 44 billion dollar acquisition, reports now suggests that Twitter CEO Parag Agrawal is bringing in some major shake-ups wi...",
          "url": "https://www.youtube.com/watch?v=0aq3_hdr6B0",
          "urlToImage": "https://i.ytimg.com/vi/0aq3_hdr6B0/maxresdefault.jpg",
          "publishedAt": "2022-05-13T10:25:31Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "Daily Mail"
          },
          "author": "Walter Finch",
          "title": "Could Bitcoin crash make El Salvador go BUST? Govt has lost $40m amid plans to build crypto city - Daily Mail",
          "description": "The losses - equal to the Central American country's next bond payment - come amid a so-called 'crypto winter' that means markets now doubt El Salvador's ability to service its debts.",
          "url": "https://www.dailymail.co.uk/news/article-10812543/Could-Bitcoin-crash-make-El-Salvador-BUST-Govt-lost-40m-amid-plans-build-crypto-city.html",
          "urlToImage": "https://i.dailymail.co.uk/1s/2022/05/13/10/57766837-0-image-a-17_1652432653510.jpg",
          "publishedAt": "2022-05-13T09:04:38Z",
          "content": "El Salvador's Bitcoin bet could be putting the country in peril as its holdings have already lost $40m in amid a cryptocurrency rout.\r\nThe losses - equal to the Central American country's next bond p… [+7607 chars]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "Christopher Rugaber",
          "title": "Powell: 'Soft' economic landing may be out of Fed's control - The Associated Press - en Español",
          "description": "WASHINGTON (AP) — Federal Reserve Chair Jerome Powell, fresh off winning Senate confirmation for a second term   earlier in the day, acknowledged for the first time Thursday that high inflation and economic weakness overseas could thwart his efforts to avoid …",
          "url": "https://apnews.com/article/economy-inflation-jerome-powell-99491a939e1719044806c12d2c0b9119",
          "urlToImage": "https://storage.googleapis.com/afs-prod/media/7496bde35a9148b0ba6da417fd07f98a/3000.jpeg",
          "publishedAt": "2022-05-13T08:32:16Z",
          "content": "WASHINGTON (AP) Federal Reserve Chair Jerome Powell, fresh off winning Senate confirmation for a second term earlier in the day, acknowledged for the first time Thursday that high inflation and econo… [+2738 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Fox Business"
          },
          "author": "Daniella Genovese",
          "title": "Gas prices: How your driving behavior impacts costs at the pump - Fox Business",
          "description": "Record high gas prices have created stress for motorists across the nation, and many experts expect prices to remain elevated in the near future as demand for summer travel heats up.",
          "url": "https://www.foxbusiness.com/lifestyle/how-your-driving-impacts-gas-use",
          "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/05/0/0/2021-05-11T185229Z_1507457537_MT1USATODAY16061788_RTRMADP_3_CARS-ARE-SEEN-CROWDING-THE-TURN-LANE-INTO-MURPHY-EXPRESS-AT.jpg?ve=1&tl=1",
          "publishedAt": "2022-05-13T06:10:37Z",
          "content": "Record high gas prices have created stress for motorists across the nation, and many experts expect prices to remain elevated in the near future as demand for summer travel heats up. \r\nOn Thursday, t… [+4324 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Post Magazine"
          },
          "author": null,
          "title": "Hong Kong sells US$1 billion to defend currency peg as capital heads for US - South China Morning Post",
          "description": "The city’s de facto central bank stepped into the currency market again on Friday morning, its third intervention in two days to lift the local dollar from its weakest level in more than three years.",
          "url": "https://www.scmp.com/business/banking-finance/article/3177600/hong-kong-sells-us1-billion-two-days-defend-currency-peg",
          "urlToImage": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/canvas/2022/05/13/f94bffba-5484-4968-8da4-6261c95bf6e7_36ae721a.jpg?itok=bYL7WPZ9&v=1652417337",
          "publishedAt": "2022-05-13T04:49:02Z",
          "content": "Published: 12:49pm, 13 May, 2022\r\nUpdated: 12:53pm, 13 May, 2022"
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": null,
          "title": "Bitcoin set for record losing streak as 'stablecoin' collapse crushes crypto - Reuters",
          "description": "Cryptocurrencies nursed large losses on Friday, with bitcoin trading near $30,000 and set for a record losing streak as the collapse of TerraUSD, a so-called stablecoin, rippled through markets.",
          "url": "https://www.reuters.com/markets/europe/bitcoin-eyes-record-losing-streak-stablecoin-collapse-crushes-crypto-2022-05-13/",
          "urlToImage": "https://www.reuters.com/resizer/wqC8arXi4KlPfpjS3PlXL9N9z3Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TLRRMFTHJ5J7RM36TEYY3EQYEA.jpg",
          "publishedAt": "2022-05-13T03:39:00Z",
          "content": "SINGAPORE/HONG KONG, May 13 (Reuters) - Cryptocurrencies nursed large losses on Friday, with bitcoin trading near $30,000 and set for a record losing streak as the collapse of TerraUSD, a so-called s… [+3497 chars]"
        }
      ]
    };
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  render() {
    console.log('in render');
    return (
      <div className='container my-2'>
        <h2>Top Headlines for the Day</h2>
        <div className='row my-2'>
          {this.state.articles.map((element)=> {
            return <div className='col md-3' key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    );
  }
}