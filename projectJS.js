function generateMealPlan() {
    var email = document.getElementById('email').value;
    if (validateEmail(email)) {
        var mealPlanData = collectMealPlanData();
        var newWindow = window.open();
        newWindow.document.write("<html><head><title>Your Meal Plan</title></head><body>");
        newWindow.document.write("<pre>" + mealPlanData + "</pre>");
        newWindow.document.write("</body></html>");
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
    var meals = ['Breakfast', 'Snack', 'Lunch', 'Snack', 'Dinner'];

    days.forEach(day => {
        meals.forEach(meal => {
            var inputId = day.toLowerCase() + meal;
            var mealInput = document.getElementById(inputId).value;
            data += day + " " + meal + ": " + mealInput + "\n";
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
    var meals = ['Breakfast', 'Snack', 'Lunch', 'Snack', 'Dinner'];

    days.forEach(day => {
        meals.forEach(meal => {
            var inputId = day.toLowerCase() + meal;
            html += `<label for="${inputId}">${day} ${meal}:</label><br>`;
            html += `<input type="text" id="${inputId}" name="${inputId}"><br>`;
        });
    });

    return html;
}
