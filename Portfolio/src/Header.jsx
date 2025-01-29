import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import GradientTextures from '/src/assets/img/GradientTextures.jpg';

const Header = ({ modelPath }) => {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;
        let camera, renderer, controls;

        // Renderer
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight );
        container.appendChild(renderer.domElement);

        // Camera
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 90;
        camera.position.y = 1;
        camera.position.x = -20;

        // Scene
        const scene = new THREE.Scene();
        // const gradientTexture = new THREE.TextureLoader().load(GradientTextures);
        // scene.background = gradientTexture;


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

    // Scrollfunctie naar sectie #aboutme
    const handleScrollToAbout = () => {
        document.getElementById('aboutme').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header>
            <div ref={containerRef} />
            <div className="absolute bottom-52 left-1/2 transform -translate-x-1/2 z-50">
                {/*<button onClick={handleScrollToAbout} className="px-6 py-4 bg-green-500 text-white font-bold rounded-2xl shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">Naar de site</button>*/}
                <h1 className="font-Bar font-extrabold bg-gradient-to-b from-white to-white bg-clip-text text-transparent"> Under Construction</h1>
            </div>
        </header>
    );
};

export default Header;
