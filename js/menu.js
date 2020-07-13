drop_menu.onclick = function()
{
    let elements = document.querySelectorAll('ul > li');

    if(menu.className != 'navbar_show')
    {
        menu.className = 'navbar_show';
        for (let elem of elements) {
            elem.className = 'navbar-item-dropdown';
        }
        profile.className = 'navbar-profile-show';
    }
    else
    {
        menu.className = 'navbar';
        for (let elem of elements) {
            elem.className = 'navbar-item';
        }
        profile.className = 'navbar-profile-hide';
    }
}