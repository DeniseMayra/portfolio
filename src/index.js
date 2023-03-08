$(window).scroll(function() {    
    headerPosition();
});

function headerPosition() {
    let position = document.querySelector('#container-home').getBoundingClientRect();

    let top = (position.height / 2 ) + 80  //o sino 81

    if (position.height + position.y < top){
        // document.querySelector('#name').classList.add('fix-name')
        document.querySelector('#navbar').style.backgroundColor = 'rgba(0,0,0,.9)'
    } else {
        // document.querySelector('#name').classList.remove('fix-name')
        document.querySelector('#navbar').style.backgroundColor = 'transparent'
    }
}

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

const skillsArray = [{title: 'HTML/CSS' , value: 90}, {title:'JavaScript' , value: 90}, {title: 'Express.js', value: 60}, {title:'WebSockets', value:50}, {title: 'Node.js', value:70} ,{title:'React.js', value: 70}, {title: '.NET', value: 30}, {title:'Ansi C/C#', value: 60}, {title:'Bootstrap', value: 80}, {title:'GitHub', value:70}, {title:'Excel', value: 70}, {title:'SolidWorks', value:50}, {title:' AutoCAD', value: 40},{title: 'Español' , value: 100},{title: 'Ingles' , value: 70},{title: 'Portugués' , value: 40},{title: 'Japonés' , value: 20}]
createSkills(skillsArray)

function createSkills(array){
    let container = createRow()

    array.forEach((obj, index) => {
        if (index == 6){
            container = createRow()
        } else if ( index == 11){
            container = createRow()
        }

        // const template = `<div class="skill-box"> <div class="skill-value">${obj.title} </div></div>`
        const template = `<div class="skill-box"><div class="outside"><div class="inside"> <div class="skill-value">${obj.title} </div></div></div>
            <svg xmlns="http://www.w3.org/200/svg" version="1.1" width="110px" height="110px">
                <defs> <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#6c72cb" /> <stop offset="100%" stop-color="#cb69c1" />
                </linearGradient></defs> <circle cx="53" cy="53" r="52"  stroke-linecap="round"/></svg>
        </div>`

        let ele = document.createElement('template')
        ele.innerHTML = template
        container.appendChild(ele.content)

        let progressEle = container.lastElementChild
        progressLine(progressEle, obj.value)
    });
}

function createRow(){
    let ele = document.createElement('div')
    ele.classList = 'skill-row'
    document.querySelector('#all-skills').appendChild(ele)
    return document.querySelector('#all-skills').lastElementChild
}

async function progressLine(progressEle, end){
    let progress = 0
    let progressInterval = setInterval(() => {
        progress++
        // progressEle.style.background = `conic-gradient( var(--neondark3) ${progress * 3.6}deg, var(--neondark4) ${progress * 3.6}deg)`
        
        let value = 330 - ((end / 100) * 330 )
    
        progressEle.querySelector('circle').style.strokeDashoffset = value;
        
        if (progress == end){
            clearInterval(progressInterval)
        }
    }, 10);
}

