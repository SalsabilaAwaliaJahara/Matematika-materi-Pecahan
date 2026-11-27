function f(num, den) {
  return `<span class="frac"><span class="num">${num}</span><span class="den">${den}</span></span>`;
}

function mf(whole, num, den) {
  return `<span class="mixed"><span class="whole">${whole}</span>${f(num, den)}</span>`;
}

const pgQuestions = [
  {
    id: 1,
    prompt: `Pecahan yang senilai dengan ${f(3, 4)} adalah ....`,
    options: [f(6, 12), f(9, 12), f(12, 15), f(15, 16)],
    answer: 1,
    explanation: `Kalikan pembilang dan penyebut dengan 3: ${f(3, 4)} = ${f("3 × 3", "4 × 3")} = ${f(9, 12)}.`
  },
  {
    id: 2,
    prompt: `Bentuk pecahan paling sederhana dari ${f(24, 36)} adalah ....`,
    options: [f(12, 18), f(6, 9), f(4, 6), f(2, 3)],
    answer: 3,
    explanation: `FPB dari 24 dan 36 adalah 12, sehingga ${f("24 ÷ 12", "36 ÷ 12")} = ${f(2, 3)}.`
  },
  {
    id: 3,
    prompt: `Tanda perbandingan yang tepat untuk mengisi titik-titik pada ${f(5, 6)} ... ${f(7, 8)} adalah ....`,
    options: ["&gt;", "&lt;", "=", "&ge;"],
    answer: 1,
    explanation: `Samakan penyebut (KPK 6 dan 8 = 24): ${f(5, 6)} = ${f(20, 24)} dan ${f(7, 8)} = ${f(21, 24)}. Karena ${f(20, 24)} &lt; ${f(21, 24)}, maka tandanya &lt;.`
  },
  {
    id: 4,
    prompt: `Urutan pecahan berikut dari yang terkecil ke yang terbesar adalah: 0,6 ; ${f(2, 5)} ; 55% ; ${f(3, 4)}.`,
    options: [
      `${f(2, 5)} ; 55% ; 0,6 ; ${f(3, 4)}`,
      `55% ; ${f(2, 5)} ; 0,6 ; ${f(3, 4)}`,
      `${f(2, 5)} ; 0,6 ; 55% ; ${f(3, 4)}`,
      `${f(3, 4)} ; 0,6 ; 55% ; ${f(2, 5)}`
    ],
    answer: 0,
    explanation: `Ubah ke persen: ${f(2, 5)} = 40%, 55% = 55%, 0,6 = 60%, dan ${f(3, 4)} = 75%. Urutan terkecil ke terbesar: ${f(2, 5)} ; 55% ; 0,6 ; ${f(3, 4)}.`
  },
  {
    id: 5,
    prompt: `Bentuk pecahan biasa dari ${mf(3, 4, 5)} adalah ....`,
    options: [f(12, 5), f(15, 5), f(19, 5), f(23, 5)],
    answer: 2,
    explanation: `${mf(3, 4, 5)} = ${f("(3 × 5) + 4", 5)} = ${f(19, 5)}.`
  },
  {
    id: 6,
    prompt: `Bentuk desimal dari pecahan ${f(7, 8)} adalah ....`,
    options: ["0,75", "0,78", "0,85", "0,875"],
    answer: 3,
    explanation: `${f(7, 8)} = ${f("7 × 125", "8 × 125")} = ${f(875, 1000)} = 0,875.`
  },
  {
    id: 7,
    prompt: `Bentuk persen dari bilangan desimal 0,35 adalah ....`,
    options: ["3,5%", "35%", "350%", "0,35%"],
    answer: 1,
    explanation: `0,35 = ${f(35, 100)} = 35%.`
  },
  {
    id: 8,
    prompt: `Hasil dari ${f(2, 3)} + ${f(1, 4)} adalah ....`,
    options: [f(3, 7), f(3, 12), f(11, 12), f(13, 12)],
    answer: 2,
    explanation: `Samakan penyebut ke 12: ${f(8, 12)} + ${f(3, 12)} = ${f(11, 12)}.`
  },
  {
    id: 9,
    prompt: `Hasil dari ${mf(2, 1, 2)} + ${mf(1, 2, 5)} adalah ....`,
    options: [mf(3, 3, 7), mf(3, 7, 10), mf(3, 9, 10), mf(4, 1, 10)],
    answer: 2,
    explanation: `(2 + 1) + (${f(1, 2)} + ${f(2, 5)}) = 3 + (${f(5, 10)} + ${f(4, 10)}) = ${mf(3, 9, 10)}.`
  },
  {
    id: 10,
    prompt: `Hasil dari ${mf(4, 1, 3)} − ${mf(1, 5, 6)} adalah ....`,
    options: [mf(2, 1, 2), mf(2, 2, 3), mf(3, 1, 2), mf(3, 1, 3)],
    answer: 0,
    explanation: `${mf(4, 1, 3)} − ${mf(1, 5, 6)} = ${mf(4, 2, 6)} − ${mf(1, 5, 6)} = ${mf(3, 8, 6)} − ${mf(1, 5, 6)} = ${mf(2, 3, 6)} = ${mf(2, 1, 2)}.`
  },
  {
    id: 11,
    prompt: `Hasil dari 5,4 − 2,75 + 1,2 adalah ....`,
    options: ["3,45", "3,85", "4,05", "4,85"],
    answer: 1,
    explanation: `5,40 − 2,75 = 2,65, kemudian 2,65 + 1,20 = 3,85.`
  },
  {
    id: 12,
    prompt: `Hasil dari ${f(3, 5)} × ${mf(2, 1, 2)} adalah ....`,
    options: [mf(1, 1, 5), mf(1, 1, 2), mf(2, 3, 10), mf(2, 1, 2)],
    answer: 1,
    explanation: `${f(3, 5)} × ${f(5, 2)} = ${f(15, 10)} = ${f(3, 2)} = ${mf(1, 1, 2)}.`
  },
  {
    id: 13,
    prompt: `Hasil dari ${mf(3, 1, 3)} ÷ ${f(5, 6)} adalah ....`,
    options: [mf(2, 7, 9), "3", "4", mf(4, 1, 2)],
    answer: 2,
    explanation: `${f(10, 3)} ÷ ${f(5, 6)} = ${f(10, 3)} × ${f(6, 5)} = ${f(60, 15)} = 4.`
  },
  {
    id: 14,
    prompt: `Ibu membeli ${mf(3, 1, 2)} kg gula pasir. Sebanyak ${mf(1, 3, 4)} kg digunakan untuk membuat kue. Sisa gula pasir Ibu sekarang adalah ... kg.`,
    options: [mf(1, 1, 4), mf(1, 3, 4), mf(2, 1, 4), mf(2, 3, 4)],
    answer: 1,
    explanation: `${mf(3, 1, 2)} − ${mf(1, 3, 4)} = ${mf(3, 2, 4)} − ${mf(1, 3, 4)} = ${mf(2, 6, 4)} − ${mf(1, 3, 4)} = ${mf(1, 3, 4)} kg.`
  },
  {
    id: 15,
    prompt: `Di kelas V terdapat 40 siswa. Sebanyak ${f(3, 8)} bagian adalah siswa laki-laki. Banyak siswa perempuan di kelas V adalah ... orang.`,
    options: ["15", "20", "25", "30"],
    answer: 2,
    explanation: `Siswa laki-laki = ${f(3, 8)} × 40 = 15 orang. Siswa perempuan = 40 − 15 = 25 orang.`
  }
];

