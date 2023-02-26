// Add your code here
function submitData(name, email){
    const userInfo = {
        name : name,
        email : email
    }
    const configurationObject = {
        method : "POST",
        headers : {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body : JSON.stringify(userInfo)
    }
    
    return (
        fetch("http://localhost:3000/users", configurationObject)
        .then (ressponse => ressponse.json())
        .then (function(object) {
            let p = document.createElement ("p")
            p.innerHTML= `${object.name} ${object.email}` 
            document.querySelector("body").appendChild(p)
        })
        .catch(function(error){
            document.body.innerHTML = error
        })
    )
}
submitData("Sufyan","s@s.com")