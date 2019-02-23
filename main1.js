window.onload=prepareGallery;
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
