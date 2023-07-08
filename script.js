// const renderAppointmentForm = () => {
//     display.innerHTML = '';
  
//     let form = document.createElement('div');
//     form.setAttribute('class', 'appointment-form');
  
//     let title = document.createElement('h4');
//     title.textContent = 'Book an Appointment';
//     form.appendChild(title);
  
//     let descriptionLabel = document.createElement('label');
//     descriptionLabel.textContent = 'Emergency Description:';
//     form.appendChild(descriptionLabel);
  
//     let descriptionInput = document.createElement('textarea');
//     descriptionInput.setAttribute('id', 'emergency-description');
//     form.appendChild(descriptionInput);
  
//     let urgencyLabel = document.createElement('label');
//     urgencyLabel.textContent = 'Urgency:';
//     form.appendChild(urgencyLabel);
  
//     let urgencyDropdown = document.createElement('select');
//     urgencyDropdown.setAttribute('id', 'urgency-dropdown');
  
//     let optionUrgent = document.createElement('option');
//     optionUrgent.textContent = 'Urgent';
//     urgencyDropdown.appendChild(optionUrgent);
  
//     let optionMinor = document.createElement('option');
//     optionMinor.textContent = 'Minor';
//     urgencyDropdown.appendChild(optionMinor);
  
//     form.appendChild(urgencyDropdown);
  
//     let submitButton = document.createElement('button');
//     submitButton.textContent = 'Submit';
//     form.appendChild(submitButton);
  
//     display.appendChild(form);
//   };

document.addEventListener('DOMContentLoaded', () => {
    let display = document.getElementById('display');
    let review = document.getElementById('reviews');
    let contact = document.getElementById('contact');
    let home = document.getElementById('home');
    let searchInput = document.getElementById('search2');

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
            let book = document.createElement('input');
            book.setAttribute("type", "submit");
            book.setAttribute("value", "Book");
            list.appendChild(book);

            display.appendChild(list)
        });
   }))
   homepage.then(console.log);

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
    