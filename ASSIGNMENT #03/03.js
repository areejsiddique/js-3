

(async function() {
    const response = await fetch("./data.json");
    const data = await response.json();
  
    
    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("movie-list");
    const detailsElem = document.getElementById("movieDetailsContainer");
  
    function loadMovieDetails(data){
      console.log(data);
      detailsElem.innerHTML = `
      <h2 class="title">${data.title}</h2>
      <ul>${data.genres.map(function(genres){
        return "<li>" + genres + "</li>"
      }).join("")}</ul>
      <h2>Overview</h2>
      <div>${data.overview}</div>
      <h2>Title</h2>
      <div>${data.title}</div>
      <h2>Home page</h2>
      <div>${data.homepage}</div>
      `;
    }
    
    function displaySearchResults (results){
      listElem.innerHTML = "";
       results.forEach(function(data){
         const li = document.createElement("li");
         li.innerHTML = data.title;
         li.addEventListener("click",function(){
          loadMovieDetails(data);
         })
         listElem.appendChild(li);
       })
    }
  
        function search(){
          const query = inputElem.value.toLowerCase();
          const results = data.filter(function(data){
            return data.title.toLowerCase().includes(query)
        });
        
        displaySearchResults(results);
      }
      
      btnElem.addEventListener("click",search);
  })();
    