/* ==========================================================================
   CV-PNO-PRO | BACKGROUND GANTT / CPM NETWORK CANVAS
   Futuristic interactive blueprint network simulation
   ========================================================================== */

(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const nodes = [];
  const nodeCount = Math.floor((width * height) / 22000); // adaptive density
  const maxDistance = 140;

  let mouse = { x: null, y: null, radius: 150 };

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Node class representing project milestones & CPM activities
  class ProjectNode {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 2 + 1.2;
      this.isCritical = Math.random() > 0.85; // 15% critical path nodes
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse subtle interaction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw(theme) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      if (this.isCritical) {
        ctx.fillStyle = theme === 'light' ? 'rgba(239, 68, 68, 0.65)' : 'rgba(239, 68, 68, 0.85)';
      } else {
        ctx.fillStyle = theme === 'light' ? 'rgba(2, 132, 199, 0.5)' : 'rgba(0, 242, 254, 0.65)';
      }
      ctx.fill();
    }
  }

  for (let i = 0; i < Math.max(nodeCount, 35); i++) {
    nodes.push(new ProjectNode());
  }

  function render() {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    ctx.clearRect(0, 0, width, height);

    // Draw dependency lines (CPM relationships)
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * (isLight ? 0.15 : 0.22);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          if (nodes[i].isCritical && nodes[j].isCritical) {
            ctx.strokeStyle = `rgba(239, 68, 68, ${alpha * 1.5})`; // critical path link
            ctx.lineWidth = 1.2;
          } else {
            ctx.strokeStyle = isLight
              ? `rgba(2, 132, 199, ${alpha})`
              : `rgba(0, 242, 254, ${alpha})`;
            ctx.lineWidth = 0.8;
          }
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].update();
      nodes[i].draw(isLight ? 'light' : 'dark');
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
})();
