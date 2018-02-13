// Your code goes here:

let makeBigger = function(event) {
  let thumbImg = jQuery(this)
  // console.log("Got a click event:", event)
  let srcValue = thumbImg.attr("src")
  // console.log(srcValue)
  jQuery('#main-image').attr('src', srcValue)

}

jQuery("img").on("click", makeBigger)
