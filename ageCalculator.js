document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; 
    const year = parseInt(document.getElementById('year').value);

    // Validate input (basic validation, can be enhanced further)
    if (isNaN(day) || isNaN(month) || isNaN(year)) 
    {
        alert('Please Enter Valid Numbers For Day, Month, and Year.');
        return;
    }

    const birthday = new Date(year, month, day);

    const today = new Date();

    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();

   
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Your age is ${age} years and ${monthDiff} months `;
});
