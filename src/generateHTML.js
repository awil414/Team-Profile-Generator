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