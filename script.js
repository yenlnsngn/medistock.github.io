// Global variable to track authentication status
let authenticated = false;

// Function to authenticate the user
function authenticate(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "TestEmail@gmail.com" && password === "test12345") {
    authenticated = true;
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("inventoryPage").style.display = "block";
  } else {
    alert("Invalid email or password. Please try again.");
  }
}

// Function to show the signup form
function showSignupForm(event) {
  event.preventDefault();
  alert("Signup feature not implemented in this example.");
  // You can implement the signup functionality here if needed
}

// Function to log out the user
function logout() {
  authenticated = false;
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("inventoryPage").style.display = "none";
}

// Function to add a product to the inventory
function addProduct() {
  if (!authenticated) {
    alert("Please log in to add a product.");
    return;
  }

  const productName = document.getElementById("productName").value;
  const pricePerUnit = document.getElementById("pricePerUnit").value;
  const availableQuantity = document.getElementById("availableQuantity").value;

  const table = document.getElementById("inventoryTable");
  const row = table.insertRow(-1);
  const productNameCell = row.insertCell(0);
  const pricePerUnitCell = row.insertCell(1);
  const availableQuantityCell = row.insertCell(2);
  const actionCell = row.insertCell(3);

  productNameCell.innerHTML = productName;
  pricePerUnitCell.innerHTML = pricePerUnit;
  availableQuantityCell.innerHTML = availableQuantity;
  actionCell.innerHTML = '<button class="button" onclick="deleteProduct(this)">Delete</button>';

  document.getElementById("productName").value = "";
  document.getElementById("pricePerUnit").value = "";
  document.getElementById("availableQuantity").value = "";
}

// Function to delete a product from the inventory
function deleteProduct(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
