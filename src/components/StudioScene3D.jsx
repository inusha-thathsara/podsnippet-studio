import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Sparkles, Volume2, Maximize2, Radio, Activity, Disc } from 'lucide-react';

export function StudioScene3D({ isPlaying, analyser, currentSpeaker, mode }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const micGroupRef = useRef(null);
  const cyberBarsRef = useRef([]);
  const alexNodeRef = useRef(null);
  const samNodeRef = useRef(null);
  const soundWavesRef = useRef([]);
  const particlesRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isDragging: false, prevX: 0, prevY: 0 });

  const [sceneMode, setSceneMode] = useState('studio'); // 'studio' | 'waveform' | 'orbs'
  const [viewPreset, setViewPreset] = useState('studio'); // 'studio' | 'birds-eye' | 'close-up'

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 340;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    rendererRef.current = renderer;

    // Accessibility (Three.js Rule 50)
    renderer.domElement.setAttribute('role', 'img');
    renderer.domElement.setAttribute('aria-label', 'Interactive 3D Audio Visualizer Studio. Drag to orbit, explore camera angles.');

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup (Dramatic Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4, 15);
    cyanLight.position.set(-3, 3, 3);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x8b5cf6, 4, 15);
    violetLight.position.set(3, 3, 3);
    scene.add(violetLight);

    const micLedLight = new THREE.PointLight(0x6366f1, 2.5, 9);
    micLedLight.position.set(0, 0.9, 0);
    scene.add(micLedLight);

    // 3. Materials
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x182030,
      metalness: 0.9,
      roughness: 0.15,
    });

    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.95,
      roughness: 0.1,
    });

    // 4. Construct 3D Studio Microphone Object
    const micGroup = new THREE.Group();
    micGroupRef.current = micGroup;

    // Mic Stand Base
    const baseGeo = new THREE.CylinderGeometry(1.2, 1.3, 0.12, 32);
    const baseMesh = new THREE.Mesh(baseGeo, metalMaterial);
    baseMesh.position.y = -1.6;
    micGroup.add(baseMesh);

    // Mic Base Accent Ring
    const baseRingGeo = new THREE.TorusGeometry(1.25, 0.03, 16, 64);
    const baseRingMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const baseRing = new THREE.Mesh(baseRingGeo, baseRingMat);
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = -1.54;
    micGroup.add(baseRing);

    // Vertical Stand Rod
    const rodGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.6, 24);
    const rodMesh = new THREE.Mesh(rodGeo, chromeMaterial);
    rodMesh.position.y = -0.75;
    micGroup.add(rodMesh);

    // Swivel Joint
    const jointGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const jointMesh = new THREE.Mesh(jointGeo, metalMaterial);
    jointMesh.position.y = 0.05;
    micGroup.add(jointMesh);

    // Shockmount Outer Ring
    const shockRingGeo = new THREE.TorusGeometry(0.68, 0.04, 16, 48);
    const shockRing = new THREE.Mesh(shockRingGeo, metalMaterial);
    shockRing.rotation.x = Math.PI / 2;
    shockRing.position.y = 0.55;
    micGroup.add(shockRing);

    // Microphone Lower Body (Cylinder)
    const micBodyGeo = new THREE.CylinderGeometry(0.32, 0.32, 0.85, 32);
    const micBody = new THREE.Mesh(micBodyGeo, metalMaterial);
    micBody.position.y = 0.55;
    micGroup.add(micBody);

    // Microphone Glowing Studio Ring (Reacts to audio)
    const ledRingGeo = new THREE.TorusGeometry(0.33, 0.035, 16, 32);
    const ledRingMat = new THREE.MeshBasicMaterial({ color: 0x6366f1 });
    const ledRing = new THREE.Mesh(ledRingGeo, ledRingMat);
    ledRing.rotation.x = Math.PI / 2;
    ledRing.position.y = 0.98;
    micGroup.add(ledRing);

    // Microphone Capsule Head / Grille (Dome)
    const grilleGeo = new THREE.SphereGeometry(0.32, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    const grilleMat = new THREE.MeshStandardMaterial({
      color: 0x64748b,
      metalness: 0.9,
      roughness: 0.25,
      wireframe: true,
    });
    const grille = new THREE.Mesh(grilleGeo, grilleMat);
    grille.position.y = 0.98;
    micGroup.add(grille);

    scene.add(micGroup);

    // 5. Dual Co-Host Floating Holographic Nodes (Alex & Sam)
    // Host A (Alex) Hologram Node - Cyan
    const alexGroup = new THREE.Group();
    alexNodeRef.current = alexGroup;
    alexGroup.position.set(-2.5, 0.45, -0.5);

    const alexCoreGeo = new THREE.IcosahedronGeometry(0.42, 2);
    const alexCoreMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.9,
      roughness: 0.15,
      wireframe: true,
    });
    const alexCore = new THREE.Mesh(alexCoreGeo, alexCoreMat);
    alexGroup.add(alexCore);

    const alexRingGeo = new THREE.TorusGeometry(0.7, 0.025, 16, 48);
    const alexRingMat = new THREE.MeshBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.75 });
    const alexRing = new THREE.Mesh(alexRingGeo, alexRingMat);
    alexRing.rotation.x = Math.PI / 3;
    alexGroup.add(alexRing);
    scene.add(alexGroup);

    // Host B (Sam) Hologram Node - Violet
    const samGroup = new THREE.Group();
    samNodeRef.current = samGroup;
    samGroup.position.set(2.5, 0.45, -0.5);

    const samCoreGeo = new THREE.IcosahedronGeometry(0.42, 2);
    const samCoreMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.9,
      roughness: 0.15,
      wireframe: true,
    });
    const samCore = new THREE.Mesh(samCoreGeo, samCoreMat);
    samGroup.add(samCore);

    const samRingGeo = new THREE.TorusGeometry(0.7, 0.025, 16, 48);
    const samRingMat = new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.75 });
    const samRing = new THREE.Mesh(samRingGeo, samRingMat);
    samRing.rotation.x = -Math.PI / 3;
    samGroup.add(samRing);
    scene.add(samGroup);

    // 6. 3D Audio-Reactive Orbit Waves
    const waveCount = 5;
    const waves = [];
    for (let i = 0; i < waveCount; i++) {
      const radius = 1.0 + i * 0.45;
      const waveGeo = new THREE.TorusGeometry(radius, 0.02, 16, 64);
      const waveMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x06b6d4 : 0x8b5cf6,
        transparent: true,
        opacity: 0.35 - i * 0.05,
      });
      const wave = new THREE.Mesh(waveGeo, waveMat);
      wave.rotation.x = Math.PI / 2 + (i * 0.1);
      wave.position.y = 0.7;
      scene.add(wave);
      waves.push(wave);
    }
    soundWavesRef.current = waves;

    // 7. 3D Circular Equalizer Bars (for Waveform mode)
    const barCount = 32;
    const cyberBars = [];
    const barRadius = 1.8;
    const barGroup = new THREE.Group();

    for (let i = 0; i < barCount; i++) {
      const angle = (i / barCount) * Math.PI * 2;
      const barGeo = new THREE.BoxGeometry(0.08, 0.1, 0.08);
      const color = new THREE.Color().setHSL(0.55 + (i / barCount) * 0.25, 0.9, 0.6);
      const barMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.4,
        roughness: 0.2
      });
      const barMesh = new THREE.Mesh(barGeo, barMat);
      barMesh.position.x = Math.cos(angle) * barRadius;
      barMesh.position.z = Math.sin(angle) * barRadius;
      barMesh.position.y = -0.5;
      barGroup.add(barMesh);
      cyberBars.push(barMesh);
    }
    scene.add(barGroup);
    cyberBarsRef.current = cyberBars;

    // 8. 3D Floating Particle Constellation
    const particleCount = 220;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      particlePositions[i * 3] = radius * Math.cos(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi) * Math.sin(theta);

      const isCyan = Math.random() > 0.5;
      particleColors[i * 3] = isCyan ? 0.02 : 0.55;
      particleColors[i * 3 + 1] = isCyan ? 0.71 : 0.36;
      particleColors[i * 3 + 2] = isCyan ? 0.83 : 0.96;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 9. Mouse & Touch Interaction Handlers (Three.js Rule 48: Mobile Touch Support)
    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.6;
      mouseRef.current.targetY = y * 0.3;

      if (mouseRef.current.isDragging) {
        const deltaX = e.clientX - mouseRef.current.prevX;
        const deltaY = e.clientY - mouseRef.current.prevY;
        micGroup.rotation.y += deltaX * 0.008;
        micGroup.rotation.x += deltaY * 0.005;
        mouseRef.current.prevX = e.clientX;
        mouseRef.current.prevY = e.clientY;
      }
    };

    const onMouseDown = (e) => {
      mouseRef.current.isDragging = true;
      mouseRef.current.prevX = e.clientX;
      mouseRef.current.prevY = e.clientY;
    };

    const onMouseUp = () => {
      mouseRef.current.isDragging = false;
    };

    // Touch event handlers for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        mouseRef.current.isDragging = true;
        mouseRef.current.prevX = e.touches[0].clientX;
        mouseRef.current.prevY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e) => {
      if (mouseRef.current.isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - mouseRef.current.prevX;
        const deltaY = e.touches[0].clientY - mouseRef.current.prevY;
        micGroup.rotation.y += deltaX * 0.008;
        micGroup.rotation.x += deltaY * 0.005;
        mouseRef.current.prevX = e.touches[0].clientX;
        mouseRef.current.prevY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      mouseRef.current.isDragging = false;
    };

    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // 10. ResizeObserver (Three.js Rule 47: Container-Aware Resize)
    const resizeObserver = new ResizeObserver((entries) => {
      if (!entries || !entries[0]) return;
      const { width: w, height: h } = entries[0].contentRect;
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    });
    resizeObserver.observe(container);

    // 11. Accessibility: prefers-reduced-motion reactive listener (Three.js Rule 49)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let noMotion = mq.matches;
    const motionChangeHandler = (e) => {
      noMotion = e.matches;
    };
    mq.addEventListener('change', motionChangeHandler);

    // 12. Animation Loop
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera interpolation based on mouse parallax
      if (!noMotion) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

        camera.position.x = mouseRef.current.x * 2.5;
        camera.position.y = 1.2 + mouseRef.current.y * 1.5;
        camera.lookAt(0, 0.4, 0);
      }

      // Audio frequency analysis
      let audioAvg = 0;
      const freqData = new Uint8Array(32);
      if (analyser && isPlaying) {
        analyser.getByteFrequencyData(freqData);
        const sum = freqData.reduce((a, b) => a + b, 0);
        audioAvg = sum / freqData.length / 255;
      }

      // Animate 3D Equalizer Bars
      cyberBars.forEach((bar, idx) => {
        const freqVal = (freqData[idx] || 0) / 255;
        const targetHeight = isPlaying ? Math.max(0.1, freqVal * 2.2) : 0.1;
        bar.scale.y += (targetHeight - bar.scale.y) * 0.25;
        bar.position.y = -0.5 + bar.scale.y * 0.05;
      });

      // Mic gentle floating idle rotation
      if (!mouseRef.current.isDragging && !noMotion) {
        micGroup.rotation.y = Math.sin(elapsedTime * 0.4) * 0.2;
        micGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.05;
      }

      // Audio-reactive LED pulse
      const activeColor = currentSpeaker === 'Alex' ? 0x06b6d4 : currentSpeaker === 'Sam' ? 0x8b5cf6 : 0x10b981;
      ledRingMat.color.setHex(activeColor);
      micLedLight.color.setHex(activeColor);
      micLedLight.intensity = isPlaying ? 2.5 + audioAvg * 8 : 1.5;

      // Expand & rotate 3D sound waves
      waves.forEach((wave, idx) => {
        if (!noMotion) wave.rotation.z += 0.004 * (idx + 1);
        const scaleBoost = isPlaying ? 1 + (audioAvg * (0.4 + idx * 0.15)) : 1;
        wave.scale.set(scaleBoost, scaleBoost, scaleBoost);
        wave.material.opacity = isPlaying ? 0.3 + audioAvg * 0.5 : 0.2;
      });

      // Animate Host Nodes
      if (alexNodeRef.current && samNodeRef.current) {
        if (!noMotion) {
          alexNodeRef.current.rotation.y += 0.015;
          alexNodeRef.current.position.y = 0.45 + Math.sin(elapsedTime * 2.0) * 0.08;

          samNodeRef.current.rotation.y -= 0.015;
          samNodeRef.current.position.y = 0.45 + Math.cos(elapsedTime * 2.0) * 0.08;
        }

        // Prominence when host is actively speaking
        if (currentSpeaker === 'Alex' && isPlaying) {
          const s = 1.25 + audioAvg * 0.45;
          alexNodeRef.current.scale.set(s, s, s);
          cyanLight.intensity = 6 + audioAvg * 12;
        } else {
          alexNodeRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          cyanLight.intensity = 3;
        }

        if (currentSpeaker === 'Sam' && isPlaying) {
          const s = 1.25 + audioAvg * 0.45;
          samNodeRef.current.scale.set(s, s, s);
          violetLight.intensity = 6 + audioAvg * 12;
        } else {
          samNodeRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          violetLight.intensity = 3;
        }
      }

      // Particle slow constellation orbit
      if (particlesRef.current && !noMotion) {
        particlesRef.current.rotation.y = elapsedTime * 0.03;
      }

      // Mode visibility toggles
      if (micGroupRef.current) {
        micGroupRef.current.visible = sceneMode === 'studio';
      }
      if (barGroup) {
        barGroup.visible = sceneMode === 'waveform';
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      mq.removeEventListener('change', motionChangeHandler);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, [isPlaying, currentSpeaker, analyser, mode, sceneMode]);

  // Quick Preset Camera Transitions
  const handleSetPreset = (preset) => {
    setViewPreset(preset);
    if (!cameraRef.current) return;
    if (preset === 'studio') {
      cameraRef.current.position.set(0, 1.2, 5.5);
    } else if (preset === 'birds-eye') {
      cameraRef.current.position.set(0, 4.2, 4.0);
    } else if (preset === 'close-up') {
      cameraRef.current.position.set(0, 0.9, 3.2);
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '350px',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: '0 16px 40px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(99, 102, 241, 0.15)'
    }}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        style={{
          width: '100%',
          height: '100%',
          cursor: 'grab',
          background: 'radial-gradient(ellipse at center, rgba(14, 20, 34, 0.95) 0%, rgba(6, 8, 13, 0.98) 100%)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
        }}
      />

      {/* 3D Floating HUD Overlay - Left */}
      <div style={{
        position: 'absolute',
        top: '14px',
        left: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        pointerEvents: 'none',
        zIndex: 10
      }}>
        <span className="badge badge-cyan" style={{ fontSize: '0.7rem', padding: '0.22rem 0.65rem' }}>
          <Sparkles size={11} /> 3D WebGL Stage
        </span>
        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Drag to Orbit Camera
        </span>
      </div>

      {/* Visualizer Mode Switcher - Top Right */}
      <div style={{
        position: 'absolute',
        top: '14px',
        right: '16px',
        display: 'flex',
        gap: '5px',
        zIndex: 10,
        background: 'rgba(6, 8, 13, 0.65)',
        padding: '3px',
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border-color)',
        backdropFilter: 'blur(10px)'
      }}>
        <button
          onClick={() => setSceneMode('studio')}
          style={{
            background: sceneMode === 'studio' ? 'var(--accent-indigo)' : 'transparent',
            color: sceneMode === 'studio' ? '#ffffff' : 'var(--text-muted)',
            fontSize: '0.72rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontWeight: 600
          }}
          title="3D Condenser Microphone Studio"
        >
          <Radio size={12} /> Studio Mic
        </button>
        <button
          onClick={() => setSceneMode('waveform')}
          style={{
            background: sceneMode === 'waveform' ? 'var(--accent-cyan)' : 'transparent',
            color: sceneMode === 'waveform' ? '#06080d' : 'var(--text-muted)',
            fontSize: '0.72rem',
            padding: '0.25rem 0.65rem',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontWeight: 700
          }}
          title="3D Cyber Equalizer Ring"
        >
          <Activity size={12} /> Cyber Ring
        </button>
      </div>

      {/* Preset Camera Switcher - Bottom Right */}
      <div style={{
        position: 'absolute',
        bottom: '14px',
        right: '16px',
        display: 'flex',
        gap: '6px',
        zIndex: 10
      }}>
        <button
          onClick={() => handleSetPreset('studio')}
          style={{
            background: viewPreset === 'studio' ? 'rgba(99, 102, 241, 0.45)' : 'rgba(0, 0, 0, 0.6)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            fontSize: '0.72rem',
            padding: '0.3rem 0.7rem',
            borderRadius: 'var(--radius-sm)',
            backdropFilter: 'blur(8px)',
            fontWeight: 600
          }}
        >
          Studio View
        </button>
        <button
          onClick={() => handleSetPreset('close-up')}
          style={{
            background: viewPreset === 'close-up' ? 'rgba(99, 102, 241, 0.45)' : 'rgba(0, 0, 0, 0.6)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            fontSize: '0.72rem',
            padding: '0.3rem 0.7rem',
            borderRadius: 'var(--radius-sm)',
            backdropFilter: 'blur(8px)',
            fontWeight: 600
          }}
        >
          Close-Up
        </button>
        <button
          onClick={() => handleSetPreset('birds-eye')}
          style={{
            background: viewPreset === 'birds-eye' ? 'rgba(99, 102, 241, 0.45)' : 'rgba(0, 0, 0, 0.6)',
            color: '#ffffff',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            fontSize: '0.72rem',
            padding: '0.3rem 0.7rem',
            borderRadius: 'var(--radius-sm)',
            backdropFilter: 'blur(8px)',
            fontWeight: 600
          }}
        >
          Top Down
        </button>
      </div>
    </div>
  );
}
