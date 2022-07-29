console.log("Dylson, this is working!")
firstSetEl = document.getElementById("first-set");
secondSetEl = document.getElementById("second-set");
thirdSetEl = document.getElementById("third-set");

// // Dynamically creating the question headers
var questionHeader = document.createElement("h2");
questionHeader.setAttribute("data-number", "");
questionHeader.textContent = "This is where the questions will go"
firstSetEl.appendChild(questionHeader);
secondSetEl.appendChild(questionHeader);

// Dynamically creating the true button
var trueBtnEl = document.createElement("button");
trueBtnEl.setAttribute("type","button");
trueBtnEl.setAttribute("class","btn btn-info");
trueBtnEl.textContent="True";
firstSetEl.appendChild(trueBtnEl);
secondSetEl.appendChild(trueBtnEl);
