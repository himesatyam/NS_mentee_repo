function resetFn()
{
  document.getElementById("text").value = "";
  document.getElementById("answer").innerHTML = "0 GigaByte";
}

function answer() {
  let num = document.getElementById("text").value;
  if (isNaN(num)) {
    document.getElementById("answer").innerHTML = "Wrong input";
  } else {
    let gb = 1024 * 1024 * 1024;
    let ans = num / gb;
    document.getElementById("answer").innerHTML = ans.toFixed(2) + " GigaByte";
  }
}

