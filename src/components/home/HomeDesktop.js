import './homedesktop.css'

const HomeDesktop = () => {
  return (
    <div className="home desktop">
        <div className="firstView">
        <div className="topbar">
          <div className="topbarLeft">
            <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Shortly logo"></img>
            <span>Features</span>
            <span>Pricing</span>
            <span >Resources</span>
          </div>
          <div className="topbarRight">
            <span className='loginBtn'>LogIn</span>
            <span className="signupBtn">Sign Up</span>
          </div>
        </div>
        <div className="section1">
          <div className="section1Left">
            <h1 className="section1Head">More than just shorter links</h1>
            <p className="section1Intro">Build your brand's recognition and get detailed insights on how your links are performing.</p>
            <span className="section1Btn">Get started</span>
          </div>
          <div className="section1Right">
            <img src={`${process.env.PUBLIC_URL}/images/illustration-working.svg`} className="section1Img"></img>
          </div>
        </div>
        <div className="section2">
            <div className="section2Container">
              <img src={`${process.env.PUBLIC_URL}/images/bg-shorten-desktop.svg`} className="section2Img"></img>
              <form className="section2Form">
                <div className="section2FormInput">
                  <input type="url" className="section2Input" placeholder="Shorten a link here..."/>
                  <button className="section2Btn">Shorten It!</button>
                </div>
                <p className="section2Err">Please add a link</p>
              </form>
            </div>
        </div>
        </div>
        <div className="section3">
            <div className="section3Container">
            <div className="section3List">
              <ul>
                <li className="section3EachList">
                  <p className="section3Link">https://www.frontentmentor.io</p>
                  <div className="section3Span">
                    <span className="section3ShortenedLink">https://rel.ink/k4lKyk</span>
                    <span className="section3CopyBtn">Copy</span>
                  </div>
                </li>
                <li className="section3EachList">
                  <p className="section3Link">https://www.frontentmentor.io</p>
                  <div className="section3Span">
                    <span className="section3ShortenedLink">https://rel.ink/k4lKyk</span>
                    <span className="section3CopyBtn">Copy</span>
                  </div>                
                  </li>
                <li className="section3EachList">
                  <p className="section3Link">https://www.frontentmentor.io</p>
                  <div className="section3Span">
                    <span className="section3ShortenedLink">https://rel.ink/k4lKyk</span>
                    <span className="section3CopyBtn">Copy</span>
                  </div>
                  </li>
              </ul>
            </div>
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

export default HomeDesktop