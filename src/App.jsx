
import './App.css'
import Header from './components/Header'
import Sidenav from './components/Sidenav'
import Cards from './components/Cards';

function App() {
    const cardsData = [
      {
        imageUrl: 'https://s3-alpha-sig.figma.com/img/7675/ca73/14cee1f0d8a6920e644232a84c3ec1b6?Expires=1699228800&Signature=ebmYEc4UkaQ-9~i~KYqjzrP33U7u8~hGgS5GeoD-cMTOM~WwAKnrpWtakXwGr9Zm-wZNAAiTJmSfyl3PndL9BFgwGt-llC3KbUasWJjKC1BZAuEFlQ90hCfX1TzJ3-25jJkhR8AaIjrN63EYRij0TvA7K6bKiW1HmWYrRr2YhRiV9e5dMohtZRT4KsbhYGpl6qYmq1ErnCYNwFI99a2tIg2UmiAtS4njQZjIqf1KENgD39ajt~z~eTzQFAQY7BISt3w0N0icQdqp-pFixjXo9IP~FqTtrfirzp15-kJIKRqoe~66FgV5OHkspmARhapOJAtDP2k~gDrBCyg85o~HpQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        title: 'Tokyo Train',
        description: '2022 | Action comedy',
      },
      {
        imageUrl: 'https://s3-alpha-sig.figma.com/img/6e2b/871e/b82c9727dbbc90bbcca15bc7e72bda65?Expires=1699228800&Signature=BS7vLcH4XaTGI~6HqvA-hZ4qTCwE~MwQ-wlmW9TsWmgW-Tk7FNtRh-CzsbBrS0Y~D-y0B3j5hBdWLju56eOdr7KFbfA2LBcNsykiwRVGUm0dO4LtkBmVvLevt5olIXsjJsnQW6tlQTv8kXllDUva7ZG5cCYLd4CXFwr1QkPpLxAZjkNsKy1Q6FR9uCzSYBFO4W775UEWBVoFUH978mQSFqtEnHfLVjMkMU-Rq~rJh4G40rBpbcEcQHl7PtFCDwSe3GVF-yU9Yde6eE3kuVNg340fR~vrkVT6oAJNzWiiseS9npxmdXKfqix8KGGJuUEWvjHQp5XP6c~Zt0QPnIr-PQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        title: 'Moonfall',
        description: '2022 | Sci-fi',
      },
      {
        imageUrl: 'https://s3-alpha-sig.figma.com/img/02b7/0148/ee5d3660a0547eadd1b1b2259455bda7?Expires=1699228800&Signature=dFVgfGuwJl7J2-OuQv1plinhPsqSIbT3za3uCXIT-EHfIk7p~EnNRxW4JZQJKC0ehhV4DNhSrv83gfJULC9jD5H-yW4fX~9ZZFLrW-ssGEtqQ4fSq1AXjGN4tkLVMMFUmD3IZHORSgzpAJ1O4SiNDU-C2~OPIad7-T9cPFUHJQ4XjoiAaAMQxBL78QI2euZXrJlbgC9eL1z5g3-HJyBziccGyHgk5ebVtAyqi-kqyQU~2Kz5NRYA8v38Dd749-vnI6gxBXGflksWCo-1DVMumFakkfystANhKccAklN19qURrIinPkUtuZ1eU-x2xJmzW2rzLBjvAPAzVukAf~bhtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        title: 'Life in Paris',
        description: '2023 | Documentary series',
      },
      {
        imageUrl: 'https://s3-alpha-sig.figma.com/img/8cc9/ee83/d62b0e3863962b2891206ea6a0973131?Expires=1699228800&Signature=orhy4M7BbL47bGSAL6HvFTAJ~VpnnR1cnFphytcpxSvAXM~OfiA7MQV3ceA55xnN33glBAltBExFGtI84jd6QQwTmqqeAHEKC12-DENJUoewRZ727NRnqmP-FIZYjZO5a3WotP8K117qdl~Gv90~NNp4OoF1IMUILo6Oa-ltqrJ2XeQ84FjednJ55umb22NnSyGlLmYVAxUoRiKyZ-TZpIKKZUPoLYkUysr-XwHhJ1Su6sDqCO9U5IKWpP20lDPW-RGr86UyzGHGDi0yazDRM2iNbVkUH5xKmCenvbovh~P5Ki5y7nYAG3XCGPzJF3VX0E8G3bgjfKP9qkt8IebSfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        title: 'House of Gucci',
        description: '2021 | Drama',
      },
    ];

return (
  <div>
    <Sidenav />
    <Header />
   
   
            <div >
              <div className='main-container'>
            <h4 className='trending'>Trending</h4>
            </div>
            <div className="card-container">
         {cardsData.map((card, index) => (
           <Cards key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
         ))}
       </div>
       </div>
  </div>
);
}

export default App





