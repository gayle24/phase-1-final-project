document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');
    let review = document.getElementById('reviews');
    let contact = document.getElementById('contact');
    let home = document.getElementById('home');
    let searchInput = document.getElementById('search2');
    let booking = document.getElementById("booking");

    const homepage = (fetch('https://dark-gold-scarab-shoe.cyclic.app/hospitals')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(data => {
            let list = document.createElement('div')
            
            list.setAttribute('class', "list")

            let name = document.createElement('p');
            name.textContent = `${data.name}`;
            list.appendChild(name);
            let location = document.createElement('p');
            location.textContent = `${data.location}`;
            list.appendChild(location);
            let zipcode = document.createElement('p');
            zipcode.textContent = `Zipcode: ${data.zipCode}`;
            list.appendChild(zipcode);
            let bedcap = document.createElement('p');
            bedcap.textContent = `Available bed capacity: ${data.bedCapacity}`;
            list.appendChild(bedcap);

            display.appendChild(list)
       });
   }))
   homepage.then(console.log());

   home.addEventListener("click", ()=>{
    return homepage.then(console.log())
})

      review.addEventListener("click", ()=>{
        display.innerHTML = "";
        let review = document.createElement("div");
        review.setAttribute("class", "review");
        let revHead = document.createElement("h4");
        revHead.textContent = "Write Your Review Here";
        review.appendChild(revHead)
        let input = document.createElement("textarea");
        input.setAttribute("id", "textarea");
        review.appendChild(input);
        let submit = document.createElement("input")
        submit.setAttribute("type", "submit")
        submit.setAttribute("value", "Submit Review")
        review.appendChild(submit);

        submit.addEventListener("submit", ()=>{
            let p = document.createElement("p")
            p.innerHTML = "Review Submitted";
            review.appendChild(p)
        })

        display.appendChild(review)

        

    });


    fetch('https://dark-gold-scarab-shoe.cyclic.app/hospitals')
    .then(resp => resp.json())
    .then(data => {
        const originalData = [...data];

        
        const filterData = (searchTerm) => {
            const capitalizedSearchTerm = searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
            const filteredData = originalData.filter(item =>
              item.location.toLowerCase().startsWith(capitalizedSearchTerm.toLowerCase())
            );
            return filteredData;
          };
          
          

        const renderData = (data) => {
            display.innerHTML = ''; 

            if (data.length === 0) {
                display.textContent = 'No results found.';
            } else {
                data.forEach(data => {
                    let list = document.createElement('div');
                    list.setAttribute('class', "list");

                    let name = document.createElement('p');
                    name.textContent = `${data.name}`;
                    list.appendChild(name);
                    let location = document.createElement('p');
                    location.textContent = `${data.location}`;
                    list.appendChild(location);
                    let zipcode = document.createElement('p');
                    zipcode.textContent = `${data.zipCode}`;
                    list.appendChild(zipcode);

                    display.appendChild(list);
                });
            }
        };

        searchInput.addEventListener('input', (event) => {
            const searchTerm = event.target.value;
            const filteredData = filterData(searchTerm);
            renderData(filteredData);
        });

        renderData(data);
    });
});   
    
booking.addEventListener("click", ()=>{
    display.innerHTML = "";
    display.style.display = "block";
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'content');

    const formHeading = document.createElement('h2');
    formHeading.textContent = 'Book an Appointment';
    formContainer.appendChild(formHeading);

    const appointmentForm = document.createElement('form');
    appointmentForm.setAttribute('id', 'appointmentForm');
    
    const emergencyLabel = document.createElement('label');
    emergencyLabel.setAttribute('for', 'emergencyDescription');
    emergencyLabel.textContent = 'Emergency Description:';
    appointmentForm.appendChild(emergencyLabel);

    const emergencyTextarea = document.createElement('textarea');
    emergencyTextarea.setAttribute('id', 'emergencyDescription');
    emergencyTextarea.setAttribute('name', 'emergencyDescription');
    appointmentForm.appendChild(emergencyTextarea);

    const urgencyLabel = document.createElement('label');
    urgencyLabel.setAttribute('for', 'urgency');
    urgencyLabel.textContent = 'Urgency:';
    appointmentForm.appendChild(urgencyLabel);

    const urgencySelect = document.createElement('select');
    urgencySelect.setAttribute('id', 'urgency');
    urgencySelect.setAttribute('name', 'urgency');

    const option1 = document.createElement('option');
    option1.setAttribute('value', 'urgent');
    option1.textContent = 'Urgent';
    urgencySelect.appendChild(option1);

    const option2 = document.createElement('option');
    option2.setAttribute('value', 'minor');
    option2.textContent = 'Minor';
    urgencySelect.appendChild(option2);

    appointmentForm.appendChild(urgencySelect);

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    appointmentForm.appendChild(submitButton);

    formContainer.appendChild(appointmentForm);

    display.appendChild(formContainer);
  });

  contact.addEventListener("click", ()=>{
    display.innerHTML = "";
    let p1 = document.createElement("p");
    p1.innerHTML = "Mobile Number: +254-774-747-474";
    display.appendChild(p1)
    let p2 = document.createElement("p");
    p2.innerHTML = "Address: 1234 Main Street, Anytown, Kenya";
    display.appendChild(p2)
    let p3 = document.createElement("p");
    p3.innerHTML = "View my github portfolio here: <a href='https://github.com/gayle24'>https://github.com/gayle24</a>";
    display.appendChild(p3)
    let p4 = document.createElement("p");
    p4.innerHTML = "View my personal website here: <a href='https://gayle24.github.io/personal-website/'>https://gayle24.github.io/personal-website/</a>";
    display.appendChild(p4)
  });

  home.addEventListener("click", ()=>{
    display.innerHTML = "";
    fetch('https://dark-gold-scarab-shoe.cyclic.app/hospitals')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(data => {
            let list = document.createElement('div')
            
            list.setAttribute('class', "list")

            let name = document.createElement('p');
            name.textContent = `${data.name}`;
            list.appendChild(name);
            let location = document.createElement('p');
            location.textContent = `${data.location}`;
            list.appendChild(location);
            let zipcode = document.createElement('p');
            zipcode.textContent = `Zipcode: ${data.zipCode}`;
            list.appendChild(zipcode);
            let bedcap = document.createElement('p');
            bedcap.textContent = `Available bed capacity: ${data.bedCapacity}`;
            list.appendChild(bedcap);
            
            display.appendChild(list)
       })
  })
})
