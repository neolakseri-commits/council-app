# COUNCIL — Meet Your 25-Agent Self

A web app where your personal AI council debates your biggest decisions.

## ✨ Features

- **Landing Page**: Beautiful Dark Terminal design
- **Quiz**: 5 questions to build your personal council profile
- **Debate Engine**: Interactive real-time debate visualization
- **Demo Page**: See how it works without taking the quiz
- **Mobile Responsive**: Works on all devices

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/YOUR_USERNAME/council-app.git
cd council-app
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Deploy to Vercel (FREE)

**Option A: Via GitHub (Recommended)**

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy" — done! 🎉

**Option B: Via Vercel CLI**

```bash
npm install -g vercel
vercel
```

### 4. Add Your Domain

1. Buy a domain (godaddy.com, namecheap.com, etc.) — ~$10/year
2. In Vercel dashboard:
   - Go to your project → Settings → Domains
   - Add your domain
   - Follow the instructions to update DNS
3. Wait ~10 minutes for DNS to propagate

## 📁 Project Structure

```
council-app/
├── app/
│   ├── page.jsx          # Landing page
│   ├── quiz/
│   │   └── page.jsx      # Quiz flow
│   ├── debate/
│   │   └── page.jsx      # Main debate page
│   ├── demo/
│   │   └── page.jsx      # Demo debate
│   ├── globals.css       # Global styles
│   └── layout.jsx        # Root layout
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Design

- **Colors**: Dark Terminal (Red #ff4444 on #0a0e27)
- **Font**: System UI (Helvetica, Segoe UI)
- **Framework**: Next.js 14 + React 18

## 🔧 Customization

### Change Colors

Edit `app/globals.css`:

```css
/* Change red to your brand color */
--primary: #ff4444;
--primary-light: #ff6666;
```

Then update all CSS files to use the new variables.

### Change Domain

After deploying to Vercel, add your custom domain in project settings.

### Add API Later

Currently uses pre-made debate arguments. To add real AI:

1. Get an API key from OpenAI
2. Create `app/api/debate.js` endpoint
3. Call it from `/app/debate/page.jsx`

## 📊 Performance

- **Vercel**: 100+ ms global response time
- **Supabase**: Free tier supports 100k monthly queries
- **Next.js**: Automatic optimization

## 💰 Costs

- **Domain**: $10-15/year
- **Hosting**: Free (Vercel free tier)
- **Database**: Free (none needed for now)
- **Total**: ~$10/year

## 🚀 Next Steps

1. ✅ Deploy to Vercel
2. ✅ Add your custom domain
3. ⬜ Add Supabase for data storage
4. ⬜ Add Stripe/Circle for payments
5. ⬜ Add OpenAI API for real debates

## 📝 License

MIT

## 🤝 Need Help?

- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Join Discord: [discord.gg/vercel](https://discord.gg/vercel)

---

Made with ❤️ for decision-makers

