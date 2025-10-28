import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let camera, scene, renderer, mixer;
let object;

const clock = new THREE.Clock();

const section = document.getElementById("scene-section-middle");

main("")

async function main(args)
{
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / (window.innerHeight / 2.5), 1, 1000);
    camera.position.z = 20;
    camera.position.y = 3;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight / 2.5);
    renderer.setAnimationLoop( () => {render()} );
    section.appendChild(renderer.domElement);

    // --- 

    const loader = new GLTFLoader();
    loader.load("models/Brachydios/Brachydios.glb", (gltf) => {
        object = gltf.scene;
        
        object.scale.setScalar(0.01);
        object.rotateX(45)
        scene.add(gltf.scene);
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => 
        {
            mixer.clipAction(clip).play()
            mixer.clipAction(clip).timeScale = 3;
        });
    });

    const light = new THREE.AmbientLight( 0xffffff );
    scene.add( light );

    // ---

    //const geometry = new THREE.BoxGeometry( 2, 2, 2 );
    
}

function render()
{
    requestAnimationFrame(render);

    const delta = clock.getDelta(); // temps écoulé depuis la dernière frame
    if (mixer)
    {
        mixer.update(delta);
    } 

    renderer.render(scene, camera);
}
