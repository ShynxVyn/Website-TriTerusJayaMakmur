const scriptURL = 'https://script.google.com/macros/s/AKfycbwZnHTeojaTXKjDGN6P5kkPeu8NR1rPzdsGcL5t2cvLy4aO2LscGaGzQJHoNdKJD9Iw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(message => swal("Pesan Berhasil Terkirim !" ))
  .then(() => { window.location.reload(); })
  .catch(error => swal('Pesan Gagal Terkirim', error.message))
})

// if(message=='OK'){
//       swal("Secussful", "You clicked the button!", "success");
//     }
//     else{
//       swal("Error", "You clicked the button!", "error");
//     }
//   }
// );
// }