<script>
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  
  let isVisible = false;
  
  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible = true;
        }
      });
    }, { threshold: 0.1 });

    const section = document.getElementById('about-section');
    observer.observe(section);

    return () => observer.disconnect();
  });
</script>

<section id="about-section" class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4">
    {#if isVisible}
      <div class="text-center mb-12" in:fade={{ duration: 1000, delay: 200 }}>
        <span class="text-primary uppercase tracking-wider font-antonio font-semibold">About Us</span>
        <h2 class="font-anton text-4xl mt-2">Help Is Our Main Goal</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="relative" in:fly={{ x: -50, duration: 1000, delay: 400 }}>
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Join the movement"
            class="rounded-lg shadow-xl"
          />
          <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg hidden md:block">
            <p class="text-2xl font-anton">10+</p>
            <p class="text-sm font-antic">Years of Impact</p>
          </div>
        </div>
        <div in:fly={{ x: 50, duration: 1000, delay: 600 }}>
          <div class="space-y-8">
            <div>
              <h3 class="font-anton text-2xl mb-2">Our Mission</h3>
              <p class="font-antic text-gray-600">
                To provide essential resources and support to communities in need, fostering sustainable development and empowering individuals to build better futures.
              </p>
            </div>
            <div>
              <h3 class="font-anton text-2xl mb-2">Our Vision</h3>
              <p class="font-antic text-gray-600">
                A world where every individual has access to basic necessities and opportunities for growth and development.
              </p>
            </div>
            <div>
              <h3 class="font-anton text-2xl mb-2">Our Goal</h3>
              <p class="font-antic text-gray-600">
                To create lasting positive change through sustainable initiatives, education, and community empowerment programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>
</section>