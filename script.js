let myToDos = []

//base variables
let add = document.getElementById('add-to-do')
let modal = document.getElementById('modal')
let toDoContainer = document.getElementById('to-do-container')
let modalForm = document.getElementById('modal-form')
let closeModal = document.getElementById('close-modal-btn')

let titleInput = document.getElementById('title')
let descriptionInput = document.getElementById('description')
let dateInput = document.getElementById('date')
let priorityInput = document.getElementById('priority')

let titleLabel = document.getElementById('title-label')
let descriptionLabel = document.getElementById('description-label')
let dateLabel = document.getElementById('date-label')
let priorityLabel = document.getElementById('priority-label')

//toDo class
class toDo {
  constructor(title, description, dueDate, priority, isDone = false) {
this.title = title
this.description = description
this.dueDate = dueDate
this.priority = priority
this.isDone = isDone
  }
}

//show / hide modal
add.addEventListener('click', function() {
modal.style.display = 'inline'
})

closeModal.addEventListener('click', function() {
  modal.style.display = 'none'
})

//displayTodos function
function displayToDos() {
  toDoContainer.innerHTML = ''
  
myToDos.forEach(function(toDo, index) {

  const toDoEntry = document.createElement('div')
  toDoEntry.id = 'toDoEntry'
  toDoEntry.innerHTML = 
  `
  <div class="to-do-card">
  ${titleLabel.textContent} ${toDo.title}<br>
  <div class="to-do-btns-container">
    <button class="expand-collapse-btn">show / hide details</button><br>
    <button class="delete-to-do-btn" data-index="${index}">delete</button>
    <label for="done" id="done-label">Task done?</label>
    <input type="checkbox" name="done" id="done" data-index="${index}">
  </div>
  <div class="expand-collapse-content" style="display: none;">
    ${descriptionLabel.textContent} ${toDo.description}<br> 
    ${dateLabel.textContent}  ${toDo.dueDate}<br>
    ${priorityLabel.textContent}  ${toDo.priority}<br>
  </div>
  </div>
`
const deleteButton = toDoEntry.querySelector('.delete-to-do-btn');
    deleteButton.addEventListener('click', function() {
      const toDoIndex = parseInt(this.getAttribute('data-index'));
      myToDos.splice(toDoIndex, 1);
      displayToDos();
    });

    toDoContainer.appendChild(toDoEntry)

    titleInput.value = ''
  descriptionInput.value = ''
  dateInput.value = ''
  priorityInput.value = ''
  modal.style.display = 'none'
})
let expandCollapseBtns = document.getElementsByClassName('expand-collapse-btn')
let expandCollapseContent = document.getElementsByClassName('expand-collapse-content')

for(let i = 0; i < expandCollapseBtns.length; i++)
  expandCollapseBtns[i].addEventListener('click', function() {
    if (expandCollapseContent[i].style.display === 'none') {
      expandCollapseContent[i].style.display = 'block'
    } else {
      expandCollapseContent[i].style.display = 'none'
    }
  })
  
  function toggleDone(toDoIndex) {
    const toDo = myToDos[toDoIndex];
    toDo.isDone = !toDo.isDone;
  }

  function toggleDisplay() {
    if (doneInput.checked) {
      doneLabel.textContent = "Task is done"
    } else {
      doneLabel.textContent = "Task is not done"
    }
  }

  let doneInput = document.getElementById('done')
  let doneLabel = document.getElementById('done-label')

  doneInput.addEventListener('change', function() {
    const toDoIndex = parseInt(this.getAttribute('data-index'));
    toggleDone(toDoIndex)
    toggleDisplay()
  })

}

//submit form event listener
modalForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const newToDo = new toDo(titleInput.value, descriptionInput.value, dateInput.value, priorityInput.value)
  myToDos.push(newToDo)
displayToDos()
})

