// Quiz Data (10 questions)
const quizData = [
    {
        question: "Which subject do you enjoy most?",
        options: [
            { text: "Mathematics", career: "Mathematician", img: "assets/math.png" },
            { text: "Biology", career: "Doctor", img: "assets/biology.png" },
            { text: "Programming", career: "Software Engineer", img: "assets/programming.png" },
            { text: "Storytelling", career: "Writer", img: "assets/storytelling.png" },
            { text: "Art & Design", career: "Designer", img: "assets/art.png" }
        ]
    },
    {
        question: "How do you prefer solving problems?",
        options: [
            { text: "Analyze data", career: "Data Scientist", img: "assets/data.png" },
            { text: "Build physical things", career: "Mechanical Engineer", img: "assets/gears.png" },
            { text: "Work with people", career: "Psychologist", img: "assets/psychology.png" },
            { text: "Write code", career: "Software Engineer", img: "assets/programming.png" },
            { text: "Imagine new worlds", career: "Writer", img: "assets/storytelling.png" }
        ]
    },
    {
        question: "What’s your ideal work environment?",
        options: [
            { text: "Lab/Research", career: "Scientist", img: "assets/lab.png" },
            { text: "Hospital/Clinic", career: "Doctor", img: "assets/doctor.png" },
            { text: "Tech Office", career: "Software Engineer", img: "assets/office.png" },
            { text: "Studio/Workshop", career: "Designer", img: "assets/studio.png" },
            { text: "Outdoors/Nature", career: "Environmental Scientist", img: "assets/nature.png" }
        ]
    },
    {
        question: "Which skill excites you most?",
        options: [
            { text: "Machine learning", career: "AI Researcher", img: "assets/ai.png" },
            { text: "Diagnosing illness", career: "Doctor", img: "assets/doctor.png" },
            { text: "Data analysis", career: "Data Scientist", img: "assets/data.png" },
            { text: "Building robots", career: "Robotics Engineer", img: "assets/robot.png" },
            { text: "Creating music/art", career: "Creative Artist", img: "assets/music.png" }
        ]
    },
    {
        question: "Which project would you choose in a hackathon?",
        options: [
            { text: "Code a mobile app", career: "App Developer", img: "assets/mobile-app.png" },
            { text: "Invent a medical device", career: "Biomedical Engineer", img: "assets/medical-device.png" },
            { text: "Visualize global climate data", career: "Environmental Scientist", img: "assets/nature.png" },
            { text: "Write a short story", career: "Writer", img: "assets/storytelling.png" },
            { text: "Design a brand logo", career: "Designer", img: "assets/design.png" }
        ]
    },
    {
        question: "How do you like to collaborate?",
        options: [
            { text: "Small technical team", career: "Software Engineer", img: "assets/team.png" },
            { text: "With scientists/doctors", career: "Doctor", img: "assets/doctor.png" },
            { text: "Creative brainstorming", career: "Designer", img: "assets/design.png" },
            { text: "Analyzing data together", career: "Data Scientist", img: "assets/data.png" },
            { text: "Debate and discussion", career: "Lawyer", img: "assets/law.png" }
        ]
    },
    {
        question: "Which field interests you most?",
        options: [
            { text: "Healthcare", career: "Doctor", img: "assets/doctor.png" },
            { text: "Tech/AI", career: "AI Researcher", img: "assets/ai.png" },
            { text: "Engineering", career: "Mechanical Engineer", img: "assets/gears.png" },
            { text: "Media/Journalism", career: "Journalist", img: "assets/media.png" },
            { text: "Visual Arts", career: "Designer", img: "assets/design.png" }
        ]
    },
    {
        question: "What problem do you want to solve?",
        options: [
            { text: "Disease eradication", career: "Doctor", img: "assets/doctor.png" },
            { text: "Automate tasks", career: "Robotics Engineer", img: "assets/robot.png" },
            { text: "Climate change", career: "Environmental Scientist", img: "assets/nature.png" },
            { text: "Spread ideas", career: "Writer", img: "assets/storytelling.png" },
            { text: "Create beautiful designs", career: "Designer", img: "assets/design.png" }
        ]
    },
    {
        question: "Choose a tech challenge to tackle:",
        options: [
            { text: "Build a chatbot", career: "NLP Engineer", img: "assets/nlp.png" },
            { text: "Analyze stock markets", career: "Data Scientist", img: "assets/data.png" },
            { text: "Design an app interface", career: "Designer", img: "assets/design.png" },
            { text: "Make robots walk", career: "Robotics Engineer", img: "assets/robot.png" },
            { text: "Develop a VR game", career: "Game Developer", img: "assets/game-dev.png" }
        ]
    },
    {
        question: "Which sounds like a fun weekend?",
        options: [
            { text: "Read science articles", career: "Scientist", img: "assets/lab.png" },
            { text: "Sketch or paint", career: "Creative Artist", img: "assets/art.png" },
            { text: "Code new projects", career: "App Developer", img: "assets/programming.png" },
            { text: "Nature hike", career: "Environmental Scientist", img: "assets/nature.png" },
            { text: "Write a blog", career: "Journalist", img: "assets/storytelling.png" }
        ]
    }
];

