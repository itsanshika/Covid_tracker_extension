fetch('https://corona.lmao.ninja/v3/covid-19/countries/India')
.then(res=>
    {
        return res.json()
    })
    .then(data =>
        {
            document.getElementById('totalCase').textContent += data.cases;
            document.getElementById('totalDeath').textContent += data.deaths;
        })