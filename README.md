# AI Models Integration

![openai-nodejs](https://github.com/JawherKl/ai-models-integration/blob/main/openai-nodejs.png)

Welcome to the **AI Models Integration** repository! This project provides seamless integration with various state-of-the-art AI models, offering a unified API for efficient interaction.

## 🚀 Features

- **Unified API**:Interact with multiple AI models through a single, streamlined interface
- **Extensibility**:Easily add and integrate new AI models as they become available
- **Scalability**:Designed to handle multiple requests efficiently, ensuring optimal performance

## 🧠 Integrated AI Models

- **Anthropic Claude 3.5 Sonnet**
- **Google Gemini Flash 1.5**
- **DeepSeek R1**
- **OpenAI GPT-4o Mini**
- **Meta LLaMA 3.2 3B Instruct**
- **Mistral Small**

## 🛠️ Technologies Used

- **Node.js* JavaScript runtime environment.
- **Express* Fast, unopinionated, minimalist web framework for Node.js.
- **OpenAI SDK* Integration with OpenAI's API for AI model interaction.

## 📦 Installation
### Step 1: Clone the Repository
```bash
git clone https://github.com/JawherKl/ai-models-integration.git
cd ai-models-integration
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set up Environment Variables
 - Create a .env file in the root directory.
 - Add your configuration variables (e.g., API keys, model endpoints).
 ```bash
    API_KEY=api_key_from_openrouter.ai
    BASE_URL=https://openrouter.ai/api/v1
 ```

## 🚀 Usage
### Start the Server
```bash
npm start
```

### Access the API
-The server will run on http://localhost:3000 by default.
-Use the provided endpoints to interact with the integrated AI models.

### Example Requests
#### Search request
```bash
curl -X POST http://localhost:3000/search \
  -H "Content-Type: application/json" \
  -d '{"model": "change_with_model_example", "query": "Latest advancements in renewable energy 2025"}'
```

#### Analysis request
```bash
curl -X POST http://localhost:3000/analyze \
  -H "Content-Type: application/json" \
  -d '{"model": "change_with_model_example", "text": "Tesla announced new solar roof technology with 25% improved efficiency in Q4 2023."}'
```

## 🤝 Contributing
Contributions are welcome! If you have suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments
- Special thanks to all contributors and the open-source community.
- Gratitude to the maintainers of the libraries used in this project.


<!--
model: "anthropic/claude-3.5-sonnet",
model: "google/gemini-flash-1.5",
model: "deepseek/deepseek-r1",
model: "openai/gpt-4o-mini",
model: "meta-llama/llama-3.2-3b-instruct",
model: "mistralai/mistral-small",
-->
