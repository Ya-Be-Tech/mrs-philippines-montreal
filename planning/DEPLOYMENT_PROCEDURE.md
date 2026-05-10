# Deployment Procedure: Mrs Philippines Montreal

This document provides step-by-step instructions for deploying the Mrs Philippines Montreal website to **Firebase Hosting**, connecting it to a **Squarespace** custom domain, and setting up **GitHub Actions** for automated CI/CD.

---

## 1. Firebase Project Setup (Google Cloud Console)

1.  **Go to the Firebase Console:** [https://console.firebase.google.com/](https://console.firebase.google.com/)
2.  **Create a New Project:**
    *   Click **"Add project"**.
    *   Enter Project Name: `mrs-philippines-montreal` (or your preferred ID).
    *   Enable/Disable Google Analytics as per your preference.
    *   Click **"Create project"**.
3.  **Upgrade to Blaze Plan (Optional but Recommended):**
    *   While Firebase Hosting has a free tier (Spark), Nuxt 3 projects often benefit from the Blaze (Pay-as-you-go) plan if you ever decide to add Cloud Functions or Cloud Run.
4.  **Enable Hosting:**
    *   In the left sidebar, go to **Build > Hosting**.
    *   Click **"Get started"**.

---

## 2. Local Environment Setup & Firebase Init

1.  **Install Firebase CLI:**
    ```bash
    npm install -g firebase-tools
    ```
2.  **Login to Firebase:**
    ```bash
    firebase login
    ```
3.  **Initialize Firebase in your Project Root:**
    ```bash
    firebase init hosting
    ```
    *   **Project Setup:** Select `Use an existing project` and choose your project.
    *   **Hosting Setup:**
        *   What do you want to use as your public directory? **`.output/public`** (Important: Nuxt 3 SSG outputs here).
        *   Configure as a single-page app (rewrite all urls to /index.html)? **Yes**.
        *   Set up automatic builds and deploys with GitHub? **Yes**.
4.  **GitHub Action Setup (During `firebase init`):**
    *   It will ask you to log in to GitHub and authorize.
    *   **For which GitHub repository would you like to set up a GitHub Action?** `username/mrsphilippinesmontreal`
    *   **Set up the workflow to run a build script before every deploy?** Yes.
    *   **What script should be run before every deploy?** `npm ci && npm run generate`
    *   **Set up automatic deployment to your site's live channel when a PR is merged?** Yes.
    *   **What is the name of the GitHub branch associated with your site's live channel?** `main`

---

## 3. GitHub Secrets & Workflow Refinement

The `firebase init` command creates two files in `.github/workflows/`. You should ensure they are correctly configured for Nuxt 3.

### `firebase-hosting-merge.yml` (Live Deployment)
Ensure the `build` step looks like this:
```yaml
      - run: npm ci && npm run generate
```

---

## 4. DNS Setup (Squarespace)

To connect your custom domain (e.g., `mrsphilippinesmontreal.com`) to Firebase:

1.  **In Firebase Console:**
    *   Go to **Hosting > Dashboard**.
    *   Click **"Add custom domain"**.
    *   Enter your domain name.
2.  **Verify Domain Ownership (TXT Record):**
    *   Firebase will provide a **TXT record** (e.g., `google-site-verification=...`).
    *   **In Squarespace:**
        *   Go to **Settings > Domains**.
        *   Click on your domain > **DNS Settings**.
        *   Click **"Add Record"**.
        *   Type: `TXT`, Host: `@`, Value: [The value from Firebase].
3.  **Point Domain to Firebase (A Records):**
    *   Once verified, Firebase will provide two **A records** (IP addresses).
    *   **In Squarespace:**
        *   Go to **DNS Settings**.
        *   Remove any existing A records pointing to other hosts.
        *   Add two new records:
            *   Type: `A`, Host: `@`, Value: [IP Address 1 from Firebase]
            *   Type: `A`, Host: `@`, Value: [IP Address 2 from Firebase]
        *   (Optional) For the `www` subdomain:
            *   Type: `CNAME`, Host: `www`, Value: [Your domain name or provided Firebase value]
4.  **SSL Provisioning:**
    *   Firebase will automatically provision an SSL certificate (HTTPS) once the DNS is pointed correctly. This can take up to 24 hours.

---

## 5. Summary of Automatic Workflow

*   **Pull Request:** When a developer opens a PR, GitHub Actions runs `npm run generate` and creates a **"Preview Channel"**.
*   **Merge to Main:** When the PR is merged into `main`, GitHub Actions automatically builds and deploys to the **Live Channel**.

---

## Important Nuxt 3 Commands for Build
*   **Build command:** `npm run generate`
*   **Output folder:** `.output/public`
