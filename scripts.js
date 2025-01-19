// Function to smoothly scroll to the next section
function scrollToNext(viewId) {
    const nextView = document.getElementById(viewId);  // Get the target view by ID
    
    if (nextView) {  // Check if the target view exists
      window.scrollTo({
        top: nextView.offsetTop,  // Scroll to the top of the next section
        behavior: 'smooth'        // Smooth scroll behavior
      });
    }
  }
  