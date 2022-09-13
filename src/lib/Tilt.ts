// Modified from: https://svelte.dev/repl/7b23ad9d2693424482cd411b0378b55b?version=3.24.1

function getSettings(settings = {}) {
  return { scale: 1, max: 20, reverse: true, ...settings };
}

export default function tilt(node: any, settingsObj?: any) {
  let settings = getSettings(settingsObj);
  let reverse = settings.reverse ? -1 : 1;
  let active = false;

  function onMouseMove(e: any) {
    if (!active) return;
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

  let transitionId: NodeJS.Timeout;
  function smoothTransition(transitionMs: number) {
    clearTimeout(transitionId);
    node.style.willChange = 'transform';
    node.style.transition = `${transitionMs}ms`;
    transitionId = setTimeout(() => (node.style.transition = '0s'), transitionMs);
  }

  function disableTilt(transitionMs: number) {
    active = false;
    smoothTransition(transitionMs);
    node.style.transform =
      `perspective(${1000}px) ` + `rotateX(0deg) ` + `rotateY(0deg) ` + `scale3d(1, 1, 1)`;
  }

  function enableTilt(transitionMs: number) {
    active = true;
    smoothTransition(transitionMs);
    node.style.willChange = 'transform';
  }

  const onMouseEnterDoc = () => enableTilt(200);
  const onMouseLeaveDoc = () => disableTilt(200);
  const onMouseEnterNode = () => disableTilt(50);
  const onMouseLeaveNode = () => enableTilt(50);

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseenter', onMouseEnterDoc);
  document.addEventListener('mouseleave', onMouseLeaveDoc);
  node.addEventListener('mouseenter', onMouseEnterNode);
  node.addEventListener('mouseleave', onMouseLeaveNode);

  return {
    destroy() {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnterDoc);
      document.removeEventListener('mouseleave', onMouseLeaveDoc);
      node.removeEventListener('mouseenter', onMouseEnterNode);
      node.removeEventListener('mouseleave', onMouseLeaveNode);
    },
    update(settingsObj: any) {
      settings = getSettings(settingsObj);
      reverse = settings.reverse ? -1 : 1;
    }
  };
}
