$(document).ready(function() {
  $('.form-button').on('click', function(event) {
    // debugger;
    // console.log(event);
    // console.log(query);
    let queryURL = '/api/products';
    $.ajax({
      url: queryURL,
      method: 'GET',
    }).done(function(response) {
      // console.log(response);
      $('#form-container').hide();
      $('.product-div').empty();
      if (response < 1) {
        // Displays message if no products match query
        $('.product-div').html('<h3>No Products Found!</h3>');
      } else {
        // Runs through response array
        let random = Math.floor(Math.random() * response.length);
        console.log(random);
        // for (let i = 0; i < response.length; i++) {
        //   if (query === response[i].category) {
        let productDiv = $('<div class="products-form col m6 m4">');
        let productCard = $('<div class="card hoverable">');
        let productImageDiv = $(
          '<div class="card-image waves-effect waves-block waves-light">'
        );
        let productImage = $('<img class="activator">');
        productImage.attr('src', response[random].image_link);
        let cardContent = $('<div class="card-content">');
        let cardTitleDiv = $(
          '<div class="card-title activator grey-text text-darken-4">'
        );
        let cardTitle = $('<p class="card-title-text">').text(
          response[random].product_name
        );
        let reviewLink = $(
          '<a class="review-link1" href="' +
            response[random].review_link +
            '">Reviews</a>'
        );
        if (response[random].video_link !== null) {
          let videoReview = $('<video class="product-video">');
          videoReview.attr('src', response[random].video_link);
          videoReview.append(cardContent);
        }
        let cardProductDescription = $('<div class="product-description-div">');
        let productDescription = $('<p class="product-description">').text(
          response[random].description
        );
        let productScore = $('<p class="review-score">').html(
          'Score: ' + response[random].score
        );
        let buyLink = $(
          '<a class="buy-link buy-link-form" href="' +
            response[random].buy_link +
            '">Buy Here!</a>'
        );

        productImageDiv.append(productImage);
        productCard.append(productImageDiv);
        cardContent.append(cardTitleDiv);
        cardContent.append(reviewLink);
        cardContent.append(buyLink);
        cardContent.append(productScore);
        cardTitleDiv.append(cardTitle);
        cardProductDescription.append(productDescription);
        cardContent.append(cardProductDescription);
        productDiv.append(productCard);
        productDiv.append(cardContent);
        $('.product-div').append(productDiv);
      }
    });
  });
});
