document.addEventListener('DOMContentLoaded', function () {
    let hambugBtn = document.querySelector('.hambugBtn');

    let menuList = document.querySelector('#menuList');

    let link = document.querySelector('.link');

    hambugBtn.addEventListener('click',clickFn);

    function clickFn()
    {
        menuList.classList.toggle('active');
        link.classList.toggle('active');
    }
});


window.addEventListener('DOMContentLoaded', (event) => {
    document.styleSheets[0].insertRule('@import url("mystyle.css")', 0);
});