const isianQuestions = [
  {
    id: 1,
    prompt: `Bentuk pecahan paling sederhana dari ${f(36, 48)} adalah ....`,
    accepted: ["3/4"],
    displayAnswer: f(3, 4),
    placeholder: "Contoh: 3/4",
    explanation: `FPB dari 36 dan 48 adalah 12, sehingga ${f("36 ÷ 12", "48 ÷ 12")} = ${f(3, 4)}.`
  },
  {
    id: 2,
    prompt: `Bentuk persen dari ${f(9, 20)} adalah ....`,
    accepted: ["45%", "45"],
    displayAnswer: "45%",
    placeholder: "Contoh: 45%",
    explanation: `${f(9, 20)} = ${f("9 × 5", "20 × 5")} = ${f(45, 100)} = 45%.`
  },
  {
    id: 3,
    prompt: `Hasil dari ${mf(1, 3, 4)} + ${mf(2, 1, 6)} dalam bentuk pecahan campuran paling sederhana adalah ....`,
    accepted: ["3 11/12"],
    displayAnswer: mf(3, 11, 12),
    placeholder: "Contoh: 3 11/12",
    explanation: `(1 + 2) + (${f(3, 4)} + ${f(1, 6)}) = 3 + (${f(9, 12)} + ${f(2, 12)}) = ${mf(3, 11, 12)}.`
  },
  {
    id: 4,
    prompt: `Hasil dari 0,4 × 1,25 adalah ....`,
    accepted: ["0,5", "0.5", "0,50", "0.50", "1/2"],
    displayAnswer: "0,5",
    placeholder: "Contoh: 0,5",
    explanation: `0,4 × 1,25 = ${f(4, 10)} × ${f(125, 100)} = ${f(500, 1000)} = 0,5.`
  },
  {
    id: 5,
    prompt: `Hasil dari 6 ÷ ${f(3, 4)} adalah ....`,
    accepted: ["8"],
    displayAnswer: "8",
    placeholder: "Contoh: 8",
    explanation: `6 ÷ ${f(3, 4)} = 6 × ${f(4, 3)} = ${f(24, 3)} = 8.`
  }
];

