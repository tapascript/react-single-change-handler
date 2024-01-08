

function App() {

  return (
    <>
      <form>
        <div>
          <label htmlFor="fname">Full Name</label>
          <input type="text" name="fname" id="fname" placeholder="Enter Full Name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter Email Address" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter Password" required />
        </div>
        <div>
          <label htmlFor="color">Your Favorite Color</label>
          <input type="color" name="color" id="color" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea name="address" id="address" placeholder="Where Can We Find You?" required />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" placeholder="Enter Your City" required />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <select name="state" id="state" required >
            <option value="">Choose...</option>
            <option value="Solid">Solid</option>
            <option value="Liquid">Liquid</option>
            <option value="Gas">Gas</option>
          </select>  
        </div>
        <div>
          <label htmlFor="zip">Pin/Zip</label>
          <input type="number" name="zip" id="zip" placeholder="Enter Zip/Pin Code" required />
        </div>
        <div>
          <input type="checkbox" name="agree" id="agree" required />
          <label htmlFor="agree">Say, You Agree!</label>
        </div>
      </form>
    </>
  )
}

export default App
