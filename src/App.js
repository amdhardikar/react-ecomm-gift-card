import logo from './assetes/logo.svg'
import sponsors from './assetes/sponsors.svg'
import paytm from './assetes/paytm.svg'

const styles = {
   appContainer: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
   },
   sponsors: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      height: '40%',
      backgroundColor: '#222d3a',
      color: 'white',
      textAlign: 'center',
   },
   sponsorsTitle: {
      marginTop: '50px',
      fontSize: '40px',
      fontWeight: '700',
   },
   greetTitle: {
      fontSize: '35px',
      fontWeight: '600',
      textTransform: 'capitalize',
      color: '#d41fb5',
      marginTop: '10px',
   },
   inputContainer: {
      height: '60%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
   },
   information: {
      textAlign: 'center',
      marginTop: '150px',
   },
   box: {
      marginTop: '20px',
      width: '330px',
      height: '60px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   buttonBox: {
      backgroundColor: '#c9c9c9',
      border: 'none',
      borderRadius: '50px',
      width: '100%',
      margin: '0',
      fontSize: '17px',
      padding: '15px 20px',
      textAlign: 'center',
      height: '100%',
   },
   inputBox: {
      backgroundColor: '#f5f6f9',
      border: 'none',
      borderRadius: '50px',
      height: 'calc(100% - 34px)',
      width: 'calc(100% - 40px)',
      margin: '0',
      fontSize: '20px',
      letterSpacing: '2px',
      padding: '15px 20px',
      textAlign: 'center',
   },
   condition: {
      fontSize: '11px',
   },
   cosponsors: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '30px',
   },
   giftContainer: {
      position: 'absolute',
      padding: '30px 30px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: '40px',
      top: '40%',
      left: '50%',
      width: '300px',
      transform: 'translate(-50%, -50%)',
      boxShadow: '0px 10px 10px 0px #edededb7',
   },
   cardBody: {
      fontFamily: `'Fugaz One', 'cursive'`,
      color: '#fc664d',
      fontSize: '50px',
   },
}

function App() {
   return (
      <div style={styles.appContainer}>
         <div style={styles.sponsors}>
            <div style={styles.sponsorsTitle}>
               <img src={sponsors} alt="man matters" width={200} />
            </div>
            <div style={styles.greetTitle}>congratulation 🥳</div>
         </div>
         <div style={styles.inputContainer}>
            <div style={styles.information}>
               <p>
                  You Have WON Paytm Gift <br /> Card of Rs 200{' '}
                  <strong>
                     for placing the order <br /> on Man Matters
                  </strong>
               </p>
            </div>
            <div style={styles.box}>
               <input
                  type="text"
                  maxLength={10}
                  min={7000000000}
                  placeholder="Enter Mobile Number"
                  style={styles.inputBox}
               />
            </div>
            <div style={styles.condition}>
               Enter the same number used on Man Matters
            </div>
            <div style={styles.box}>
               <input
                  style={styles.buttonBox}
                  type="button"
                  value="Wow! Get my Paytm Gift Card"
               />
            </div>
            <div style={styles.cosponsors}>
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
         <div style={styles.giftContainer}>
            <div style={styles.cardTitle}>
               <img src={paytm} alt="paytm" height={50}/>
            </div>
            <div>
               <p style={styles.cardBody}>
                  Gift{' '}
                  <small style={{ ...styles.cardBody, fontSize: '25px' }}>
                     Card
                  </small>{' '}
                  200
               </p>
            </div>
         </div>
      </div>
   )
}

export default App
