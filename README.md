# team-profile-generator
This is the template for a team profile generator. This template was created using node.js and Javascript.

The point of this template is to help managers generate an team profile easily by asking them to input their name, role, id, office number, Github username or school they attend. The question the manager has to nswer depends on the position the person they are inputing into the generator. Once the manager is done inputing the information the code below generates a team.html page: 
```js
     fs.writeFile(`team.html`, generateMarkdown(data), err => err ? console.error(err) : console.log('Success!'));
```