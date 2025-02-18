<h2 align="center">AI Email Template Builder - Make HTML email templates with the help of AI 🤖.</h2>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🤸 [Quick Start](#quick-start)
3. 🕸️ [Config Files](#config-files)
4. 🚀 [More](#more)

## <a name="tech-stack">⚙️ Tech Stack</a>

- React 19
- Next.js 15
- TypeScript
- Redux
- Exprss
- MongoDB
- TailwindCSS
- ShadCN

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/SubhamSaha9/Email-Template-Generator.git
cd Email-Template-Generator
```

**Installation**

Install the project dependencies for both client and server directory separately using npm:

```bash
npm install
#or
npm i
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
MONGO_URI=""
JWT_SECRET=""
GEMINI_API_KEY=""
```

Replace the values with your actual credentials from [MongoDB](https://www.mongodb.com), [Cloudinary](https://cloudinary.com) and [Gemini](https://aistudio.google.com).

**Running the Project**

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to visit the page.

## <a name="config-files">🕸️ Config File</a>

<details>
<summary><code>global.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-family: Arial, Helvetica, sans-serif;
}

label {
  font-size: 14px;
}

/* total width */
*::-webkit-scrollbar {
  background-color: #fff;
  width: 16px;
}

/* background of the scrollbar except button or resizer */
*::-webkit-scrollbar-track {
  background-color: #fff;
}

/* scrollbar itself */
*::-webkit-scrollbar-thumb {
  background-color: #babac0;
  border-radius: 16px;
  border: 4px solid #fff;
}

/* set button(top and bottom of the scrollbar) */
*::-webkit-scrollbar-button {
  display: none;
}

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 0 0% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    --secondary: 0 0% 96.1%;
    --secondary-foreground: 0 0% 9%;
    --muted: 0 0% 96.1%;
    --muted-foreground: 0 0% 45.1%;
    --accent: 0 0% 96.1%;
    --accent-foreground: 0 0% 9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 89.8%;
    --input: 0 0% 89.8%;
    --ring: 0 0% 3.9%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --card: 0 0% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 0 0% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    --secondary: 0 0% 14.9%;
    --secondary-foreground: 0 0% 98%;
    --muted: 0 0% 14.9%;
    --muted-foreground: 0 0% 63.9%;
    --accent: 0 0% 14.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 0 0% 14.9%;
    --input: 0 0% 14.9%;
    --ring: 0 0% 83.1%;
    --chart-1: 220 70% 50%;
    --chart-2: 160 60% 45%;
    --chart-3: 30 80% 55%;
    --chart-4: 280 65% 60%;
    --chart-5: 340 75% 55%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}
```

</details>

<details>
<summary><code>constants.ts</code></summary>

```typescript
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  CaseLower,
  CaseSensitive,
  CaseUpper,
  Columns2,
  Github,
  Home,
  Italic,
  LayoutDashboard,
  LogOut,
  SquareSplitVertical,
  Type,
} from "lucide-react";

export const navMenuHome = [
  {
    name: "Dashboard",
    to: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "GitHub",
    to: "https://github.com/SubhamSaha9",
    icon: Github,
  },
  {
    name: "Logout",
    to: "/api/users/logout",
    icon: LogOut,
  },
];

export const navMenuDash = [
  {
    name: "Home",
    to: "/",
    icon: Home,
  },
  {
    name: "GitHub",
    to: "https://github.com/SubhamSaha9",
    icon: Github,
  },
  {
    name: "Logout",
    to: "/api/users/logout",
    icon: LogOut,
  },
];

export const alignItemOptions = [
  {
    value: "left",
    icon: AlignLeft,
  },
  {
    value: "center",
    icon: AlignCenter,
  },
  {
    value: "right",
    icon: AlignRight,
  },
];

export const textTransformOptions = [
  {
    value: "uppercase",
    icon: CaseUpper,
  },
  {
    value: "lowercase",
    icon: CaseLower,
  },
  {
    value: "capitalize",
    icon: CaseSensitive,
  },
];

export const justifyContentOptions = [
  {
    value: "flex-start",
    icon: AlignLeft,
  },
  {
    value: "center",
    icon: AlignCenter,
  },
  {
    value: "flex-end",
    icon: AlignRight,
  },
  {
    value: "space-between",
    icon: SquareSplitVertical,
  },
  {
    value: "space-around",
    icon: Columns2,
  },
];

export const fontWeightOptions = ["normal", "bold", "bolder", "lighter"];

export const fontStyleOptions = [
  {
    value: "normal",
    icon: Type,
  },
  {
    value: "italic",
    icon: Italic,
  },
];

export const textDecorOptions = [
  "none",
  "underline",
  "underline dotted",
  "underline double",
  "underline wavy",
  "overline",
  "line-through",
];

export const objectFitOptions = [
  "none",
  "fill",
  "contain",
  "cover",
  "scale-down",
];
```

</details>

<b><i>Make sure all file names remain same and change the links from <code>constants.ts</code> according to yours.</i></b>

## <a name="more">🚀 More</a>

For more such projects visit my [Github](https://github.com/SubhamSaha9) page.
