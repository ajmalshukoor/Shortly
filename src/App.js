import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;


// import './homedesktop.css'
// import './homemobile.css'

// const Home = () => {
//   return (
//     <div className="home">
//         {/* <img src={`${process.env.PUBLIC_URL}/images/bg-boost-desktop.svg`}></img> */}
//         <div className="firstView">
//         <div className="topbar desktop">
//           <div className="topbarLeft">
//             <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Shortly logo"></img>
//             <span>Features</span>
//             <span>Pricing</span>
//             <span >Resources</span>
//           </div>
//           <div className="topbarRight">
//             <span className='loginBtn'>LogIn</span>
//             <span className="signupBtn">Sign Up</span>
//           </div>
//         </div>
//         <div className="topbar mobile">
//           <div className="topbarContainer">
//             <img src={`${process.env.PUBLIC_URL}/images/logo.svg`} alt="Shortly logo"></img>
//             <ion-icon name="reorder-three-outline" className="topbarNavIcon"></ion-icon>
//           </div>
//         </div>
//         <div className="section1">
//           <div className="section1Left">
//             <h1 className="section1Head">More than just shorter links</h1>
//             <p className="section1Intro">Build your brand's recognition and get detailed insights on how your links are performing.</p>
//             <span className="section1Btn">Get started</span>
//           </div>
//           <div className="section1Right">
//             <img src={`${process.env.PUBLIC_URL}/images/illustration-working.svg`} className="section1Img"></img>
//           </div>
//         </div>
//         <div className="section2">
//             <div className="section2Container">
//               <img src={`${process.env.PUBLIC_URL}/images/bg-shorten-desktop.svg`} className="section2Img"></img>
//               <form className="section2Form">
//                 <div className="section2FormInput">
//                   <input type="url" className="section2Input" placeholder="Shorten a link here..."/>
//                   <button className="section2Btn">Shorten It!</button>
//                 </div>
//                 <p className="section2Err">Please add a link</p>
//               </form>
//             </div>
//         </div>
//         </div>
//         <div className="section3">
//             <div className="section3Container">
//             <div className="section3List">
//               <ul>
//                 <li className="section3EachList">
//                   <p className="section3Link">https://www.frontentmentor.io</p>
//                   <div className="section3Span">
//                     <span className="section3ShortenedLink">https://rel.ink/k4lKyk</span>
//                     <span className="section3CopyBtn">Copy</span>
//                   </div>
//                 </li>
//                 <li className="section3EachList">
//                   <p className="section3Link">https://www.frontentmentor.io</p>
//                   <div className="section3Span">
//                     <span className="section3ShortenedLink">https://rel.ink/k4lKyk</span>
//                     <span className="section3CopyBtn">Copy</span>
//                   </div>                
//                   </li>
//                 <li className="section3EachList">
//                   <p className="section3Link">https://www.frontentmentor.io</p>
//                   <div className="section3Span">
//                     <span className="section3ShortenedLink">https://rel.ink/k4lKyk</span>
//                     <span className="section3CopyBtn">Copy</span>
//                   </div>
//                   </li>
//               </ul>
//             </div>
//             </div>
//             <div className="section3Overview">
//               <h1 className="section3Head">Advanced Statistics</h1>
//               <p className="section3Info">Track how your link are performing across the web with our advanced statistics dashboard</p>
//             </div>
//             <div className="section3Contents">
//               <div className="section3Content content1">
//               <div className="contentImage">
//                   <img src={`${process.env.PUBLIC_URL}/images/icon-brand-recognition.svg`} ></img>
//                 </div>                <div className="contentContainer">
//                   <h2 className="contentHead">Brand Recognition</h2>
//                   <p className="contentInfo">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help intil confidence in your content</p>
//                 </div>
//               </div>
//               <hr></hr>
//               <div className="section3Content content2">
//                 <div className="contentImage">
//                   <img src={`${process.env.PUBLIC_URL}/images/icon-detailed-records.svg`} ></img>
//                 </div>
//                 <div className="contentContainer">
//                   <h2 className="contentHead">Detailed Records</h2>
//                   <p className="contentInfo">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
//                 </div>
//               </div>
//               <hr></hr>
//               <div className="section3Content content3">
//               <div className="contentImage">
//                   <img src={`${process.env.PUBLIC_URL}/images/icon-fully-customizable.svg`} ></img>
//                 </div>                
//                 <div className="contentContainer">
//                   <h2 className="contentHead">Fully Customizable</h2>
//                   <p className="contentInfo">Improve brand awareness and content discoverability through customizable links, superchanging audience engagement.</p>
//                 </div>
//               </div>
//             </div>
//         </div>
//         <div className="section4">
//           <div className="section4Container">
//               <img src={`${process.env.PUBLIC_URL}/images/bg-boost-desktop.svg`} className="section4Img"></img>
//             <div className="section4Content">
//               <h1 className="section4Head">Boost your links today</h1>
//               <span className="section4Btn">Get started</span>
//             </div>
//           </div>
//         </div>
//         <div className="section5">
//           <div className="section5Container">
//           <h1 className="section5Logo">Shortly</h1>
//           <div className="section5Features">
//             <p className="section5Head">Features</p>
//             <div className="section5Spans">
//               <span>Link Shortening</span>
//               <span>Branded Links</span>
//               <span>Analytics</span>
//             </div>
//           </div>
//           <div className="section5Resources">
//           <p className="section5Head">Resources</p>
//             <div className="section5Spans">
//               <span>Blog</span>
//               <span>Developers</span>
//               <span>Support</span>
//             </div>
//           </div>
//           <div className="section5Company">
//           <p className="section5Head">Company</p>
//             <div className="section5Spans">
//               <span>About</span>
//               <span>Our Team</span>
//               <span>Careers</span>
//               <span>Contact</span>
//             </div>
//           </div>
//           <div className="section5Icons">
//             <div className="section5IconsContainer">
//               <img src={`${process.env.PUBLIC_URL}/images/icon-facebook.svg`}></img>
//               <img src={`${process.env.PUBLIC_URL}/images/icon-instagram.svg`}></img>
//               <img src={`${process.env.PUBLIC_URL}/images/icon-pinterest.svg`}></img>
//               <img src={`${process.env.PUBLIC_URL}/images/icon-twitter.svg`}></img>
//             </div>
//           </div>
//           </div>
//         </div>
//     </div>
//   )
// }

