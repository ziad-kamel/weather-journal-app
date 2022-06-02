/* Global Variables */
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = ',us&appid=4d603b23024ee6e8cc19a108ec9d55d1&units=metric';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'/'+ d.getDate()+'/'+ d.getFullYear();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('generate').addEventListener('click', preformaction);

function preformaction(e) {
    // get the zip value entered by the user
    const zip = document.getElementById('zip').value;
    //get the feeling of user
    const feeling = document.getElementById('feelings').value;
    getWether(baseURL, apiKey , zip)
    .then(function (apiData) {
        postData('/return' , {temp:Math.round(apiData.main.temp), feel:feeling, date:newDate});
        updateUI();
    });
};

//function that generate the url that will be send to the API to get the wether info.
const getWether = async (BaseURL , ApiKey , Zipcode)=>{
    const url = BaseURL+Zipcode+ApiKey;
    // console.log(url);
    const res = await fetch(url);
    try {
      const data = await res.json();
    // console.log(data);
    return data;
  }  catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

const postData = async (url = '', data = {})=>{
    // console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        // console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

  const updateUI = async ()=>{
      const request = await fetch('/all');
      try {
          //convert the final data from server to json , update HTML elemnt with the data
          const allReturnedData = await request.json();
          document.getElementById('date').innerHTML = 'Date: '+allReturnedData.date;
          document.getElementById('temp').innerHTML = 'Temperature: '+allReturnedData.temp+" &#8451";
          document.getElementById('content').innerHTML = 'I am feeling: '+allReturnedData.feel;
        } catch (error) {
            console.log("error" , error);
        }
  };