// Modified from: https://svelte.dev/repl/7b23ad9d2693424482cd411b0378b55b?version=3.24.1

function getSettings(settings = {}) {
  return { scale: 1, max: 15, reverse: true, ...settings };
}

const TRANSITION_MS = 200;

export default function tilt(node, settingsObj) {
  let settings = getSettings(settingsObj);
  let reverse = settings.reverse ? -1 : 1;

  function onMouseMove(e) {
    const percX = e.pageX / window.innerWidth;
    const percY = e.pageY / window.innerHeight;

    const { max, scale } = settings;
    const twiceMax = max * 2;
    const tiltX = max - percX * twiceMax;
    const tiltY = percY * twiceMax - max;

    node.style.transform =
      `perspective(${1000}px) ` +
      `rotateX(${reverse * tiltY}deg) ` +
      `rotateY(${reverse * tiltX}deg) ` +
      `scale3d(${Array(3).fill(scale).join(', ')})`;
  }

  let transitionId;
  function smoothTransition() {
    clearTimeout(transitionId);
    node.style.willChange = 'transform';
    node.style.transition = `${TRANSITION_MS}ms`;
    transitionId = setTimeout(() => (node.style.transition = '0s'), TRANSITION_MS);
  }

  function onMouseLeave() {
    smoothTransition();
    node.style.transform =
      `perspective(${1000}px) ` + `rotateX(0deg) ` + `rotateY(0deg) ` + `scale3d(1, 1, 1)`;
  }

  function onMouseEnter() {
    smoothTransition();
    node.style.willChange = 'transform';
  }

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseleave', onMouseLeave);
  document.addEventListener('mouseenter', onMouseEnter);

  return {
    destroy() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseleave', onMouseEnter);
    },
    update(settingsObj) {
      settings = getSettings(settingsObj);
      reverse = settings.reverse ? -1 : 1;
    }
  };
}
