import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ThreeViewer: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const modelRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0ece2);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.01,
      1000
    );

    camera.position.set(0, 1.2, 4);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    // ----------------------------------------
    // LIGHTS
    // ----------------------------------------

    const ambientLight = new THREE.AmbientLight(
      0xffffff,
      1.5
    );

    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(
      0xffffff,
      2.5
    );

    mainLight.position.set(5, 8, 5);
    mainLight.castShadow = true;

    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(
      0xb3f5df,
      1
    );

    fillLight.position.set(-5, 2, -4);

    scene.add(fillLight);

    const frontLight = new THREE.DirectionalLight(
      0xffffff,
      1.5
    );

    frontLight.position.set(0, 1, 5);

    scene.add(frontLight);

    // ----------------------------------------
    // MODEL GROUP
    // ----------------------------------------

    const modelGroup = new THREE.Group();

    scene.add(modelGroup);

    modelRef.current = modelGroup;

    // ----------------------------------------
    // LOAD GLB
    // ----------------------------------------

    const loader = new GLTFLoader();

    const modelPath =
      `${import.meta.env.BASE_URL}assets/glb/Ponteira_controle_T8L_v2.glb`;

    loader.load(
      modelPath,

      (gltf) => {
        const model = gltf.scene;

        // Shadows
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // ----------------------------------------
        // CENTRALIZAR O MODELO
        // ----------------------------------------

        const box = new THREE.Box3().setFromObject(model);

        const center = box.getCenter(
          new THREE.Vector3()
        );

        model.position.sub(center);

        // ----------------------------------------
        // ESCALA AUTOMÁTICA
        // ----------------------------------------

        const size = box.getSize(
          new THREE.Vector3()
        );

        const maxDimension = Math.max(
          size.x,
          size.y,
          size.z
        );

        if (maxDimension > 0) {
          const desiredSize = 2.2;

          const scale =
            desiredSize / maxDimension;

          model.scale.setScalar(scale);
        }

        // Recalcula depois da escala
        const scaledBox =
          new THREE.Box3().setFromObject(model);

        const scaledCenter =
          scaledBox.getCenter(
            new THREE.Vector3()
          );

        model.position.x -= scaledCenter.x;
        model.position.y -= scaledCenter.y;
        model.position.z -= scaledCenter.z;

        modelGroup.add(model);

        setIsLoading(false);
      },

      undefined,

      (error) => {
        console.error(
          'Erro ao carregar o modelo GLB:',
          error
        );

        setIsLoading(false);
        setLoadError(true);
      }
    );

    // ----------------------------------------
    // GROUND / SHADOW
    // ----------------------------------------

    const groundGeo =
      new THREE.PlaneGeometry(10, 10);

    const groundMat =
      new THREE.ShadowMaterial({
        opacity: 0.18,
      });

    const ground =
      new THREE.Mesh(
        groundGeo,
        groundMat
      );

    ground.rotation.x =
      -Math.PI / 2;

    ground.position.y = -1.35;

    ground.receiveShadow = true;

    scene.add(ground);

    // ----------------------------------------
    // ROTATION CONTROLS
    // ----------------------------------------

    let isDragging = false;

    let previousX = 0;
    let previousY = 0;

    const startDrag = (
      clientX: number,
      clientY: number
    ) => {
      isDragging = true;

      previousX = clientX;
      previousY = clientY;
    };

    const moveDrag = (
      clientX: number,
      clientY: number
    ) => {
      if (
        !isDragging ||
        !modelRef.current
      )
        return;

      const deltaX =
        clientX - previousX;

      const deltaY =
        clientY - previousY;

      modelRef.current.rotation.y +=
        deltaX * 0.01;

      modelRef.current.rotation.x +=
        deltaY * 0.01;

      previousX = clientX;
      previousY = clientY;
    };

    const stopDrag = () => {
      isDragging = false;
    };

    // Mouse
    const onMouseDown = (
      event: MouseEvent
    ) => {
      startDrag(
        event.clientX,
        event.clientY
      );
    };

    const onMouseMove = (
      event: MouseEvent
    ) => {
      moveDrag(
        event.clientX,
        event.clientY
      );
    };

    // Touch
    const onTouchStart = (
      event: TouchEvent
    ) => {
      if (event.touches.length !== 1)
        return;

      const touch = event.touches[0];

      startDrag(
        touch.clientX,
        touch.clientY
      );
    };

    const onTouchMove = (
      event: TouchEvent
    ) => {
      if (event.touches.length !== 1)
        return;

      event.preventDefault();

      const touch = event.touches[0];

      moveDrag(
        touch.clientX,
        touch.clientY
      );
    };

    container.addEventListener(
      'mousedown',
      onMouseDown
    );

    window.addEventListener(
      'mousemove',
      onMouseMove
    );

    window.addEventListener(
      'mouseup',
      stopDrag
    );

    container.addEventListener(
      'touchstart',
      onTouchStart,
      { passive: true }
    );

    container.addEventListener(
      'touchmove',
      onTouchMove,
      { passive: false }
    );

    container.addEventListener(
      'touchend',
      stopDrag
    );

    // ----------------------------------------
    // RESPONSIVE
    // ----------------------------------------

    const handleResize = () => {
      const newWidth =
        container.clientWidth;

      const newHeight =
        container.clientHeight;

      if (
        !newWidth ||
        !newHeight
      )
        return;

      camera.aspect =
        newWidth / newHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        newWidth,
        newHeight
      );
    };

    window.addEventListener(
      'resize',
      handleResize
    );

    // ----------------------------------------
    // ANIMATION
    // ----------------------------------------

    let reqId: number;

    const animate = () => {
      reqId =
        requestAnimationFrame(
          animate
        );

      // Rotação automática
      if (
        !isDragging &&
        modelRef.current
      ) {
        modelRef.current.rotation.y +=
          0.004;
      }

      renderer.render(
        scene,
        camera
      );
    };

    animate();

    // ----------------------------------------
    // CLEANUP
    // ----------------------------------------

    return () => {
      cancelAnimationFrame(reqId);

      container.removeEventListener(
        'mousedown',
        onMouseDown
      );

      window.removeEventListener(
        'mousemove',
        onMouseMove
      );

      window.removeEventListener(
        'mouseup',
        stopDrag
      );

      container.removeEventListener(
        'touchstart',
        onTouchStart
      );

      container.removeEventListener(
        'touchmove',
        onTouchMove
      );

      container.removeEventListener(
        'touchend',
        stopDrag
      );

      window.removeEventListener(
        'resize',
        handleResize
      );

      renderer.dispose();

      if (
        container.contains(
          renderer.domElement
        )
      ) {
        container.removeChild(
          renderer.domElement
        );
      }

      modelRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-full h-full bg-[#e8e4dc] overflow-hidden">

      {/* Three.js Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Loading */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-ink text-white text-xs font-black uppercase px-4 py-2 rounded-full">
            Carregando 3D...
          </div>
        </div>
      )}

      {/* Error */}
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="bg-white border-2 border-ink rounded-xl p-4 text-center brutal-shadow">
            <p className="text-sm font-black text-ink">
              Não foi possível carregar o modelo 3D.
            </p>
          </div>
        </div>
      )}

      {/* Interaction Help */}
      {!isLoading && !loadError && (
        <div className="absolute bottom-3 left-3 bg-ink/80 text-white text-[11px] font-bold px-3 py-1 rounded-full pointer-events-none">
          Arraste para girar
        </div>
      )}

    </div>
  );
};
