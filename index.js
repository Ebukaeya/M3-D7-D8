/* fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDY4MzI0NzUsImV4cCI6MTY0ODA0MjA3NX0.5yuxZpjg-Vb4fg4OmTkfFlEzSQ3hlX9myHh31ogdAkA"
}
}) */

let [node] = document.getElementsByClassName("product-wrapper")


const fetchDate = async function(){
   
    let res = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDY4MzkwNTUsImV4cCI6MTY0ODA0ODY1NX0.w2sPKEv5Mnw7UqPhes4mwEI_leSYbMqQ01F1f0mc4yo"
        }
        })
    let data = await res.json()

    console.log(data);
    displayData(data)
    return data



}

window.onload = fetchDate


const displayData = (data)=>{

data.map((data)=>{
let {name, description, brand, imageUrl, price} = data

node.innerHTML+=`

<div class="col-12 col-sm-4 col-lg-3">
<div class="img-div">
  <img
    style="object-fit: cover; width: 100%; height: 100%"
    src="${imageUrl}"
    alt="images"
  />
</div>

<div class="d-flex mt-2">
  <div style="margin-right: 10px">
    <p>Brand</p>
    <p>Name</p>
    <p>Price</p>
  </div>
  <div>
    <p>${brand}</p>
    <p>${name}</p>
    <p>${price}</p>
  </div>
  
</div>
<button style="width: 50%; " class="btn btn-primary mt-3"> buy</button>
</div>

`

})

}




