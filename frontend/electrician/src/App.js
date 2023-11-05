import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    getAllSites()
  }, [])
  const [siteData, setSiteData] = useState([]);

  const getAllSites = () => {
    fetch("http://localhost:5000/api/site", {
      method: "GET",
      headers: {
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSiteData(data)
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  const changeDate = (e, data) => {
    // console.log(new Date(e), data)
    fetch(`http://localhost:5000/api/site/${data._id}`, {
      method: "PUT",
      body: JSON.stringify({InstallationDate: new Date(e)}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then((res) => {
        getAllSites()
      })
  }

  const assignElectrician = (data) => {
    fetch("http://localhost:5000/api/site/updateElectrician", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => {
          getAllSites()
        })
    
    console.log(data)
  }
  
  return (
    <div className="App">
       <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>City</th>
              <th>Phone</th>
              <th>Assigned Electritian</th>
              <th>Installation Date</th>
              <th>Grievance</th>
              {/* <th>Modify Customer</th> // where you'll put the edit button */}
            </tr>
          </thead>
          <tbody>
            {siteData && siteData.map((data, index) => {
              return(
                <tr >
            <td>{data?._id}</td>
            <td>{data?.name}</td>
            <td>{data?.city}</td>
            <td>{data?.phone}</td>
            <td>{data?.AssignedElectritian.length > 0 ?data?.AssignedElectritian[0]?.
electricianName : <button onClick={() => assignElectrician(data)}>Click here</button>}</td>
            <td><input type='date' value={new Date(data?.InstallationDate).toISOString().slice(0, 10)} pattern="\d{4}-\d{2}-\d{2}" onChange={(e) => changeDate(e.target.value, data)} /></td>
            <td>{data?.grievance ? "true": "false"}</td>
            {/* <td><button>asaass</button></td> */}
        </tr>
              )
            })}
          
            {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
            {/* { customers.map(customer => <Customer key={customer.id} customer={customer} />) } */}
          </tbody>
        </table>
    </div>
  );
}

export default App;