const uraianQuestions = [
  {
    id: 1,
    prompt: `Pak Rudi memiliki sebidang tanah seluas 120 m². Sebanyak ${f(1, 3)} bagian ditanami jagung, ${f(1, 4)} bagian ditanami singkong, dan sisanya ditanami cabai. Hitunglah luas tanah yang ditanami cabai!`,
    explanation: `Bagian jagung + singkong = ${f(1, 3)} + ${f(1, 4)} = ${f(4, 12)} + ${f(3, 12)} = ${f(7, 12)}. Sisa bagian cabai = 1 − ${f(7, 12)} = ${f(5, 12)}. Luas cabai = ${f(5, 12)} × 120 = <strong>50 m²</strong>.`
  },
  {
    id: 2,
    prompt: `Siti memiliki pita sepanjang ${mf(4, 1, 2)} meter. Ia membeli lagi pita sepanjang ${mf(2, 3, 4)} meter. Pita tersebut kemudian digunakan untuk menghias kado sepanjang ${mf(3, 5, 8)} meter. Berapa meter sisa pita Siti sekarang?`,
    explanation: `Total pita = ${mf(4, 1, 2)} + ${mf(2, 3, 4)} = ${mf(4, 2, 4)} + ${mf(2, 3, 4)} = ${mf(7, 1, 4)} m. Sisa pita = ${mf(7, 1, 4)} − ${mf(3, 5, 8)} = ${mf(7, 2, 8)} − ${mf(3, 5, 8)} = ${mf(6, 10, 8)} − ${mf(3, 5, 8)} = <strong>${mf(3, 5, 8)} meter</strong>.`
  },
  {
    id: 3,
    prompt: `Ibu membuat ${mf(6, 1, 2)} liter sirup. Sirup tersebut akan dituangkan ke dalam beberapa botol kecil berkapasitas ${f(1, 4)} liter per botol. Berapa banyak botol kecil yang dibutuhkan Ibu?`,
    explanation: `${mf(6, 1, 2)} ÷ ${f(1, 4)} = ${f(13, 2)} × ${f(4, 1)} = ${f(52, 2)} = <strong>26 botol</strong>.`
  },
  {
    id: 4,
    prompt: `Dalam sebuah ujian Matematika yang terdiri dari 40 soal, Andi berhasil menjawab benar 85% dari seluruh soal. Berapa banyak soal yang dijawab salah atau tidak dijawab oleh Andi?`,
    explanation: `Soal benar = 85% × 40 = ${f(85, 100)} × 40 = 34 soal. Soal salah/tidak dijawab = 40 − 34 = <strong>6 soal</strong>.`
  },
  {
    id: 5,
    prompt: `Ayah mengendarai sepeda motor menempuh jarak ${mf(15, 3, 4)} km dalam waktu ${f(3, 4)} jam. Berapa km/jam kecepatan rata-rata sepeda motor Ayah?`,
    explanation: `Kecepatan = Jarak ÷ Waktu = ${mf(15, 3, 4)} ÷ ${f(3, 4)} = ${f(63, 4)} × ${f(4, 3)} = ${f(63, 3)} = <strong>21 km/jam</strong>.`
  }
];

