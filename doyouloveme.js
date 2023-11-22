function yesClick(){
    alert('yes sir chac chan la nhu vay roi')
}
function noClick()
{
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById('bthNo').style.left = x + 'px';
    document.getElementById('bthNo').style.top = y + 'px';

}