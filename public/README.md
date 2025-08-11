# Portfolio Template 2 Documentation

This documentation will guide you on how to easily customize your portfolio.

---

## 1. Customize Portfolio Data

All the portfolio content (name, title, social links, skills, about, experience, education, projects, and contact details) can be edited inside:

> **Path:** `src/constants/index.js`

You can easily modify:

- Profile details (name, title, bio, contact info, social links)
- About section, career details, and skills
- Projects and their details
- Contact information

---

## 2. Change Theme Color

You can customize the primary color (theme color) of the portfolio by editing:

> **Path:** `tailwind.config.js`

Look for the `theme.extend.colors` section and update the `primary` color value to your preferred color.

Example:

```javascript
colors: {
  primary: '#2563EB', // Change this value
},
```

---

## 3. Customize Resume Print Configurations

If you want to adjust how your printed resume looks (colors, layout, font sizes, etc.), you can modify the configuration inside:

> **Path:** `src/constants/index.js` → inside `pdfConfigurations`

There are predefined settings like:

- Theme colors for printed resume
- Header style
- Skills and projects layout
- Spacing and fonts

You can also switch between different variations using the `getConfig` function.

Example:

```javascript
const config = getConfig("variation1");
```

---

## 4. Additional Notes

- This project is **mobile responsive** and supports **light/dark themes**.
- SEO-friendly structure is already handled.

---

Feel free to explore and customize according to your needs!  
If you face any issues, you can refer to the comments inside files for quick help.
