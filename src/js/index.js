import SceneManager from './SceneManager';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('webgl2');
const sceneManager = new SceneManager(canvas, context);

const resizeCanvas = () => {
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  sceneManager.resizeHandler();
}

const bindEvents = () => {
  window.onresize = resizeCanvas;
  resizeCanvas();
}

const render = () => {
  window.requestAnimationFrame(render);
  sceneManager.update();
}

bindEvents();
render();