// ada perbandingan dalam sebuah yaitu perbandingan  dengan menggunakan  ===
//ada perbdandingan dalam sebuah yaitu perbandingan dengan mengunakan ==
// ada tidak sama dengan ditulis dengan !=
//ada lebih besar ditulis dengan > lebih kecil dengan <
//ada juga lebih besar sama dengan >= dan lebih kecil sama dengan <= 

let a=9
let b=10
console.log(a>=b)//false karena 9 itu kecil
console.log(a!=b)//true karena 9 kan emang tidak sama 
let c=10
let d=10
console.log(c>=d)//true karena kan sama 
console.log(c<=d)//true karena kan sama 
console.log(7>7)//false karena kan 7 itu kan tidak ada pakau sama dengan
console.log(8<8)//false karenakan emang tidak sama 

//or atau ||
//jika ada nilai yang dibandingkan kalau salah satuhnya benar maka true
//jika salah semuanya jika dibdaningkan maka false
//example
console.log(c>=d||7>7)//true karena perbandingan seblah kiri benar 
//dan sebelah kanan salah tapi karena benar sala 
//satunya berati true
console.log(8>=8||10>5)//true karena perbandingan seblah kiri benar 
//dan sebelah kanan benar dan itu benar 
console.log(9>9||5>c)//false karena perbandingan seblah kiri salah
//sebelah kanan salah jika sama salah pasti salah 
let lopi=true
let tanti
console.log(lopi)//true karena bolan true
console.log(!lopi)//false karena kebalikan dari tru
console.log(lopi!=null)//true karena tidak sama 
console.log(lopi!==null)//true karena tidak sama 
console.log(lopi!==tanti)//tru karena tidak sama

//and atau &&
//jika nilai yang dibandingkan ada aja salah satu yang salah maka nilai tersebut salah
//jadi harus nilai sama sama true
//exampel
console.log(c==d && b>a)//true karena nilai kiri dan kanan nya benar semua 
console.log(12<10 && c==10)//false karena salah satu nilainya salah
console.log(19<10 && 19==10)//false karena nilainya sama sama salah  
//?? ini untuk mengambil nilai yang ada jika dia undifine nilai nya akan dicari yang ada 
//exampl
let nando
let sayangku=null
let payah='s'
let kuah=0
console.log(nando??sayangku)//diambil null karena yang atas undifine 
console.log(sayangku??nando)//diambil langsung karena  nilainya null
console.log(kuah??payah)//diambil 0 karena dia yang dieskusi 0
console.log(payah??nando)//diambil s karen yang pertma diammbil s
console.log(a??sayangku)//nilai yaang dieskusi 9
console.log(a??payah)//nilain yang diesjusi 9
console.log(payah??a)//nilainya akan di eskusi s
console.log(nando??a)//nilainya yang diambil 9 


