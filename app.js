var options = {
    strings: ['Lawn Care', 'Hedge Trimming', 'Landscaping'],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true
  };
  
  var typed = new Typed('.input', options);


// Services Page



        var btn = document.getElementsByClassName("btn");
        var slide = document.getElementById("slide");

        btn[0].onclick = function(){
            slide.style.transform = "translateX(0px)";
        }
        btn[1].onclick = function(){
            slide.style.transform = "translateX(-2800px)";
        }
        btn[2].onclick = function(){
            slide.style.transform = "translateX(-2800px)";
        }
        btn[3].onclick = function(){
            slide.style.transform = "translateX(-4200px)";
        }


// Arrow Buttons

    var gay = document.getElementById("slide");

    function gay(){
        gay.style.transform = "translateX(0px)";
    }