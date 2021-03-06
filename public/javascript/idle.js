// const { logout2 } = require("./public/javascript/logout");

var logstatus;
var idleTime = 0;
$(document).ready(function () {
  //Increment the idle time counter every minute.
  var idleInterval = setInterval(timerIncrement, 1000); // 1 minute

  //Zero the idle timer on mouse movement.
  $(this).mousemove(function (e) {
    idleTime = 0;
  });
  $(this).keypress(function (e) {
    idleTime = 0;
  });
});

function timerIncrement() {
  idleTime = idleTime + 1;
  if (idleTime > 60) {
    logout2();
    // 1 minutes
  }
}

async function logout2() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    var log = 0;
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}
