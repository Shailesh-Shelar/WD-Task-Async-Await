async function restcountry()
{
    try {
        var coutryresponce = await fetch("https://restcountries.eu/rest/v2/all");
        var data=await coutryresponce.json()
        var cont = document.createElement("div");
        cont.classList.add("container");
        var row=document.createElement("div")
        row.classList.add("row")
        data.forEach(element => 
            {
            var div1=document.createElement("div")
            div1.classList.add("col-lg-4","col-sm-12");

            var div2 = document.createElement("div");
            div2.classList.add("card")
            div2.style.margin="10px"

            var div3 = document.createElement("div");
            div3.classList.add("card-header")
            div3.innerHTML=`${element["name"]}`
            div3.style.textAlign="center"

            var flag=document.createElement("img")
            flag.src=`${element["flag"]}`
            flag.classList.add("card-img-top")

            var capital=document.createElement("p")
            capital.classList.add("card-body")
            capital.style.textAlign="center"
            capital.innerHTML = `<b>Capital:-</b>${element["capital"]}<br>
            <b>Region:-</b> ${element["region"]} <br> <b>Country Code:-</b>${element["alpha3Code"]}`;

            var button=document.createElement("button")
            button.type="submit"
            button.innerText="Click for weather"
            button.classList.add("btn","btn-primary")
            button.addEventListener("click",callwether=>{
             fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${element["capital"]}&appid=991f74659c79c26ec2b7d45988fec1ee`
        )
        .then((res)=>{
            return res.json();
        })
        .then((result)=>{
            alert(`Temprature is: ${result["main"]["temp"]}`)
        })
        .catch((err)=>{
            console.log(err);
        })
            })
            
            div2.append(div3,flag,capital,button);
            div1.append(div2);
            row.append(div1)
            cont.append(row);
        });
        
        document.body.append(cont)

    } catch (error) {
        console.log(error)
    }
    
}
restcountry();