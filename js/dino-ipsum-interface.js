

$(document).ready(function() {
  $('#dino-ipsum').submit(function() {
    event.preventDefault();
    let numberOfParagraphs = $('#paragraphs').val();
    let wordsPerParagraph = $('#words').val();

    $('#paragraphs').val("");
    $('#words').val("");
    $.get(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${numberOfParagraphs}&words=${wordsPerParagraph}`).then(function(response) {
      response.forEach(function(para) {
        $('.showParagraph').append('<p>' + para.join(" ") + "." + '</p>');
      })
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
