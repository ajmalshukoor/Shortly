import {useState, useReducer, useEffect} from 'react'
import {API_URL} from  '../../variables';
import './homemobile.css'

const HomeMobile = () => {
  const [clicked, setClicked] = useState(false)
  const [urlValue, setUrlValue] = useState('')
  const [shortened, setShortened] = useState({})
  const initialState = {copy1: false, copy2: false, copy3: false}

  const handleClick = () => {
    setClicked(!clicked)
  }

  const reducer = (state, action) => {
    switch(action.type){
      case 'COPY1':
        return {copy1: true, copy2: false, copy3: false}
      case 'COPY2':
        return {copy1: false, copy2: true, copy3: false}
      case 'COPY3':
        return {copy1: false, copy2: false, copy3: true}
      case 'DEFULT':
        return initialState
    }
  }
  const [copyClick, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const postLink = await fetch(API_URL+'shorten?url='+urlValue, {
      method: 'POST',
    })
    const postLinkResponse = await postLink.json()
    const {result} = postLinkResponse
    setShortened(result)
    setUrlValue('')
    dispatch({type: 'DEFULT'})
  }

  const handleCopyClick = async (e) => {
    const element = e.target
    const dataValue = element.dataset.value
    console.log(dataValue)
    if(element.id === 'COPY1'){
      dispatch({type: 'COPY1'})
    }
    if(element.id === 'COPY2'){
      dispatch({type: 'COPY2'})
    }
    if(element.id === 'COPY3'){
      dispatch({type: 'COPY3'})
    }

    try{
      await navigator.clipboard.writeText(dataValue);
    }
    catch(error){
      console.error('Failed to copy text:', error)
    }
  }

  return (
    <div className="home mobile">
        <div className="firstView">
        <div className="topbar">
          <div className="topbarContainer">
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Shortly logo" className="topbarLogo mobile"></img>
            <span className="topbarNavIcon" onClick={handleClick}>{!clicked?<ion-icon name="reorder-three-outline"/>:<ion-icon name="close-outline"/>}</span>
          </div>
        </div>
        <div className="section1">
        <div className={`topbarNavToggle ${!clicked && "hidden"}`}>
              <span>Features</span>
              <span>Resources</span>
              <span>Prices</span>
              <hr></hr>
              <span>LogIn</span>
              <span className="topbarNavSignup">Sign Up</span>
          </div>
          <div className="section1Left">
            <img src={`${process.env.PUBLIC_URL}/images/illustration-working.svg`} className="section1Img"></img>
          </div>
          <div className="section1Right">
          <h1 className="section1Head">More than just shorter links</h1>
            <p className="section1Intro">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <span className="section1Btn">Get started</span>
          </div>
        </div>
        </div>
        <div className="section3">
          <div className="section2">
              <div className="section2Container">
                <img src={`${process.env.PUBLIC_URL}/images/bg-shorten-desktop.svg`} className="section2Img"></img>
                <form className="section2Form" onSubmit={handleSubmit}>
                  <div className="section2FormInput">
                  <input
                   type="url" 
                   className="section2Input"
                   placeholder="Shorten a link here..." 
                   onChange={(e) => setUrlValue(e.target.value)} 
                   value={urlValue} 
                  />                    
                  <button className="section2Btn">Shorten It!</button>
                  </div>
                  <p className="section2Err">Please add a link</p>
                </form>
              </div>
          </div>
          <div className={`section3List ${shortened?.full_short_link ? '' : 'hidden'}`}>
            <ul>
                <li className="section3EachList">
                  <p className="section3Link">{shortened?.full_short_link}</p>
                  <div className="section3Span">
                    <span className="section3ShortenedLink">{shortened?.short_link}</span>
                    <span 
                     className={`section3CopyBtn ${copyClick.copy1 ? 'clicked' : ''}`}
                     data-value={shortened?.short_link}
                     id='COPY1'
                     onClick={handleCopyClick}>
                      {copyClick.copy1 ? 'Copied!' : 'Copy'}
                    </span>
                  </div>
                </li>
                <li className="section3EachList">
                  <p className="section3Link">{shortened?.full_short_link2}</p>
                  <div className="section3Span">
                    <span className="section3ShortenedLink">{shortened?.short_link2}</span>
                    <span 
                     className={`section3CopyBtn ${copyClick.copy2 ? 'clicked' : ''}`} 
                     data-value={shortened?.short_link2} 
                     id='COPY2'
                     onClick={handleCopyClick}>
                     {copyClick.copy2 ? 'Copied!' : 'Copy'}
                    </span>
                  </div>                
                  </li>
                <li className="section3EachList">
                  <p className="section3Link">{shortened?.full_short_link3}</p>
                  <div className="section3Span">
                    <span className="section3ShortenedLink">{shortened?.short_link3}</span>
                    <span 
                     className={`section3CopyBtn ${copyClick.copy3 ? 'clicked' : ''}`} 
                     data-value={shortened?.short_link3} 
                     id='COPY3'
                     onClick={handleCopyClick}>
                    {copyClick.copy3 ? 'Copied!' : 'Copy'}
                   </span>
                  </div>
                  </li>
              </ul>
            </div>
            <div className="section3Overview">
              <h1 className="section3Head">Advanced Statistics</h1>
              <p className="section3Info">Track how your link are performing across the web with our advanced statistics dashboard</p>
            </div>
            <div className="section3Contents">
              <div className="section3Content content1">
              <div className="contentImage">
                  <img src={`${process.env.PUBLIC_URL}/images/icon-brand-recognition.svg`} ></img>
                </div>                <div className="contentContainer">
                  <h2 className="contentHead">Brand Recognition</h2>
                  <p className="contentInfo">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help intil confidence in your content</p>
                </div>
              </div>
              <hr></hr>
              <div className="section3Content content2">
                <div className="contentImage">
                  <img src={`${process.env.PUBLIC_URL}/images/icon-detailed-records.svg`} ></img>
                </div>
                <div className="contentContainer">
                  <h2 className="contentHead">Detailed Records</h2>
                  <p className="contentInfo">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
              </div>
              <hr></hr>
              <div className="section3Content content3">
              <div className="contentImage">
                  <img src={`${process.env.PUBLIC_URL}/images/icon-fully-customizable.svg`} ></img>
                </div>                
                <div className="contentContainer">
                  <h2 className="contentHead">Fully Customizable</h2>
                  <p className="contentInfo">Improve brand awareness and content discoverability through customizable links, superchanging audience engagement.</p>
                </div>
              </div>
            </div>
        </div>
        
        <div className="section4">
          <div className="section4Container">
            <img src={`${process.env.PUBLIC_URL}/images/bg-boost-desktop.svg`} className="section4Img"></img>
            <div className="section4Content">
              <h1 className="section4Head">Boost your links today</h1>
              <span className="section4Btn">Get started</span>
            </div>
          </div>
        </div> 
        <div className="section5">
          <div className="section5Container">
          <h1 className="section5Logo">Shortly</h1>
          <div className="section5Features">
            <p className="section5Head">Features</p>
            <div className="section5Spans">
              <span>Link Shortening</span>
              <span>Branded Links</span>
              <span>Analytics</span>
            </div>
          </div>
          <div className="section5Resources">
          <p className="section5Head">Resources</p>
            <div className="section5Spans">
              <span>Blog</span>
              <span>Developers</span>
              <span>Support</span>
            </div>
          </div>
          <div className="section5Company">
          <p className="section5Head">Company</p>
            <div className="section5Spans">
              <span>About</span>
              <span>Our Team</span>
              <span>Careers</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="section5Icons">
            <div className="section5IconsContainer">
              <img src={`${process.env.PUBLIC_URL}/images/icon-facebook.svg`}></img>
              <img src={`${process.env.PUBLIC_URL}/images/icon-instagram.svg`}></img>
              <img src={`${process.env.PUBLIC_URL}/images/icon-pinterest.svg`}></img>
              <img src={`${process.env.PUBLIC_URL}/images/icon-twitter.svg`}></img>
            </div>
          </div>
          </div>
        </div> 
    </div>
  )
}

export default HomeMobile