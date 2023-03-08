import * as THREE from "./three.module.js"

let scene = new THREE.Scene()

// ----------- camera -----------
let width = window.innerWidth 
let height = window.innerHeight -60
let viewAngle = 45
let nearClipping = 0.1 
let farClipping = 9999

let camera = new THREE.PerspectiveCamera(viewAngle, width / height, nearClipping, farClipping)
camera.position.set(0,0,10)


// ----------- element -----------
let cubeGeometry = new THREE.BoxGeometry(2,2,2)
let cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})
let cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

cube.position.set(0,0,0)
scene.add(cube)

// ----------- renderer -----------
let renderer = new THREE.WebGLRenderer({antialize: true})
renderer.setSize(width, height)

// let ele = document.getElementById('container')
// ele.appendChild(renderer.domElement)

function animate(){
    cube.rotation.y += 0.01
    cube.rotation.x += 0.01
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()

