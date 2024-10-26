
const form = document.querySelector('form');

const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const alamat = document.getElementById("alamat");
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

function sendEmail(){
  const bodyMessage = 'Name : ${name.value}<br> phone: ${phone.value}<br> email : ${email.value}<br> alamat: ${alamat.value}<br> judul: ${judul.value}<br> pesan: ${pesan.value}'

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "galfinbisnis@gmail.com",
    Password : "08202A149A77BADCD8DA53637C79CDF7A030",
    To : 'galfinbisnis@gmail.com',
    From : "galipkc123@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => alert(message)
);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});




// function emailSend() {
// const bodyMessage = 'Name : ${name.value}<br> Email: ${email.value}<br> Phone : ${phone.value}<br> Message: ${message.value}<br> project: ${project.value}<br> subject: ${subject.value}'


// function sendEmail(){
//   let parms = {
//     name : document.getElementById{"name"}.value,
//     email : document.getElementById{"email"}.value,
//     phone : document.getElementById{"phone"}.value,
//     alamat : document.getElementById{"alamat"}.value,
//     judul : document.getElementById{"judul"}.value,
//     pesan : document.getElementById{"pesan"}.value,

//   }

//   emailjs.send("service_40zlnpq","template_336y3ka",parms).then(alert("Email Send !!"))
// }


