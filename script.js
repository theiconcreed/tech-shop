var regionDistrictinfo = {
    "Musoma" : {
        Tarime: [""],
        Mara: [""],
    },
    "Mwanza" : {
        Ilemela: [""],
        Nyamagana: [""],
    },
    "Shinyanga" : {
        Kahama: [""],
        Shinyanga: [""],
    },
    "Arusha" : {
        Karatu: [""],
        Longido: [""],
    },
}

window.onload = function() {
    const selectRegion = document.getElementById('region'),
          selectDistrict = document.getElementById('district'),
          selects = document.querySelectorAll('select')
          
          selectDistrict.disabled = true
          selects.forEach(select => {
            if (select.disabled == true) {
                	select.style.cursor = "auto"
            } else {
                select.style.cursor = "pointer"
            }
          })
	for (let region in regionDistrictinfo) {
		console.log(region);

            selectRegion.options[selectRegion.options.length] = new Option (region, region)
		
		//region change
		selectRegion.onchange = (e) => {
			selectDistrict.disabled = false
			
			selectDistrict.length = 1
			
			for(let district in regionDistrictinfo[e.target.value]) {
				console.log(district);
				selectDistrict.options[selectDistrict.options.length] = new Option (district, district)
			}
		}
	}
}

function validateForm () {
	let regNum = document.getElementById("regNum").value;
	let regex = /^BCS-\d{2}-\d{4}-\d{4}$/;
    let fullName = document.getElementById("fullName").value;
    let password = document.getElementById("password").value;
	let confrimPassword = document.getElementById("confrimPassword").value;
	let email = document.getElementById("email").value;
	
    if (fullName.trim() === "") {
        alert("Full Name Cannot Be Empty!");
        return false;
    }

    const nameRegex = /^[a-zA-Z\s\-_-]+$/
    if (!nameRegex.test(fullName)) {
        alert("Invalid Character In Full Name. Please Use only Letters, Hyphens, Underscores and Spaces.");
        return false;
    }

    if (fullName.split(/\s+/).length < 2) {
        alert("Please Enter Your Full Name (atleast two names).");
        return false;
    }
	
	if (!regex.test(regNum)) {
		alert ("Invalid Registration Number Please Use Format BCS-00-0000-0000");
		return false;
	}
	
	if(password.length < 8) {
		alert("Password Must Be Atleast 8 Characters!");
		return false;
	}
	
	const lowercaseChar = /[a-z]+/;
	if (!lowercaseChar.test(password)) {
		alert("Password Must Have a Lower Case Character!");
		return false;
	}
	
	const uppercaseChar = /[A-Z]+/;
	if (!uppercaseChar.test(password)) {
		alert("Password Must Have a Upper Case Character!");
		return false;
	}
	
	const numberChar = /[0-9]+/;
	if (!numberChar.test(password)) {
		alert("Password Must Have a Number!");
		return false;
	}
	
	if(password !== confrimPassword) {
		alert("Password do not Match.!");
		return false;	
	}
	
	const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	if(emailReg.test(email)) {
		alert("Invalid email format. Please enter valid email Address");
	}
}

$(document).ready(function() {
  let currentSlide = 0;
  const slides = $(".slide");
  const numSlides = slides.length;

  function showSlide(n) {
    slides.removeClass("active");
    slides.eq(n).addClass("active");
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % numSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + numSlides) % numSlides;
    showSlide(currentSlide);
  }

  showSlide(currentSlide);

  let intervalId = setInterval(nextSlide, 3000);

    $("#next").click(function() {
        clearInterval(intervalId);
        nextSlide();
        intervalId = setInterval(nextSlide, 3000);
    });

    $("#prev").click(function() {
        clearInterval(intervalId);
        prevSlide();
        intervalId = setInterval(nextSlide, 3000);
    });

});