//
//
// $(document).ready(function() {
//   $('#dino-ipsum').submit(function() {
//     event.preventDefault();
//     let numberOfParagraphs = $('#paragraphs').val();
//     let wordsPerParagraph = $('#words').val();
//
//     $('#paragraphs').val("");
//     $('#words').val("");
//     $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${numberOfParagraphs}&words=${wordsPerParagraph}`).then(function(response) {
//       response.forEach(function(para) {
//         $('.showParagraph').append('<p>' + para.join(" ") + "." + '</p>');
//       })
//     }).fail(function(error) {
//       $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
//     });
//   });
// });


$(document).ready(function() {
  $('#dino-ipsum').submit(function() {
    event.preventDefault();
      let numberOfParagraphs = $('#paragraphs').val();
      let wordsPerParagraph = $('#words').val();

      $('#paragraphs').val("");
      $('#words').val("");

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${numberOfParagraphs}&words=${wordsPerParagraph}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      body.forEach(function(para) {
      $('.showParagraph').append('<p>' + para.join(" ") + "." + '</p>');
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
    });
  });
});
