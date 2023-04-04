import { useState } from "react";
import contactsFromJson from "./contacts.json";
import "./App.css";

function App() {
  const [contactsArr, setContactsArr] = useState(contactsFromJson);

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <table  >
      <tr>
              <th>Picture </th>
              <th> Name</th>
              <th> Popularity </th>
              <th> Won an Oscar </th>
              <th>Won an Emmy </th>
            </tr>
            
      {contactsArr.map((contactObj) => {
        return (
       
           
            <tr key={contactObj.id}>
              <td>
                <img src={contactObj.pictureUrl} alt={contactObj.name} className="image" />
              </td>
              <td>
                <p>{contactObj.name}</p>
              </td>
              <td>
                <p>{contactObj.popularity}</p>
              </td>
              <td>
                   { contactObj.wonOscar ? <p> 🏆 </p> : <p> </p>}
              </td>
              { contactObj.wonEmmy ? <p> 🏆 </p> : <p> </p>}
              <td>

              </td>
            </tr>
          
        );
      })}
      </table>
    </div>
  );
}

export default App;
