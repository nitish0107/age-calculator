let kk =document.getElementById('input');
kk.max = new Date().toISOString().split("T")[0];
let result= document.getElementById('p');
function clic(){
    let birth = new Date(kk.value);
    let d1=birth.getDate();
    let m1=birth.getMonth();
    let y1=birth.getFullYear();
    let today=new Date();
    let d2=today.getDate();
    let m2=today.getMonth();
    let y2=today.getFullYear();
let d3,m3,y3;
y3=y2-y1;
if(m2>m1){
    m3=m2-m1;
}else{
    y3--;
    m3=12+m2-m1;
}
if(d2>=d1){
    d3=d2-d1;

}else{
    m3--;
    d3= getdayinmonth(y1,m1)+d2-d1;

}
if(m3<0){
    m3=11;
    y3--;
}
result.innerHTML= "year="+y3 +"  month="+m3+"  day="+d3;
;

}function getdayinmonth(year,month){
return new Date(year,month,0).getDate();
}