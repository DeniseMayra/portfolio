// $(window).scroll(function() {    
//     headerPosition();
// });

// function headerPosition() {
//     let position = document.querySelector('#presentation').getBoundingClientRect();

//     let top = position.height / 2 //o sino 81

//     if (position.height + position.y < top){
//         document.querySelector('#name').classList.add('fix-name')
//     } else {
//         document.querySelector('#name').classList.remove('fix-name')
//     }
// }

const manuItems = [{title: 'Home', english: 'Home', icon: ''}, {title: 'Aptitudes',english: 'Skills', icon: ''} ,{title: 'Estudios', english: 'Studies', icon: ''} , {title: 'Laboral',english: 'Jobs', icon: ''},{title: 'Portfolio', english: 'Portfolio', icon: ''}, {title: 'Contacto', english: 'Contact', icon: ''}]
createMenu(manuItems)

function createMenu(array){
    array.forEach(item => {
        const template = `<li class="nav-section">
                            <a href="#container-${item.english.toLowerCase()}">
                                <div class="nav-icon"></div>                
                                <p>${item.title}</p>
                            </a>
                        </li>`
        
        let ele = document.createElement('template')

        ele.innerHTML = template
        document.querySelector('#navbar ul').appendChild(ele.content)
    });
}

const skillsArray = ['HTML/CSS', 'JavaScript', 'Express.js', 'WebSockets', 'Node.js' ,'React.js', '.NET', 'Ansi C/C#', 'Bootstrap', 'GitHub', 'Excel', 'SolidWorks', ' AutoCAD']
createSkills(skillsArray)

function createSkills(array){
    array.forEach(title => {
        console.log(title)
        const template = `<div class="skill-box">${title}</div>`
        
        let ele = document.createElement('template')

        ele.innerHTML = template
        document.querySelector('#all-skills').appendChild(ele.content)
    });
}

