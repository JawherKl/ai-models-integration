# AI Models Integration with Node.js

![openai-nodejs](https://github.com/JawherKl/ai-models-integration/blob/main/openai-nodejs.png)

Welcome to the **AI Models Integration** repository! This project provides seamless integration with various state-of-the-art AI models, offering a unified API for efficient interaction.

## 🚀 Features

- **Unified API**: Interact with multiple AI models through a single, streamlined interface.
- **Extensibility**: Easily add and integrate new AI models as they become available.
- **Scalability**: Designed to handle multiple requests efficiently, ensuring optimal performance.
- **Rate Limiting**: Exponential backoff retries to prevent abuse.
- **Caching**: Redis is used to cache frequent queries for better performance.
- **Validation**: All user input is validated with Zod for a secure and reliable API.
- **Streaming**: Real-time responses for long-running processes.
- **Monitoring**: Integrated Prometheus metrics to track API usage and errors.

## 🧠 Integrated AI Models

- **Anthropic Claude 3.5 Sonnet**
- **Google Gemini Flash 1.5**
- **DeepSeek R1**
- **OpenAI GPT-4o Mini**
- **Meta LLaMA 3.2 3B Instruct**
- **Mistral Small**

## 🛠️ Technologies Used

- *Node.js*: JavaScript runtime environment.
- *Express*: Fast, unopinionated, minimalist web framework for Node.js.
- *OpenAI SDK*: Integration with OpenAI's API for AI model interaction.
- *Redis*: In-memory data structure store used for caching and rate limiting.
- *Zod*: Input validation for secure and structured API interactions.
- *Prometheus*: Monitoring of API usage, errors, and performance.
- *ioredis*: Redis client used for integrating caching and rate limiting features.

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
- Create a `.env` file in the root directory.
- Add your configuration variables (e.g., API keys, model endpoints).
  ```bash
  API_KEY=api_key_from_openrouter.ai
  BASE_URL=https://openrouter.ai/api/v1
  REDIS_HOST=127.0.0.1
  REDIS_PORT=6379
  ```

## 🚀 Usage

### Start the Server
```bash
npm start
```

### Access the API
- The server will run on `http://localhost:3000` by default.
- Use the provided endpoints to interact with the integrated AI models.

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

## 🔒 Best Practices Implemented

- **Rate Limiting**: To prevent abuse and ensure fair usage, rate limiting is implemented with **exponential backoff**. If the user exceeds the allowed number of requests, they will be temporarily blocked from making more requests.
- **Caching**: Redis is used to cache frequent queries, reducing the load on the AI models and improving the response times.
- **Input Validation**: We validate all incoming requests using **Zod** to ensure the data is structured and safe.
- **Streaming**: For long-running processes, such as AI completions, we stream the responses in real-time.
- **Monitoring**: The API tracks usage metrics and errors via **Prometheus**, allowing you to monitor the health and performance of your system in real-time.

## 🤝 Contributing
Contributions are welcome! If you have suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## 📄 License
This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments
- Special thanks to all contributors and the open-source community.
- Gratitude to the maintainers of the libraries used in this project.

---

### **Additional Notes:**

- The **Rate Limiting** feature uses Redis for storing request counts, ensuring that users cannot flood the system with requests.
- **Caching** stores frequently requested data in Redis, which minimizes the number of redundant calls to the AI models, improving efficiency and speed.
- **Zod** ensures that all user inputs are validated before they are processed, making the application more secure and reliable.
- **Streaming** allows for real-time responses, reducing the wait time for users interacting with models that take longer to process.
- **Prometheus** provides valuable insights into the health of the API, making it easier to monitor usage, errors, and response times.
