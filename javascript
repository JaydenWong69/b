javascript:(function() {
  var url = "https://chat.openai.com/"; 

  var windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=yes,status=yes,width=400,height=300";
  var popupWindow = window.open(url, "_blank", windowFeatures);

  if (popupWindow) {
    popupWindow.focus();
  } else {
    alert("Failed to open the window. Please check your browser's popup settings.");
  }
})();