// export default Home

// :root{
//   --cyan:hsl(180, 66%, 49%);
//   --dark-violet:hsl(257, 27%, 26%);
//   --red: hsl(0, 87%, 67%);
//   --whitish-gray:  rgb(225, 233, 235);
//   --gray: hsl(0, 0%, 75%);
//   --grayish-violet: hsl(257, 7%, 63%);
//   --very-dark-blue: hsl(255, 11%, 22%);
//   --very-dark-violet: hsl(260, 8%, 14%);
// }

// @media screen and (min-width: 1100px) {

//   .topbar.mobile{
//       display: none;
//   }
  
//   .firstView{
//       height: 105vh;
//       position: relative;
//   }

//   .topbar{
//       display: flex;
//       justify-content: space-between;
//       margin-top: 30px;
//       color: var(--grayish-violet);
//       font-weight: 700;
//   }

//   .topbarLeft{
//       padding-left: 150px;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//   }

//   .topbarLeft img{
//       cursor: pointer;
//   }

//   .topbarLeft span{
//       margin-left: 50px;
//       cursor: pointer;
//   }

//   .topbarLeft span:hover{
//       color: var(--very-dark-violet);
//   }

//   .topbarRight{
//       padding-right: 150px;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//   }

//   .topbarRight span{
//       margin-left: 30px;
//       cursor: pointer;
//   }

//   .loginBtn:hover{
//       color: var(--very-dark-violet);
//   }

//   .signupBtn{
//       font-weight: 700;
//       color: white !important;
//       padding: 7px 15px;
//       border-radius: 20px;
//       background-color: var(--cyan);
//   }

//   .signupBtn:hover{
//       opacity: 0.7;
//   }

//   .section1{
//       display: flex;
//       margin-top: 40px;
//       justify-content: space-between;
//   }

//   .section1Left{
//       width: 600px;
//       padding-left: 150px;
//       margin-top: 50px;
//   }

//   .section1Head{
//       font-size: 4em;
//       line-height: 1.2;
//       color: var(--very-dark-blue);
//   }

//   .section1Intro{
//       margin-top: -40px;
//       margin-bottom: 30px;
//       color: var(--grayish-violet);
//       font-size: 1.2em;
//   }

//   .section1Btn{
//       font-weight: 700;
//       color: white;
//       padding: 7px 20px;
//       border-radius: 20px;
//       background-color: var(--cyan);
//       margin-left: -2px;
//   }

//   .section1Btn:hover{
//       opacity: 0.7;
//       cursor: pointer;
//   }

//   .section1Img{
//       width: 600px;
//       margin-right: -130px;
//   }

//   .section2Container{
//       margin-top: 10px;
//       display: flex;
//       align-items: center;  
//       position: relative;  
//       justify-content: center;
//       position: absolute;
//       bottom: -70px;
//       left: 50%;
//       right: 50%;
//   }

//   .section2Img{
//       height: 130px;
//       background-color: var(--dark-violet);
//       border-radius: 5px;
//       width: 800px;
//   }

//   .section2Form{
//       position: absolute;
//       z-index: 1;
//       width: 750px;
//       margin-left: 20px;
//       margin-top: 5px;
//   }

//   .section2Input{
//       width: 600px;
//       height: 40px;
//       border-radius: 10px;
//   }