const letters = ["A", "B", "C", "D"];
let isSubmitted = false;
let teacherMode = false;
let timerInterval = null;
let remainingSeconds = 60 * 60;

function normalizeAnswer(value) {
  return value.trim().replace(/\s*\/\s*/g, "/").replace(/\s+/g, " ").toLowerCase();
}

function renderQuestions() {
  const pgContainer = document.getElementById("pg-container");
  pgContainer.innerHTML = pgQuestions
    .map(
      (q) => `
      <article class="question-card" id="pg-card-${q.id}">
        <div class="question-title">
          <span class="question-num">${q.id}</span>
          <div>${q.prompt}</div>
        </div>
        <div class="options-grid">
          ${q.options
            .map(
              (opt, idx) => `
            <label class="option-label" id="pg-${q.id}-opt-${idx}">
              <input type="radio" name="pg-${q.id}" value="${idx}" />
              <span class="option-letter">${letters[idx]}.</span>
              <span>${opt}</span>
            </label>
          `
            )
            .join("")}
        </div>
        <div class="explanation-box hidden" id="pg-exp-${q.id}"></div>
      </article>
    `
    )
    .join("");

  const isianContainer = document.getElementById("isian-container");
  isianContainer.innerHTML = isianQuestions
    .map(
      (q) => `
      <article class="question-card" id="isian-card-${q.id}">
        <div class="question-title">
          <span class="question-num">${q.id}</span>
          <div>${q.prompt}</div>
        </div>
        <input
          type="text"
          class="short-answer-input"
          id="isian-input-${q.id}"
          placeholder="${q.placeholder}"
          autocomplete="off"
        />
        <div class="explanation-box hidden" id="isian-exp-${q.id}"></div>
      </article>
    `
    )
    .join("");

  const uraianContainer = document.getElementById("uraian-container");
  uraianContainer.innerHTML = uraianQuestions
    .map(
      (q) => `
      <article class="question-card" id="uraian-card-${q.id}">
        <div class="question-title">
          <span class="question-num">${q.id}</span>
          <div>${q.prompt}</div>
        </div>
        <textarea
          class="uraian-notes"
          id="uraian-input-${q.id}"
          placeholder="Catat langkah penyelesaianmu di sini (atau kerjakan di buku tugas)..."
        ></textarea>
        <div class="explanation-box hidden" id="uraian-exp-${q.id}"></div>
      </article>
    `
    )
    .join("");

  updateExplanationsVisibility();
}

function updateExplanationsVisibility() {
  const showAnswers = isSubmitted || teacherMode;

  pgQuestions.forEach((q) => {
    const exp = document.getElementById(`pg-exp-${q.id}`);
    q.options.forEach((_, idx) => {
      const optEl = document.getElementById(`pg-${q.id}-opt-${idx}`);
      optEl.classList.toggle("is-answer", showAnswers && idx === q.answer);
    });
    if (showAnswers) {
      exp.innerHTML = `<strong>Kunci: ${letters[q.answer]}</strong> — ${q.explanation}`;
      exp.classList.remove("hidden");
    } else {
      exp.classList.add("hidden");
    }
  });

  isianQuestions.forEach((q) => {
    const exp = document.getElementById(`isian-exp-${q.id}`);
    if (showAnswers) {
      exp.innerHTML = `<strong>Kunci: ${q.displayAnswer}</strong> — ${q.explanation}`;
      exp.classList.remove("hidden");
    } else {
      exp.classList.add("hidden");
    }
  });

  uraianQuestions.forEach((q) => {
    const exp = document.getElementById(`uraian-exp-${q.id}`);
    if (showAnswers) {
      exp.innerHTML = `<strong>Pembahasan (Maks. 10 poin):</strong> ${q.explanation}`;
      exp.classList.remove("hidden");
    } else {
      exp.classList.add("hidden");
    }
  });
}

