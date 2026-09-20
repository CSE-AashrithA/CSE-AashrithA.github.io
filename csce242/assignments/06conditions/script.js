const exerciseOneLink = document.getElementById("exercise-one-link");
const exerciseTwoLink = document.getElementById("exercise-two-link");
const exerciseOne = document.getElementById("exercise-one");
const exerciseTwo = document.getElementById("exercise-two");
const daysMissedInput = document.getElementById("days-missed");
const deductionMessage = document.getElementById("deduction-message");
const attendanceMessage = document.getElementById("attendance-message");
const daysLeft = document.getElementById("days-left");
const semesterMessage = document.getElementById("semester-message");
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

const showExerciseOne = () => {
    exerciseOne.classList.remove("hidden");
    exerciseTwo.classList.add("hidden");
};

const showExerciseTwo = () => {
    exerciseTwo.classList.remove("hidden");
    exerciseOne.classList.add("hidden");
};

const calculateDeduction = () => {
    const daysMissed = Number(daysMissedInput.value);
    const percentLost = (daysMissed / 25) * 7;

    if (daysMissedInput.value === "") {
        deductionMessage.innerHTML = "";
        attendanceMessage.innerHTML = "";
    } else if (daysMissed <= 0) {
        deductionMessage.innerHTML = "You will not lose any points for attendance.";
        attendanceMessage.innerHTML = "Nice job planning to attend every class!";
    } else if (daysMissed <= 2) {
        deductionMessage.innerHTML = `You will lose ${percentLost.toFixed(1)}% of your grade.`;
        attendanceMessage.innerHTML = "A couple of missed classes should be manageable.";
    } else if (daysMissed <= 5) {
        deductionMessage.innerHTML = `You will lose ${percentLost.toFixed(1)}% of your grade.`;
        attendanceMessage.innerHTML = "Try to stay caught up with notes and assignments.";
    } else if (daysMissed <= 10) {
        deductionMessage.innerHTML = `You will lose ${percentLost.toFixed(1)}% of your grade.`;
        attendanceMessage.innerHTML = "That is a lot of class time to miss, so plan carefully.";
    } else {
        deductionMessage.innerHTML = `You will lose ${percentLost.toFixed(1)}% of your grade.`;
        attendanceMessage.innerHTML = "This is not an online class. You are missing valuable learning opportunities.";
    }
};

const calculateDaysLeft = () => {
    const today = new Date();
    const lastDayOfClass = new Date(today.getFullYear(), 11, 4);
    const timeDifference = lastDayOfClass - today;
    const numberOfDays = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    daysLeft.innerHTML = `You have ${numberOfDays} days left in the semester.`;

    if (numberOfDays > 100) {
        semesterMessage.innerHTML = "There is plenty of time. Stay organized and keep working hard!";
    } else if (numberOfDays > 50) {
        semesterMessage.innerHTML = "The semester is moving along, so do not fall behind.";
    } else if (numberOfDays > 20) {
        semesterMessage.innerHTML = "Finals will be here soon. It is a good time to start preparing.";
    } else if (numberOfDays >= 0) {
        semesterMessage.innerHTML = "Almost there! Finish the semester strong.";
    } else {
        semesterMessage.innerHTML = "The semester is over. Enjoy your break!";
    }
};

const toggleMenu = () => {
    mainNav.classList.toggle("show-menu");

    if (mainNav.classList.contains("show-menu")) {
        menuToggle.innerHTML = "&#9650;";
    } else {
        menuToggle.innerHTML = "&#9660;";
    }
};

exerciseOneLink.onclick = showExerciseOne;
exerciseTwoLink.onclick = showExerciseTwo;
daysMissedInput.oninput = calculateDeduction;
menuToggle.onclick = toggleMenu;

calculateDaysLeft();