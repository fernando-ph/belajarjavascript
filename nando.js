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




