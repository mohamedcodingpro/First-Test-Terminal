export function countAllPaarl(regNumbers) {
    // Split the string of registration numbers into an array
    var regNumbersArray = regNumbers.split(',');
    
    // Initialize a variable to store the count of Paarl registration numbers
    var count = 0;
    
    // Iterate through each registration number
    for (var i = 0; i < regNumbersArray.length; i++) {
        // Trim any leading or trailing whitespace from the registration number
        var regNumber = regNumbersArray[i].trim();
        
        // Check if the registration number starts with 'CJ' (indicating Paarl)
        if (regNumber.startsWith('CJ')) {
            // If it does, increment the count
            count++;
        }
    }
    
    // Return the count of Paarl registration numbers
    return count;
}