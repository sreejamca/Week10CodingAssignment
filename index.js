
//selecting the button element from HTML DOM.
    const button=document.getElementById("btn");
    //Add an event to the button.
    button.addEventListener("click",(event)=>{
        

        //getting the input values of each text field.
        const fname=document.getElementById("fname").value.trim();
        const lname=document.getElementById("Lname").value.trim();
        const contNum=document.getElementById("Cnum").value.trim();
        const email=document.getElementById("email").value.trim();
        const zipCode=document.getElementById("zip").value.trim();
        const state=document.getElementById("state").value.trim();
        const table=document.getElementById("table").value;
        const tr=document.getElementById("tablerow").value;

        if(fname==''||lname==''||contNum==''||email==''||zipCode==''||state=='')
        {
            validate(event);
            return;
        }
        //invoking an addRow function.
        addRow(fname,lname,contNum,email,zipCode,state);
        //invoking a clearData function.
        clearData();
    
        
        
        
        // A function to clear the text field after appending the values to the table.
        function clearData()
        {
            document.getElementById("fname").value="";//value=empty.
            document.getElementById("Lname").value="";
            document.getElementById("Cnum").value="";
            document.getElementById("email").value="";
            document.getElementById("zip").value="";
            document.getElementById("state").value="";
    
        }

    // A function to add row to the table.
        function addRow(fname,lname,contNum,email,zipCode,state) {
            // get the parent element(table).
            
            let parent = document.getElementById("table1");
            //Creating a new element for table row.
            let newElement = document.createElement('tr');
            // creating a new cell to hold table data.
            let cell1 = document.createElement('td');
            //add the text value to the first cell.
            cell1.textContent = fname;
            //append the cell value to the table row.
            newElement.appendChild(cell1);

            let cell2 = document.createElement('td');
            cell2.textContent = lname;
            newElement.appendChild(cell2);

            let cell3 = document.createElement('td');
            cell3.textContent = contNum;
            newElement.appendChild(cell3);

            let cell4 = document.createElement('td');
            cell4.textContent = email;
            newElement.appendChild(cell4);

            let cell5 = document.createElement('td');
            cell5.textContent = zipCode;
            newElement.appendChild(cell5);

            let cell6 = document.createElement('td');
            cell6.textContent = state;
            newElement.appendChild(cell6);

            parent.appendChild(newElement);
            
        }
    })
   
    // Example starter JavaScript for disabling form submissions if there are invalid fields
function validate(event) {
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        })
      }


  
    
