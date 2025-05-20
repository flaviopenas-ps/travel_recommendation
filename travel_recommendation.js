const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function clearCondition()
{
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    resultDiv.style.display="none";
}


function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    resultDiv.style.display="block";
    fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json')
      .then(response => response.json())
      .then(data => {
            const countries = data.countries;

            for (let country of countries) {
                if (country.name.toLowerCase().includes(input) || "countries".includes(input) || "country".includes(input)) {
                    resultDiv.innerHTML += `<h2>${country.name}</h2>`;

                    // Display cities in the country
                    for (let city of country.cities) {
                        resultDiv.innerHTML += `
                            <h3>${city.name}</h3>
                            <img src="images/${city.imageUrl}" class="image_search" alt="City Image">
                            <p>${city.description}</p>
                            <br>
                        `;
                    }

                    return; // Exit the function if country is found
                }
            }

            const temples = data.temples;

            for (let temple of temples) {
                if (temple.name.toLowerCase().includes(input) || "temples".includes(input)) {
                    resultDiv.innerHTML += `<h2>${temple.name}</h2>`;

                    resultDiv.innerHTML += `
                            <h3>${temple.name}</h3>
                            <img src="images/${temple.imageUrl}" class="image_search" alt="City Image">
                            <p>${temple.description}</p>
                            <br>
                        `; // Exit the function if country is found
                }
            }

            const beaches = data.beaches;

            for (let beach of beaches) {
                if (beach.name.toLowerCase().includes(input) || "beaches".includes(input)) {
                    resultDiv.innerHTML += `<h2>${beach.name}</h2>`;

                    resultDiv.innerHTML += `
                            <h3>${beach.name}</h3>
                            <img src="images/${beach.imageUrl}" class="image_search" alt="City Image">
                            <p>${beach.description}</p>
                            <br>
                        `; // Exit the function if country is found
                }
            }


        })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
}

btnSearch.addEventListener('click', searchCondition);
btnClear.addEventListener('click', clearCondition);