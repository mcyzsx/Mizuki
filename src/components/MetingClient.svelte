<script>
  import { onMount } from 'svelte';
  export let server = 'netease';
  export let type    = 'song';
  export let id      = '';
  export let theme   = 'var(--primary)';
  export let autoplay = false;

  onMount(() => {
    // 动态拉 MetingJS（只拉一次）
    if (!window.APlayer || !window.Meting) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css';
      document.head.appendChild(link);

      Promise.all([
        import('https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js'),
        import('https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js')
      ]).then(() => {
        // 库加载完再补一个 <meting-js> 就能触发初始化
        const box = document.getElementById('meting-box');
        const tag = document.createElement('meting-js');
        tag.setAttribute('server', server);
        tag.setAttribute('type', type);
        tag.setAttribute('id', id);
        tag.setAttribute('theme', theme);
        tag.setAttribute('autoplay', autoplay);
        box.appendChild(tag);
      });
    }
  });
</script>

<div id="meting-box" class="mb-3 md:mb-4"></div>