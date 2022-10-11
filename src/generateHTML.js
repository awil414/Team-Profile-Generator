// Manager card
const generateManager = manager => {
    return `
        <div class="card text-center m-3 shadow" style="max-width: 18rem;">        
            <div class="card-header bg-primary text-white">
            <h3> ${manager.name}</h3>
            <p class="h4">Role: ${manager.getRole()}</p>
        </div>
        <div class="card-body bg-light">
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p> 
            <p class="card-text">Office Number: ${manager.officeNumber}</p>
        
        </div>
    `;
}

// Engineer Card
const generateEngineer = engineer => {
    return `
   
        <div class="card text-center m-3 shadow" style="max-width: 18rem;">      
            <div class="card-header bg-primary text-white">
            <h3> ${engineer.name}</h3>
            <p class="h4">Role: ${engineer.getRole()}</p>
        </div>
        <div class="card-body bg-light">
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p> 
            <p class="card-text">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>             
      
        </div>
    
    `;
}

// Intern Card
const generateIntern = intern => {
    return `
        <div class="card text-center" style="max-width: 18rem;">  
            <div class="card-header bg-primary text-white">
            <h3> ${intern.name}</h3>
            <p class="h4">Role: ${intern.getRole()}</p>
        </div>
        <div class="card-body bg-light">
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p> 
            <p class="card-text">School: ${intern.school}</p> 
            
        </div>

    `;
}

// Function to push data to page -- NEED TO DO!
generateTeamPage = (teamArr) => {

    let profileCards = [];

    for (i = 0; i < teamArr.length; i++) {
        if (teamArr[i].getRole() === 'Manager') {
            profileCards = profileCards + generateManager(teamArr[i])
        }
        if
        (teamArr[i].getRole() === 'Engineer') {
            profileCards = profileCards + generateEngineer(teamArr[i])
        }
        if
        (teamArr[i].getRole() === 'Intern') {
            profileCards = profileCards + generateIntern(teamArr[i])
        }
    } return profileCards
};

    //const generateTeam = generateTeamPage(profileCards);
    //return generateTeam;

//}


// Function to generate HTML page
generateHTML = (teamArr) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- ==== Link to Bootstrap ==== -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <!-- ==== Link to Fontawesome ==== -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <!-- ==== Link to CSS ==== -->
        <link rel="stylesheet" href="./style.css" />
        <title> My Team </title>
    </head>     
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading" style="background-color: #0000FF">
                  <h1 class="text-center" style="color:white"> My Team </h1> 
                </div>
            </div>
        
        <div class="container mb-3">
            <div class="row"> 
                <div class="team-area col-12 d-flex justify-content-center">
                   
                    ${generateTeamPage(teamArr)}
                </div>
            </div>
        </div>
    

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
            integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
            crossorigin="anonymous"></script>
      
    </body>

    </html>
    `
}

module.exports = generateHTML;