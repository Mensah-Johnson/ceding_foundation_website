# Environment Setup for UploadThing

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# Convex
NEXT_PUBLIC_CONVEX_URL=https://your-deployment-id.convex.cloud

# UploadThing
UPLOADTHING_SECRET=sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
UPLOADTHING_APP_ID=xxxxxxxxxxxxx
```

## How to Get UploadThing Credentials

1. **Sign up at UploadThing**:

   - Go to https://uploadthing.com
   - Create an account
   - Create a new project

2. **Get your credentials**:

   - In your UploadThing dashboard
   - Go to API Keys section
   - Copy your Secret Key (starts with `sk_live_`)
   - Copy your App ID

3. **Add to .env.local**:
   ```env
   UPLOADTHING_SECRET=sk_live_your_actual_secret_key_here
   UPLOADTHING_APP_ID=your_actual_app_id_here
   ```

## Testing

1. **Check environment variables are loaded**:

   - Restart your development server after adding variables
   - Check browser console for any UploadThing related errors

2. **Test upload**:
   - Go to `/admin` page
   - Try uploading an image
   - Check browser network tab for any 500 errors on `/api/uploadthing`

## Troubleshooting

- **500 errors**: Check that UPLOADTHING*SECRET is correct and starts with `sk_live*`
- **Unauthorized errors**: Verify your App ID matches your UploadThing project
- **Parse errors**: Make sure you've restarted the dev server after adding environment variables

## Alternative: Use Demo Mode

If you don't have UploadThing credentials yet, you can use the manual URL input option in the admin panel as a fallback.

## Important: Next.js Configuration

**UploadThing requires server-side API routes**, which are incompatible with Next.js static export mode.

### For Development & Production with Server Features:

- Use the current `next.config.js` (without `output: "export"`)
- Deploy to platforms that support server-side rendering (Vercel, Netlify, etc.)

### For Static-Only Deployment:

- Use `next.config.prod.js` for static builds
- UploadThing won't work, but manual URL input will still function
- Run: `cp next.config.prod.js next.config.js && npm run build`

### Deployment Options:

1. **With Server (Recommended)**: Vercel, Netlify, Railway - Full functionality
2. **Static Only**: GitHub Pages, Netlify static - Manual URL input only
