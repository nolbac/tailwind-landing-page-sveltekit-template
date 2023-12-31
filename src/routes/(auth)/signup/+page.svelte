<script lang="ts">
	import AuthButton from '$components/ui/AuthButton.svelte';
	import { enhance } from '$app/forms';
  
  import { pageMetadata } from '$lib/store';
  pageMetadata.set({
      title: 'Sign Up - Simple',
      description: 'Page description',
  });
  const myAlert = (e: Event) => {
    e.preventDefault();
    alert("Clicked Sign Up Provider");
  }
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
          <form
              method="POST"
              use:enhance={({ formElement, formData, action, cancel }) => {
                  alert("Sign up Button Pressed");
                  cancel();
              }}
          >
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
            <div class="flex flex-wrap">
              <AuthButton>Sign up</AuthButton>
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
                <AuthButton style="github" on:click={myAlert}>
                  Continue with Github
                </AuthButton>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3">
              <div class="w-full px-3">
                <AuthButton style="google" on:click={myAlert}>
                  Continue with Google
                </AuthButton>
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