function gradeQuiz(event) {
  event.preventDefault();
  isSubmitted = true;

  let pgCorrect = 0;
  pgQuestions.forEach((q) => {
    const selected = document.querySelector(`input[name="pg-${q.id}"]:checked`);
    const card = document.getElementById(`pg-card-${q.id}`);
    card.classList.remove("correct", "incorrect");

    if (selected && Number(selected.value) === q.answer) {
      pgCorrect += 1;
      card.classList.add("correct");
    } else {
      card.classList.add("incorrect");
    }
  });

  let isianCorrect = 0;
  isianQuestions.forEach((q) => {
    const input = document.getElementById(`isian-input-${q.id}`);
    const card = document.getElementById(`isian-card-${q.id}`);
    const normalized = normalizeAnswer(input.value);
    card.classList.remove("correct", "incorrect");

    if (q.accepted.includes(normalized)) {
      isianCorrect += 1;
      card.classList.add("correct");
    } else {
      card.classList.add("incorrect");
    }
  });

  const pgScore = pgCorrect * 2;
  const isianScore = isianCorrect * 4;
  const totalAuto = pgScore + isianScore;

  const studentName = document.getElementById("student-name").value.trim() || "Siswa";
  const studentNumber = document.getElementById("student-number").value.trim();
  const identityText = studentNumber ? `${studentName} (Absen ${studentNumber})` : studentName;

  const banner = document.getElementById("result-banner");
  banner.classList.remove("hidden");
  banner.innerHTML = `
    <div class="result-summary">
      <div>
        <strong>Hasil Evaluasi — ${identityText}</strong>
        <p style="margin: 0.25rem 0 0; color: var(--muted);">
          Bagian A: <strong>${pgCorrect}/15 benar</strong> (${pgScore} poin) •
          Bagian B: <strong>${isianCorrect}/5 benar</strong> (${isianScore} poin).
          Pembahasan Bagian C (maks. 50 poin) kini ditampilkan untuk koreksi mandiri/guru.
        </p>
      </div>
      <div class="score-pill">Skor Otomatis: ${totalAuto} / 50</div>
    </div>
  `;

  updateExplanationsVisibility();
  banner.scrollIntoView({ behavior: "smooth", block: "center" });
}

function formatTime(totalSeconds) {
  const mins = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const secs = String(totalSeconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

function toggleTimer() {
  const btn = document.getElementById("toggle-timer");
  const display = document.getElementById("timer-display");

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    btn.textContent = "Lanjutkan";
    return;
  }

  btn.textContent = "Jeda";
  timerInterval = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds -= 1;
      display.textContent = formatTime(remainingSeconds);
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      btn.textContent = "Waktu Habis";
      btn.disabled = true;
    }
  }, 1000);
}

function resetQuiz() {
  isSubmitted = false;
  document.getElementById("quiz-form").reset();
  document.getElementById("result-banner").classList.add("hidden");

  document.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("correct", "incorrect");
  });

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  remainingSeconds = 60 * 60;
  document.getElementById("timer-display").textContent = formatTime(remainingSeconds);
  const timerBtn = document.getElementById("toggle-timer");
  timerBtn.textContent = "Mulai Timer";
  timerBtn.disabled = false;

  updateExplanationsVisibility();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  renderQuestions();

  document.getElementById("quiz-form").addEventListener("submit", gradeQuiz);
  document.getElementById("toggle-timer").addEventListener("click", toggleTimer);
  document.getElementById("reset-btn").addEventListener("click", resetQuiz);
  document.getElementById("print-btn").addEventListener("click", () => window.print());

  const teacherBtn = document.getElementById("teacher-mode-btn");
  teacherBtn.addEventListener("click", () => {
    teacherMode = !teacherMode;
    teacherBtn.classList.toggle("active", teacherMode);
    teacherBtn.textContent = teacherMode ? "Mode Guru: Aktif" : "Mode Guru: Nonaktif";
    updateExplanationsVisibility();
  });
});
