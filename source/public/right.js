import * as THREE from 'three';

import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'

let camera, scene, renderer, effect;
let object, model;

const section = document.getElementById("scene-section-right");

main("")

async function main(args)
{
    camera = new THREE.PerspectiveCamera(50, (window.innerWidth / 4) / (window.innerHeight / 2), 1, 1000);
    camera.position.z = 6.5;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x292929);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 4, window.innerHeight / 2);
    renderer.setAnimationLoop( () => {render()} );
    section.appendChild( renderer.domElement );

    // --- 

    const geometry = new THREE.BoxGeometry( 2, 2, 2, 4, 4, 4 );
    //const geometry = new THREE.TorusKnotGeometry(10, 2.5, 125, 12, 3, 4); 
    //const geometry = new THREE.TorusGeometry(10, 3, 12, 60);
    //const geometry = new THREE.DodecahedronGeometry(1.5, 1);
    let material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    material.wireframe = true;

    object = new THREE.Mesh( geometry, material );
    object.scale.setScalar(1.5);
    scene.add( object );

}

function render()
{
    renderer.render( scene, camera);
    object.rotation.x += 0.01;
    object.rotation.y += 0.01;
    object.rotation.z -= 0.01;
}
