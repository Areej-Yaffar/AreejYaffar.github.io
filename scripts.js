document.getElementById('fetch-data').addEventListener('click', fetchData);

function fetchData() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
