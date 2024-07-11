const url = 'https://exchangeratespro.p.rapidapi.com/historical?date=2024-07-11';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '04b9e190a9msh47d09a5fe559570p1c9d81jsn3fa51f8478e1',
		'x-rapidapi-host': 'exchangeratespro.p.rapidapi.com'
	}
};



fetch(url, options)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        const  kenyanRate = data.rates.KES
        let countryCode = ""
        document.querySelectorAll(".country").forEach(btn=>{
            btn.addEventListener("click", (e)=>{
                countryCode =  e.target.textContent
              
                document.getElementById("cost").textContent = (Number(document.getElementById("cost").textContent) / kenyanRate) *  data.rates[countryCode]
            })
        })


    })


