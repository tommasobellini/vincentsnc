x = document.cookie
if (x.includes('lang')){
    console.log(x)

    if(x.split('lang=')[1] === 'en') {
        console.log('first if')
        english()
    }
    else {
        console.log('first else')
        italian()
    }
} else {
    console.log('second else')
    italian()
}


function english() {
    var language_classes = document.getElementsByClassName('en');
    for(var i = 0, j = language_classes.length; i < j; i++) {
        if (language_classes[i].classList.contains('en')) {
            language_classes[i].classList.remove('hideIt')
        }
    }
    var language_classes2 = document.getElementsByClassName('it');
            for(var k = 0, n = language_classes2.length; k < n; k++) {
                if (language_classes2[k] != null){
                    language_classes2[k].classList.add('hideIt')
            }
    }
    document.getElementById('dropdown09').innerHTML = '';
    var span_flag = document.createElement('span');
    span_flag.className = 'flag-icon flag-icon-us'
    document.getElementById('dropdown09').appendChild(span_flag);

    var span = document.createElement('span');
    span.innerHTML = 'EN';
    document.getElementById('dropdown09').appendChild(span);
    document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    document.cookie = "lang=en; path=/;";
    console.log(document.cookie)
  
}

function italian() {
    var language_classes = document.getElementsByClassName('it');
    for(var i = 0, j = language_classes.length; i < j; i++) {
        if (language_classes[i].classList.contains('it')) {
            language_classes[i].classList.remove('hideIt')
        }
    }
    var language_classes2 = document.getElementsByClassName('en');
            for(var k = 0, n = language_classes2.length; k < n; k++) {
                if (language_classes2[k] != null){
                    language_classes2[k].classList.add('hideIt')
            }
    }

    document.getElementById('dropdown09').innerHTML = '';
    var span_flag = document.createElement('span');
    span_flag.className = 'flag-icon flag-icon-it'
    document.getElementById('dropdown09').appendChild(span_flag);

    var span = document.createElement('span');
    span.innerHTML = 'IT';
    document.getElementById('dropdown09').appendChild(span);
    document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    document.cookie = "lang=it; path=/;";
    console.log(document.cookie)
}

