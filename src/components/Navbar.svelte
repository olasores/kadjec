<script>
  let isMenuOpen = false;
  import logo from '../assets/logo.png';

</script>

<nav class="bg-white shadow-lg w-full z-50">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <div class="flex items-center space-x-4">
        <img src={logo} alt="KADJEC Logo" class="h-16 w-16" />
        <div>
          <h1 class="text-3xl font-anton text-primary">KADJEC</h1>
          <p class="text-sm text-gray-600">Charity Foundation</p>
        </div>
      </div>
      
      <div class="hidden md:flex items-center space-x-8">
        <a href="#home" class="nav-link text-gray-700 hover:text-primary transition-colors">Home</a>
        <a href="#about" class="nav-link text-gray-700 hover:text-primary transition-colors">About</a>
        <a href="#gallery" class="nav-link text-gray-700 hover:text-primary transition-colors">Gallery</a>
        <a href="#contact" class="nav-link text-gray-700 hover:text-primary transition-colors">Contact</a>
        <button class="nav-link bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-all transform hover:scale-105">
          Donate
        </button>
      </div>

      <button class="md:hidden" on:click={() => isMenuOpen = !isMenuOpen}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  {#if isMenuOpen}
    <div class="md:hidden bg-white border-t">
      <a href="#home" class="nav-link block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
      <a href="#about" class="nav-link block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a>
      <a href="#gallery" class="nav-link block px-4 py-2 text-gray-700 hover:bg-gray-100">Gallery</a>
      <a href="#contact" class="nav-link block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
      <div class="px-4 py-2">
        <button class="nav-link w-full bg-primary text-white px-6 py-2 rounded-md hover:bg-opacity-90">
          Donate
        </button>
      </div>
    </div>
  {/if}
</nav>