const questionsData = {
  youth: [
    "Did I disobey my parents?",
    "Did I lie to teachers or friends?",
    "Did I use bad language?",
    "Did I skip prayer intentionally?",
    "Did I hurt someone physically or emotionally?"
  ],
  adult: [
    "Did I miss Sunday Mass without serious reason?",
    "Did I neglect prayer life?",
    "Did I act dishonestly at work?",
    "Did I hold grudges or refuse forgiveness?",
    "Did I fail in charity towards family?"
  ]
};

const questionsDiv = document.getElementById("questions");
const categorySelect = document.getElementById("category");

function loadQuestions() {
  const selected = categorySelect.value;
  const questions = questionsData[selected];

  questionsDiv.innerHTML = "";

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");

    div.innerHTML = `
      <input type="checkbox" id="q${index}">
      <label for="q${index}">${q}</label>
    `;

    questionsDiv.appendChild(div);
  });
}

function generateSummary() {
  const selected = categorySelect.value;
  const questions = questionsData[selected];

  let summaryText = "";

  questions.forEach((q, index) => {
    if (document.getElementById(`q${index}`).checked) {
      summaryText += "- " + q + "\n";
    }
  });

  document.getElementById("summary").value = summaryText;
}

categorySelect.addEventListener("change", loadQuestions);

loadQuestions();
