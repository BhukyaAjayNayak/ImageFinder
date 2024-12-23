let form = document.querySelector("form")
let input = document.getElementById('image_input')
let apiKey = "L-eTJ50Ws7IKxONYLMrIzxRiPmy7VBNcgHS01z_juTs"

form.addEventListener("submit",(e)=>{
    e.preventDefault()
   let imageToBeSearched = input.value
   let fetchData=async()=>{
       let data = await fetch(`https://api.unsplash.com/search/photos?page=10&query=${imageToBeSearched}&client_id=${apiKey}`)
       let tempData = await data.json()
       let finalData = tempData.results
       let image_container = document.getElementById("image_container")
       image_container.innerHTML=``
       finalData.forEach((ele)=>{
          let finalImagePath = ele.urls.regular
        image_container.innerHTML+=`
        <img src=${finalImagePath} class='finalImages'>
        `
    })
}
fetchData()
})