# Zamani - Food Reservation & Accessibility Platform


## 🧠 Overview

Zamani is a modern, inclusive food reservation web application designed to reduce food waste and improve access to fresh meals. Built with React and Supabase, Zamani connects food providers with users in need—enabling simple reservations, dietary filtering, accessibility customization, and more.

## 🚀 Features

### 🔍 Food Discovery & Filtering
- Browse available food items with rich metadata (e.g., expiration time, discount, location, dietary tags).
- Filter by dietary preferences like **Vegan**, **Gluten-free**, **Organic**, etc.
- View provider details and distance.

### 🛍️ Food Reservation
- Users can reserve a specified quantity of food.
- Real-time updates using Supabase Realtime.
- Reservation confirmation, cancellation, and status tracking.

### ♿ Accessibility
- Adjustable settings for:
  - High Contrast Mode
  - Large Text
  - Screen Reader Optimizations

### 📽️ Cooking Instructions
- Food items include step-by-step cooking instructions.
- YouTube video tutorials embedded for visual learners.

### 🤖 Chatbot (Chefie)
- **Chefie – your personal mini chef assistant**.
- Built with OpenAI's GPT-3.5 via API integration.
- Assists users with:
  - Reservation help
  - Dietary questions
  - Food education
  - Fun food facts and jokes!

### 🌗 Theme Toggle
- Light / Dark mode with persistence using context and localStorage.

## 🧱 Tech Stack

- **Frontend:** React + Vite
- **Backend:** Supabase (PostgreSQL + Auth + Realtime)
- **Styling:** Tailwind CSS
- **Authentication:** Supabase Auth
- **Chatbot:** OpenAI API (GPT-3.5-turbo)
- **Dev Tools:** VS Code, Git, GitHub, Netlify (or Vercel) for deployment

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components
├── contexts/           # Theme, auth, and accessibility contexts
├── pages/              # Route-based pages
├── App.jsx             # Main entry component with routes
├── supabase.js         # Supabase client setup
├── .env                # API keys and project secrets
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following:

```
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_OPENAI_API_KEY=your_openai_api_key
```

## 🛠️ Setup Instructions

1. Clone the repo  
   `git clone https://github.com/FrimpsManu/Amazon-x-CodePath-Challenge.git`

2. Install dependencies  
   `npm install`

3. Add `.env` in project root

4. Start development server  
   `npm run dev`

5. Open [http://localhost:5173](http://localhost:5173)

## 📈 Future Enhancements

- 🧾 Admin Dashboard for Providers
- 📆 Food Pickup Calendar Integration
- 🗺️ Map View of Providers Nearby
- 🌍 Multilingual Support
- 🔔 Notification Reminders

## 👨‍🍳 Meet Chefie
> Your personal mini chef assistant is always ready to help. Ask Chefie about reservations, dietary needs, how to cook meals, or just get a fun food joke!

## 🤝 Contributing

Pull requests are welcome! If you're interested in joining the team, open an issue or reach out.

## 📝 License

MIT License

---

**Zamani** – Rescue Food, Save Money, Feed Community. 🌍🍲
