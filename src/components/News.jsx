import React, { Component } from 'react'
import Newsitem from "./Newsitem";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  // Newsarticles=[
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Amir Vera, CNN",
  //   "title": "Rams beat Bengals to win Super Bowl LVI - CNN",
  //   "description": "The Los Angeles Rams defeated the Cincinnati Bengals 23-20 in Super Bowl LVI on Sunday.",
  //   "url": "https://www.cnn.com/2022/02/13/us/rams-vs-bengals-super-bowl-lvi/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220213221331-57-super-bowl-2022-super-tease.jpg",
  //   "publishedAt": "2022-02-14T09:41:00Z",
  //   "content": "(CNN)The Los Angeles Rams defeated the Cincinnati Bengals 23-20 in Super Bowl LVI on Sunday.\r\nThe suspenseful game ended with a fourth-down stop by Rams defensive tackle Aaron Donald to win it all. T… [+2681 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Susannah Cullinane, CNN",
  //   "title": "A vital US-Canadian border crossing reopens after trucker blockade of Ambassador Bridge is cleared - CNN",
  //   "description": "North America's busiest land border crossing has reopened after a nearly weeklong blockade of the Ambassador Bridge by protesters decrying Covid-19 mandates, the company that owns the bridge says.",
  //   "url": "https://www.cnn.com/2022/02/14/americas/canada-truckers-protest-monday/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220214000814-ambassador-bridge-02132022-super-tease.jpg",
  //   "publishedAt": "2022-02-14T09:36:00Z",
  //   "content": "(CNN)North America's busiest land border crossing has reopened after a nearly weeklong blockade of the Ambassador Bridge by protesters decrying Covid-19 mandates, the company that owns the bridge say… [+4859 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "TMZ"
  //   },
  //   "author": "TMZ Staff",
  //   "title": "Kris Jenner Files a Trademark for 'Kardashian Jenner Productions' - TMZ",
  //   "description": "Kris filed legal docs to trademark \"Kardashian Jenner Productions.\"",
  //   "url": "https://www.tmz.com/2022/02/14/kris-jenner-kardashian-jenner-productions-trademark/",
  //   "urlToImage": "https://imagez.tmz.com/image/07/16by9/2022/02/10/0726dcb7e5f4428889071f707ebcdd09_xl.jpg",
  //   "publishedAt": "2022-02-14T09:00:00Z",
  //   "content": "Kris Jenner has traversed the worlds of the Jenners and the Kardashians, and now she wants to blend the 2 for business ... LOTS of business.\r\nKris filed legal docs to trademark \"Kardashian Jenner Pro… [+772 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Simone McCarthy, CNN",
  //   "title": "Russian skating star Kamila Valieva cleared to skate at Beijing Games - CNN",
  //   "description": "Teenage Russian figure skater Kamila Valieva will vie for gold in one of the Olympics' most high profile events Tuesday, after being cleared to compete amid a doping controversy that's cast a shadow over Russia's involvement in the Games.",
  //   "url": "https://www.cnn.com/2022/02/14/sport/russia-kamila-valieva-decision-beijing-olympic-intl-hnk/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220207110220-kamila-valieva-super-tease.jpg",
  //   "publishedAt": "2022-02-14T08:27:00Z",
  //   "content": "Hong Kong (CNN)Teenage Russian figure skater Kamila Valieva willvie for gold in one of the Olympics' most high profile eventsTuesday, after being cleared to compete amid a doping controversy that's c… [+6762 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "INSIDER"
  //   },
  //   "author": "Matthew Loh",
  //   "title": "Former Afghan leader slams US plan to unfreeze funds for 9/11 victims - Insider",
  //   "description": "Former President Hamid Karzai said the money belonged to the Afghan people, calling it \"unjust and unfair\" to withhold the funds from them.",
  //   "url": "https://www.insider.com/afghan-ex-president-slams-us-unfreezing-funds-911-victims-families-2022-2",
  //   "urlToImage": "https://i.insider.com/6209ea8a3b86990018b31de1?width=1200&format=jpeg",
  //   "publishedAt": "2022-02-14T08:25:24Z",
  //   "content": "Afghanistan's former president Hamid Karzai urged the US to reverse its decision to use $3.5 billion in seized Afghan assets to settle claims for the families of victims of the 9/11 terror attacks, s… [+2990 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "YouTube"
  //   },
  //   "author": null,
  //   "title": "Horizon Forbidden West Graphics Comparison: PS4 vs. PS5 - IGN",
  //   "description": "Horizon Forbidden West is almost here, and as we all know, it'll be launching on PlayStation 4 and PlayStation 5. That technically gives us four graphics opt...",
  //   "url": "https://www.youtube.com/watch?v=IMVVs1QTeAw",
  //   "urlToImage": "https://i.ytimg.com/vi/IMVVs1QTeAw/maxresdefault.jpg",
  //   "publishedAt": "2022-02-14T08:01:00Z",
  //   "content": null
  //   },
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Kelly McCleary and Chris Boyette, CNN",
  //   "title": "Ivan Reitman, producer and director of 'Ghostbusters,' has died at 75 - CNN",
  //   "description": "Ivan Reitman, a storied producer and director behind some of Hollywood's biggest comedies, has died, according to the CEO of Sony Pictures Motion Picture Group. He was 75.",
  //   "url": "https://www.cnn.com/2022/02/14/entertainment/ivan-reitman-obit/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220214024506-ivan-reitman-file-11152021-restricted-super-tease.jpg",
  //   "publishedAt": "2022-02-14T07:51:00Z",
  //   "content": null
  //   },
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Xiaofei Xu and Lauren Kent, CNN",
  //   "title": "'Freedom Convoy' protesters enter Paris and block traffic before they're dispersed with tear gas - CNN",
  //   "description": "Protesters in a so-called \"Freedom Convoy\" made it past police checkpoints in central Paris on Saturday, with demonstrators completely blocking traffic in the French capital before they were met with tear gas fired by officers.",
  //   "url": "https://www.cnn.com/2022/02/12/europe/france-freedom-convoy-truckers-protest-intl/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220212112857-01-freedom-convoy-france-0212-super-tease.jpg",
  //   "publishedAt": "2022-02-14T07:31:00Z",
  //   "content": null
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "CNBC"
  //   },
  //   "author": "Elliot Smith",
  //   "title": "European stocks slide 2% on Russia-Ukraine tensions; Germany's DAX down 3.2% - CNBC",
  //   "description": "European markets tumbled on Monday as investors continued to track tensions in Ukraine and remarks from U.S. Fed officials about the interest rate outlook.",
  //   "url": "https://www.cnbc.com/2022/02/14/europe-markets-ukraine-concerns-escalate-fed-remarks-in-focus.html",
  //   "urlToImage": "https://image.cnbcfm.com/api/v1/image/107014421-1644606098503-gettyimages-1238381513-ts1228b2.jpeg?v=1644606143",
  //   "publishedAt": "2022-02-14T07:10:27Z",
  //   "content": "LONDON European markets pulled back sharply on Monday as investors continued to track tensions in Ukraine and remarks from U.S. Federal Reserve officials about the interest rate outlook.The pan-Europ… [+2418 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "fox-news",
  //   "name": "Fox News"
  //   },
  //   "author": "David Rutz",
  //   "title": "Montage: President Biden snaps at reporters - Fox News",
  //   "description": "President Biden's more hostile moments with the media since taking office.",
  //   "url": "https://www.foxnews.com/media/montage-president-biden-snaps-reporters",
  //   "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/01/Joe-Biden-COVID-19.jpg",
  //   "publishedAt": "2022-02-14T07:00:21Z",
  //   "content": "President Biden's habit for jawing with reporters continued last week as he called NBC's Lester Holt a \"wise guy\" for pointing out his past claims that inflation would be \"temporary.\"\r\nWhile Biden's … [+2616 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "ESPN"
  //   },
  //   "author": "Dan Graziano",
  //   "title": "Rams' Cooper Kupp delivers again - Amid the team's 'all-in' moves, the star third-round receiver leads them to victory, wins Super Bowl MVP - ESPN",
  //   "description": "Yes, the Rams went \"all-in\" with big trades and signings. But don't forget about foundational players -- including the third-round pick who caught the Super Bowl's game-winning TD.",
  //   "url": "https://www.espn.com/nfl/story/_/id/33284132/rams-cooper-kupp-delivers-again-amid-team-all-moves-star-third-round-receiver-leads-victory-wins-super-bowl-mvp",
  //   "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0214%2Fr974177_1296x729_16%2D9.jpg",
  //   "publishedAt": "2022-02-14T06:56:28Z",
  //   "content": "INGLEWOOD, Calif. -- The story we've been told about the Los Angeles Rams is that they \"went all-in\" to win this particular Super Bowl. That they were willing to mortgage their future for it. That wh… [+9818 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "Marvel Entertainment"
  //   },
  //   "author": "Rachel Paige",
  //   "title": "New 'Moon Knight' Spot and Poster Debut During the Big Game - Marvel Entertainment",
  //   "description": "Enter the chaos on March 30, exclusively on Disney+.",
  //   "url": "https://www.marvel.com/articles/tv-shows/new-moon-knight-trailer-poster-big-game",
  //   "urlToImage": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/maxresdefault_47.jpg",
  //   "publishedAt": "2022-02-14T05:58:06Z",
  //   "content": "Today, during the Big Game, an action-packed TV spot offered viewers a thrilling look at Marvel Studios' Moon Knight an original series from Marvel Studios exclusively for Disney+. Disney+ also unvei… [+983 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "independent",
  //   "name": "Independent"
  //   },
  //   "author": "Maroosha Muzaffar",
  //   "title": "Trump news - live: Ex-president used Secret Service agent’s phone to call Melania after Stormy Daniels report - The Independent",
  //   "description": "Trump news today",
  //   "url": "https://www.independent.co.uk/news/world/americas/us-politics/trump-news-today-clinton-mar-a-lago-b2014449.html",
  //   "urlToImage": "https://static.independent.co.uk/2022/02/10/14/newFile-2.jpg?quality=75&width=1200&auto=webp",
  //   "publishedAt": "2022-02-14T05:23:31Z",
  //   "content": "As a US congressional committee prepares to investigate Donald Trumps handling of administration documents after 15 boxes of records were transferred from his Mar-a-Lago residence.\r\nThe former presid… [+8305 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "reuters",
  //   "name": "Reuters"
  //   },
  //   "author": null,
  //   "title": "Oil prices climb more than 1% to 7-year highs on supply disruption fears - Reuters",
  //   "description": "Oil prices on Monday hit their highest in more than seven years on fears that a possible invasion of Ukraine by Russia could trigger U.S. and European sanctions that would disrupt exports from the world's top producer in an already tight market.",
  //   "url": "https://www.reuters.com/business/energy/oil-prices-clamber-towards-7-year-highs-russia-ukraine-tensions-2022-02-14/",
  //   "urlToImage": "https://www.reuters.com/resizer/raaUsqoNitFnNFa6xHwCcq5X54E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SJQYKQ4NHZLTNNDJNUFKSDHZ6U.jpg",
  //   "publishedAt": "2022-02-14T05:19:00Z",
  //   "content": "SINGAPORE, Feb 14 (Reuters) - Oil prices on Monday hit their highest in more than seven years on fears that a possible invasion of Ukraine by Russia could trigger U.S. and European sanctions that wou… [+2658 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "cnn",
  //   "name": "CNN"
  //   },
  //   "author": "Story by Reuters",
  //   "title": "Australia's Crown Resorts backs $6.3 billion Blackstone bid - CNN",
  //   "description": "Crown Resorts backed a $6.3 billion buyout from private equity giant Blackstone on Monday, giving billionaire James Packer an exit route from the Australian casino firm beset by scandals and regulatory setbacks.",
  //   "url": "https://www.cnn.com/2022/02/14/business/australia-crown-resorts-backs-blackstone-takeover/index.html",
  //   "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220213232640-crown-resort-australia-02142022-super-tease.jpg",
  //   "publishedAt": "2022-02-14T05:14:00Z",
  //   "content": "Crown Resorts backed a $6.3 billion buyout from private equity giant Blackstone on Monday, giving billionaire James Packer an exit route from the Australian casino firm beset by scandals and regulato… [+3655 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "New York Times"
  //   },
  //   "author": "Jeré Longman",
  //   "title": "Ice Dancing: See Photo Highlights of the Medal Routines - The New York Times",
  //   "description": "Gabriella Papadakis and Guillaume Cizeron of France, the four-time world champions, won the gold medal for the ice dance after falling just short at the 2018 Olympics.",
  //   "url": "https://www.nytimes.com/live/2022/02/13/sports/ice-dancing-olympics",
  //   "urlToImage": "https://static01.nyt.com/images/2022/02/14/multimedia/14OLY-blog-icedance-header/14OLY-blog-icedance-header-facebookJumbo.jpg",
  //   "publishedAt": "2022-02-14T04:37:00Z",
  //   "content": "With a whispery, lyrical performance, Gabriella Papadakis and Guillaume Cizeron of France won the ice dancing competition on Monday at the Beijing Olympics, skating with such flowing precision and un… [+4162 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "KOB"
  //   },
  //   "author": "Tommy Lopez",
  //   "title": "APD: Suspect in custody following multiple stabbings - KOB",
  //   "description": "",
  //   "url": "https://www.kob.com/albuquerque-news/apd-investigate-multiple-stabbing-incidents-in-se-albuquerque/6392136/",
  //   "urlToImage": "https://www.kob.com/kobtvimages/repository/2022-02/APD_Suspect_in_custody_following_multiple_stabbings-syndImport-112440.jpg",
  //   "publishedAt": "2022-02-14T04:30:00Z",
  //   "content": "All 11 victims are alive and stable after initially being taken to four hospitals, Gallegos said, but some have been in critical condition. Some have since left the hospital. \r\nThe victims include so… [+1229 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "KMBC Kansas City"
  //   },
  //   "author": "KMBC 9 News Staff",
  //   "title": "'No survivors' after fiery plane crash at Johnson County Executive Airport - KMBC Kansas City",
  //   "description": "Area expected to remain closed into Monday",
  //   "url": "https://www.kmbc.com/article/johnson-county-kansas-executive-airport-plane-crash-fire/39063309",
  //   "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/joco-crash-png-1644774047.png?crop=0.876xw:0.807xh;0,0&resize=1200:*",
  //   "publishedAt": "2022-02-14T03:24:00Z",
  //   "content": "OLATHE, Kan. —Authorities in Olathe, Kansas, are investigating a serious plane crash and fire at the Johnson County Executive Airport that happened around 10:30 Sunday morning.\r\n Officials with the O… [+557 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": null,
  //   "name": "CNBC"
  //   },
  //   "author": "Michael Wayland",
  //   "title": "Chevrolet reboots, updates 'The Sopranos' intro for surprise Super Bowl ad - CNBC",
  //   "description": "The ad, called \"New Generation,\" aired during the first quarter of the game without the General Motors brand releasing any previews or teasers ahead of time.",
  //   "url": "https://www.cnbc.com/2022/02/13/chevrolet-reboots-updates-the-sopranos-intro-for-super-bowl-ad.html",
  //   "urlToImage": "https://image.cnbcfm.com/api/v1/image/107014696-1644792099261-ChevyNewGeneration_01.jpg?v=1644792245",
  //   "publishedAt": "2022-02-14T03:16:00Z",
  //   "content": "Chevrolet rebooted and updated the introduction sequence of the HBO show \"The Sopranos\" for a surprise Super Bowl ad for its new electric Silverado pickup truck.\r\nThe 60-second ad, called \"New Genera… [+2078 chars]"
  //   },
  //   {
  //   "source": {
  //   "id": "associated-press",
  //   "name": "Associated Press"
  //   },
  //   "author": "Mark Stevenson",
  //   "title": "US suspends Mexican avocado imports on eve of Super Bowl - Associated Press",
  //   "description": "MEXICO CITY (AP) — Mexico has acknowledged that the U.S. government has suspended all imports of Mexican avocados after a U.S. plant safety inspector in Mexico received a threat.  The surprise, temporary suspension was confirmed late Saturday on the eve of th…",
  //   "url": "https://apnews.com/article/business-mexico-global-trade-agriculture-drug-cartels-7c6bb7ef83bada375692ba890c413ce5",
  //   "urlToImage": "https://storage.googleapis.com/afs-prod/media/20b58601a70344ccb0f8a1f341ee5872/3000.jpeg",
  //   "publishedAt": "2022-02-14T03:00:00Z",
  //   "content": "MEXICO CITY (AP) Mexico has acknowledged that the U.S. government has suspended all imports of Mexican avocados after a U.S. plant safety inspector in Mexico received a threat. \r\nThe surprise, tempor… [+5125 chars]"
  //   }
  //   ]
  // constructor()
  //   {
  //     super();
  //     this.state={
  //       articles:this.Newsarticles
  //     }
  //   }
  static defaultProps = {
    country: 'in',
    pageSize:8,
    category:'general'
  }
  static propTypes = {
    country: PropTypes.string,
    category:PropTypes.string
  }
   capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props)
    {
      super(props);
      this.state={
        articles:[],
        loading:false,
        page:1,
        totalResults:0
      }
      document.title=`${this.capitalizeFirstLetter(this.props.category)} -DailyNews`;
    }

 async componentDidMount()
  {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=553be3cc4dea47b198fc6ded9fb77b5d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData =await data.json();
    // console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false
    
    })
  }

  handlePrevClick =async ()  =>
  {
    console.log("Prev");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=553be3cc4dea47b198fc6ded9fb77b5d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData =await data.json();
    // console.log(parsedData);
    this.setState({
      page:this.state.page -1,
      articles:parsedData.articles,
      loading:false
    })
  }
  handleNextClick = async() =>
  {
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=553be3cc4dea47b198fc6ded9fb77b5d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData =await data.json();
    // console.log(parsedData);
    this.setState({
      page:this.state.page + 1,
      articles:parsedData.articles,
      loading:false
    })
    }
  }
  fetchData = async()=>
  {
    this.setState({page:this.state.page + 1})
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=553be3cc4dea47b198fc6ded9fb77b5d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parsedData =await data.json();
    this.setState({articles:this.state.articles.concat(parsedData.articles),
      totalResults:parsedData.totalResults,
      loading:false
    
    })
  }

  render() {
    return (
        
      <>
        {/* <div className='container my-3'> */}
              <h2 className='text-center my-3'>DailyNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
              {this.state.loading && <Spinner/>}
              <InfiniteScroll
                dataLength={this.state.articles.length} //This is important field to render the next data
                next={this.fetchData}
                hasMore={this.state.articles.length!==this.state.totalResults}
                loader={<Spinner/>}
                >
                <div className='container'>
                  <div className='row my-5'>  
                    {this.state.articles.map((element)=>
                    {
                      return <div className='col-md-4' key={element.url}>
                      <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,58):""} imgurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                      </div>
                    })}
                    </div> 
                </div>  
                  
              </InfiniteScroll>
         
        {/* </div> */}
        </>
    
        
    )
  }
}

export default News