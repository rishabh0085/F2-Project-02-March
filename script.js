document.addEventListener("DOMContentLoaded", function() {
    const counter = document.querySelector('.counter');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const clearBtn = document.getElementById('clearBtn');
    const errorMsg = document.querySelector('.error-msg');
  
    let count = 0;
  
    function updateCounter() {
      counter.innerText = count;
      if (count === 0) {
        errorMsg.style.display = 'block';
        decrementBtn.disabled = true;
        clearBtn.style.display = 'none';
      } else {
        errorMsg.style.display = 'none';
        decrementBtn.disabled = false;
        clearBtn.style.display = 'block';
      }
    }
  
    incrementBtn.addEventListener('click', function() {
      count++;
      updateCounter();
    });
  
    decrementBtn.addEventListener('click', function() {
      if (count > 0) {
        count--;
        updateCounter();
      }
    });
  
    clearBtn.addEventListener('click', function() {
      count = 0;
      updateCounter();
    });
  
    updateCounter();
  });
  