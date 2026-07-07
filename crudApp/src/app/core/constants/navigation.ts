import { NavigationItem } from '../models/navigation-item.model';

export const CUSTOMER_MENU: NavigationItem[] = [

    {
        id: 1,
        title: 'Dashboard',
        icon: 'dashboard',
        route: '/customer/dashboard'
    },

    {
        id: 2,
        title: 'Products',
        icon: 'inventory_2',
        route: '/customer/products'
    },

    {
        id: 3,
        title: 'Categories',
        icon: 'category',
        route: '/customer/categories'
    },

    {
        id: 4,
        title: 'Cart',
        icon: 'shopping_cart',
        route: '/customer/cart'
    },

    {
        id: 5,
        title: 'Checkout',
        icon: 'payments',
        route: '/customer/checkout'
    },

    {
        id: 6,
        title: 'Orders',
        icon: 'receipt_long',
        route: '/customer/orders'
    },

    {
        id: 7,
        title: 'Wishlist',
        icon: 'favorite',
        route: '/customer/wishlist'
    },

    {
        id: 8,
        title: 'Mail',
        icon: 'mail',
        route: '/customer/mail'
    },

    {
        id: 9,
        title: 'AI Assistant',
        icon: 'smart_toy',
        route: '/customer/ai'
    },

    {
        id: 10,
        title: 'Settings',
        icon: 'settings',
        route: '/customer/settings'
    }

];

export const ADMIN_MENU: NavigationItem[] = [

    {
        id: 1,
        title: 'Dashboard',
        icon: 'dashboard',
        route: '/admin/dashboard'
    },

    {
        id: 2,
        title: 'Products',
        icon: 'inventory',
        route: '/admin/products'
    },

    {
        id: 3,
        title: 'Categories',
        icon: 'category',
        route: '/admin/categories'
    },

    {
        id: 4,
        title: 'Customers',
        icon: 'groups',
        route: '/admin/customers'
    },

    {
        id: 5,
        title: 'Orders',
        icon: 'shopping_bag',
        route: '/admin/orders'
    },

    {
        id: 6,
        title: 'Payments',
        icon: 'payments',
        route: '/admin/payment'
    },

    {
        id: 7,
        title: 'Reports',
        icon: 'assessment',
        route: '/admin/reports'
    },

    {
        id: 8,
        title: 'Analytics',
        icon: 'analytics',
        route: '/admin/analytics'
    },

    {
        id: 9,
        title: 'Mail',
        icon: 'mail',
        route: '/admin/mail'
    },

    {
        id: 10,
        title: 'AI Assistant',
        icon: 'psychology',
        route: '/admin/ai'
    },

    {
        id: 11,
        title: 'Settings',
        icon: 'settings',
        route: '/admin/settings'
    }

];