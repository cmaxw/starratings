var set_stars = function(form_id, stars) {
  for(i=1; i<=5; i++){
    if(i <= stars){
      $('#' + form_id + '_' + i).addClass('on');
    } else {
      $('#' + form_id + '_' + i).removeClass('on');
    }
  }
}

$(function() {
  $('.rating_star').click(function() {
    var star = $(this);
    var form_id = $(this).attr('data-form-id');
    var stars = $(this).attr('data-stars');

    set_stars(form_id, stars);

    $('#' + form_id + '_stars').val(stars);

    $.ajax({
      type: "post",
      url: $('#' + form_id).attr('action'),
      data: $('#' + form_id).serialize()
    });
  });

  $('.star_rating_form').each(function() {
    var form_id = $(this).attr('id');
    var stars = $('#' + form_id + '_stars').val();
    set_stars(form_id, stars);
  });
});
