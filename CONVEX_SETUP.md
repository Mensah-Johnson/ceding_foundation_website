# Convex Setup Guide for Ceding Foundation Website

## Overview

This guide walks you through setting up Convex as the backend for the Ceding Foundation website, including user authentication and leader management.

## Prerequisites

- Node.js installed
- Convex account (sign up at https://convex.dev)

## Installation Steps

### 1. Install Dependencies

```bash
npm install convex uploadthing @uploadthing/react
```

### 2. Initialize Convex

```bash
npx convex dev
```

This will:

- Create a new Convex project
- Generate the `convex/_generated` folder
- Start the Convex development server
- Give you a deployment URL

### 3. Environment Variables

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_CONVEX_URL=https://your-deployment-id.convex.cloud
UPLOADTHING_SECRET=sk_live_...
UPLOADTHING_APP_ID=your-app-id
```

Replace with:

- Convex URL provided by `npx convex dev`
- UploadThing secret and app ID from your UploadThing dashboard

### 4. Seed Initial Data

After Convex is running, seed the database with initial data:

1. Open your Convex dashboard
2. Go to Functions tab
3. Run the following mutations:
   - `seedData:createInitialAdmin` - Creates admin user
   - `seedData:seedLeaders` - Creates initial leaders

Or use the Convex CLI:

```bash
npx convex run seedData:createInitialAdmin
npx convex run seedData:seedLeaders
```

## Database Schema

### Users Table

- `name`: string
- `email`: string (indexed)
- `password`: string (should be hashed in production)

### Leaders Table

- `name`: string
- `position`: string
- `image`: string (URL)
- `bio`: string
- `socialLinks`: optional object with facebook, twitter, instagram, linkedin
- `createdAt`: number (timestamp)
- `updatedAt`: number (timestamp)

## Authentication

### Admin Login

- Default admin email: `admin@cedingfoundation.org`
- Default password: `admin123`
- **Important**: Change this password in production!

### Routes

- `/login` - Admin login page
- `/register` - Admin registration page
- `/admin` - Protected admin dashboard

## Features

### Admin Dashboard (`/admin`)

- View all leaders
- Add new leaders with image upload
- Edit existing leaders
- Delete leaders
- Protected route (requires authentication)
- Image upload via UploadThing

### Leadership Page (`/leadership`)

- Displays leaders from database
- Shows social media links
- Responsive design

## Usage

### Adding a New Leader

1. Go to `/admin`
2. Login with admin credentials
3. Click "Add Leader"
4. Fill in the form:
   - Name (required)
   - Position (required)
   - Image Upload (required) - Upload files or enter URL manually
   - Bio (required)
   - Social Links (optional)
5. Click "Create"

### Editing a Leader

1. In admin dashboard, click "Edit" on any leader card
2. Modify the information
3. Click "Update"

### Deleting a Leader

1. In admin dashboard, click "Delete" on any leader card
2. Confirm deletion

## Security Notes

⚠️ **Important for Production:**

1. Hash passwords using bcrypt or similar
2. Change default admin credentials
3. Implement proper session management
4. Add role-based access control
5. Validate and sanitize all inputs
6. Use HTTPS
7. Consider implementing password reset functionality

## Development

### Running the App

```bash
# Start Convex
npx convex dev

# In another terminal, start Next.js
npm run dev
```

### File Structure

```
convex/
├── schema.ts          # Database schema
├── users.ts           # User authentication functions
├── leaders.ts         # Leader CRUD functions
├── seedData.ts        # Initial data seeding
└── _generated/        # Auto-generated Convex files

src/
├── app/
│   ├── admin/         # Admin dashboard
│   ├── login/         # Login page
│   ├── register/      # Registration page
│   └── leadership/    # Public leadership page
├── components/
│   └── ProtectedRoute.tsx  # Route protection
└── contexts/
    └── AuthContext.tsx     # Authentication context
```

## Troubleshooting

### Common Issues

1. **Convex URL not found**: Make sure you've run `npx convex dev` and added the URL to `.env.local`
2. **Leaders not loading**: Check if you've seeded the database with initial data
3. **Login fails**: Verify admin user exists and credentials are correct
4. **Protected routes not working**: Ensure AuthProvider is wrapping your app in layout.tsx
5. **Image upload fails**: Verify UPLOADTHING_SECRET is set correctly in environment variables

### Development Tips

- Use Convex dashboard to inspect database data
- Check browser console for any JavaScript errors
- Verify environment variables are loaded correctly
- Test authentication flow thoroughly

## Next Steps

- Implement image upload functionality
- Add more admin features (user management)
- Implement proper password hashing
- Add email verification
- Set up production deployment

## Support

For Convex-specific issues, check:

- Convex Documentation: https://docs.convex.dev
- Convex Discord: https://convex.dev/community
