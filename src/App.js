import logo from './assets/logo.svg'
import sponsors from './assets/sponsors.svg'
import paytm from './assets/paytm.svg'
import whatsapp from './assets/whatsapp.png'
import box from './assets/box.png'
import close from './assets/close.png'
import './App.css'
import { useEffect, useRef, useState } from 'react'

function App() {
   const [number, setNumber] = useState('')
   const [flag, setFlag] = useState(false)
   const [visible, setVisible] = useState(false)
   const inputRef = useRef()

   const changeHandler = (e) => {
      let value = e.target.value
      if (!isNaN(value) && value.length <= 10) setNumber(value)
   }

   const clickHandler = () => {
      if (number.length === 10) {
         localStorage.setItem('number', number)
         setVisible(true)
      }
   }

   useEffect(() => {
      inputRef.current.focus()
      if (localStorage.getItem('number') !== null) {
         setVisible(true)
      }
      if (number.length < 10) {
         setFlag(false)
      }
      if (number.length === 10) {
         setFlag(true)
      }
   }, [number])

   return (
      <div className="app-container">
         {/* sponsors part */}
         <div className="sponsors">
            <div className="sponsors-title">
               <img src={sponsors} alt="man matters" width={200} />
            </div>
            <div className="greet-title">congratulation 🥳</div>
         </div>

         {visible === false ? (
            // input box
            <div className="input-container">
               <div className="information">
                  <p>
                     You Have WON Paytm Gift <br /> Card of Rs 200{' '}
                     <strong>
                        for placing the order <br /> on Man Matters
                     </strong>
                  </p>
               </div>
               <div className="box">
                  <input
                     type="text"
                     placeholder="Enter Mobile Number"
                     className="input-box"
                     value={number}
                     onChange={changeHandler}
                     ref={inputRef}
                  />
               </div>
               <div className="condition">
                  Enter the same number used on Man Matters
               </div>
               <div className="box">
                  {flag === false ? (
                     <input
                        className="button-box"
                        type="button"
                        value="Wow! Get my Paytm Gift Card >"
                        disabled
                     />
                  ) : (
                     <input
                        className="button-box active"
                        type="button"
                        value="Wow! Get my Paytm Gift Card >"
                        onClick={clickHandler}
                     />
                  )}
               </div>
               <div className="cosponsors">
                  <small>Powered by</small>
                  <img
                     src={logo}
                     alt="gokwik"
                     height={15}
                     width={15}
                     style={{ marginLeft: '10px' }}
                  />
                  <small style={{ fontWeight: '700' }}>GoKwik</small>
               </div>
            </div>
         ) : (
            // output box
            <div className="questions-body">
               <div className="questions-container">
                  <div className="question">
                     Where will i get the gift card?
                  </div>
                  <div className="questions-box">
                     <img
                        src={whatsapp}
                        alt="whatsapp"
                        style={{ margin: '0px 10px' }}
                     />
                     <div>
                        You will receive it on Whatsapp/SMS on your mobile.
                     </div>
                  </div>
               </div>
               <div className="questions-container">
                  <div className="question">
                     When will i receive the gift card?
                  </div>
                  <div className="questions-box">
                     <img
                        src={box}
                        alt="package"
                        style={{ margin: '0px 10px' }}
                     />
                     <div>
                        Within 48 hours, when your Man Matters order is
                        delivered.
                     </div>
                  </div>
               </div>
               <div className="questions-container">
                  <div className="question">What if i cancel the order?</div>
                  <div className="questions-box">
                     <img
                        src={close}
                        alt="cancel"
                        style={{ margin: '0px 10px' }}
                     />
                     <div>
                        The voucher will not delivered if you cancel the order
                     </div>
                  </div>
               </div>
            </div>
         )}

         {/* card */}
         <div className="gift-container">
            <div className="card-title">
               <img src={paytm} alt="paytm" height={55} />
            </div>
            <div>
               <p className="card-body">
                  Gift
                  <sub className="card-body" style={{ fontSize: '25px' }}>
                     Card
                  </sub>
                  <sup
                     className="card-body"
                     style={{ fontSize: '30px', fontWeight: '700' }}>
                     &#8377;
                  </sup>
                  200
               </p>
            </div>
         </div>
      </div>
   )
}

export default App
