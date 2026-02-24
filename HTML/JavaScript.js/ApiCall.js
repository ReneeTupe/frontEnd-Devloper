let Base_Api = `https://fakestoreapi.com/products`;

const ApiCall = async ()=> {
    /* fetch(Base_Api)
    .then ((res)=> res.json()) // readableStream --> parse --> object
    .then((res)=> console.log(res))
    .catch((err)=>console.log(err)); */

    try {
        let res = await fetch(Base_Api);
        let value = await res.json();
        console.log(value);
}catch (error){
    console.log(error);
}
};

ApiCall();