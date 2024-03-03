# Social Media Clone Project

This project is a social media platform inspired by the popular platform Twitter, built with a focus on modern web development technologies. It's designed to offer an engaging and responsive user experience, showcasing best practices in full-stack development.

## Technologies Used

Each technology has been carefully selected to play a specific role in the development of this project:

- **React**: Utilized for building the dynamic and interactive user interfaces, ensuring a seamless and responsive experience for users.
- **Next.js**: Provides the framework for server-side rendering, static site generation, and routing, enhancing SEO and performance.
- **Tailwind CSS**: Used for styling, leveraging its utility-first approach for rapid, consistent, and responsive design across the platform.
- **Prisma**: Acts as the ORM for safe and straightforward database access, simplifying data operations with our MongoDB database.
- **MongoDB**: Chosen as the database to efficiently store and manage the application's data with its flexible, document-oriented structure.
- **NextAuth**: Integrated for handling authentication and session management, offering a secure and scalable authentication solution.

## Getting Started

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or yarn
- MongoDB instance (local or remote)

### Installation

1. **Clone the repository**
```bash

git clone https://github.com/yourgithub/twitter-clone.git
cd twitter-clone
Install dependencies

Copy code
npm install

Set up environment variables
Create a .env.local file at the root of your project and add your MongoDB URI and NextAuth configuration:

MONGODB_URI='your_mongodb_uri'
NEXTAUTH_URL='http://localhost:3000'

Run Prisma migrations (optional)

Copy code
npx prisma migrate dev
Running the Application
Start the development server:


Copy code
npm run dev

Open http://localhost:3000 to view it in the browser.
