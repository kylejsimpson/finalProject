function generateMealPlan() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        var mealPlanData = collectMealPlanData();
        var newWindow = window.open();
        newWindow.document.write("<html><head><title>Your Meal Plan</title></head><body>");
        newWindow.document.write("<pre>" + mealPlanData + "</pre>");
        newWindow.document.write("</body></html>");
        newWindow.document.close(); // Close the document stream
    } else {
        alert("Please enter a valid email address.");
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function collectMealPlanData() {
    var data = "";
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];

    days.forEach(day => {
        meals.forEach(meal => {
            var inputId = day.toLowerCase() + meal.toLowerCase().replace(/ /g, "");
            console.log(inputId); // Log the ID to the console for debugging
            var element = document.getElementById(inputId); // Get the element by ID
            if (element) {
                var mealInput = element.value;
                data += day + " " + meal + ": " + mealInput + "\n";
            } else {
                console.error('Element not found: ' + inputId); // Log an error if the element is not found
            }
        });
    });

    return data;
}


function clearPlanner() {
    document.getElementById("mealPlanForm").reset();
}

function printPlanner() {
    window.print();
}

function generateMealInputs() {
    var html = "";
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner']; 

    days.forEach(day => {
        meals.forEach(meal => {
            var inputId = day.toLowerCase() + meal.toLowerCase().replace(/ /g, "");
            html += `<label for="${inputId}">${day} ${meal}:</label><br>`;
            html += `<input type="text" id="${inputId}" name="${inputId}"><br>`;
        });
    });

    document.getElementById("mealInputs").innerHTML = html;
}

