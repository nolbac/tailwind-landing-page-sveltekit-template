<script>
    import AuthButton from '$components/ui/AuthButton.svelte';
	import { enhance } from '$app/forms';
    
    import { pageMetadata } from '$lib/store';
    pageMetadata.set({
        title: 'Reset Password - Simple',
        description: 'Page description',
    });
</script>
<section class="bg-gradient-to-b from-gray-100 to-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 class="h1 mb-4">Let's get you back up on your feet</h1>
          <p class="text-xl text-gray-600">Enter the email address you used when you signed up for your account, and we'll email you a link to reset your password.</p>
        </div>

        <!-- Form -->
        <div class="max-w-sm mx-auto">
            <form
                method="POST"
                use:enhance={({ formElement, formData, action, cancel }) => {
                    alert("Hello");
                    cancel();
                }}
            >
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full px-3">
                <label class="block text-gray-800 text-sm font-medium mb-1" for="email">Email <span class="text-red-600">*</span></label>
                <input id="email" type="email" class="form-input w-full text-gray-800" placeholder="Enter your email address" required />
              </div>
            </div>
            <div class="flex flex-wrap">
                <AuthButton>Send reset link</AuthButton>
            </div>
          </form>
        </div>

      </div>
    </div>
  </section>
