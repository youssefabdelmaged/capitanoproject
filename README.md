Restaurant app scaffold using Next.js App Router, Tailwind CSS, MongoDB (Mongoose), JWT auth, Cloudinary uploads, Nodemailer emails, and QR to menu.

## Getting Started

Create a `.env.local` with:

```
MONGODB_URI=
MONGODB_DB=
JWT_SECRET=supersecret

# Seed admin (optional on first run)
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=changeme

# SMTP (Nodemailer)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=
SMTP_FROM="Capitano <no-reply@example.com>"

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# Public
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Then run the development server:

```bash
npm run dev
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
