let mainContainer = document.getElementById('mainContainer');
document.getElementById('showUpdate').addEventListener('click', showUpdate);
document.getElementById('hideUpdate').addEventListener('click', hideUpdate);



function showUpdate(){
    mainContainer.innerHTML =  `
    <div class="container">
        <h1 class="display-4 mb-4 text-center">Covid-19 Summary</h1>
    </div>
   <div class="container text-center">

   <div class="row mb-5">
     <div class="col-sm-6 mb-4">
       <div class="card">
         <div class="card-header">
           <h5>Total Cases</h5>
         </div>
         <div class="card-body">
           <h3 class="card-text" id="totalCases"></h3>
         </div>
       </div>
     </div>
     <div class="col-sm-6 mb-4">
       <div class="card">
         <div class="card-header">
           <h5>Total Recovered</h5>
         </div>
         <div class="card-body">
           <h3 class="card-text" id="totalRecovered"></h3>
         </div>
       </div>
     </div>
    </div>

    <div class="row mb-5">
     <div class="col-sm-6 mb-4">
       <div class="card">
         <div class="card-header">
           <h5>Total Deaths</h5>
         </div>
         <div class="card-body">
           <h3 class="card-text" id="totalDeaths"></h3>
         </div>
       </div>
     </div>
     <div class="col-sm-6 mb-4">
       <div class="card">
         <div class="card-header">
           <h5>New Cases Today</h5>
         </div>
         <div class="card-body">
           <h3 class="card-text" id="totalNewCasesToday"></h3>
         </div>
       </div>
     </div>
    </div>

    <div class="row mb-5">
     <div class="col-sm-6 mb-4">
       <div class="card">
         <div class="card-header">
           <h5>New Deaths Today</h5>
         </div>
         <div class="card-body">
           <h3 class="card-text" id="totalNewDeathsToday"></h3>
         </div>
       </div>
     </div>
     <div class="col-sm-6 mb-4">
       <div class="card">
         <div class="card-header">
           <h5>Total Active Cases</h5>
         </div>
         <div class="card-body">
           <h3 class="card-text" id="totalActiveCases"></h3>
         </div>
       </div>
     </div>
    </div>
    `
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("https://api.thevirustracker.com/free-api?countryTotal=ng")
        .then(response => response.json())
        .then(result => {
          result.countrydata.forEach((update)=>{
            document.getElementById('totalCases').innerHTML= `${update.total_cases}`;
            document.getElementById('totalRecovered').innerHTML= `${update.total_recovered}`;
            document.getElementById('totalDeaths').innerHTML= `${update.total_deaths}`;
            document.getElementById('totalNewCasesToday').innerHTML= `${update.total_new_cases_today}`;
            document.getElementById('totalNewDeathsToday').innerHTML= `${update.total_new_deaths_today}`;
            document.getElementById('totalActiveCases').innerHTML= `${update.total_active_cases}`;
           })
        })
        .catch(error => console.log('error', error));

        
}

function hideUpdate(){
    mainContainer.innerHTML = '';
}


