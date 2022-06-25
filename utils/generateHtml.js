//team
const genTeam = team => {


const genManager = manager => {
return `
<div class="card employee-card">
<div class="card-header">
<h2 class="card-title">${manager.getName()}</h2>
<h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>
</div>
    `;
};

const genEngineer = engineer => {
    return `
<div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
    <li class="list-group-item">ID: ${engineer.getId()}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
    </ul>
</div>
</div>

module.exports = team => {

return `

<!DOCTYPE html>
    <html lang="en">
            
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;217;300&display=swap" rel="stylesheet">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="./assets/portfolio.css">
        <title>Profile Generator</title>
        </head>

    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container text-center">
                <h1 class="display-4">Profile Generator</h1>
    </div>
    <body>
    </html>
        `;
    };



