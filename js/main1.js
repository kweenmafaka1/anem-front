async function getResponse(){
  const url = 'http://206.81.25.11/examinations';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Modify the content type if necessary
      // Add any other headers if required
    },
    // Add any data to be sent in the request body
    body: JSON.stringify({
      "full_name": "mukhtarаа",
                    "RBC": 4,
                    "HGB": 100.0,
                    "HCT": 30.0,
                    "MCV": 97,
                    "MCH": 33,
                    "MCHC": 300,
                    "RDW_CV": 13,
                    "RDW_SD": 40,
                    "ferritin": 10,
                    "fe": 8,
                    "transferrin": 4.1,
                    "TIBC": 40,
                    "B9": 7.8,
                    "B12": 198,
                    "total_bilirubin": 21.3,
                    "LDH": 250,
                    "homocystein": 14
    }),
  };

  try {
    let response = await fetch(url, options);
    console.log(response);
    // Process the response here using methods like response.json(), response.text(), etc.
  } catch (error) {
    console.error('Error:', error);
  }
}

document.getElementById('sendDataButton').addEventListener('click', () => {
  getResponse();
