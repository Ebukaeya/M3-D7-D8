//form
// make the post request.

let eventID = (new URLSearchParams(window.location.search)).get("q")
let query 
let method

eventID? query=eventID : query="";
eventID? method= "PUT" : method ="POST";
console.log(method);


let [name, description, brand, imageUrl, price] = document.querySelectorAll("input")

window.onload = async function(){
    let res = await fetch("https://striveschool-api.herokuapp.com/api/product/"+ query,{
        method: "GET",
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDY4MzI0NzUsImV4cCI6MTY0ODA0MjA3NX0.5yuxZpjg-Vb4fg4OmTkfFlEzSQ3hlX9myHh31ogdAkA",
            "Content-Type": "application/json"
        },
        
    })
    data = await res.json()
    console.log(data);
}
   


 function handleSubmit(e){
    e.preventDefault()
        let myData = {
        name: name.value,
        description: description.value,
        brand:brand.value,
        imageUrl:imageUrl.value,
        price: price.value
        
    }
    let data = JSON.stringify(myData)
    console.log(data);
   
    // sending a post request
    postResquest(data,method,query)
  

}

let postResquest = async function (data,method, query){
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/product/"+ query,{
            method: method,
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDY4MzI0NzUsImV4cCI6MTY0ODA0MjA3NX0.5yuxZpjg-Vb4fg4OmTkfFlEzSQ3hlX9myHh31ogdAkA",
                "Content-Type": "application/json"
            },
            body: data
        })
        console.log(res);
        if ( res.ok){
            alert("success")
            let finalData = await res.json()
            console.log(finalData);

        }
        
    } catch (error) {
        console.log(error);
    }
}
    
let handleClick = async function(){

console.log(query);
    if(confirm("Are you sure to delete")){
        let res = await fetch("https://striveschool-api.herokuapp.com/api/product/"+ query,
        {
            method: "DELETE",
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDY4MzI0NzUsImV4cCI6MTY0ODA0MjA3NX0.5yuxZpjg-Vb4fg4OmTkfFlEzSQ3hlX9myHh31ogdAkA",
                
            },
          
        }
        )
        if (res.ok){
            alert("delete success")
        }
        else{
            alert("wrong")
        }

    }

  

}