//   .section2Input::placeholder{
//       padding-left: 15px;
//       font-size: 18px;
//   }

//   .section2Form.err{
//       margin-top: 35px;
//   }

//   .section2Input.err{
//       border: 2px solid var(--red);
//   }

//   .section2Input.err::placeholder{
//       color: var(--red);
//   }

//   .section2Btn{
//       font-weight: 700;
//       background-color: var(--cyan);
//       color: white;
//       height: 45px;
//       border: none;
//       margin-left: 10px;
//       padding: 7px 15px;
//       border-radius: 10px;
//   }

//   .section2Btn:hover{
//       cursor: pointer;
//       opacity: 0.7;
//   }

//   .section2Err{
//       margin-top: -1px;
//       color: var(--red);
//       font-size: 15px;
//       font-style: italic;
//       font-weight: 300;
//   }

//   .section2Err{
//       display: none;
//   }

//   .section3{
//       background-color: var(--whitish-gray);
//       display: flex;
//       /* justify-content: center; */
//       flex-direction: column;
//       align-items: center;
//   }

//   .section3Container{
//       margin-top: 80px;
//   }

//   .section3List{
//       margin-right: 40px;
//   }

//   .section3EachList{
//       list-style: none;
//       display:flex;
//       align-items: center;
//       background-color: white;
//       margin-bottom:10px;
//       width: 800px;
//       justify-content: space-between;
//       border-radius: 5px;
//   }

//   .section3Link{
//       padding-left: 30px;
//   }

//   .section3Span{
//       padding-right: 30px;
//       cursor: pointer;
//   }

//   .section3ShortenedLink{
//       padding-right: 30px;
//       color: var(--cyan);
//   }

//   .section3CopyBtn{
//       font-weight: 700;
//       color: white !important;
//       padding: 7px 30px;
//       border-radius: 7px;
//       background-color: var(--cyan);
//   }

//   .clicked{
//       background-color: var(--dark-violet);
//   }

//   .section3CopyBtn:hover{
//       opacity: 0.7;
//   }

//   .section3Overview{
//       margin-top: 50px;
//       text-align: center;
//       width: 500px;
//   }

//   .section3Head{
//       color: var(--very-dark-blue)
//   }

//   .section3Info{
//       margin-top: -10px;
//       color: var(--grayish-violet)
//   }

//   .section3Contents{
//       display: flex;
//       justify-content: space-around;
//       width: 80%;
//       margin: 110px 0px;
//   }

//   .section3Content{
//       background-color: white;
//       width: 300px;
//       padding: 35px 30px;
//       border-radius: 5px;
//       position: relative;
//       z-index: 1;
//   }

//   .section3Contents hr{
//       transform: rotate(90deg);
//       background-color: var(--cyan);
//       width: 15px;
//   }

//   .contentImage{
//       position: absolute;
//       background-color: var(--very-dark-violet);
//       padding: 16px;
//       border-radius: 50%;
//       top: -35px;
//   }

//   .content1{
//       margin-bottom: 100px;
//   }
//   .content2{
//       margin-top: 50px;
//       margin-bottom: 50px;
//   }
//   .content3{
//       margin-top: 100px;
//   }

//   .section4{
//       width: 100%;
//   }
//   .section4Container{
//       display: flex;
//       flex-direction: column;
//   }

//   .section4Img{
//       width: 100%;
//       background-color: var(--dark-violet);
//   }

//   .section4ImgContainer{
//       position: relative;
//   }

//   .section4Content{
//       position: absolute;
//       align-self: center;
//       color: white;
//       text-align: center;
//       margin-top:50px;
//   }

//   .section4Btn{
//       font-weight: 700;
//       color: white;
//       padding: 10px 25px;
//       border-radius: 20px;
//       background-color: var(--cyan);
//   }

//   .section5{
//       background-color: var(--very-dark-violet);

//   }

//   .section5Logo,.section5Head{
//       color: white;
//   }

//   .section5Container{
//       display: flex;
//       justify-content: space-around;
//       padding: 35px 20px;
//   }

//   .section5Logo{
//       margin-top: -10px;
//       width: 300px;
//   }

//   .section5Head{
//       font-weight: bold;
//       top: 0px;
//       margin-top: 0px;
//   }

//   .section5Spans{
//       color: var(--grayish-violet);
//       display: flex;
//       flex-direction: column;
//       font-size: 14px;
//       line-height: 2;
//   }

//   .section5Spans span:hover{
//       cursor: pointer;
//       color: var(--cyan);
//   }

//   .section5IconsContainer{
//       display: flex;
//       margin-top: 7px;
//   }

//   .section5IconsContainer img{
//       margin-right: 15px;
//       width: 20px;
//       cursor: pointer;
//   }

//   .section5IconsContainer img:hover{
//       filter: brightness(0.8);
//   }

// }
