document.addEventListener("DOMContentLoaded", () => {
  let content = document.getElementById("new-task-description")
  let submit = document.getElementById('submit')
  let list = document.getElementById('tasks')
  
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    let li = document.createElement('li');
    li.textContent = `${content.value} `
    let btn = document.createElement('button');
    btn.textContent = "x";
    btn.addEventListener('click', handleDelete);
    li.append(btn)
    list.append(li)
    content.value = " "

  })

  
  function handleDelete(e){
    e.target.parentNode.remove();
  } 

});