// Career descriptions
const careerDesc = {
    "AI Researcher": "You love working with intelligent systems and algorithms!",
    "Doctor": "You care deeply about human health and want to make a difference.",
    "Data Scientist": "You enjoy finding insights in complex data.",
    "Mathematician": "You thrive on logic, patterns, and problem solving.",
    "Software Engineer": "Coding is your language; building apps drives you.",
    "Writer": "You communicate ideas and stories that inspire.",
    "Designer": "You create visuals, brands, and experiences.",
    "Robotics Engineer": "You enjoy building intelligent machines and solving technical problems.",
    "App Developer": "You love creating practical apps that people use daily.",
    "Scientist": "You enjoy research, experimentation, and discovering new knowledge.",
    "NLP Engineer": "You love language technologies and AI-based text processing.",
    "Game Developer": "You enjoy creating interactive entertainment experiences.",
    "Journalist": "You enjoy researching, writing, and sharing information.",
    "Creative Artist": "You love expressing creativity through art and design.",
    "Lawyer": "You enjoy debate, law, and advocacy."
};

let currentQuestion = 0;
let answers = [];

function startQuiz() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    currentQuestion = 0;
    answers = [];
    renderQuestion();
}

function renderQuestion() {
    const q = quizData[currentQuestion];
    document.getElementById("question-counter").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    document.getElementById("question").textContent = q.question;

    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");

        const img = document.createElement("img");
        img.src = `/static/${opt.img}`; // Flask static path
        img.alt = opt.text;

        btn.appendChild(img);
        btn.appendChild(document.createTextNode(opt.text));

        btn.onclick = () => selectAnswer(idx, btn);
        optionsEl.appendChild(btn);
    });

    document.getElementById("submit-btn").classList.add("hidden");
    const percent = (currentQuestion / quizData.length) * 100;
    document.getElementById("progress").style.width = `${percent}%`;
}

function selectAnswer(optionIdx, btn) {
    answers[currentQuestion] = quizData[currentQuestion].options[optionIdx].career;
    Array.from(document.getElementById("options").children).forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    document.getElementById("submit-btn").classList.remove("hidden");
}

document.getElementById("submit-btn").onclick = function() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        renderQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");

    const freq = {};
    answers.forEach(a => freq[a] = (freq[a] || 0) + 1);

    const career = Object.keys(freq).reduce((a,b) => freq[a] >= freq[b] ? a : b);
    document.getElementById("career").textContent = career;
    document.getElementById("career-desc").textContent = careerDesc[career] || "Explore new horizons in your career!";
    document.getElementById("progress").style.width = "100%";
}

function restartQuiz() {
    document.getElementById("result-container").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
}
