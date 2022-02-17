let modalPreview = document.getElementById('modalPreview');
let modalPublish = document.getElementById('modalPublish');
let modalSave = document.getElementById('modalSave');

let btnPreview = document.getElementById('btnPreview');
let btnPublish = document.getElementById('btnPublish');
let btnSave = document.getElementById('btnSave')

let closes = document.getElementsByClassName('close');

btnPreview.onclick = function () {
    modalPreview.style.display = 'block';
}
btnPublish.onclick = function () {
    modalPublish.style.display = 'block';

}
btnSave.onclick = function () {
    modalPublish.style.display = 'none';
    modalSave.style.display = 'block';
}

Array.from(closes).forEach(function (element) {
    element.addEventListener("click", function () {
        modalPreview.style.display = 'none';
        modalPublish.style.display = 'none';
        modalSave.style.display = 'none';
    })
})