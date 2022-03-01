import './App.css';
import React, { useState } from 'react';
import contactData from "./contacts.json";



function App() {
  let [contacts, setContacts] = useState(contactData.splice(0,5));

  const addButton = () => {
    console.log('click')
    const randomContact = contactData[Math.floor(Math.random() * (contactData.length))]
    setContacts([randomContact, ...contacts])
  }

  const sortPopularity = () => {
    setContacts([...contacts.sort((a,b) => a.popularity < b.popularity ? 1 : -1)])
  }

  const sortName = () => {
    setContacts([...contacts.sort((a,b) => a.name > b.name ? 1 : -1)])
  }

  const deleteMovie = (contactID) => {
    const filteredContact = contacts.filter((contact) => {
       return contact.id !== contactID;
     });
    setContacts(filteredContact);
  };


  return (
    <div className="App">
      <h1>IronContacts </h1>
      <button onClick={addButton}> Add Random Contact </button>
      <button onClick={sortPopularity}> Add Random Contact </button>
      <button onClick={sortName}> Add Random Contact </button>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? "🏆" : ""}</td>
                <td>{contact.wonEmmy ? "🏆" : ""}</td>
                <td>
                  <button onClick={() => deleteMovie(contact.id)}> Delete </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;
