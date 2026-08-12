# 🚀 Vaibhav Bhardwaj — Interactive AI / Data Science Portfolio

> **Live Website:** [https://portfoliovbc.vercel.app/](https://portfoliovbc.vercel.app/)

A modern, high-performance personal portfolio website for **Vaibhav Bhardwaj**, Computer Science Undergraduate (Data Science) at UPES, Dehradun.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Fully responsive, SEO-optimized, and production-ready for deployment on Vercel.

---

## ⚡ Quick Highlights

- **Aesthetic**: Deep dark AI/ML theme with electric cyan, indigo, and violet accents, glassmorphic cards, and subtle canvas neural network particle background.
- **Flagship Project**: Interactive dashboard showcasing the **IBM Data Science Internship** system analyzing **97,682+ Indian job postings**, NLP topic modeling (TF-IDF & LDA), and comparative salary regression models (XGBoost, Random Forest, Linear Regression).
- **Deep Learning Showcase**: Detailed modal breakdowns for **Automated Skin Disease Detection** (92.4% accuracy with MobileNetV2) and **Alzheimer's Disease Detection** (94.21% accuracy with PyTorch ResNet50).
- **Competitive Programming & Certifications**: 100+ LeetCode problems solved with terminal card, Kaggle Python & SQL badges, Google Cloud Generative AI certification.
- **Easy Content Updates**: All personal data, projects, skills, and links are separated in `data/portfolio.ts`. **Change the data → portfolio automatically updates.**

---

## 🚀 Running Locally

### 1. Prerequisites
Ensure you have Node.js (v18.17+ or v20+) and npm installed.

### 2. Installation
```bash
# Navigate to the portfolio folder
cd portfolio

# Install dependencies
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 🖼️ How to Change Profile Photo

Your profile photo is displayed in the Hero and About sections with a neon glowing border, rounded frame, and responsive sizing.

1. Take your professional headshot image.
2. Place the image inside the `public/` directory:
   ```text
   public/profile.jpg
   ```
3. Overwrite the existing `profile.jpg`.
4. Refresh the webpage — your new photo will display immediately!

> **Using a different filename:** If your photo is named `my_photo.png`, place it in `public/my_photo.png` and update `profileImage` in `data/portfolio.ts`:
> ```typescript
> profileImage: "/my_photo.png",
> ```

---

## 📄 How to Update Resume PDF

All **Download Resume** and **View Resume** buttons in the Navbar, Hero, About, and Footer link to:
```text
public/Vaibhav_Bhardwaj_Resume.pdf
```

1. Export your latest resume as a PDF.
2. Save it as `Vaibhav_Bhardwaj_Resume.pdf`.
3. Drop it into the `public/` folder, replacing the existing file.
4. All download and view buttons will now serve your updated resume automatically.

---

## 🛠️ Easy Portfolio Content Management (`data/portfolio.ts`)

All editable content is centralized in [`data/portfolio.ts`](data/portfolio.ts). You never need to touch React components to edit information.

### 1. Updating Personal Information & Links
In `data/portfolio.ts`:
```typescript
personalInfo: {
  name: "Vaibhav Bhardwaj",
  headline: "Data Science Undergraduate | Machine Learning & AI Enthusiast",
  email: "vaibhavbhardwaj012@gmail.com",
  phone: "+91 8595851147",
  github: "https://github.com/vaibhavbh012",
  linkedin: "https://linkedin.com/in/vaibhav014",
  location: "Dehradun, India",
  profileImage: "/profile.jpg",
  resumePath: "/Vaibhav_Bhardwaj_Resume.pdf",
  statusBadge: "Open to Opportunities",
}
```

### 2. Adding a New Project
To add a new project to the portfolio, simply append an object to the `projects` array in `data/portfolio.ts`:
```typescript
{
  id: "my-new-ai-project",
  title: "Real-Time Object Detection Pipeline",
  subtitle: "YOLOv8 Edge Inference & Optimization",
  date: "Aug 2026",
  category: "Computer Vision",
  description: "Built high-throughput real-time object tracking system for edge devices.",
  metric: {
    value: "60+ FPS",
    label: "Inference Speed",
  },
  techStack: ["Python", "PyTorch", "YOLOv8", "OpenCV", "TensorRT"],
  highlights: [
    "Quantized weights with TensorRT achieving 3x speedup.",
    "Trained on custom annotated dataset with 95.8% mAP@50.",
  ],
  githubUrl: "https://github.com/vaibhavbh012/my-new-project",
  details: {
    architecture: "YOLOv8 backbone with CSPDarknet and PANet neck",
    pipeline: ["Frame Capture", "TensorRT Optimization", "Inference & Tracking"],
    evaluationMetrics: [
      { metric: "mAP@50", score: "95.8%" },
      { metric: "Latency", score: "16.2 ms" },
    ],
  },
}
```
The website will automatically render the new project card and interactive modal!

### 3. Adding or Modifying Skills
In `data/portfolio.ts`, locate `skillCategories`. You can add new skills or categories:
```typescript
{
  title: "Cloud & MLOps",
  icon: "Layers",
  skills: [
    { name: "Docker", highlight: true },
    { name: "AWS S3 / SageMaker", highlight: true },
    { name: "MLflow" },
  ],
}
```

---

## 🌐 Deploying to Vercel

The project is fully pre-configured for one-click deployment on [Vercel](https://vercel.com).

### Step 1: Push Code to GitHub
1. Initialize git in the `portfolio` folder (or push your repository):
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "feat: Initial commit for Vaibhav Bhardwaj AI/DS portfolio"
   ```
2. Create a new GitHub repository at [https://github.com/new](https://github.com/new) (e.g. `vaibhav-portfolio`).
3. Push your code:
   ```bash
   git remote add origin https://github.com/vaibhavbh012/vaibhav-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Import into Vercel
1. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** → **"Project"**.
3. Select your `vaibhav-portfolio` repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **"Deploy"**.
6. In ~60 seconds, your portfolio will be live at `https://vaibhav-portfolio.vercel.app`!

### Step 3: Configuring a Custom Domain (e.g. `vaibhavbhardwaj.dev`)
1. In your Vercel Dashboard, go to **Settings** → **Domains**.
2. Enter your custom domain name (e.g. `vaibhavbhardwaj.dev` or `vaibhav.tech`).
3. Follow the DNS instructions (add the `CNAME` / `A` record in your domain registrar like Namecheap, GoDaddy, or Cloudflare).
4. Vercel automatically issues free SSL certificates and handles global CDN distribution.

---

## 📂 Project Architecture

```text
portfolio/
├── app/
│   ├── globals.css          # Custom AI dark theme, glassmorphism & gradients
│   ├── layout.tsx           # SEO metadata, OpenGraph, Twitter tags & fonts
│   └── page.tsx             # Master page assembling all components
├── components/
│   ├── Navbar.tsx           # Floating glassmorphic header with active section tracking
│   ├── Hero.tsx             # Dynamic hero with CTAs, stats & profile card
│   ├── About.tsx            # About narrative & interactive credential cards
│   ├── Skills.tsx           # Category tabs, search filtering & tech badges
│   ├── Experience.tsx       # Timeline for IBM Data Science Internship
│   ├── FeaturedProject.tsx  # Dashboard visual for Job Market Trend Analysis
│   ├── Projects.tsx         # Computer Vision & Medical AI project cards
│   ├── ProjectCard.tsx      # Individual project card with validated metrics
│   ├── ProjectModal.tsx     # Deep-dive architecture modal
│   ├── Achievements.tsx     # LeetCode terminal card & Kaggle/Google certifications
│   ├── Education.tsx        # UPES B.Tech CGPA & school timeline
│   ├── Contact.tsx          # Interactive form, copy buttons & confetti
│   ├── Footer.tsx           # Branding, quick links & copyright
│   ├── BackToTop.tsx        # Smooth scroll-to-top floating button
│   ├── NeuralBackground.tsx # HTML5 Canvas neural network particle animation
│   └── Icons.tsx            # SVG icons for GitHub & LinkedIn
├── data/
│   └── portfolio.ts         # Central configuration data file (All content lives here)
├── public/
│   ├── profile.jpg          # Profile headshot
│   └── Vaibhav_Bhardwaj_Resume.pdf # Resume PDF for download and view
└── package.json
```

---

## 🔒 Security & Privacy
- Zero exposed API secrets or keys.
- Completely static client-side rendering with lightning-fast Time-to-First-Byte (TTFB).
- Mailto fallback and flexible integration readiness for Formspree or Resend.

---

© 2026 **Vaibhav Bhardwaj**. All rights reserved.
