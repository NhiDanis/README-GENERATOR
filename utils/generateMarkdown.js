// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

## ${data.badge}

## Description:
${data.description}



## Table of Contents:

* [Installation](#installation)
* [Usage](#usage)
* [Contributor](#contributor)
* [License](#license)
* [Test](#test)
* [Questions](#question)

## Screen Shot

## Installation:
${data.install}



## Usage: 
${data.usage}



## License:
${data.license}


## Contributor:
* [Github](https://github.com/${data.usename})


## Tests:
${data.test}

## Question:
Any Questions please contact me At:
* [Github Profile](https://github.com/${data.usename})
* [Email](${data.email})


`;
}

module.exports = generateMarkdown;
