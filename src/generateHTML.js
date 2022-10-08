// Manager card
const generateManager = manager => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
            <h3> ${manager.name}>Card title</h3>
            <h4> Role: ${manager.role}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item>ID: ${manager.id}</li>
                <li class="list-group-item>Email: <a href="mailto:${manager.email}">${manager.email}</a></li> 
                <li class="list-group-item>Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>  
    `;
}

// Engineer Card
const generateEngineer = engineer => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
            <h3> ${engineer.name}>Card title</h3>
            <h4> Role: ${engineer.role}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item>ID: ${engineer.id}</li>
                <li class="list-group-item>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li> 
                <li class="list-group-item>GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>             
            </ul>
        </div>
    </div>  
    `;
}

// Intern Card
const generateIntern = intern => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
            <h3> ${intern.name}>Card title</h3>
            <h4> Role: ${intern.role}</h4>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item>ID: ${intern.id}</li>
                <li class="list-group-item>Email: <a href="mailto:${intern.email}">${intern.email}</a></li> 
                <li class="list-group-item>School: ${intern.school}</li> 
            </ul>
        </div>
    </div>  
    `;
}

// Function to push data to page -- NEED TO DO!
generateHTML = (data) => {

    const profileCards = 

    const generateTeam = generateTeamPage(profileCards);
    return generateTeam;

}


// Function to generate HTML page
generateTeamPage = (profileCards) => {
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
        <link rel="stylesheet" href="./assets/style.css" />
        <title>Team Profile</title>
    </head>     
    <body>
        <header>
            <nav class="navbar navbar-light bg-light" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id+"navbar-text">Team Profile</span>
            </nav>      
        </header>
        <section>
            <div class="container">
                <div class="row justify-content-center" id="profile-cards">
                
                </div>
            </div>
        </section>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
            integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
            crossorigin="anonymous"></script>
        <script src="./assets/script.js"></script>
    </body>

    </html>
    `
}