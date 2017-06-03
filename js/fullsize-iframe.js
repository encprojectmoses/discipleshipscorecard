/* This code really works, pramis! Ang power kasi nito is automatic na siya 
nag-aadjust ng iFrame's height (increase or decrease) na 
everytime I enter sa mga reports. Bale di ko muna siya ico-connect sa HTML.
Medyo magulo isipin siya sa una. Iniisip ko yung collaboration 
sa parent and child ng iFrame's height. Please help me to work with this.*/

function resizeIframe(iframe) 
{
    var adjustHeight = (iframe.contentWindow.document.body.scrollHeight) + 'px';
    iframe.style.height = adjustHeight;
    alert (adjustHeight);
}

