# AI Models Integration with Node.js

![openai-nodejs](https://github.com/JawherKl/ai-models-integration/blob/main/openai-nodejs.png)

Welcome to the **AI Models Integration** repository! This project provides seamless integration with various state-of-the-art AI models, offering a unified API for efficient interaction.

## 🚀 Features

- **Unified API**: Interact with multiple AI models through a single, streamlined interface.
- **Extensibility**: Easily add and integrate new AI models as they become available.
- **Scalability**: Designed to handle multiple requests efficiently, ensuring optimal performance.
- **Rate Limiting**: Exponential backoff retries to prevent abuse and ensure fair usage.
- **Caching**: Redis is used to cache frequent queries for improved performance and reduced latency.
- **Validation**: All user inputs are validated with Zod to guarantee secure and structured API interactions.
- **Streaming**: Real-time streaming of responses for long-running AI processes.
- **Monitoring**: Integrated Prometheus metrics to track API usage, errors, and system performance.

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
- *ioredis*: Redis client library for Node.js.
- *Zod*: Input validation library for secure and reliable data handling.
- *Prometheus*: Monitoring system for tracking API metrics and health.

## 📦 Installation

### Step 1: Clone the Repository
```bash
git clone https://github.com/JawherKl/ai-models-integration.git
cd ai-models-integration
````

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set up Redis

* Make sure Redis is installed and running locally or remotely.
* If you don't have Redis installed, follow the [Redis installation guide](https://redis.io/docs/getting-started/installation/).
* Alternatively, run Redis using Docker:

```bash
docker run -d --name redis -p 6379:6379 redis
```

* The app connects to Redis by default at `redis://127.0.0.1:6379`.

### Step 4: Configure Environment Variables

* Create a `.env` file in the root directory.
* Add your API keys and service configurations:

```bash
API_KEY=your_api_key_here
BASE_URL=https://openrouter.ai/api/v1
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

## 🚀 Usage

### Start the Server

```bash
npm start
```

### API Access

* Server runs by default at `http://localhost:3000`.
* Use the endpoints below to interact with integrated AI models.

### Example Requests

#### Search Endpoint

```bash
curl -X POST http://localhost:3000/search \
  -H "Content-Type: application/json" \
  -d '{"model": "chatgpt", "query": "Latest advancements in renewable energy 2025"}'
```

#### Analyze Endpoint

```bash
curl -X POST http://localhost:3000/analyze \
  -H "Content-Type: application/json" \
  -d '{"model": "deepseek", "text": "Tesla announced new solar roof technology with 25% improved efficiency in Q4 2023."}'
```

#### List Supported Models

```bash
curl -X GET http://localhost:3000/models
```

## 🔒 Best Practices Implemented

* **Rate Limiting:** Implements exponential backoff retries using Redis to prevent abuse and control request rates.
* **Caching:** Frequently requested queries are cached in Redis to reduce redundant API calls and improve response times.
* **Input Validation:** User inputs are rigorously validated with **Zod**, ensuring API robustness and security.
* **Streaming:** Supports streaming AI responses in real-time for better user experience with long-running operations.
* **Monitoring:** Prometheus metrics integration tracks API usage, errors, and performance for observability and alerting.

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for suggestions, improvements, or bug fixes.

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

* Thanks to all contributors and the open-source community.
* Gratitude to maintainers of all utilized libraries and tools.

---

### Additional Notes

* **Rate Limiting** uses Redis to count requests and apply exponential backoff delays when limits are exceeded.
* **Caching** minimizes calls to external AI services by storing frequent query results in Redis with expiration.
* **Zod Validation** enforces strict input schemas preventing malformed or malicious data.
* **Streaming** capability enhances user experience by pushing partial AI completions as they are generated.
* **Prometheus Monitoring** enables tracking of detailed API metrics facilitating proactive maintenance and scaling.
* **Error Handling** is robust, ensuring that all exceptions are caught and logged for debugging and analysis.

[![Stargazers over time](https://starchart.cc/JawherKl/ai-models-integration.svg?variant=adaptive)](https://starchart.cc/JawherKl/ai-models-integration)
