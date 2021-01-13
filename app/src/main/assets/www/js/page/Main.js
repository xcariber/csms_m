$(document).on('pageinit', "#Main", function (e) {
    e.preventDefault();
    //$(document).off("pageinit", "#Main");
});
$(document).on('pagebeforeshow', "#Main",function () {
      SetRcvIdx("");
       isDone = "A";
      //log("isDone, rcvIdx - " + isDone + ", " + GetRcvIdx());
});

$(document).on('pageshow', "#Main", function (e) {
    e.preventDefault();
});
