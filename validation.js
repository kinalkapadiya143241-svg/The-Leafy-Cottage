
// ==================================
// USER SIDE VALIDATIONS
// ==================================

function validateContact() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // 1. Name Validation
    if (!/^[A-Za-z ]{3,30}$/.test(name)) {
        alert("Name must contain 3-30 letters.");
        return false;
    }

    // 2. Email Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // 3. Phone Validation
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    // 4. Subject Validation
    if (subject.length < 3) {
        alert("Subject must contain at least 3 characters.");
        return false;
    }

    // 5. Message Validation
    if (message.length < 10) {
        alert("Message must contain at least 10 characters.");
        return false;
    }

    alert("Contact form submitted successfully!");
    return true;
}


// ==================================
// ADMIN SIDE VALIDATIONS
// ==================================

function validateAdminLogin() {
    let mobile = document.getElementById("adminMobile").value.trim();
    let password = document.getElementById("adminPassword").value;

    // 1. Mobile Validation
    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return false;
    }

    // 2. Password Validation
    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return false;
    }

    alert("Login details are valid!");
    return true;
}

function validatePlant() {
    let name = document.getElementById("plantName").value.trim();
    let price = document.getElementById("plantPrice").value;
    let stock = document.getElementById("plantStock").value;

    // 3. Plant Name Validation
    if (!/^[A-Za-z ]{2,30}$/.test(name)) {
        alert("Enter a valid plant name.");
        return false;
    }

    // 4. Price Validation
    if (price === "" || Number(price) <= 0) {
        alert("Plant price must be greater than zero.");
        return false;
    }

    // 5. Stock Validation
    if (stock === "" || !Number.isInteger(Number(stock)) || Number(stock) < 0) {
        alert("Stock must be a non-negative whole number.");
        return false;
    }

    alert("Plant details are valid!");
    return true;
}
