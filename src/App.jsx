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

  function handleChangeContact(event) {
    const name = event.target.name;
    let value = event.target.value;

    if(event.target.type === 'checkbox') {
      value = event.target.checked;
    }
    
    setContact({
      ...contact,
      [name]: value
    });
  }

  return (
    <div className="p-8 flex justify-around">
      <form className="bg-gray-200 p-2 rounded w-1/2 mr-4">
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

      <div className="bg-gray-200 p-2 rounded w-1/2 flex flex-col justify-center items-center">
       {
        contact.fname && (
          <p> 
            Hey <strong>{contact.fname}</strong>, Welcome. 
          </p>
        )
      }
       
       {
        contact.email && (
          <p> 
            Thanks for giving us your email <a href={`mailto:${contact.email}`}><u>{contact.email}</u></a>. 
          </p>
        )
       }

       {
        contact.password && (
          <p>Your password is of <strong>{contact.password.length}</strong> characters.</p>
        )
       }


       {
        contact.color && (
            <p>
              Do you know, the Hexacode of your{' '}
              <span style={{ color: contact.color }}>
                Favorite Color is: {contact.color}
              </span>
            </p>
          )
        }

        {
          contact.address && (
            <p>You stay at, {contact.address}, {contact.city}, {contact.state}, {contact.zip}</p>
          )
        }
        
        
        {
          contact.agree ?
            <p>You Agree, That's Great!</p> :
            <p>You DO NOT agree with us yet!</p>
        }
      </div>
    </div>
  );
}

export default App;
