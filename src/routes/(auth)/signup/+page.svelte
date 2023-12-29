<script>
    import { pageMetadata } from '$lib/store';
    pageMetadata.set({
        title: 'Sign Up - Simple',
        description: 'Page description',
    });
</script>

<section class="bg-gradient-to-b from-gray-100 to-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 class="h1">Welcome. We exist to make entrepreneurism easier.</h1>
        </div>

        <!-- Form -->
        <div class="max-w-sm mx-auto">
          <form>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label class="block text-gray-800 text-sm font-medium mb-1" for="name">Name <span class="text-red-600">*</span></label>
                <input id="name" type="text" class="form-input w-full text-gray-800" placeholder="Enter your name" required />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label class="block text-gray-800 text-sm font-medium mb-1" for="email">Email <span class="text-red-600">*</span></label>
                <input id="email" type="email" class="form-input w-full text-gray-800" placeholder="Enter your email address" required />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label class="block text-gray-800 text-sm font-medium mb-1" for="password">Password <span class="text-red-600">*</span></label>
                <input id="password" type="password" class="form-input w-full text-gray-800" placeholder="Enter your password" required />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mt-6">
              <div class="w-full px-3">
                <button class="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Sign up</button>
              </div>
            </div>
            <div class="text-sm text-gray-500 text-center mt-3">
              By creating an account, you agree to the <a class="underline" href="#0">terms & conditions</a>, and our <a class="underline" href="#0">privacy policy</a>.
            </div>
          </form>
          <div class="flex items-center my-6">
            <div class="border-t border-gray-300 grow mr-3" aria-hidden="true"></div>
            <div class="text-gray-600 italic">Or</div>
            <div class="border-t border-gray-300 grow ml-3" aria-hidden="true"></div>
          </div>
          <form>
            <div class="flex flex-wrap -mx-3 mb-3">
              <div class="w-full px-3">
                <button class="btn px-0 text-white bg-gray-900 hover:bg-gray-800 w-full relative flex items-center">
                  <svg class="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.95 0C3.578 0 0 3.578 0 7.95c0 3.479 2.286 6.46 5.466 7.553.397.1.497-.199.497-.397v-1.392c-2.187.497-2.683-.993-2.683-.993-.398-.895-.895-1.193-.895-1.193-.696-.497.1-.497.1-.497.795.1 1.192.795 1.192.795.696 1.292 1.888.895 2.286.696.1-.497.298-.895.497-1.093-1.79-.2-3.578-.895-3.578-3.975 0-.895.298-1.59.795-2.087-.1-.2-.397-.994.1-2.087 0 0 .695-.2 2.186.795a6.408 6.408 0 011.987-.299c.696 0 1.392.1 1.988.299 1.49-.994 2.186-.795 2.186-.795.398 1.093.199 1.888.1 2.087.496.596.795 1.291.795 2.087 0 3.08-1.889 3.677-3.677 3.875.298.398.596.895.596 1.59v2.187c0 .198.1.497.596.397C13.714 14.41 16 11.43 16 7.95 15.9 3.578 12.323 0 7.95 0z" />
                  </svg>
                  <span class="flex-auto pl-16 pr-8 -ml-16">Continue with GitHub</span>
                </button>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3">
              <div class="w-full px-3">
                <button class="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                  <svg class="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                  </svg>
                  <span class="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
                </button>
              </div>
            </div>
          </form>
          <div class="text-gray-600 text-center mt-6">
            Already using Simple? <a href="/signin" class="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign in</a>
          </div>
        </div>

      </div>
    </div>
  </section>