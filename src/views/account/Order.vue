<template>
<div class="px-3 w-full">
    <div class="flex flex-wrap pb-5 overflow-hidden">
        <div class="w-1/4 overflow-hidden">
            <AccountSidebar />
        </div>

        <div class="w-3/4 overflow-hidden">
        <div class="bg-white shadow overflow-hidden  sm:rounded-lg">
              <div class="pb-5 border-b border-gray-200">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    User Order Information
                  </h3>
                 
              </div>
              <div class="px-4 py-5 sm:p-0">
            <div class="flex flex-col">
            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:px-8">
              <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table class="min-w-full">
                  <thead>
                    <tr class="">  
                      <th class="px-6 py-3 bg-gray-700 font-bold text-left text-xs leading-4 text-gray-500 uppercase">
                        Name
                      </th>
                      <th class="px-6 py-3 bg-gray-700 font-bold text-left text-xs leading-4 text-gray-500 uppercase">
                        Title
                      </th>
                      <th class="px-6 py-3 bg-gray-700 font-bold text-left text-xs leading-4 text-gray-500 uppercase">
                        Email
                      </th>
                      <th class="px-6 py-3 bg-gray-700 font-bold text-left text-xs leading-4 text-gray-500 uppercase">
                        Role
                      </th>
                      <th class="px-6 py-3 bg-gray-700 font-bold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white">
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Director, Human Resources
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Owner
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Director, Human Resources
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Owner
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Director, Human Resources
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Owner
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Director, Human Resources
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Owner
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                    <tr class="bg-white">
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                        Bernard Lane
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Director, Human Resources
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        bernardlane@example.com
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                        Owner
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import AccountSidebar from  '@/views/account/Sidebar.vue'
export default {
  name: 'UserDashboard',
  components: {
    AccountSidebar
  },
  
  data() {
    return {
      
    }
  }
}
</script>
