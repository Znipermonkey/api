let button = document.querySelector("button")
let mydiv = document.querySelector('div')
function clicked(){
    console.log("button Clicked")
    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res)=>{
        let resUrlArr = res.data.results[0].residents

        for(let i = 0; i < resUrlArr.length; i++){
            axios.get(resUrlArr[i])
            .then(res =>{
                console.log(res.data.name)
                let newElement = document.createElement('h2')
                newElement.innerHTML = res.data.name
                mydiv.appendChild(newElement)
            })
        }
    })
   
}


button.addEventListener("click", clicked)