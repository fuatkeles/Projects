
var todoList = [];
var listTodo = document.getElementById("list");     // burada listeyi tutuyoruz.
var frm = document.getElementById("frm");           // burada form tutuluyor.
var txt = document.getElementById("todotxt");       // burada metin tutuluyor.

    // LİSTELEME
function listTodos() {
    todoList.sort((a,b) => a.isDone - b.isDone);   // yapılanı aşağıya at her zaman
    save();
}

    // LİSTEDE YAPILANI KAYDETME
function save() {
    localStorage["data"] = JSON.stringify(todoList);
}

    // LİSTEYİ İÇERİDEN GETİRME
function load() {
    todoList = JSON.parse(localStorage["data"]);
}

    // LİSTEYE EKLEME YAPMA
frm.onsubmit = function(event) {
    event.preventDefault();     // sayfanın yenilenmeden çalışmaya devam eder.
    var task = txt.value;       // yazılan metin alındı
    todoList.unshift({task: task, isDone: false});      // yazılanı en üst sıraya taşır.
    listTodos();
    txt.value = "";
}