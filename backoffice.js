//form
// make the post request.




let [name, description, brand, imageUrl, price] = document.querySelectorAll("input")

async function handleSubmit(e){
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
    try {
        let res = await fetch("https://striveschool-api.herokuapp.com/api/product/",{
            method: "POST",
            headers:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjI4YWI1YjRlYTdiMTAwMTVkMDY3YTMiLCJpYXQiOjE2NDY4MzI0NzUsImV4cCI6MTY0ODA0MjA3NX0.5yuxZpjg-Vb4fg4OmTkfFlEzSQ3hlX9myHh31ogdAkA",
                "Content-Type": "application/json"
            },
            body: data
        })
        console.log(res);
        if ( res.ok){
            let finalData = await res.json()
            console.log(finalData);

        }
        
    } catch (error) {
        console.log(error);
    }

}
