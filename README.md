# ✉️ AI Smart Email Assistant 🚀

An AI-powered Smart Email Assistant that helps users generate **professional email replies** directly inside **Gmail** using a **Chrome Extension**, **Spring Boot backend**, and an optional **React frontend**. The email responses are generated intelligently using the **Gemini AI API**.

---

## 📌 Features

- 📨 **Chrome Extension**: Adds an **AI Reply** button next to Gmail’s **Send** button for quick professional email generation.
- ⚙️ **Spring Boot Backend**: REST API built with Java & Spring Boot to handle email content and tone requests.
- 🤖 **Gemini AI Integration**: Uses **Google’s Gemini API** to craft smart and context-aware replies.
- 💻 **React Frontend (Optional)**: A simple web page for testing the email generation by providing content and tone as inputs.

---

## 🏗 Project Structure
-  AI-Smart-Email-Assistant/ `
- `  backend-springboot/` → Your Java Spring Boot backend with Gemini API integration.
- `  chrome-extension/` → Your Chrome extension files that add the AI button in Gmail.
- `  frontend-react/` → Your optional React web UI to test email generation.

---

## 🔧 Tech Stack

| Layer            | Technologies Used                                          |
|------------------|-----------------------------------------------------------|
| **Frontend**     | React.js, Material UI (optional), JavaScript               |
| **Extension**    | Chrome Extension API, JS, HTML, CSS                        |
| **Backend**      | Java 17+, Spring Boot, Lombok, REST API                    |
| **AI Integration** | Gemini AI API (by Google)                                 |

---

## 🚀 How It Works

1. **Chrome Extension** adds an **AI Reply** button when you click **Compose** or **Reply** in Gmail.
2. When the button is clicked, the **email content** and **selected tone** are sent to the **Spring Boot Backend**.
3. The backend calls the **Gemini AI API** to generate a professional email response based on the inputs.
4. The reply is then displayed in Gmail or in the optional **React frontend**.

---

## 🛠 How to Run Locally

### 🌐 Chrome Extension:
1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer Mode**.
3. Click **Load Unpacked** → Select the `chrome-extension` folder.

### 🔙 Backend (Spring Boot):
```bash
cd backend-springboot
./mvnw spring-boot:run
```
👉 Make sure to add your Gemini API Key in application.properties:
gemini.api.key=YOUR_GEMINI_API_KEY
Frontend (React - Optional):
```
cd frontend-react
npm install
npm start
```

👉 If you find this project useful, please ⭐ star the repository!

---
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8b2443e8-33b9-4898-bbd0-7916cdd204cd" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/eb70b688-be6b-43e8-86bf-a38360ecb93c" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d4d926f2-7f3b-4fc8-9a80-072bbd4e05bd" />

