# Deployment Guide - AshKara Technologies

This guide outlines the process to deploy the Version 1.0 (RC-1) of AshKara Technologies on Vercel, Render, and MongoDB Atlas.

## 1. Database (MongoDB Atlas)
1. Create a new Cluster on MongoDB Atlas.
2. In **Database Access**, create a database user and securely store the password.
3. In **Network Access**, allow IP `0.0.0.0/0` (or specifically whitelist Render IPs).
4. Get your connection string (URI).

## 2. Backend (Render)
1. Create a new **Web Service** on Render connected to this repository.
2. Set the Root Directory to `ashkara-backend`.
3. Build Command: `npm install && npm run build`
4. Start Command: `npm start`
5. Environment Variables:
   - `PORT`: `10000`
   - `MONGODB_URI`: (Your Atlas URI)
   - `JWT_SECRET`: (Generate a secure secret)
   - `CLIENT_URL`: `https://your-production-domain.com`

## 3. Frontend (Vercel)
1. Import this repository in Vercel.
2. Set the Root Directory to `ashkara-frontend`.
3. Vercel will automatically detect Vite. 
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Environment Variables:
   - `VITE_API_URL`: The URL of your Render backend (e.g., `https://ashkara-backend.onrender.com/api/v1`)
   - `VITE_APP_URL`: Your production domain (e.g., `https://ashkara.com`)

## Post Deployment
- Verify CORS is correctly mapping between Frontend and Backend.
- Verify Admin login flow.
- Ensure MongoDB indexes are built.
