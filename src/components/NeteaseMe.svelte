<script lang="ts">
import { onMount } from 'svelte';

export let id: string;
export let type: 'song' | 'playlist' | 'album' = 'song';
export let lyric = true;
export let theme = 'auto';
export let size: 'compact' | 'mini' = 'compact';

let wrap: HTMLDivElement;

onMount(async () => {
  /* 1. 同步内联 CSS（保证首次进入就有样式） */
  if (!(document as any).__neteaseMiniPlayerCSS) {
    const css = await fetch(
      '/assets/css/netease-mini-player-v2.css'
    ).then((r) => r.text());
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    (document as any).__neteaseMiniPlayerCSS = true;
  }

  /* 2. 加载 JS（仅一次） */
  if (!(window as any).NeteaseMiniPlayer) {
    const sc = document.createElement('script');
    sc.src = '/assets/js/netease-mini-player-v2.js';
    sc.onload = init;
    document.body.appendChild(sc);
  } else {
    init();
  }

  function init() {
    const player = document.createElement('div');
    player.className = 'netease-mini-player';
    player.setAttribute(`data-${type}-id`, id);
    player.setAttribute('data-lyric', String(lyric));
    player.setAttribute('data-theme', theme);
    player.setAttribute('data-size', size);
    wrap.appendChild(player);
    (window as any).NeteaseMiniPlayer.init();
  }
});
</script>

<div bind:this={wrap} class="mb-3 md:mb-4" />