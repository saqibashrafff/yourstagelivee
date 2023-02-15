// import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './page.module.scss'

import notify from "../public/933801041577437009-512.png"

// import 'bootstrap/dist/css/bootstrap.css'

function Home(){

  
  return (<>
    <section className={styles.profile_section}>

      <div className={`row ${styles.profile_heading_row}`}>

        <div className={`col-lg-6 ${styles.profile_heading_col1}`}>
          <h5 className={`${styles.profile_heading}`}>Your Profile</h5>
        </div>

        <div className={`col-lg-6 ${styles.profile_heading_col2}`}>
          <img className={styles.notify_Img1} src='\Bell.svg'/>
          <img className={styles.notify_Img2} src='\Five.svg'></img>

        <div className={`dropdown ${styles.dropdownDiv} text-light`}>
          <div className="dropdown-toggle " data-bs-toggle="dropdown"  aria-expanded="false">
            <img src='\placeholder.svg' className='rounded-2' height={"25px"} width={"25px"} ></img>
            <span className='text-light'>Stargoldan</span>
          </div>
          <div className="dropdown-menu" >
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
    </div>
  </div>

  {/* Information Sections */}

      <div className={`row ${styles.Information_row}`}>
        
        <div className={`col-lg-6 ${styles.Information_row_col1}`}>
          <div className={`row ${styles.Personal_info_InnerRow}`}>

            <div className={`col-lg-6 ps-3 ${styles.Personal_info_col}`}>
              <p>Personal info</p>
            </div>

            <div className={`col-lg-6 ${styles.Change_password_col}`}>
              <img src="\Lock.svg" width={"11px"} ></img>
              <span className=''>Change Password</span>
            </div>

            {/* Full Name Html */}

            <div className={`col-lg-3 ps-3 ${styles.Personal_details_div}`}>
              <span>Full Name</span>
            </div>

            <div className={`col-lg-9 ${styles.Name_input_div}`}>
              <input type={"text"} value={"Dianne"} ></input>
              <input type={"text"} value={"Russell"} ></input>
            </div>

            {/* Nick Name Html */}

            <div className={`col-lg-3 ps-3 ${styles.Personal_details_div}`}>
              <span>Nick Name</span>
            </div>

            <div className={`col-lg-9 ${styles.Nickname_input_div}`}>
              <input type={"text"} value={"Stargoldan"} ></input>
            </div>

            {/* Email Html */}

            <div className={`col-lg-3 ps-3 ${styles.Personal_details_div}`}>
              <span>Email</span>
            </div>

            <div className={`col-lg-9 ${styles.Nickname_input_div}`}>
              <input type={"text"} value={"Starg@gmail.com"} ></input>
            </div>

            {/* Address Html */}

            <div className={`col-lg-3 ps-3 ${styles.Personal_details_div}`}>
              <span>Address</span>
            </div>

            <div className={`col-lg-9 ${styles.Nickname_input_div}`}>
              <input type={"text"} value={"5240 Glen Eagles Ln, Las Vegas, NV 89108, USA"} ></input>
            </div>
          </div> 

        </div>

        <div className={`col-lg-6 ${styles.Information_row_col2}`}>
          <div className={`row  ${styles.Social_Link_InnerRow}`}>

            <div className={`col-lg-6 ps-3  ${styles.Social_Inner_col1}`}>
              <p>Social links</p>
            </div>

            <div className={`col-lg-6 ${styles.AddLink_Inner_col2}`}>
              <img className={` ${styles.AddLink_img1}`} src='\Round.svg' ></img>
              <img className={` ${styles.AddLink_img2}`} src='\vertical.svg' ></img>
              <img className={` ${styles.AddLink_img3}`} src='\horizontal.svg' ></img>
              <span>Add link</span>
            </div>

            {/* Website Html */}

            <div className={`col-lg-1 ps-3 pe-0  ${styles.facebook_icons_div}`}>
              <div >
              <img src='\Vector.svg' style={{width: "45%"}}></img>
              </div>
            </div>
            {/* style={{width: "125%", textAlign: "center", height:"38px", paddingTop: "5px" }} */}

            <div className={`col-lg-10 pe-0 ${styles.Website_input_div} `}>
              <input type={"text"} placeholder="Website" ></input>
            </div>

            <div className={`col-lg-1 ${styles.Delete_icon_div}`}>
              <img src='\Delete.svg' ></img>
            </div>

            {/* <div className={`col-lg-1 ps-3 pe-0 py-0 ${styles.Social_icons_div}`}>
              <img src='\Vector.svg' ></img>
            </div>

            <div className={`col-lg-10 pe-0 ${styles.Website_input_div} `}>
              <input type={"text"} placeholder="Website" ></input>
            </div>

            <div className={`col-lg-1 pt-2`}>
              <img src='\Delete.svg' height={"53%"}></img>
            </div> */}

            {/* Facebook Html */}

            <div className={`col-lg-1 ps-3 pe-0  ${styles.facebook_icons_div}`}>
              <div >
              <img src='\facebook.svg' style={{width: "26%"}} ></img>
              </div>
            </div>
            {/* style={{width: "125%", textAlign: "center", height:"38px", paddingTop: "5px" }} */}

            <div className={`col-lg-10 pe-0 ${styles.Website_input_div} `}>
              <input type={"text"} placeholder="Facebook" ></input>
            </div>

            <div className={`col-lg-1  ${styles.Delete_icon_div}`}>
              <img src='\Delete.svg' ></img>
            </div>

            {/* Instagram */}

            <div className={`col-lg-1 ps-3 pe-0 ${styles.facebook_icons_div}`}>
              <div >
              <img className={` ${styles.InstaIcon_img1}`} src='\Instagram.svg' ></img>
              <img className={` ${styles.InstaIcon_img2}`} src="\Inner_round.svg" ></img>
              <img className={` ${styles.InstaIcon_img3}`} src='\small_round.svg' ></img>
              </div>
            </div>
            {/* style={{width: "125%", textAlign: "center", height:"38px", paddingTop: "5px" }} */}

            <div className={`col-lg-10 pe-0 ${styles.Website_input_div} `}>
              <input type={"text"} placeholder="Instagram" ></input>
            </div>

            <div className={`col-lg-1 ${styles.Delete_icon_div}`}>
              <img src='\Delete.svg' ></img>
            </div>

            {/* Twitter Html */}

            <div className={`col-lg-1 ps-3 pe-0 ${styles.facebook_icons_div}`}>
              <div >
              <img src='\Twitter.svg' style={{width: "45%"}}></img>
              </div>
            </div>
            {/* style={{width: "125%", textAlign: "center", height:"38px", paddingTop: "5px" }} */}

            <div className={`col-lg-10 pe-0 ${styles.Website_input_div} `}>
              <input type={"text"} placeholder="Twitter" ></input>
            </div>

            <div className={`col-lg-1  ${styles.Delete_icon_div}`}>
              <img src='\Delete.svg' ></img>
            </div>


          </div>
        </div>

        <div className={`col-lg-6 mt-3 ${styles.Information_row_col3}`}>
          <div className={`row  ${styles.Payment_method_InnerRow}`}>

            <div className={`col-lg-6 ps-3 `}>
              <p className='mb-2'>Payment method</p>
            </div>

            <div className={`col-lg-6  ${styles.Payment_Inner_col2}`}>

              <img className={` ${styles.AddPayment_img1}`} src='\Round.svg' ></img>
              <img className={` ${styles.AddPayment_img2}`} src='\vertical.svg' ></img>
              <img className={` ${styles.AddPayment_img3}`} src='\horizontal.svg' ></img>
              <span>Add Payment method</span>

            </div>

            {/* Radio Buttons */}

            <div className={`col-lg-11 pe-0 ps-3`}>
              <div className={`${styles.Payment_input_div}`}>
              <input type={"radio"} ></input>
              <label>Bank transfer</label>
              </div>
            </div>

            <div className={`col-lg-1 ${styles.Payment_icon_div} `}>
              <img src='\Delete.svg'></img>
            </div>

            {/* PayPal */}

            <div className={`col-lg-11 pe-0 ps-3`}>
              <div className={`${styles.Payment_input_div}`}>
              <input type={"radio"} ></input>
              <label>PayPal</label>
              </div>
            </div>

            <div className={`col-lg-1 ${styles.Payment_icon_div} `}>
              <img src='\Delete.svg'></img>
            </div>

            {/* Credit Card */}

            <div className={`col-lg-11 pe-0 ps-3`}>
              <div className={` ${styles.Payment_input_div}`}>
              <input type={"radio"} ></input>
              <label>Credit/Debit card (*5864)</label>
              </div>
            </div>

            <div className={`col-lg-1 ${styles.Payment_icon_div} `}>
              <img src='\Delete.svg'></img>
            </div>

          </div>
        </div>

        {/* Logo Html */}

        <div className={`col-lg-6 mt-3`}>
          <div className={`row ${styles.Logo_InnerRow}`}>

            <div className={`col-lg-6 ps-3`}>
              <p>Logo</p>
            </div>

            <div className={`col-lg-6 ${styles.Logo_Inner_col2}`}>
              <input type={"checkbox"} ></input>
              <span>Yes, I own the right to this image</span>
            </div>

            <div className='col-lg-12 ps-3 mt-1'>
              <div className={` ${styles.Image_Upload_div}`}>
                <img className={` ${styles.Person_image}`} src='\Ellipse 59.svg'  ></img>
                <img className='ms-4 me-2' width={"18px"} src='\Cloud.svg' ></img>
                <img className={` ${styles.Cloud_arrow_img}`} src="\Arrow.svg" ></img>
                <span >Upload new image</span>
              </div>
            </div>

            <div className={`col-lg-12 ps-3 ${styles.Image_owner_div}`}>
              <p>Name of the image owner</p>
              <input type={"text"} placeholder="Enter name of the image owner" ></input>
            </div>
          </div>
        </div>

        {/* ${styles.AddLink_Inner_col2} */}
      </div>

    </section></>
  );
}

export default Home;

// const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{' '}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//         <div className={styles.thirteen}>
//           <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
//         </div>
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>Explore the Next.js 13 playground.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={inter.className}>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p className={inter.className}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   )
// }
