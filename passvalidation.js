function validate() {
  var pass1 = document.getElementById("fname1");
  var pass2 = document.getElementById("fname2");
  var upper = document.getElementById("upper");
  var lower = document.getElementById("lower");
  var number = document.getElementById("number");
  var special = document.getElementById("special");
  var length = document.getElementById("length");
  //check if pass value have number
  if (pass1.value.match(/[0-9]/)) {
    number.style.color = "green";
  } else {
    number.style.color = "red";
  }
  if (pass1.value.match(/[A-Z]/)) {
    upper.style.color = "green";
  } else {
    upper.style.color = "red";
  }
  if (
    pass1.value.match(
      /[!\@\#\$\%\^\&\*\(\)\_\+\-\=\[\]\{\}\|\;\'\:\"\,\.\/\<\>\?]/
    )
  ) {
    special.style.color = "green";
  } else {
    special.style.color = "red";
  }
  if (pass1.value.match(/[a-z]/)) {
    lower.style.color = "green";
  } else {
    lower.style.color = "red";
  }
  if (pass1.value.length < 8) {
    length.style.color = "red";
  } else {
    length.style.color = "green";
  }
  if (pass1.value == pass2.value) {
    passmatch.style.color = "blue";
  } else {
    passmatch.style.color = "red";
  }
}
