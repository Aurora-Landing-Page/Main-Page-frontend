// if (icon.classList.contains('fa-angle-down')) {
//   icon.classList.remove('fa-angle-down');
//   icon.classList.add('fa-angle-up');
// } 
// // If the answer is shown, hide it and change the icon to 'fa-angle-down'
// else {
//   icon.classList.remove('fa-angle-up');
//   icon.classList.add('fa-angle-down');
// }

document.querySelectorAll(".faq-question").forEach(function (question) {
  question.addEventListener("click", function () {
    var answer = this.querySelector(".faq-answer");
    var icon = this.querySelector(".faq-icon");

    // Hide all answers and change all icons to "+"
    document.querySelectorAll(".faq-answer").forEach(function (ans) {
      if (ans !== answer) {
        ans.style.display = "none";
      }
    });
    
    document.querySelectorAll(".faq-icon").forEach(function (icn) {
      if (icn !== icon) {
        icn.classList.remove('fa-angle-up');
        icn.classList.add('fa-angle-down');
      }
    });

    // Remove box shadow from all questions
    document.querySelectorAll(".faq-question").forEach(function (q) {
      if (q !== question) {
        q.style.boxShadow = "none";
      }
    });

    if (answer.style.display === "none" || answer.style.display === "") {
      // Show the clicked answer and change its icon to "-"
      answer.style.display = "block";
      icon.classList.remove('fa-angle-down');
      icon.classList.add('fa-angle-up');
      question.style.boxShadow = "0px 0px 2px 0px rgba(255, 255, 255, 0.75)";
    } else {
      // Hide the clicked answer and change its icon to "+"
      answer.style.display = "none";
      icon.classList.remove('fa-angle-up');
      icon.classList.add('fa-angle-down');
      question.style.boxShadow = "none";
    }
  });
});






document.querySelectorAll(".faq-question").forEach(function (question) {
  question.addEventListener("click", function () {
    // Hide all answers
    document.querySelectorAll(".faq-answer").forEach(function (answer) {
      answer.style.maxHeight = null;
    });

    // Show the clicked answer
    var answer = this.querySelector(".faq-answer");
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});


// Function to change color based on intersection
function changeColor(entries) {
  entries.forEach(entry => {
    const targetId = entry.target.id;
    const correspondingElement = document.querySelector(`[data-faq-queSec="${targetId}"]`);

    if (entry.isIntersecting) {
      correspondingElement.style.color = '#3FEB8C'; // Change to your desired color
    } else {
      correspondingElement.style.color = ''; // Change to the default color or another color
    }
  });
}

// Initialize Intersection Observer
const observer = new IntersectionObserver(changeColor, { threshold: 0.5 });

// Observe each target element
document.querySelectorAll('.faq-queSec').forEach(target => {
  observer.observe(target);
});