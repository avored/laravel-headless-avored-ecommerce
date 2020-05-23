<template>
  <div class="px-3 w-full">
    <div class="flex flex-wrap pb-5 overflow-hidden">
      <div class="w-1/4 overflow-hidden">
        <AccountSidebar />
      </div>
      <div class="w-3/4 overflow-hidden">
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="pb-5 border-b border-gray-200">
            <h3 class="text-lg leading-6 font-medium text-gray-900">User Address Information</h3>
          </div>
          <div class="px-4 py-5 sm:p-0">
            <div class="flex flex-wrap -mx-5 overflow-hidden sm:-mx-3 md:-mx-4 lg:-mx-4">
              <div
                class="my-5 px-5 w-1/3 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
              >
                <div class="bg-white px-4 py-5 border border-gray-200 sm:px-6">
                  <h3
                    class="text-lg leading-6 border-b pb-3 font-medium text-gray-900"
                  >Billing Address</h3>
                  <div class="pt-5 text-sm text-gray-600">
                    First Name Last name
                    <br />Phone No
                    <br />Company Name
                    <br />Address line1
                    <br />Address line 2
                    <br />City | Postal Code
                    <br />State
                    <br />Country
                    <br />
                  </div>
                </div>
              </div>

              <div
                class="my-5 px-5 w-1/3 overflow-hidden sm:my-3 sm:px-3 sm:w-1/2 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
              >
                <div class="bg-white px-4 py-5 border border-gray-200 sm:px-6">
                  <h3
                    class="text-lg leading-6 border-b pb-3 font-medium text-gray-900"
                  >Shipping Address</h3>
                  <div class="pt-5 text-sm text-gray-600">
                    First Name Last name
                    <br />Phone No
                    <br />Company Name
                    <br />Address line1
                    <br />Address line 2
                    <br />City | Postal Code
                    <br />State
                    <br />Country
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AccountSidebar from "@/views/account/Sidebar.vue";
export default {
  name: "UserDashboard",
  components: {
    AccountSidebar
  },

  data() {
    return {};
  }
};
</script>
