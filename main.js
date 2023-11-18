var ans = '';


var pic1 = document.getElementById('ATAN');
var pic2 = document.getElementById('ACOS');
var pic3 = document.getElementById('ASIN');
var pic4 = document.getElementById('ASQ');
var pro1 = document.getElementById('AC'); 
var pro2 = document.getElementById('ACD'); 
var pro3 = document.getElementById('ACP'); 
var pro4 = document.getElementById('ACS'); 
var max1 = document.getElementById('A7'); 
var max2 = document.getElementById('A8'); 
var max3 = document.getElementById('A9');
var max4 = document.getElementById('ACT');  
var mas1 = document.getElementById('A4'); 
var mas2 = document.getElementById('A5'); 
var mas3 = document.getElementById('A6');
var mas4 = document.getElementById('ACM');  
var pad1 = document.getElementById('A1'); 
var pad2 = document.getElementById('A2'); 
var pad3 = document.getElementById('A3'); 
var pad4 = document.getElementById('ACA'); 
var pod1 = document.getElementById('A00'); 
var pod2 = document.getElementById('pap'); 
var pod3 = document.getElementById('tap');
var pod4 = document.getElementById('map');


var egg = document.getElementById('display');
ans.id='non';

pic1.onclick = function(){
    ans= '' + (Math.tan (ans * Math.PI/180))
    egg.innerHTML = ans
}

pic2.onclick = function(){
    ans= '' + (Math.cos (ans * Math.PI/180))
    egg.innerHTML = ans
}


pic3.onclick = function(){
    ans= '' + (Math.sin (ans * Math.PI/180))
    egg.innerHTML = ans
}


pic4.onclick = function(){
    ans = '' + (Math.sqrt(ans))
    egg.innerHTML = ans
}


pro1.onclick = function(){
    ans=''
    egg.innerHTML = ans
}


pro2.onclick = function(){
    ans= ans.slice(0,-1)
    egg.innerHTML = ans
}


pro3.onclick = function(){
    ans= ans + '%'
    egg.innerHTML = ans
}


pro4.onclick = function(){
    ans= ans + '/'
    egg.innerHTML = ans
}

max1.onclick = function(){
    ans= ans + '7'
    egg.innerHTML = ans
}

max2.onclick = function(){
    ans= ans + '8'
    egg.innerHTML = ans
}

max3.onclick = function(){
    ans= ans + '9'
    egg.innerHTML = ans
}

max4.onclick = function(){
    ans= ans + '*'
    egg.innerHTML = ans
}

mas1.onclick = function(){
    ans= ans + '4'
    egg.innerHTML = ans
}

mas2.onclick = function(){
    ans= ans + '5'
    egg.innerHTML = ans
}

mas3.onclick = function(){
    ans= ans + '6'
    egg.innerHTML = ans
}

mas4.onclick = function(){
    ans= ans + '-'
    egg.innerHTML = ans
}

pad1.onclick = function(){
    ans= ans + '1'
    egg.innerHTML = ans
}

pad2.onclick = function(){
    ans= ans + '2'
    egg.innerHTML = ans
}

pad3.onclick = function(){
    ans= ans + '3'
    egg.innerHTML = ans
}

pad4.onclick = function(){
    ans= ans + '+'
    egg.innerHTML = ans
}
pod1.onclick = function(){
    ans= ans + '00'
    egg.innerHTML = ans
}

pod2.onclick = function(){
    ans= ans + '0'
    egg.innerHTML = ans
}

pod3.onclick = function(){
    ans= ans + '.'
    egg.innerHTML = ans
}

pod4.onclick = function(){
    ans= eval (ans)
    egg.innerHTML = ans

    ans= eval (ans)
    egg.innerHTML = ans

}
