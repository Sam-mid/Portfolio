import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GradientTextures  from '/src/assets/img/GradientTextures.jpg';


const Header = ({ modelPath }) => {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        let camera, renderer, controls;

        // Renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight * 0.90);
        container.appendChild(renderer.domElement);

        // Camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 80;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);
        const gradientTexture = new THREE.TextureLoader().load(GradientTextures);
        scene.background = gradientTexture;

        // Lichtbron
        const light = new THREE.HemisphereLight(0xffffff, 0x080820, 4);
        scene.add(light);

        // Laad het glTF-model
        const loader = new GLTFLoader();
        loader.load("/naam.glb", function (gltf) {
            const model = gltf.scene;
            scene.add(model);

            // Voeg muisbesturing toe
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.25;
        });

        // Renderfunctie
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        // Responsiviteit
        window.addEventListener('resize', onWindowResize);

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight * 0.90);
        }

        // Schoonmaakfunctie
        return () => {
            window.removeEventListener('resize', onWindowResize);
            renderer.dispose();
        };
    }, [modelPath]);

    return <div ref={containerRef} />;
};

export default Header;


