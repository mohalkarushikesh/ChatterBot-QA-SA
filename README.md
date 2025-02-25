# ChatterBot-QA-SA

ChatterBot is a simple chatbot built using Flask and the Hugging Face Transformers library. It uses the DistilBERT model to answer questions based on a given context and can also perform sentiment analysis on user input.

## Table of Contents

- [ChatterBot](#chatterbot)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Contributing](#contributing)
  - [License](#license)
    - [Testing setiments](#testing-setiments)
    - [Positive Sentiment](#positive-sentiment)
    - [Negative Sentiment](#negative-sentiment)
    - [Neutral Sentiment](#neutral-sentiment)

## Introduction

ChatterBot is designed to provide answers to questions based on the provided context and analyze the sentiment of user inputs. It leverages the DistilBERT model from Hugging Face to perform question-answering tasks and the sentiment-analysis pipeline to determine the sentiment of user inputs. The project includes a simple web interface for interacting with the chatbot.

## Features

- **Question Answering**: Provide context and ask questions to get accurate answers.
- **Sentiment Analysis**: Analyze the sentiment of user inputs and provide explanations for the detected sentiment.
- **Responsive Design**: The web interface is responsive and adapts to different screen sizes.
- **Error Handling**: Gracefully handles errors and prompts users to provide the necessary context.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/chatterbot.git
   cd chatterbot
   ```

2. **Set Up the Environment**:
   Install the required packages:
   ```bash
   pip install flask transformers torch
   ```

## Usage

1. **Run the Flask App**:
   Start the Flask app by running:
   ```bash
   python app.py
   ```

2. **Access the Web Interface**:
   Open your web browser and navigate to `http://127.0.0.1:5000/`.

3. **Interact with ChatterBot**:
   - Select the mode (Question Answering or Sentiment Analysis) from the dropdown.
   - Enter context (if applicable) in the provided textarea.
   - Type your question or input in the input field.
   - Click the "Send" button to get a response from the chatbot.

## Project Structure

```
chatterbot/
│
├── app.py                # Flask application
├── templates/
│   └── index.html        # HTML template for the web interface
├── static/
│   ├── styles.css        # CSS styles for the web interface
│   └── script.js         # JavaScript for the web interface
└── README.md             # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize this README file as needed for your project. Let me know if there's anything else I can help with! 😊


### Testing setiments 

### Positive Sentiment
**Input**: "I had an amazing time at the new restaurant downtown. The food was delicious, and the service was excellent. I can't wait to go back!"
- *Context*: A new restaurant recently opened downtown, and it has quickly become a popular spot. The restaurant is known for its diverse menu, high-quality ingredients, and exceptional service. Many people have been sharing their positive experiences about dining there.

### Negative Sentiment
**Input**: "I was really disappointed with the service at the store. The staff were unhelpful, and the products were of poor quality. I won't be shopping there again."
- *Context*: You visited a store that had previously received mixed reviews. Despite hoping for a good experience, you found the staff to be unhelpful, and the products did not meet your expectations. This experience left you feeling dissatisfied and unlikely to return.

### Neutral Sentiment
**Input**: "I went to the park yesterday. It was a pretty average experience. There were a few people around, and the weather was okay."
- *Context*: You decided to spend some time at the local park to enjoy the outdoors. The park was neither crowded nor empty, and the weather was moderate. Your visit was uneventful and didn't evoke strong positive or negative emotions.

![{154EB68A-C170-46F5-B32B-F03AA739F55A}](https://github.com/user-attachments/assets/172d7398-57b6-46bf-85e5-36c17fe08f99)

![image](https://github.com/user-attachments/assets/2a69452c-99c6-498f-a8c8-ca4fe0f196d7)

![{994B1D79-6FD2-4BD7-9B7F-CA65674C2495}](https://github.com/user-attachments/assets/0e588bf5-58cd-471d-9a86-f786c62baac5)
