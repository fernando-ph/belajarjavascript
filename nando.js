// ada tipe data static 
//ada tipe dynamic 
//tipe data stattic harus dideklarasikan misalnya int,double dan lainlain
//tipe data dynamic tidak harus dideklarasikan misalnya di javascript
//di javascript tidak ada error saat operasi matematika yang ada hanya infinity dan nan(not a number)

//example
let a=12
console.log(a/0)//infinity
console.log(a/NaN)//nan(not a number)
console.log(a/'anjs')//nan(not a number) karena di bagi dengan string 




// beda nya batctik yang sebelah angka 1 `` untuk memeperoleh nilai ${}
//kalau "" dan '' hanya untuk membuat string
//example
let tuti="1+3"
let sayang1='1+4'
let result=`${1+3}`
console.log(result)//ini untuk backtik
console.log(`${result} yok ${tuti} tambah ${9*7}`)
console.log(sayang1)
