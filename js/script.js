function showImg(n) {
  var image = document.getElementById("car-big-image");

  if (n == 1){
    image.src = "img/1.jpg";
  }
  else if (n == 2){
    image.src = "img/2.jpg";
  }
  else if (n == 3){
      image.src = "img/3.jpg";
  }
  else if (n == 4){
      image.src = "img/4.jpg";
  }
}

function fileValidation(){
    var fileInput = document.getElementById('uploadImage');
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if(!allowedExtensions.exec(filePath)){
        alert('Please upload file having extensions .jpeg/.jpg/.png only.');
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        var image = document.getElementById("car-big-image");
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                image.src = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    }
}

function carPlateUpper() {
    return "ঢাকা মেট্রো - গ";
}

function carPlateLower() {
    return "৩৫ - ৭৬৭০";
}

document.getElementById("carPlateUpper").innerHTML = carPlateUpper();
document.getElementById("carPlateLower").innerHTML = carPlateLower();