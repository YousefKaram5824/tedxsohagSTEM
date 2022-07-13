var countDate = new Date('Aug 8, 2022 23:59:59').getTime();

let counter = setInterval(() => {
    var now = new Date().getTime();
    gap = countDate - now;

    var second = 1000;
    var minute = second *60;
    var hour = minute * 60;
    var day = hour * 24;

    var d = Math.floor(gap / (day));
    var h = Math.floor(gap % (day) / (hour));
    var m = Math.floor(gap %(hour) / (minute));
    var s = Math.floor(gap % (minute) / (second));

    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;

    if (gap < 0){
        clearInterval(counter);
    }
}, 1000);

function toggle() {
    var newsletter = document.querySelector(".newsletter");
    newsletter.classList.toggle('active');
}


// const myForm = document.getElementById("myForm");
// myForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     const searchParams = new URLSearchParams();

//     for(const pair of formData){
//         searchParams.append(pair[0]. pair[1]);
//     }

//     fetch('login.php', {
//         method: 'post',
//         body: searchParams
//     }).then(function (response) {
//         return response.text();
//     }).then(function (text) {
//         console.log(text);
//     }).catch(function (error) {
//         console.error(error);
//     });
// });