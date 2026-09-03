const itemInput = document.querySelector('#itemInput');
const addBtn = document.querySelector('#addBtn');
const itemList = document.querySelector('#itemList');

addBtn.addEventListener('click', () => {
    const text = itemInput.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    span.textContent = text;
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    li.append(span, deleteBtn);
    itemList.appendChild(li);

    itemInput.value = '';
    itemInput.focus();
});

// itemInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         addBtn.click();
//     }
// });


itemList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        const li = event.target.closest('li');
        li.remove();
    }
});