<script lang="ts">
  import AuthButton from '$components/ui/AuthButton.svelte';
  import CompanyIcons from '$components/ui/images/CompanyIcons.svelte';
	import { enhance } from '$app/forms';

  import { pageMetadata } from '$lib/store';
  pageMetadata.set({
        title: 'Sign In - Simple',
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
          <h1 class="h1">Welcome back. We exist to make entrepreneurism easier.</h1>
        </div>

        <!-- Form -->
        <div class="max-w-sm mx-auto">
          <form
              method="POST"
              use:enhance={({ formElement, formData, action, cancel }) => {
                  alert("Sign in Button Pressed");
                  cancel();
              }}
          >
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label class="block text-gray-800 text-sm font-medium mb-1" for="email">Email</label>
                <input id="email" type="email" class="form-input w-full text-gray-800" placeholder="Enter your email address" required />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <div class="flex justify-between">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="password">Password</label>
                  <a href="/reset-password" class="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</a>
                </div>
                <input id="password" type="password" class="form-input w-full text-gray-800" placeholder="Enter your password" required />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <div class="flex justify-between">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-gray-600 ml-2">Keep me signed in</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mt-6">
              <div class="w-full px-3">
                <AuthButton>Sign in</AuthButton>
              </div>
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
            Don't you have an account? <a href="/signup" class="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</a>
          </div>
        </div>

      </div>
    </div>
    
  </section>