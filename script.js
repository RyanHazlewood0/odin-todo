let myToDos = []

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

class toDo {
  constructor(title, description, dueDate, priority) {
this.title = title
this.description = description
this.dueDate = dueDate
this.priority = priority
  }
}

add.addEventListener('click', function() {
modal.style.display = 'inline'
})

closeModal.addEventListener('click', function() {
  modal.style.display = 'none'
})

function displayToDos() {
  toDoContainer.innerHTML += 
  `
  <div id="toDoEntry">
  ${titleLabel.textContent} ${titleInput.value}<br>
  <button class="expand-collapse-btn">expand / collapse details</button><br>
  <div class="expand-collapse-content" style="display: none;">
   ${descriptionLabel.textContent} ${descriptionInput.value}<br> 
  ${dateLabel.textContent}  ${dateInput.value}<br>
  ${priorityLabel.textContent}  ${priorityInput.value}
  </div>
  </div>
  `
  titleInput.value = ''
  descriptionInput.value = ''
  dateInput.value = ''
  priorityInput.value = ''
  modal.style.display = 'none'

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

}

modalForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const newToDo = new toDo(titleInput.value, descriptionInput.value, dateInput.value, priorityInput.value)
  myToDos.push(newToDo)
displayToDos()
})




