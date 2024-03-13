dte = sessionStorage.GETdate
type = sessionStorage.GETtype
password = sessionStorage.GETpwd

if(dte == undefined || type == undefined || password == undefined || type =='document'){
    alert('Error! Did you copy the whole link?')
    window.close()
}

const nowdate = new Date()
const date = new Date(dte)
password = new Number(password)
if(nowdate.getFullYear() != date.getFullYear() || nowdate.getMonth() != date.getMonth() || 
nowdate.getDay() != date.getDay()){
    alert('Invitaion code expired!')
    window.close()
}
var nt = Number(date.getFullYear()) * 7 + Number(date.getMonth()) * 11 + Number(date.getDay())

var s = (nt % 901 * (nt % 901) * 114 % 901 + 191) * 810 % 901 + 100

if(s == password){
    localStorage.login = nt
    window.open('./' + type, '_self')
}else{
    alert('Error! Wrong password!')
    window.close()
}
