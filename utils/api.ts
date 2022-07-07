
export default function getData(){
    return fetch("https://fakestoreapi.com/products").then((res) => res.json())

}