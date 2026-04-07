document.addEventListener("DOMContentLoaded", () => {
  const text1 = document.getElementById("text1");
  const text1 = document.getElementById("text2");
  if (text1) {
    // Set positioning to absolute so it can move freely
    text1.style.position = "absolute";
    // Move the left edge to the exact middle of the screen
    text1.style.left = "50%";
    // Shift it back by 50% of its OWN width to center it perfectly
    text1.style.transform = "translateX(-50%)";
});
  }
   if (text2) {
       // Set positioning to absolute so it can move freely
    text2.style.position = "absolute";
    // Move the left edge to the exact middle of the screen
    text2.style.left = "50%";
    // Shift it back by 50% of its OWN width to center it perfectly
    text2.style.transform = "translateX(-50%)";
  }
});
