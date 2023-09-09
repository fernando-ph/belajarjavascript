//objek itu adalah suatu yang terdiri dari kunci dan isinya
// misalnya kucing dia berwana biru jadi kucingnya jadi kunci
//dan warna kucing adalah nilainya

const siswa={
    nama: 'nando',
    umur:13,
    alamat:"as"
}
siswa.nama="mam"//berikut cara menambahkan objek 
siswa.lama=13//berikut cara menambahkan objek
delete siswa.nama//berikut cara menghapsu  obj
console.log(siswa)//memanggil semua kunci pada aray
console.log(siswa.alamat)//memanggil 1 kunci pada array
console.log(siswa['umur'])//memanggil 1 kunci dengan kurung siku
//jika kita memanggil kunci yang dihapus maka akan terjadi undifine




//membuat fungsi objek
function Aanakan(cucok,bui,sayang) {
    return{
        cucok: cucok,//bisa dipanggil lagi menggunakna key nya
        bui,//bisa dipanggil tanpa menggunakan key //dan setiap mau menambahkan key harus ada tanda koma
        sayang
    }
}

let coki=Aanakan("s",12,true)//menyimpannya di varible 
console.log(coki)//memanggil fungsinya dengan variabel
console.log(Aanakan("s",true,90))//bisa memanggillnya tanpa variabel


let banyak ={

}
console.log(banyak.noProperty===undefined)//mengecek apakkah dalam kondisi tersebut ada property atau kata kunci

const taisan={
    gaji:true,
    santai:"s",
 bola:false,
 nafus:"ss"
}
console.log('santai' in taisan)//mengecek apakah ada properti bernama santai ternyata ada bernilai true

let tidak ='nafus'
console.log(tidak in taisan)//mengecek dengan menyimpan variable tidak terus di console logkan bernilai true
for (let nasoso in taisan){
    console.log(nasoso)//menampilkan kata kuncinya dalam taisan 
    console.log(taisan[nasoso])//menampilannilai dalam sebua taisan
}

//array
let angkaas=[1,2,3,4]
console.log(angkaas)//memngerpint array
console.log(angkaas[2])//mencari data yang ada di indeks 2
//indeks 0=1
//indeks 1=2
//indeks 2=3
//indeks 3=4
angkaas[2]='2'//menganti dariindeks 2
console.log(angkaas)//menampilkan indeks 2 yang sudah di ganti 
angkaas[8]=true//menambah indeks ke 8 dan pada indeks sebelumnya kosong karena belum diberikan
console.log (angkaas)//menampilakn tambahan indeks
angkaas[6]=true//menmabha ideks ke 6
console.log (angkaas)//menampilkan tambahahn indek
angkaas[5]=true//menambahkan indeks ke 5
console.log (angkaas)//menampilkan indeks ke 5
let papi=angkaas.pop()//menyimpan ke dalam variabel
console.log (papi)//menghapus dari variabel
angkaas.pop()//mengapus secara lansgung
console.log (angkaas)//baru lansging di print
console.log (angkaas.length)//mengetahui panjangnya berapa 


//mengabung aray dengan concat
let cocok=[true,false,9,"s"]
let kumbang=["a",78]
let bui=cocok.concat(kumbang)//variable penyimpannya
console.log(bui)//mengabungan kedua array dari cocok dan kumbang
let postion=cocok.indexOf(false)//membuat darimana inkdes tersebut 
console.log(postion)//menampilkan dari indeks mana
let biasa=kumbang.includes(78)//untuk mengecek apakah ada nilai 78 di array kumbang dan ada jadi true
console.log(biasa)
let biasao=kumbang.includes(908)//untuk mengecek apakah ada nilai 908 di array kumbang dan tidak ada jadi falsse
console.log(biasao)
let ninja=kumbang.slice(0)//membuat slice baru 
console.log(ninja)
let cacing=cocok.sort()//mengurtkan data dari awal
console.log(cacing)