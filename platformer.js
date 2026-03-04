const platformerCanvas = document.getElementById("platformerCanvas");
const platformerCoins = document.getElementById("platformerCoins");
const platformerLives = document.getElementById("platformerLives");
const platformerState = document.getElementById("platformerState");
const platformerStartBtn = document.getElementById("platformerStartBtn");
const platformerResetBtn = document.getElementById("platformerResetBtn");
const platformerLeftBtn = document.getElementById("platformerLeftBtn");
const platformerRightBtn = document.getElementById("platformerRightBtn");
const platformerJumpBtn = document.getElementById("platformerJumpBtn");

if (platformerCanvas) {
  const ctx = platformerCanvas.getContext("2d");

  const WORLD = {
    width: platformerCanvas.width,
    height: platformerCanvas.height,
    gravity: 0.55,
    friction: 0.82,
    moveSpeed: 0.85,
    jumpPower: 11.5
  };

  const stage = {
    platforms: [
      { x: 0, y: 284, w: 760, h: 36 },
      { x: 120, y: 225, w: 110, h: 16 },
      { x: 285, y: 190, w: 110, h: 16 },
      { x: 450, y: 160, w: 120, h: 16 },
      { x: 625, y: 120, w: 90, h: 16 }
    ],
    flag: { x: 706, y: 54, w: 16, h: 66 },
    coins: [
      { x: 155, y: 196, r: 8, got: false },
      { x: 330, y: 162, r: 8, got: false },
      { x: 510, y: 132, r: 8, got: false },
      { x: 666, y: 92, r: 8, got: false }
    ]
  };

  const player = {
    x: 40,
    y: 244,
    w: 24,
    h: 32,
    vx: 0,
    vy: 0,
    canJump: false,
    alive: true
  };

  const input = {
    left: false,
    right: false
  };

  let isRunning = false;
  let loopId = null;
  let lives = 3;

  function resetCoins() {
    stage.coins.forEach((coin) => {
      coin.got = false;
    });
  }

  function resetPlayer() {
    player.x = 40;
    player.y = 244;
    player.vx = 0;
    player.vy = 0;
    player.canJump = false;
    player.alive = true;
  }

  function countGotCoins() {
    return stage.coins.filter((coin) => coin.got).length;
  }

  function setHud(text) {
    platformerCoins.textContent = `🪙 ${countGotCoins()} / ${stage.coins.length}`;
    platformerLives.textContent = `❤️ ${lives}`;
    platformerState.textContent = text;
  }

  function intersects(a, b) {
    return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
  }

  function updatePhysics() {
    if (input.left) {
      player.vx -= WORLD.moveSpeed;
    }
    if (input.right) {
      player.vx += WORLD.moveSpeed;
    }

    player.vx *= WORLD.friction;
    player.vx = Math.max(Math.min(player.vx, 4.3), -4.3);

    player.vy += WORLD.gravity;
    player.vy = Math.min(player.vy, 12);

    player.x += player.vx;
    player.y += player.vy;

    player.canJump = false;

    stage.platforms.forEach((platform) => {
      const next = { x: player.x, y: player.y, w: player.w, h: player.h };
      if (!intersects(next, platform)) {
        return;
      }

      const playerBottomPrev = player.y + player.h - player.vy;
      if (playerBottomPrev <= platform.y + 3 && player.vy >= 0) {
        player.y = platform.y - player.h;
        player.vy = 0;
        player.canJump = true;
      } else if (player.x + player.w / 2 < platform.x + platform.w / 2) {
        player.x = platform.x - player.w;
        player.vx = 0;
      } else {
        player.x = platform.x + platform.w;
        player.vx = 0;
      }
    });

    if (player.x < 0) {
      player.x = 0;
      player.vx = 0;
    }

    if (player.x + player.w > WORLD.width) {
      player.x = WORLD.width - player.w;
      player.vx = 0;
    }

    if (player.y > WORLD.height + 30) {
      lives -= 1;
      if (lives <= 0) {
        lives = 0;
        isRunning = false;
        setHud("Game Over");
      } else {
        resetPlayer();
        setHud("Try again!");
      }
    }

    stage.coins.forEach((coin) => {
      if (coin.got) {
        return;
      }
      const dx = player.x + player.w / 2 - coin.x;
      const dy = player.y + player.h / 2 - coin.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < coin.r + 12) {
        coin.got = true;
        setHud("Great! Coin collected");
      }
    });

    const allCoins = countGotCoins() === stage.coins.length;
    if (allCoins && intersects(player, stage.flag)) {
      isRunning = false;
      setHud("Stage Clear! 🎉");
    }
  }

  function drawScene() {
    ctx.clearRect(0, 0, WORLD.width, WORLD.height);

    stage.platforms.forEach((platform) => {
      ctx.fillStyle = "#88b06b";
      ctx.fillRect(platform.x, platform.y, platform.w, platform.h);
      ctx.fillStyle = "#6f944f";
      ctx.fillRect(platform.x, platform.y, platform.w, 5);
    });

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(stage.flag.x, stage.flag.y, 4, stage.flag.h);
    ctx.fillStyle = "#ff6b6b";
    ctx.fillRect(stage.flag.x + 4, stage.flag.y + 6, stage.flag.w, 14);

    stage.coins.forEach((coin) => {
      if (coin.got) {
        return;
      }
      ctx.beginPath();
      ctx.arc(coin.x, coin.y, coin.r, 0, Math.PI * 2);
      ctx.fillStyle = "#ffd95e";
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#e0a400";
      ctx.stroke();
    });

    ctx.fillStyle = "#ff7b4a";
    ctx.fillRect(player.x, player.y, player.w, player.h);
    ctx.fillStyle = "#203356";
    ctx.fillRect(player.x + 4, player.y + 8, 5, 5);
    ctx.fillRect(player.x + 15, player.y + 8, 5, 5);
  }

  function loop() {
    if (isRunning) {
      updatePhysics();
    }
    drawScene();
    loopId = requestAnimationFrame(loop);
  }

  function startStage() {
    lives = 3;
    resetCoins();
    resetPlayer();
    isRunning = true;
    setHud("Go!");
  }

  function resetStage() {
    lives = 3;
    resetCoins();
    resetPlayer();
    isRunning = false;
    setHud("Ready");
  }

  function jump() {
    if (!isRunning) {
      return;
    }
    if (player.canJump) {
      player.vy = -WORLD.jumpPower;
      player.canJump = false;
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
      input.left = true;
    }
    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
      input.right = true;
    }
    if (event.key === "ArrowUp" || event.key === " " || event.key.toLowerCase() === "w") {
      event.preventDefault();
      jump();
    }
  });

  document.addEventListener("keyup", (event) => {
    if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
      input.left = false;
    }
    if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
      input.right = false;
    }
  });

  function bindHoldButton(button, key) {
    if (!button) {
      return;
    }
    const onDown = (event) => {
      event.preventDefault();
      input[key] = true;
    };
    const onUp = (event) => {
      event.preventDefault();
      input[key] = false;
    };

    button.addEventListener("pointerdown", onDown);
    button.addEventListener("pointerup", onUp);
    button.addEventListener("pointercancel", onUp);
    button.addEventListener("pointerleave", onUp);
  }

  bindHoldButton(platformerLeftBtn, "left");
  bindHoldButton(platformerRightBtn, "right");

  platformerJumpBtn?.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    jump();
  });

  platformerStartBtn?.addEventListener("click", startStage);
  platformerResetBtn?.addEventListener("click", resetStage);

  setHud("Ready");
  if (!loopId) {
    loop();
  }
}
