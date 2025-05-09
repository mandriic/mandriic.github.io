import * as THREE from 'https://esm.sh/three@0.157.0';
import { OrbitControls } from 'https://esm.sh/three@0.157.0/examples/jsm/controls/OrbitControls.js';
import { FontLoader } from 'https://esm.sh/three@0.157.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://esm.sh/three@0.157.0/examples/jsm/geometries/TextGeometry.js';

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Pixel generation
const pixelGroup = new THREE.Group();
const pixelCount = 300;
for (let i = 0; i < pixelCount; i++) {
    const size = Math.random() * 1 + 0.05;
    const geometry = new THREE.BoxGeometry(size, size, size);
    const colors = [0xff0000, 0x00ff00, 0x0000ff];
    const material = new THREE.MeshStandardMaterial({
        color: colors[Math.floor(Math.random() * colors.length)]
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(
        (Math.random() - 0.5) * 30,
                      (Math.random() - 0.5) * 30,
                      (Math.random() - 0.5) * 30
    );
    pixelGroup.add(cube);
}
scene.add(pixelGroup);

// Console texts with glitch effect
const consoleTexts = [
    'booting node_001...',
'pixels mixer | █ █ █ . . .',
'connection unstable...',
'message received: "I\'m learning."',
'initializing personality module...',
'warning: system corruption',
'error: memory leak detected',
'attempting recovery...',
'failures detected: 23',
'transmission interrupted'
];

const loader = new FontLoader();
let font;
let activeTextMeshes = [];

// Define different zones for text to appear
const textZones = [
    { x: -15, y: 10, z: 0 },
{ x: 15, y: 10, z: 0 },
{ x: -15, y: -10, z: 0 },
{ x: 15, y: -10, z: 0 },
{ x: 0, y: 0, z: -10 },
{ x: 0, y: 0, z: 10 }
];

loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (loadedFont) {
    font = loadedFont;
    startTextAnimation();
});

function createTextMesh(text, position) {
    const geometry = new TextGeometry(text, {
        font: font,
        size: 1.5,
        height: 0.2,
        curveSegments: 4
    });

    // Center the geometry
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;
    const centerOffset = -0.5 * (boundingBox.max.x - boundingBox.min.x);

    const material = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
        transparent: true,
        opacity: 1
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(position.x + centerOffset, position.y, position.z);
    return mesh;
}

function applyGlitchEffect(mesh, intensity = 0.1) {
    // Random position offset
    mesh.position.x += (Math.random() - 0.5) * 0.1 * intensity;
    mesh.position.y += (Math.random() - 0.5) * 0.1 * intensity;

    // Random rotation
    mesh.rotation.z = (Math.random() - 0.5) * 0.1 * intensity;

    // Random scale
    const scale = 1 + (Math.random() - 0.5) * 0.1 * intensity;
    mesh.scale.set(scale, scale, scale);

    // Random opacity flicker
    mesh.material.opacity = 0.7 + Math.random() * 0.3;

    // Random color shift
    if (Math.random() > 0.8) {
        mesh.material.color.setHSL(Math.random(), 1, 0.5);
    }
}

function startTextAnimation() {
    // Initial text
    spawnRandomText();

    // Schedule random text appearances
    setInterval(spawnRandomText, 2000);

    // Schedule text removals
    setInterval(removeRandomText, 1500);
}

function spawnRandomText() {
    if (activeTextMeshes.length > 10) return; // Limit number of texts

    const randomText = consoleTexts[Math.floor(Math.random() * consoleTexts.length)];
    const randomZone = textZones[Math.floor(Math.random() * textZones.length)];

    const textMesh = createTextMesh(randomText, randomZone);
    scene.add(textMesh);
    activeTextMeshes.push({
        mesh: textMesh,
        createdAt: Date.now(),
                          lifetime: 3000 + Math.random() * 4000,
                          glitchIntensity: 0.5 + Math.random() * 0.2
    });
}

function removeRandomText() {
    if (activeTextMeshes.length === 0) return;

    // Remove expired texts
    const now = Date.now();
    activeTextMeshes = activeTextMeshes.filter(item => {
        if (now - item.createdAt > item.lifetime) {
            scene.remove(item.mesh);
            return false;
        }
        return true;
    });

    // Occasionally force remove a random text
    if (Math.random() > 0.7 && activeTextMeshes.length > 0) {
        const index = Math.floor(Math.random() * activeTextMeshes.length);
        scene.remove(activeTextMeshes[index].mesh);
        activeTextMeshes.splice(index, 1);
    }
}

// Animation functions
function animatePixels() {
    pixelGroup.children.forEach((cube, i) => {
        const scale = 1 + 0.1 * Math.sin(Date.now() * 0.004 + i);
        cube.scale.set(scale, scale, scale);
    });
}

let lightIntensity = 1;
let lightDirection = 1;
function flickerLight() {
    // More dramatic flickering
    if (Math.random() > 0.95) {
        lightIntensity = Math.random() * 2;
    } else {
        if (lightIntensity > 1.5 || lightIntensity < 0.3) {
            lightDirection *= -1;
        }
        lightIntensity += 0.02 * lightDirection;
    }
    pointLight.intensity = lightIntensity;
}

// Main animation loop
function animate() {
    requestAnimationFrame(animate);

    controls.update();
    animatePixels();
    flickerLight();

    // Apply glitch effects to all active texts
    activeTextMeshes.forEach(item => {
        applyGlitchEffect(item.mesh, item.glitchIntensity);
    });

    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
