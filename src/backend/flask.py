from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
GENERATED_GIF_FOLDER = 'generated_gifs'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['GENERATED_GIF_FOLDER'] = GENERATED_GIF_FOLDER

model = load_model('D:/gym pilot/gym-pilot-application/Image_classify.keras')

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def generate_gif(detected_equipment):
    if detected_equipment == 'dumbell':
        return 'dumbell.gif'  # Assuming you have a dumbell.gif file in your 'generated_gifs' folder
    elif detected_equipment == 'treadmill':
        return 'treadmill.gif'  # Assuming you have a treadmill.gif file in your 'generated_gifs' folder
    else:
        return None  # Handle case where no GIF is available for the detected equipment

def preprocess_image(image_path):
    img = image.load_img(image_path, target_size=(180, 180))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

@app.route('/classify', methods=['POST'])
def classify_image():
    if 'image' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    file = request.files['image']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)

        img_array = preprocess_image(filepath)
 
        prediction = model.predict(img_array)
        detected_class = np.argmax(prediction)

        # Map detected class to equipment
        if detected_class == 0:
            detected_equipment = 'dumbell'
        elif detected_class == 1:
            detected_equipment = 'treadmill'
        else:
            detected_equipment = 'unknown'

        generated_gif_filename = generate_gif(detected_equipment)

        if generated_gif_filename:
            return jsonify({'gym_machine': detected_equipment, 'generated_gif': generated_gif_filename}), 200
        else:
            return jsonify({'error': 'GIF not available for the detected equipment'}), 404

    else:
        return jsonify({'error': 'File not allowed'}), 400

if __name__ == '__main__':
    app.run(debug=True)
