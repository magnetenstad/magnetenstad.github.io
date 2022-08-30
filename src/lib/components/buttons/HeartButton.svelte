<script lang="ts">
  import BaseIcon from '$lib/components/icons/BaseIcon.svelte';
  import HeartSvg from '$lib/assets/icons/heart.svelte';
  import axios from 'axios';

  let likes = 0;
  let hasLiked = false;

  axios.get('https://api.magne.dev/get-likes').then((res) => (likes = res.data.likes));

  const addLike = () => {
    axios.post('https://api.magne.dev/add-like').then((res) => (likes = res.data.likes));
    hasLiked = true;
  };
</script>

<div class="like-button" on:click|once|stopPropagation={addLike}>
  {likes > 0 ? likes : ''}
  <BaseIcon options={{ fill: hasLiked ? 'var(--color-accent)' : 'none' }}>
    <HeartSvg />
  </BaseIcon>
</div>

<style>
  .like-button {
    position: fixed;
    right: 10px;
    top: 10px;

    width: 80px;
    height: 40px;

    background-color: var(--color-accent-shadow);
    color: var(--color-accent);
    border-radius: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    user-select: none;
    cursor: pointer;
  }
</style>
