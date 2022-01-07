const readMe = data =>{
    return(`# ${data.name}
    
### DESCRIPTION
${data.description}
    
### INSTALLATION
${data.install}
    
### USAGE
${data.usage}
    
### CONTRIBUTING
${data.contributors}
    
### LICENSE
${data.license}
![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
    
### TESTS
${data.testing}
    
### INFO
GitHub: https://www.github.com/${data.user}
    
Email Address: ${data.email}
    `)
}
module.exports=readMe