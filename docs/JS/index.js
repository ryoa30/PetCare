const nav = document.querySelector('.garis-tiga input');
const respon = document.querySelector('nav ul');    

window.onload = () =>{
    if (window.location.pathname === '/') {
        if (sessionStorage.name) {
            location.href = '/homepage';
        }
    }else if(window.location.pathname === '/homepage'){
        if(!sessionStorage.name){
            location.href = '/login';
        }
    }
}

nav.addEventListener('click', function () {
    respon.classList.toggle('muncul-responsive');
})

function pindahhalaman(halaman){
    window.location.href = halaman;
}