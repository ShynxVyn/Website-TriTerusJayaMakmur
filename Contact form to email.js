function emailSend(){

				var userName = document.getElementById('Nama').value;
				var email = document.getElementById('Email').value;
				var phone = document.getElementById('Nomor HP').value;
				var alamat = document.getElementById('Alamat').value;
				var judul = document.getElementById('Judul').value;
				var pesan = document.getElementById('Pesan').value;

	var messageBody = "Name " + userName +
	"<br/> Email " + email +
	"<br/> Phone " + phone +
"<br/> Alamat " + alamat +
"<br/> Judul " + judul +
"<br/> Pesan " + pesan;
	
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "galfinbisnis@gmail.com",
    Password : "5861D2B989E3BFB5B076885E0C1FD3BEE27A",
    To : 'galfinbisnis@gmail.com',
    From : "galfinprihardiputra04@gmail.com",
    Subject : "This is the subject",
    Body : messageBody
}).then(
  message => {
  	if(message=='OK'){	
  		swal("Secussful", "You clicked the button!", "success");
  	}
  	else{
  		swal("Error", "You clicked the button!", "error");
  	}
  }
);
}