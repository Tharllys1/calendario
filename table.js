function colorirData(){
    let day           = document.getElementById('day').value;
    let color         = document.getElementById('color').value;
    let calendar      =document.getElementById('calendar');
   
    let putcolor = calendar.getElementsByTagName('td')[parseInt(day)+5];
    putcolor.style.backgroundColor = color;
}