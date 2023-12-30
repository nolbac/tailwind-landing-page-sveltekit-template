<script lang="ts">
	import Logo from "./Logo.svelte";

  const linkClasses = "text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out";
</script>
<footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Top area: Blocks -->
      <div class="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

        <!-- 1st block -->
        <div class="sm:col-span-12 lg:col-span-3">
          <div class="mb-2">
            <Logo />
          </div>
          <div class="text-sm text-gray-600">
            <a href="#0" class={`${linkClasses} transition`}>Terms</a> · <a href="#0" class={`${linkClasses} transition`}>Privacy Policy</a>
          </div>
        </div>

        <!-- 2nd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 font-medium mb-2">Products</h6>
          <ul class="text-sm">
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Web Studio</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>DynamicBox Flex</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Programming Forms</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Integrations</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Command-line</a>
            </li>
          </ul>
        </div>

        <!-- 3rd block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 font-medium mb-2">Resources</h6>
          <ul class="text-sm">
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Documentation</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Tutorials & Guides</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Blog</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Support Center</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Partners</a>
            </li>
          </ul>
        </div>

        <!-- 4th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <h6 class="text-gray-800 font-medium mb-2">Company</h6>
          <ul class="text-sm">
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Home</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>About us</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Company values</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Pricing</a>
            </li>
            <li class="mb-2">
              <a href="#0" class={linkClasses}>Privacy Policy</a>
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-3">
          <h6 class="text-gray-800 font-medium mb-2">Subscribe</h6>
          <p class="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
          <form>
            <div class="flex flex-wrap mb-4">
              <div class="w-full">
                <label class="block text-sm sr-only" for="newsletter">Email</label>
                <div class="relative flex items-center max-w-xs">
                  <input id="newsletter" type="email" class="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
                  <button type="submit" class="absolute inset-0 left-auto" aria-label="Subscribe">
                    <span class="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
                    <svg class="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fill-rule="nonzero" />
                    </svg>
                  </button>
                </div>
                <!-- Success message -->
                <!-- <p class="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> -->
              </div>
            </div>
          </form>
        </div>

      </div>

      <!-- Bottom area -->
      <div class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

        <!-- Social as -->
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li>
            <a href="#0" class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
              </svg>
            </a>
          </li>
          <li class="ml-4">
            <a href="#0" class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
              </svg>
            </a>
          </li>
          <li class="ml-4">
            <a href="#0" class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
              </svg>
            </a>
          </li>
        </ul>

        <!-- Copyrights note -->
        <div class="text-sm text-gray-600 mr-4">&copy; Cruip.com. All rights reserved.</div>

      </div>

    </div>
  </footer>