console.log("Your index.js file is loaded correctly!");
$(document).ready(function () {
  $("section").hover(
    function () {
      $("img.arrow").addClass("active");
    },
    function () {
      $("img.arrow").removeClass("active");
    }
  );
});
