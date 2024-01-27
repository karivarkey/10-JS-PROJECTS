function yes() {
    document.getElementById('yes').style.display = 'none';
    document.getElementById('ask').textContent = 'Yippieee! ILY <3';
    document.getElementById('no').style.display = 'none';
}


function no() {
    console.log("guck")
    document.getElementById('no').style.opacity = '0';
    document.getElementById('no').style.display = 'none';
    document.getElementById('ask').textContent = " what!??? what if I say , PRETTY PLEASE <3 ?"
}