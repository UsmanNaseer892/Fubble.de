$(".person-img").click(function() {
  $(this)
    .parent()
    .toggleClass("expanded");
});

$(".details-expander").click(function() {
  $(this)
    .parent()
    .toggleClass("expanded");
});
