# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import requests

# app = Flask(__name__)
# CORS(app)


# APIKEY = '8ef18304598dc1f48f9ab25916f8d7bc'
# APIURL = 'http://api.openweathermap.org/data/2.5/weather'

# @app.route('/weather', methods=['GET'])
# def getweather():

#     city = request.args.get('city')
#     if not city:
#         return jsonify({'error': 'City parameter is missing'}), 400


#     params = {'q': city, 'appid': APIKEY, 'units': 'metric'}
#     response = requests.get(APIURL, params=params)

#     if response.status_code == 200:
#         data = response.json()
#         weather = {
#             'temperature': data['main']['temp'],
#             'rainfall': data.get('rain', {}).get('1h', 0)
#         }
#         return jsonify(weather)
#     else:
#         return jsonify({'error': 'Failed to fetch weather data'}), 500

# if __name__ == '__main':
#     app.run(host='0.0.0.0', port=5000)

from flask import Flask, jsonify, request
import requests
import torch
from flask_cors import CORS
from transformers import GPT2LMHeadModel, GPT2Tokenizer

app = Flask(__name__)
CORS(app)

API_KEY = "8ef18304598dc1f48f9ab25916f8d7bc"
API_URL = "http://api.openweathermap.org/data/2.5/weather"

# Load GPT-2 model and tokenizer
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")
model = GPT2LMHeadModel.from_pretrained("gpt2")


def generate_sentence(city, temperature, rainfall):
    input_text = (
        f"In {city}, the temperature is {temperature}°C with {rainfall} mm of rainfall."
    )
    input_ids = tokenizer.encode(input_text, return_tensors="pt")
    output = model.generate(
        input_ids,
        max_length=100,
        num_return_sequences=1,
        temperature=0.7,
        pad_token_id=tokenizer.eos_token_id,
    )
    generated_text = tokenizer.decode(output[0], skip_special_tokens=True)
    return generated_text


@app.route("/weather", methods=["GET"])
def get_weather():
    city = request.args.get("city")
    if not city:
        return jsonify({"error": "City parameter is missing"}), 400

    params = {"q": city, "appid": API_KEY, "units": "metric"}
    response = requests.get(API_URL, params=params)

    if response.status_code == 200:
        data = response.json()
        temperature = data["main"]["temp"]
        rainfall = data.get("rain", {}).get("1h", 0)

        # Generate the sentence dynamically
        weather_sentence = generate_sentence(city, temperature, rainfall)

        return jsonify({"weather_sentence": weather_sentence})
    else:
        return jsonify({"error": "Failed to fetch weather data"}), 500


if __name__ == "main":
    app.run(debug=True)