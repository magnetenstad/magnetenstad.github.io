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
    const maxDistX = window.innerWidth / 2;
    const maxDistY = window.innerHeight / 2;
    const centerX = maxDistX;
    const centerY = maxDistY + 100;
    const deltaX = centerX - e.pageX;
    const deltaY = centerY - e.pageY;

    const { max, scale } = settings;
    const tiltX = (deltaX / maxDistX) * max;
    const tiltY = -(deltaY / maxDistY) * max;

    node.style.transform =
      `perspective(${1000}px) ` +
      `rotateX(${reverse * tiltY}deg) ` +
      `rotateY(${reverse * tiltX}deg) ` +
      `scale3d(${Array(3).fill(scale).join(', ')})`;
  }

  let transitionId: NodeJS.Timeout;
  function smoothTransition(transitionMs: number) {
    clearTimeout(transitionId);
    if (transitionMs <= 0) return;
    node.style.willChange = 'transform';
    node.style.transition = `${transitionMs}ms`;
    transitionId = setTimeout(() => smoothTransition(transitionMs / 2 - 1), transitionMs / 2 - 1);
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

  const onMouseEnterDoc = () => enableTilt(300);
  const onMouseLeaveDoc = () => disableTilt(300);
  const onMouseEnterNode = () => disableTilt(100);
  const onMouseLeaveNode = () => enableTilt(100);

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseenter', onMouseEnterDoc);
  document.addEventListener('mouseleave', onMouseLeaveDoc);
  // node.addEventListener('mouseenter', onMouseEnterNode);
  // node.addEventListener('mouseleave', onMouseLeaveNode);
  onMouseEnterDoc();

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
