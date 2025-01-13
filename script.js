// Selezione degli elementi del DOM
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');

// Aggiungi evento per il form
taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();
    const category = categorySelect.value;

    if (taskText) {
        const taskList = document.getElementById(`${category.toLowerCase()}List`);
        const li = document.createElement('li');

        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">✖</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
    }
});

// Gestisci la rimozione delle attività
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('delete')) {
        const li = e.target.closest('li');
        li.remove();
    }
});
