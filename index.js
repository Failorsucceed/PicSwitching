function addLoadEvent(func) {
    var oldonload=window.onload;
    if (typeof window.onload!=='function'){
        window.onload=func;
    } else{
        window.onload=function () {
            oldonload;
            func();
        }
    }
}
function insertAfter(newElement,targetElement) {
    var parent=targetElement.parentNode;
    if (parent.lastChild==targetElement){
        parent.appendChild(newElement);
    } else{
        parent.insertBefore(newElement,targetElement.nextSibling)
    }
}
function preparePlaceholder() {
    if(!document.createElement) return false;
    if (!document.createTextNode) return false;
    if (!document.getElementById) return false;
    if (!document getElementById('imagegallery')) return false;
    var placeholder=document.createElement('img');
    placeholder.setAttribute('id','placeholder');
    placeholder.setAttribute('src','');
    var description=document.createElement('p');
    description.setAttribute('id','description');
    var desctsxt=document.createTextNode('choose a image');
    description.appendChild(desctsxt);
    var gallery=document.getElementById('imagegallery');
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}
function prepareGallery(){
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if(!document.getElementById('imagegallery')) return false;
    var gallery=document.getElementById('imagegallery');
    var links=gallery.getElementsByTagName("a");
    var len=links.length;
    for(i=0;i<len;i++){
        links[i].onclick=function () {
            return showPic(this)?false:true;
        }
        links[i].onkeypress=link[i].onclick;
    }
}
function showPic(whichPic) {
    if(!document.getElementById('placeholder')) return false;
    var source = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    if (placeholder.nodeName!='IMG') return false;
    placeholder.setAttribute('src', source);
    if(document.getElementById('description')) {
        var text = whichPic.getAttribute('title')?whichPic.getAttribute('title'):'';
        var description = document.getElementById('description');
        if (description.firstChild.nodeType==3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);