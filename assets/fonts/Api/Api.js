const SingupApi = (SingupData)=>{
    alert("singup api")
    const header ={
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(SingupData)
    }
}