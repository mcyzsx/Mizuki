<script lang="ts">
import { onMount } from 'svelte';

export let songId: string;
export let autoplay = false;
export let theme = 'var(--primary)';

let wrap: HTMLDivElement;

onMount(async () => {
  /* ---------- 1. 同步加载 CSS（内联） ---------- */
  if (!(document as any).__neteaseMiniPlayerCSS) {
    const css = await fetch(
      'https://cdn.jsdelivr.net/gh/mcyzsx/NeteaseMiniPlayer@main/netease-mini-player-v2.css'
    ).then((r) => r.text());
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    (document as any).__neteaseMiniPlayerCSS = true;
  }

  /* ---------- 2. 加载 JS（仅一次） ---------- */
  if (!(window as any).NeteaseMiniPlayer) {
    const sc = document.createElement('script');
    sc.src = 'https://cdn.jsdelivr.net/gh/mcyzsx/NeteaseMiniPlayer@main/netease-mini-player-v2.js';
    sc.onload = init;
    document.body.appendChild(sc);
  } else {
    init();
  }

  function init() {
    /* ---------- 3. 生成播放器 DOM ---------- */
    const player = document.createElement('div');
    player.className = 'netease-mini-player';
    player.setAttribute('data-song-id', songId);
    player.setAttribute('data-theme', theme === 'var(--primary)' ? 'auto' : theme);
    player.setAttribute('data-size', 'compact');
    player.setAttribute('data-lyric', 'true');
    wrap.appendChild(player);
    /* ---------- 4. 初始化 ---------- */
    (window as any).NeteaseMiniPlayer.init();
  }
});
</script>

<div bind:this={wrap} class="mb-3 md:mb-4" />