window.addEventListener('load', function() {
  
  fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response){
    response.json().then(function(json){
      console.log(json);
      

      let container = document.getElementById("container");
      let astronauts = `<h3>Total Astronauts: ${json.length}</h3>`;
      json.sort(function(a,b){return b.hoursInSpace - a.hoursInSpace});
      for (astronaut of json) {
        astronauts += `
          <div class="astronaut">
            <div class="bio">
              <h3>${astronaut.firstName} ${astronaut.lastName}<h3>
              <ul>
                <li>Hours in space: ${astronaut.hoursInSpace}</li>
        `
        if(astronaut.active) {
          astronauts += `<li style="color:green;">Active: ${astronaut.active}</li>`
        } else {
          astronauts += `<li>Active: ${astronaut.active}</li>`
        }
        astronauts += `        
                <li>Skills: ${astronaut.skills.join(', ')}</li>
              </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
          </div>
        `;
      }
      container.innerHTML = astronauts;
    });
  });

});