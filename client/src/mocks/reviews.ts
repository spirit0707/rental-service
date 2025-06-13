import { Review } from "../types/review";

const reviews: Review[] = [
    {
        id: "1",
        date: "2023-10-01T12:00:00Z",
        user: {
            name: "Alice",
            avatarUrl: "/img/avatar-angelina.jpg",
            isPro: true,
        },
        comment: "Great place to stay!",
        rating: 5,
    },
    {
        id: "2",
        date: "2023-10-02T12:00:00Z",
        user: {
            name: "Bob",
            avatarUrl: "/img/avatar-max.jpg",
            isPro: false,
        },
        comment: "Not bad, but could be cleaner.",
        rating: 3,
    },
];

export { reviews };