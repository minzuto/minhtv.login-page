var user= document.getElementById('user');
console.log(user);
var pass= document.getElementById('pass')
console.log(pass);
var tb= document.getElementById('thongbao');
console.log(tb);
function show() {
    if ( user.value =='admin'&& pass.value=="123456") {
            tb.innerHTML='Đăng nhập thành công';
            alert("Đăng nhập thành công");
            tb.style.color='#00ff2e';
        }
     else {
        tb.innerHTML='Bạn đã nhập sai tài khoản hoặc mật khẩu';
        alert("Bạn đã nhập sai tài khoản hoặc mật khẩu");
        tb.style.color='#f44336';}
     }     
function reset() {
    user.value='';
    pass.value='';
    tb.innerHTML='Vui lòng nhập tài khoản/mật khẩu';
    tb.style.color='#faf9f8';
}
var checkbox = document.getElementById('box');
console.log(checkbox);
checkbox.onchange= function() {
    if (this.checked) {
        alert('Đã ghi nhớ mật khẩu');
    } else {
        alert('Đã bỏ lưu mật khẩu');
        pass.value="";
    }
}