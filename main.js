let num=[1,2,3,4,5,6,7,8]
num.push(12)
console.log(num)



let nu=[1,2,3,4,5,6]
num.pop()
console.log(nu)


let NUM=[2,3,4,5]
NUM.shift()
console.log(NUM)

let u=[1,3,2,4,6,5,6,7,8]
u.unshift(7)
console.log(u)


let v=["Anas","mohamed","ayman","maan","ahlaam"]
let sliced=v.slice(1,3)
console.log(sliced)

let n=["najma","mohamed","Abdikadir","yuusuf"]
let pos =n.indexOf("mohamed")
let removeElement = n.splice(pos,3)
console.log(n)


let j=["I","Am","student"]
let joined=j.join(" ")
console.log(joined)


let s=["Rahma","diiriye",2,"jama",4,1,3,5]
s.sort()
console.log(s)


let R=["Rahma","Hooyo","jannadeydii"]
R.reverse()
console.log(R)




// filter
let x=[1,2,3,4,5,6,7]
function sub(t){
    return t >= 5
}
const sub =(t)=> t >=5
let filtered=x.filter(sub)
console.log(filtered)


let eman=["ayaan","hamdi","ayman"]
const filt = (n) =>{
   
       // return t.include("h")
    // return t.startswith("a")
    // return t.endswith("n")
    
   return t.length >= 5
    
}
// function sub(t){
    
//     // return t.include("h")
//     // return t.startswith("a")
//     // return t.endswith("n")
    
// return t.length >= 5
    
// }
console.log(n)

let names =["hamdi","ayaan","faaarah"]
names.forEach((item)=>console.log(item))