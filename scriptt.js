document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const clientNumber = document.getElementById("clientNumber").value;
    const password = document.getElementById("password").value;

    // Prepare data for sending to the server
    const formData = {
      email,
      username,
      client_number: clientNumber,
      password,
    };

    // Use fetch to send a POST request to the server
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the response from the server
        // You can handle the response as needed, e.g., show a success message to the user
      })
      .catch((error) => console.error("Error:", error));
  });
