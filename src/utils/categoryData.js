export const categories = [
    { id: 1, name: 'Fiction' },
    { id: 2, name: 'Non-Fiction' },
    { id: 3, name: 'Sci-Fi' },
    { id: 4, name: 'Fantasy' },
    { id: 5, name: 'Romance' },
    { id: 6, name: 'Thriller' }
  ];

  export const books = [
    // Fiction
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A classic novel set in the 1920s that explores themes of wealth, love, and the American Dream.",
      rating: 4.4,
      image: "https://covers.openlibrary.org/b/id/8894631-L.jpg",
      categoryId: 1,  // Fiction
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel set in the American South during the 1930s, focusing on themes of racial injustice and moral growth.",
      rating: 4.8,
      image: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
      categoryId: 1,  // Fiction
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/9649015-L.jpg",
      categoryId: 1,  // Fiction
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "A story about adolescent alienation and rebellion against the norms of society.",
      rating: 4.3,
      image: "https://covers.openlibrary.org/b/id/8236090-L.jpg",
      categoryId: 1,  // Fiction
    },
  
    // Non-Fiction
    {
      id: 5,
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description: "An exploration of the history of humankind from the Stone Age to the modern age.",
      rating: 4.6,
      image: "https://covers.openlibrary.org/b/id/10523055-L.jpg",
      categoryId: 2,  // Non-Fiction
    },
    {
      id: 6,
      title: "Educated",
      author: "Tara Westover",
      description: "A memoir about a young girl who, raised by survivalists, sets out on a quest for education.",
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/9353875-L.jpg",
      categoryId: 2,  // Non-Fiction
    },
    {
      id: 7,
      title: "Becoming",
      author: "Michelle Obama",
      description: "The memoir of former First Lady Michelle Obama, exploring her life from childhood to the White House.",
      rating: 4.9,
      image: "https://covers.openlibrary.org/b/id/8479386-L.jpg",
      categoryId: 2,  // Non-Fiction
    },
    {
      id: 8,
      title: "The Wright Brothers",
      author: "David McCullough",
      description: "The story of Wilbur and Orville Wright, two brothers from Ohio who changed history with the invention of the airplane.",
      rating: 4.8,
      image: "https://covers.openlibrary.org/b/id/8255665-L.jpg",
      categoryId: 2,  // Non-Fiction
    },
  
    // Sci-Fi
    {
      id: 9,
      title: "Dune",
      author: "Frank Herbert",
      description: "A science fiction epic that explores politics, religion, and power in a distant future on the desert planet of Arrakis.",
      rating: 4.5,
      image: "https://covers.openlibrary.org/b/id/12432864-L.jpg",
      categoryId: 3,  // Sci-Fi
    },
    {
      id: 10,
      title: "Neuromancer",
      author: "William Gibson",
      description: "A seminal cyberpunk novel that follows a washed-up computer hacker hired for one last job in a dystopian future.",
      rating: 4.3,
      image: "https://covers.openlibrary.org/b/id/8369251-L.jpg",
      categoryId: 3,  // Sci-Fi
    },
    {
      id: 11,
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      description: "A science fiction novel that explores themes of gender and sexuality on a planet where inhabitants can change sex.",
      rating: 4.6,
      image: "https://covers.openlibrary.org/b/id/9254674-L.jpg",
      categoryId: 3,  // Sci-Fi
    },
    {
      id: 12,
      title: "Foundation",
      author: "Isaac Asimov",
      description: "A science fiction series about the fall and rise of civilizations, set in a future galactic empire.",
      rating: 4.4,
      image: "https://covers.openlibrary.org/b/id/12882829-L.jpg",
      categoryId: 3,  // Sci-Fi
    },
  
    // Fantasy
    {
      id: 13,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A fantasy adventure novel that follows Bilbo Baggins, a hobbit who embarks on an epic journey to win a share of treasure guarded by the dragon Smaug.",
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
      categoryId: 4,  // Fantasy
    },
    {
      id: 14,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      description: "The first book in the Harry Potter series, introducing the young wizard Harry Potter and his first year at Hogwarts School of Witchcraft and Wizardry.",
      rating: 4.8,
      image: "https://covers.openlibrary.org/b/id/7888784-L.jpg",
      categoryId: 4,  // Fantasy
    },
    {
      id: 15,
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      description: "A fantasy novel about a young man named Kvothe who grows up to become a legendary figure.",
      rating: 4.5,
      image: "https://covers.openlibrary.org/b/id/8281746-L.jpg",
      categoryId: 4,  // Fantasy
    },
    {
      id: 16,
      title: "The Way of Kings",
      author: "Brandon Sanderson",
      description: "A high fantasy novel that follows the lives of several characters in a world constantly ravaged by magical storms.",
      rating: 4.6,
      image: "https://covers.openlibrary.org/b/id/9251715-L.jpg",
      categoryId: 4,  // Fantasy
    },
  
    // Romance
    {
      id: 17,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A classic romance novel that explores themes of love, class, and reputation in 19th century England.",
      rating: 4.6,
      image: "https://covers.openlibrary.org/b/id/9057635-L.jpg",
      categoryId: 5,  // Romance
    },
    {
      id: 18,
      title: "The Notebook",
      author: "Nicholas Sparks",
      description: "A love story that spans decades, telling the tale of Noah and Allie and their enduring love.",
      rating: 4.4,
      image: "https://covers.openlibrary.org/b/id/9014993-L.jpg",
      categoryId: 5,  // Romance
    },
    {
      id: 19,
      title: "Me Before You",
      author: "Jojo Moyes",
      description: "A romantic novel that explores the relationship between a young woman and a wealthy man who is paralyzed.",
      rating: 4.5,
      image: "https://covers.openlibrary.org/b/id/9202801-L.jpg",
      categoryId: 5,  // Romance
    },
    {
      id: 20,
      title: "Outlander",
      author: "Diana Gabaldon",
      description: "A historical romance novel that follows a woman who is transported back in time to 18th century Scotland.",
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/8251661-L.jpg",
      categoryId: 5,  // Romance
    },
  
    // Thriller
    {
      id: 21,
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      description: "A gripping thriller that follows a journalist and a hacker as they uncover dark secrets in a wealthy Swedish family.",
      rating: 4.5,
      image: "https://covers.openlibrary.org/b/id/9252001-L.jpg",
      categoryId: 6,  // Thriller
    },
    {
      id: 22,
      title: "Gone Girl",
      author: "Gillian Flynn",
      description: "A psychological thriller about the disappearance of a woman and the media frenzy that follows.",
      rating: 4.3,
      image: "https://covers.openlibrary.org/b/id/8225266-L.jpg",
      categoryId: 6,  // Thriller
    },
    {
      id: 23,
      title: "The Silent Patient",
      author: "Alex Michaelides",
      description: "A psychological thriller about a woman who stops speaking after being accused of murdering her husband.",
      rating: 4.4,
      image: "https://covers.openlibrary.org/b/id/10201300-L.jpg",
      categoryId: 6,  // Thriller
    },
    {
      id: 24,
      title: "The Girl on the Train",
      author: "Paula Hawkins",
      description: "A psychological thriller about a woman who becomes entangled in a missing person's investigation.",
      rating: 4.2,
      image: "https://covers.openlibrary.org/b/id/8348012-L.jpg",
      categoryId: 6,  // Thriller
    },
  ];
  
  
  
