//your JS code here. If required.
let counterValue = 0;

    function incrementCounter() {
    
      alert("Un-incremented value: " + counterValue);

      counterValue++;

      // Update the content of the counter element
      document.getElementById("counter").innerText = counterValue;
    }

