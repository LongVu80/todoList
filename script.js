function addTask() {
    let input = document.getElementById('input')
    let newTask = input.value;
    if(newTask != '') {
        let item = document.createElement('li');
        item.innerHTML ='<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" />' + 
        '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" />' + 
        '<input type="button" class="important" onclick="important(this.parentNode)" value="!" />' + newTask;

        // document.querySelector('#tasks').appendChild(item);
        document.getElementById('tasks').appendChild(item);

        input.value = '';
        input.placeholder = 'Enter next task';

    }
}

function markDone (item) { 
    item.className = 'finished';
}

function remove (item) {
    if (item.className == 'finished'){
        item.remove();
    }
         else{
             alert("You didn't finish the task yet")
         }
  }

  function important(item){
      item.className = 'red'
  }