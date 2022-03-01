//Genel Form
const form = document.getElementById("car-form");
//Text Inputları
const resim = document.getElementById("resim");
const model = document.getElementById("model");
const yıl = document.getElementById("yıl");
const renk = document.getElementById("renk");
const km = document.getElementById("km");
const fiyat = document.getElementById("fiyat");
//Ekle Tuşu
const ekle = document.getElementById("ekle");
//Form içindeki Div'ler
const formGroup = document.querySelectorAll(".form-group");
//Div oluşturmak için gövde
const body = document.querySelector(".card-body");

//Tek tek eklemenin alternatifi
/* for (let i = 0; i<formGroup; i++){
    formGroup[i].addEventListener("click",()=>{
        console.log(formGroup[i]);
    })
}*/ 

form.addEventListener("submit",(e) =>{
    //Kullanıcının her alanı doldurmasını belirten yer
    if(resim.value =="" || model.value == "" || yıl.value == "" || renk.value == "" || km.value == "" || fiyat.value == "")
    {
        div();
    }
    //Ekleye'ye basınca çıkacak tablonun doldurulması
    else{
        cars.innerHTML +=
    `<tr>
        <td><img src="${resim.value}" class="img-fluid img-thumbnail"></td>
            <td>${model.value}</td>
            <td>${yıl.value}</td>
            <td>${renk.value}</td>
            <td>${km.value}</td>
            <td>${fiyat.value}<a href="#" id = "delete-car" class = "btn btn-danger">Satıldı</a></td>
    </tr>`
    clear();
    //Alerti silme
    document.querySelector(".alert").remove();
    }   
    e.preventDefault(); 
    

})
//Butona basılınca içeriyi temizlesin
function clear(){
    model.value = "";
    resim.value = "";
    yıl.value = "";
    renk.value = "";
    km.value = "";
    fiyat.value = "";
}
//Boş alan bırakılmaması için gerekli uyarıyı oluşturma
function div(){
    const div = document.createElement("div");
    div.className = "alert alert-danger"
    div.textContent = "Boş alan bırakmayın!"
    body.appendChild(div);
}
