<template>
<nav class="px-5 mx-5">
    <router-link :to="{name: 'account.dashboard'}" class="group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full bg-red-500 text-white">
        <svg class="mr-4 h-6 w-6 " stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"/>
        </svg>
        Home
    </router-link>

    <router-link :to="{name: 'account.orders'}" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-semibold rounded-full hover:bg-red-500 hover:text-white">
        <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
        My Orders
    </router-link>
    
    
    <router-link :to="{name: 'account.addresses'}"  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-red-500 hover:text-white">
        <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
        Addresses
    </router-link>
    
    <router-link :to="{name: 'account.edit.profile'}" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-red-500 hover:text-white">
    <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        Edit Profile
    </router-link>
    <a href="#" class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-red-500 hover:text-white">
        <svg class="mr-4 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        Logout
    </a>
</nav>
</template>