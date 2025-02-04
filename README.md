# AI Models Integration

This repository provides integration for various AI models, enabling seamless interaction and utilization of state-of-the-art models from different providers.

## Features
- **Model Integration**:
  - **Anthropic Claude 3.5 Sonnet**
  - **Google Gemini Flash 1.5**
  - **DeepSeek R1**
  - **OpenAI GPT-4o Mini**
  - **Meta LLaMA 3.2 3B Instruct**
  - **Mistral Small**

- **Flexible API**:
  - Unified API to interact with different models.
  - Easy to extend and add new models.

## Technologies Used
- **Node.js** (JavaScript runtime)
- **Express** (Web framework)
- **OpenAI SDK** (Discover language-specific libraries)

## Installation
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
Create a `.env` file in the root directory and add your configuration variables.
```bash
API_KEY=api_key_from_openrouter.ai
BASE_URL=https://openrouter.ai/api/v1
```

### Step 4: Start the Server
```bash
node server.mjs
```
The server will run on [http://localhost:3000](http://localhost:3000).

## Usage
### Example Requests
#### Search request
```bash
curl -X POST http://localhost:3000/search \
  -H "Content-Type: application/json" \
  -d '{"query": "Latest advancements in renewable energy 2025"}'
```

#### Analysis request
```bash
curl -X POST http://localhost:3000/analyze \
  -H "Content-Type: application/json" \
  -d '{"text": "Tesla announced new solar roof technology with 25% improved efficiency in Q4 2023."}'
```

## Contributing
Contributions are welcome! If you have suggestions, improvements, or bug fixes, please open an issue or submit a pull request.

## License
This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## Acknowledgments
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