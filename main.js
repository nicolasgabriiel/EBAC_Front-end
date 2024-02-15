$(document).ready(()=>{
    fetch('https://api.github.com/users/nicolasgabriiel')
    .then(function(res) {
        return res.json();
    })
    .then(function(json) {
        
            $('#name').text(json.name);
            $('#username').text(json.login);
            $('#avatar').attr('src', json.avatar_url);
            $('#repos').text(json.following);
            $('#followers').text(json.followers);
            $('#following').text(json.public_repos);
            $('#link').attr('href',json.html_url);
        })
})