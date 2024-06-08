document.addEventListener('DOMContentLoaded', function() {
  const lowerRange = document.getElementById('lower');
  const upperRange = document.getElementById('upper');
  const one = document.getElementById('one');
  const two = document.getElementById('two');

  // Set initial values
  one.value = lowerRange.value;
  two.value = upperRange.value;

  // Update text fields when range inputs change
  lowerRange.addEventListener('input', function() {
      one.value = lowerRange.value;
  });

  upperRange.addEventListener('input', function() {
      two.value = upperRange.value;
  });
});