# How to Deploy to Vercel

Since you are using Next.js, Vercel is the best place to host your website. Here are two easy ways to deploy your **JBL Tune 770NC** site.

## Option 1: Using the Command Line (Easiest)
You can deploy directly from your terminal without installing anything extra.

1. **Stop the development server** (if it's running) by pressing `Ctrl + C` in your terminal.
2. Run the following command:
   ```bash
   npx vercel
   ```
3. Follow the prompts:
   - **Set up and deploy?**: `y` (Yes)
   - **Which scope?**: Press Enter (select your account)
   - **Link to existing project?**: `n` (No)
   - **Project name?**: Press Enter (or type `jbl-tune-770nc`)
   - **In which directory?**: Press Enter (current directory)
   - **Want to modify functionality/settings?**: `n` (No)

4. Vercel will build and deploy your site. It will give you a **Production** URL like `https://jbl-tune-770nc.vercel.app`.

---

## Option 2: Using GitHub (Best for Updates)
If you want to update your site easily in the future, using GitHub is recommended.

1. **Install Git**: Download and install from [git-scm.com](https://git-scm.com/).
2. **Initialize Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. **Push to GitHub**: Create a new repository on GitHub and follow the instructions to push your code.
4. **Connect to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Import your GitHub repository.
   - Click **Deploy**.

---

## Option 3: Drag & Drop (Manual)
If you don't want to use the command line:

1. Go to your Vercel Dashboard.
2. Install the **Vercel CLI** if prompted, or simply drag your project folder into the Vercel dashboard if supported.
3. Alternatively, use the `npx vercel` method in Option 1 which acts like a manual upload.

## ⚠️ Important Note
Make sure your `package.json` has the build script (it does):
```json
"scripts": {
  "build": "next build"
}
```
Vercel will automatically detect this and build your site correctly.
