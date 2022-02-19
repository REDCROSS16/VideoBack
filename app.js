const instBtn = document.querySelector('#instBtn');
const inst = document.querySelector('.inst');

instBtn.addEventListener('click', function () {
    if (inst.classList.contains('hidden')) {
        inst.classList.remove('hidden');
    } else {
        inst.classList.add('hidden');
    }
});