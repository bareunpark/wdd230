const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.getElementById('list');

button.addEventListener('click', function() {
  const chapter = input.value.trim();
  if (chapter !== '') {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.appendChild(deleteButton);
    list.appendChild(li);

    deleteButton.addEventListener('click', function() {
      li.remove();
    });

    input.value = '';
    input.focus();
  }
});


const date = new Date(document.lastModified);
document.getElementById("lastmodified").innerHTML = date

const d = new Date();
const year = date.getFullYear();

document.querySelector("#footercopyright").innerHTML = `&copy; ${year} | Bareun Park | WDD230 |`

