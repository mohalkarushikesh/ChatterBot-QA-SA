# app.py
import torch
from transformers import pipeline
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Initialize the question-answering pipeline
model_id = "distilbert-base-cased-distilled-squad"
qa_pipe = pipeline("question-answering", model=model_id, tokenizer=model_id)

# Initialize the sentiment-analysis pipeline
sentiment_pipe = pipeline("sentiment-analysis")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    context = data.get("context", "")
    question = data.get("user_input")
    mode = data.get("mode", "qa")  # Default mode is question answering

    try:
        if mode == "qa":
            if context:
                result = qa_pipe(question=question, context=context)
                answer = result['answer']
                response = f"{answer}"
            else:
                response = "Please provide the context. It would be very helpful to answer your question."

        elif mode == "sentiment":
            sentiment_result = sentiment_pipe(question)
            sentiment = sentiment_result[0]['label']

            if sentiment == "NEGATIVE":
                response = f"Sentiment: {sentiment}. Why: It appears negative due to phrases that indicate concerns or dissatisfaction."
            elif sentiment == "POSITIVE":
                response = f"Sentiment: {sentiment}. Why: It appears positive due to phrases that indicate satisfaction or happiness."
            elif sentiment == "NEUTRAL":
                response = f"Sentiment: {sentiment}. Why: It appears neutral due to balanced phrases that indicate neither strong positive nor negative emotions."
            else:
                response = f"Sentiment: {sentiment}"

        else:
            response = "Invalid mode selected."

        return jsonify({"response": response})

    except Exception as e:
        # Log the exception for debugging purposes
        app.logger.error(f"An error occurred: {e}")
        return jsonify({"response": "An error occurred while processing your message. Please try again."})

if __name__ == "__main__":
    app.run(debug=True)
