if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent)) {
    window.alert('It looks like you\'re using Internet Explorer. Unfortunately, your browser is outdated and this website may not work properly.\nPlease consider switching to a modern browser (I recommend Firefox).')
}

if (/Edge\/\d./i.test(navigator.userAgent)) {
    window.alert('It looks like you\'re using an old version of Microsoft Edge. This website may not work properly on your browser. Please download an update from https://www.microsoft.com/edge, or switch to a different modern browser (I recommend Firefox).');
}

