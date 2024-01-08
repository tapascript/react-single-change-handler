import { useState } from 'react';

function App() {
  const [contact, setContact] = useState({  
    fname: '',
    email: '',
    password: '',
    address: '',
    color: '',
    city: '',
    state: '',
    zip: '',
    agree: false,
  });

  function handleChangeContact() {
    console.log('Contact changed');
  }

  return (
    <div className="p-8">
      <form>
        <div className="my-2">
          <label htmlFor="fname" className="mx-4">
            Full Name
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="Enter Full Name"
            className="border border-gray-400 rounded p-1"
            onChange={handleChangeContact}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="email" className="mx-4">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email Address"
            className="border border-gray-400 rounded p-1"
            onChange={handleChangeContact}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="password" className="mx-4">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            className="border border-gray-400 rounded p-1"
            onChange={handleChangeContact}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="color" className="mx-4">
            Your Favorite Color
          </label>
          <input type="color" name="color" id="color" onChange={handleChangeContact} />
        </div>
        <div className="my-2">
          <label htmlFor="address" className="mx-4">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            placeholder="Where Can We Find You?"
            className="border border-gray-400 rounded p-1"
            onChange={handleChangeContact}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="city" className="mx-4">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter Your City"
            className="border border-gray-400 rounded p-1"
            onChange={handleChangeContact}
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="state" className="mx-4">
            State
          </label>
          <select name="state" id="state" className="border border-gray-400 rounded p-1" onChange={handleChangeContact} required>
            <option value="">Choose...</option>
            <option value="Solid">Solid</option>
            <option value="Liquid">Liquid</option>
            <option value="Gas">Gas</option>
          </select>
        </div>
        <div className="my-2">
          <label htmlFor="zip" className="mx-4">
            Pin/Zip
          </label>
          <input
            type="number"
            name="zip"
            id="zip"
            placeholder="Enter Zip/Pin Code"
            className="border border-gray-400 rounded p-1"
            onChange={handleChangeContact}
            required
          />
        </div>
        <div className="my-2">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            className="mx-4"
            onChange={handleChangeContact}
            required
          />
          <label htmlFor="agree">Say, You Agree!</label>
        </div>
      </form>
    </div>
  );
}

export default App;
