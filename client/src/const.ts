const AppRoute = {
    Main : '/',
    Login: '/login',
    Favorites: '/favorites',
    Offer : '/offer',
} as const;

const Setting = {
  rentalOffersCount: 312,
} as const;

const AuthorizationStatus = {
    Auth: 'AUTH',
    NoAuth: 'NO_AUTH',
    Unknown: 'UNKNOWN',
}

export { AppRoute, AuthorizationStatus, Setting };