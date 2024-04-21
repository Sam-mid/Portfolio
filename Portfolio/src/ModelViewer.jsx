import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ModelViewer = ({ modelPath }) => {
    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        // Renderer
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Camera
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 30
        ;

        // Scene
        const scene = new THREE.Scene();

        // Lichtbron
        const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
        scene.add( light );

        // Laad het glTF-model
        const loader = new GLTFLoader();
        loader.load(modelPath, function (gltf) {
            scene.add(gltf.scene);
        });

        // Renderfunctie
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }
        animate();

        // Schoonmaakfunctie
        return () => {
            renderer.dispose();
        };
    }, [modelPath]);

    return <div ref={containerRef} style={{ width: '50%', height: '300px' }} />;
};

export default ModelViewer;

