$(function(){
    $("#pendaftaran").submit(function(event){
        var fname = $("#firstname").val();
        var lname = $("#lastname").val();
        var mail = $("#mail").val();
        var phone = $("#phone").val();
        var pass = $("#password").val();
        var confir_pass = $("#confpassword").val();
        var select = $("#security").val();
        var answer = $("#answer").val();
        var setuju = $("#setuju").is(":checked");

        val_name(fname,event,"#firstname-error");
        val_name(lname,event,"#lastname-error");
        val_mail(mail,event,"#mail-error");
        val_phone(phone,event,"#phone-error");
        val_password(pass,event,"#password-error");
        val_password(confir_pass,event,"#confpassword-error");
        val_password(confir_pass,event,"#confpassword-error");
        val_select(select,event,"#security-error");
        val_answer(answer,event,"#answer-error");
        val_cek(setuju,event,"#setuju-error");
    });

    function val_name(name,event,error) {
        if (!cekAngka(name)) {
            $(error).text("Nama tidak boleh kosong dan tidak boleh angka");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }

    function cekAngka(name) {
        var cek = /^[a-zA-Z]{1,50}$/;
        return cek.test(name);
    }

    function val_mail(mail,event,error) {
        if (!cekMail(mail)) {
            $(error).text("Email tidak boleh kosong dan harus ada simbol @");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }
    
    function cekMail(mail) {
        var cek = /^[a-zA-Z@.-_]{5,100}$/;
        return cek.test(mail);
    }
    
    function val_phone(phone,event,error) {
        if (!cekPhone(phone)) {
            $(error).text("Phone tidak boleh kosong dan harus angka");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }
    
    function cekPhone(phone) {
        var cek = /^[0-9]{10,13}$/;
        return cek.test(phone);
    }
    
    function val_password(pass,event,error) {
        if (pass == "" || !cekPass(pass)) {
            $(error).text("Password tidak boleh kosong dan minimal 8 karakter");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }

    function val_password(pass,event,error) {
        if (pass == "confpassword" || !cekPass(pass)) {
            $(error).text("Password tidak boleh kosong dan minimal 8 karakter");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }
    function val_password(pass,event,error) {
        if (pass == "" || !cekPass(pass)) {
            $(error).text("Password tidak boleh kosong dan minimal 8 karakter");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }
    
    function cekPass(pass) {
        return pass.length >= 8;
    }
    
    function val_konfirmasi(pass,confpassword) {
        if(pass == confpasswor) {
            $(error).text("")
        }
    }

    function val_select(security,event,error) {
        if (!security) {
            $(error).text("Pertanyaaan keamanan harus di pilih");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }

    function val_answer(answer,event,error) {
        if (answer == "") {
            $(error).text("Answer tidak boleh kosong");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }

    function val_cek(cek,event,error) {
        if (!cek) {
            $(error).text("Anda harus menyetujui persyaratan");
            event.preventDefault();
        }else{
            $(error).text("");
        }
    }
});