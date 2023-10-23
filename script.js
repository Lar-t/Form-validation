function validation() {
  let nameE1 = document.getElementById("name");
  let passwordE1 = document.getElementById("password");
  if(nameE1.value.trim() == "" || passwordE1.value.trim() == "") {
    alert('empty value is not allowed');
    return false;
} else {
    return true;
}
}
