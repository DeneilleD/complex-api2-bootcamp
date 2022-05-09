document.querySelector('button').addEventListener('click', getChar)

function getChar() {
  let url = `https://api.disneyapi.dev/characters`

  fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
      console.log(data)
  
     

   let urlTwo = `https://g.tenor.com/v1/search?q=${data.data[17].name}&key=LNY6YHE897NU&limit=1`
  fetch(urlTwo)
    .then(res => res.json()) 
    // parse response as JSON 
    .then(data => {
    console.log(data)
    document.querySelector('img').src = data.results[0].media[0].gif.url
    
    let img = document.createElement('img')
    img.src = data.results[0].media[0].gif.url
    characterNames.appendChild(img)

      })
     
    let characterNames = document.querySelector('#characterNames')
    // object with data array in it
    for(let i = 0; i < data.data.length; i++){
      console.log(data.data[i].name)
    // creating li for ul
    let li = document.createElement('li')
      li.innerText = data.data[i].name
      characterNames.appendChild(li)
    }


      // document.querySelector('h2').src = data.sprites.front_default
      
    })
    
    .catch(err => {
      console.log(`err ${err}`)
  })
    .catch(err => {
      console.log(`error ${err}`)
    });
}