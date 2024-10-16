function addingEventListener() {
    // Grab the input element by its ID
    const input = document.getElementById('button');
    
    // Define the event handler function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener to the input element
    input.addEventListener('click', clickAlert);
  }
  
  // Call the addingEventListener function to activate the event listener
  addingEventListener();
  