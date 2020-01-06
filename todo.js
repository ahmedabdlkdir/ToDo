document.getElementById('add').addEventListener('click', function(){

    //get the text and the text header from the fields
    var addtxtheader = document.getElementById('addtxtheader').value;
    var addtxt = document.getElementById('addtxt').value;

    // get the list 
    var list = document.getElementById('todolist');
 

    //create elements

    var listitem = document.createElement('li')
    var todotxtheader = document.createElement('div');
    var todotxthd = document.createElement('div');
    var deleteitem = document.createElement('div');
    var deletex = document.createElement('i');


    var todohtxt = document.createElement('h3');
    var todotext = document.createElement('div');
    var todotxt = document.createElement('p');

    //add classes to their respected elements
    listitem.classList.add('todoitem');
    todotxtheader.classList.add('todotextheader');
    todotxthd.classList.add('todotxthd');
    deleteitem.classList.add('delete');
    todotext.classList.add('todotext');

    //append elements
    list.insertBefore(listitem, list.childNodes[0])
    listitem.appendChild(todotxtheader);
    todotxtheader.appendChild(todotxthd);
    todotxthd.appendChild(todohtxt);
    todotxtheader.appendChild(deleteitem);
    deleteitem.appendChild(deletex);
    deletex.innerHTML = '<i id="deletex" class="far fa-window-close deletex" >'
    listitem.appendChild(todotext);
    todotext.appendChild(todotxt)

    //assign the input value
    todohtxt.innerHTML = addtxtheader;
    todotxt.innerHTML = addtxt;

    addListener();
  
    })
    
    function addListener(){
        var elements = document.getElementsByClassName('delete');
        for(var element in elements){
          elements[element].addEventListener('click', function(e){
            e.target.parentNode.parentNode.parentNode.parentNode.remove(); 

          })

        }
      }  
 addListener();