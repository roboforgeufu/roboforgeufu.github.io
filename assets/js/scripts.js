$(function () {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $("#emailIcon").click(function () {
    var input = document.createElement("input");
    input.setAttribute("value", "roboforge.ufu@gmail.com");
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);

    $('#emailIcon[data-toggle="tooltip"]')
      .attr("data-original-title", "Email copiado !")
      .tooltip("dispose")
      .tooltip("show");
  });
});
