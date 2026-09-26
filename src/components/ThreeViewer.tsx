import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [wireframe, setWireframe] = useState(false);
  const [currentColor, setCurrentColor] = useState(0xff4625);

  const meshRef = useRef<THREE.Mesh | null>(null);
  const wireMeshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0ece2);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 3.8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xb3f5df, 0.4);
    fillLight.position.set(-5, -2, -3);
    scene.add(fillLight);

    // 3D Geometry
    const geom = new THREE.TorusKnotGeometry(0.85, 0.28, 128, 32, 2, 3);
    const material = new THREE.MeshPhysicalMaterial({
      color: currentColor,
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 0.3,
    });
    const mesh = new THREE.Mesh(geom, material);
    mesh.castShadow = true;
    scene.add(mesh);
    meshRef.current = mesh;

    // Wireframe Mesh
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x141414,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh = new THREE.Mesh(geom, wireMat);
    wireMesh.visible = wireframe;
    scene.add(wireMesh);
    wireMeshRef.current = wireMesh;

    // Ground plane
    const groundGeo = new THREE.PlaneGeometry(10, 10);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1.2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Simple mouse drag rotation
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !meshRef.current) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      meshRef.current.rotation.y += deltaX * 0.01;
      meshRef.current.rotation.x += deltaY * 0.01;
      if (wireMeshRef.current) {
        wireMeshRef.current.rotation.copy(meshRef.current.rotation);
      }
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);
      if (!isDragging && meshRef.current) {
        meshRef.current.rotation.y += 0.005;
        if (wireMeshRef.current) {
          wireMeshRef.current.rotation.copy(meshRef.current.rotation);
        }
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const changeColor = (hex: number) => {
    setCurrentColor(hex);
    if (meshRef.current && meshRef.current.material instanceof THREE.MeshPhysicalMaterial) {
      meshRef.current.material.color.setHex(hex);
    }
  };

  const toggleWireframe = () => {
    const nextVal = !wireframe;
    setWireframe(nextVal);
    if (wireMeshRef.current) {
      wireMeshRef.current.visible = nextVal;
    }
  };

  return (
    <div className="relative w-full h-full bg-[#e8e4dc]">
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 3D Color Picker */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-ink/80 p-1.5 rounded-full backdrop-blur z-10">
        <button
          onClick={() => changeColor(0xff4625)}
          className="w-5 h-5 rounded-full bg-[#FF4625] border border-white"
          title="Laranja FDM"
        />
        <button
          onClick={() => changeColor(0xfaf7ee)}
          className="w-5 h-5 rounded-full bg-[#FAF7EE] border border-ink"
          title="Nylon SLS"
        />
        <button
          onClick={() => changeColor(0x1f51ff)}
          className="w-5 h-5 rounded-full bg-[#1F51FF] border border-white"
          title="Azul Cobalto"
        />
        <button
          onClick={toggleWireframe}
          className="px-2 py-0.5 text-[10px] font-black text-lime hover:underline"
        >
          {wireframe ? 'Sólido' : 'Malha'}
        </button>
      </div>

      <div className="absolute bottom-3 left-3 bg-ink/80 text-white text-[11px] font-bold px-3 py-1 rounded-full pointer-events-none">
        Arraste com o mouse para girar
      </div>
    </div>
  );
};
