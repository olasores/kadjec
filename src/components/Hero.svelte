

<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  let isVisible = true; // Hero is always visible on load
</script>

<section id="home" class="relative h-screen flex items-center justify-center">
  <div class="absolute inset-0 bg-black/60 z-10"></div>
  <div class="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      alt="Children smiling"
      class="w-full h-full object-cover"
    />
  </div>
  
  <div class="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
    {#if isVisible}
      <h1 
        class="font-anton text-5xl md:text-6xl mb-6 leading-tight"
        in:fly={{ y: -50, duration: 1000 }}
      >
        Providing Access To The Most Basic Essentials Of Life
      </h1>
      <p 
        class="font-antic text-xl mb-8 text-gray-200"
        in:fade={{ duration: 1000, delay: 500 }}
      >
        Join us in making a difference in the lives of those who need it most
      </p>
      <button 
        class="nav-link bg-primary text-white px-8 py-3 rounded-md text-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg"
        in:fade={{ duration: 1000, delay: 1000 }}
      >
        Donate Now
      </button>
    {/if}
  </div>
</section>