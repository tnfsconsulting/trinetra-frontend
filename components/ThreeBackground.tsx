"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 1. INITIALIZE THREE.JS SCENE
    const scene = new THREE.Scene();
    
    // We use a white background, so "invisible" means the particle color is white
    const bgColor = new THREE.Color(0xfafafa);
    scene.fog = new THREE.FogExp2(0xfafafa, 0.015);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // 2. CREATE SCATTERED PARTICLE FIELD (ALL OVER THE PAGE)
    const count = 3000; // Increased count since it covers the whole screen now
    
    const geometry = new THREE.BoxGeometry(0.06, 0.06, 0.8);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.9 
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
    scene.add(instancedMesh);

    // We use an invisible plane to cast rays against (so we know where the mouse is in 3D space)
    const hitPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    scene.add(hitPlane);

    // Google Antigravity Color Palette
    const palette = [
      new THREE.Color(0x4285F4), // Blue
      new THREE.Color(0xEA4335), // Red
      new THREE.Color(0xFBBC05), // Yellow
      new THREE.Color(0x34A853), // Green
      new THREE.Color(0x8B5CF6), // Purple
      new THREE.Color(0x06B6D4), // Cyan
    ];

    // Physics and Color state arrays
    const originalPositions = new Float32Array(count * 3);
    const currentPositions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const orientations = new Float32Array(count * 3); // to keep their original rotation stable
    
    const targetColors: THREE.Color[] = [];
    const currentColors: THREE.Color[] = [];

    const dummy = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
      // Scatter all over the screen: wide X, wide Y, varying Z
      const x = (Math.random() - 0.5) * 120;
      const y = (Math.random() - 0.5) * 80;
      const z = (Math.random() - 0.5) * 20 - 5; 

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      currentPositions[i * 3] = x;
      currentPositions[i * 3 + 1] = y;
      currentPositions[i * 3 + 2] = z;

      // Assign random stable orientation (random point to look at)
      const lookX = x + (Math.random() - 0.5);
      const lookY = y + (Math.random() - 0.5);
      const lookZ = z + (Math.random() - 0.5);
      orientations[i * 3] = lookX;
      orientations[i * 3 + 1] = lookY;
      orientations[i * 3 + 2] = lookZ;

      // Initial Placement
      dummy.position.set(x, y, z);
      dummy.lookAt(lookX, lookY, lookZ);
      dummy.scale.set(1, 1, 0.5 + Math.random() * 1.5);
      dummy.updateMatrix();
      instancedMesh.setMatrixAt(i, dummy.matrix);

      // Colors: Assign a target color, but start them as "invisible" (white background color)
      const tColor = palette[Math.floor(Math.random() * palette.length)];
      targetColors.push(tColor);
      
      const cColor = bgColor.clone(); // Starts invisible
      currentColors.push(cColor);
      instancedMesh.setColorAt(i, cColor);
    }
    
    instancedMesh.instanceMatrix.needsUpdate = true;
    if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

    // 3. MOUSE INTERACTION & PHYSICS
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-9999, -9999);
    const mouse3D = new THREE.Vector3(9999, 9999, 9999);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    // If mouse leaves window, move target away so particles hide
    const handleMouseLeave = () => {
      mouse.set(-9999, -9999);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // 4. ANIMATION LOOP
    let animationId: number;
    const tempPos = new THREE.Vector3();
    const tempOrig = new THREE.Vector3();

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Raycast to find mouse position on the 2D plane
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(hitPlane);
      
      if (intersects.length > 0) {
        mouse3D.copy(intersects[0].point);
      } else {
        mouse3D.set(9999, 9999, 9999); 
      }

      // Physics Loop
      let colorNeedsUpdate = false;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        tempPos.set(currentPositions[i3], currentPositions[i3+1], currentPositions[i3+2]);
        tempOrig.set(originalPositions[i3], originalPositions[i3+1], originalPositions[i3+2]);
        
        const distToMouse = tempPos.distanceTo(mouse3D);
        
        // 1. Hover Reveal & Repulsion
        if (distToMouse < 12) {
          // Push away physics
          const force = (12 - distToMouse) * 0.04;
          const pushVec = tempPos.clone().sub(mouse3D).normalize().multiplyScalar(force);
          velocities[i3] += pushVec.x;
          velocities[i3+1] += pushVec.y;
          velocities[i3+2] += pushVec.z;

          // Reveal: Lerp color to target vibrant color quickly
          currentColors[i].lerp(targetColors[i], 0.15);
          colorNeedsUpdate = true;
          instancedMesh.setColorAt(i, currentColors[i]);
          
        } else {
          // Fade: Lerp color back to background color (invisible) slowly
          if (currentColors[i].r !== bgColor.r || currentColors[i].g !== bgColor.g || currentColors[i].b !== bgColor.b) {
            currentColors[i].lerp(bgColor, 0.03);
            colorNeedsUpdate = true;
            instancedMesh.setColorAt(i, currentColors[i]);
          }
        }

        // 2. Spring Force (pull back to original position)
        velocities[i3] += (tempOrig.x - tempPos.x) * 0.03; 
        velocities[i3+1] += (tempOrig.y - tempPos.y) * 0.03;
        velocities[i3+2] += (tempOrig.z - tempPos.z) * 0.03;

        // 3. Friction (Damping)
        velocities[i3] *= 0.85;
        velocities[i3+1] *= 0.85;
        velocities[i3+2] *= 0.85;

        // 4. Update Position
        currentPositions[i3] += velocities[i3];
        currentPositions[i3+1] += velocities[i3+1];
        currentPositions[i3+2] += velocities[i3+2];

        // 5. Update Matrix
        dummy.position.set(currentPositions[i3], currentPositions[i3+1], currentPositions[i3+2]);
        dummy.lookAt(orientations[i3], orientations[i3+1], orientations[i3+2]);
        dummy.scale.set(1, 1, 0.5 + (Math.abs(velocities[i3] + velocities[i3+1]) * 4)); 
        dummy.updateMatrix();
        
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      if (colorNeedsUpdate && instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };
    animate();

    // 5. RESIZE HANDLER
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-[#fafafa]">
      <div ref={mountRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
}