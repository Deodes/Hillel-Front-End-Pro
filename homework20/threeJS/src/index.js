const scene = new THREE.Scene();
const fov = 70;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor('#ccc');
console.log(renderer);
document.body.prepend(renderer.domElement);

const geometry = new THREE.TorusBufferGeometry(10, 3, 16, 100);
const material = new THREE.MeshPhongMaterial({ color: 'blue' });
const torus = new THREE.Mesh(geometry, material);
torus.scale.set(15, 15, 15);
scene.add(torus);

camera.position.z = 540;
const light = new THREE.DirectionalLight('#fff', 1);
scene.add(light);
light.position.set(-1, 2, 4);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;
}

animate();