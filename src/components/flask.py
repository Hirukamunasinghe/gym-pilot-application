from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
GENERATED_GIF_FOLDER = 'generated_gifs'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['GENERATED_GIF_FOLDER'] = GENERATED_GIF_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def generate_gif(detected_equipment):
    # Placeholder function to generate GIFs based on detected gym equipment
    # Replace this with your actual logic to generate the GIFs
    if detected_equipment == 'dumbell':
        return 'dumbell.gif'  # Assuming you have a dumbell.gif file in your 'generated_gifs' folder
    elif detected_equipment == 'treadmill':
        return 'treadmill.gif'  # Assuming you have a treadmill.gif file in your 'generated_gifs' folder
    else:
        return None  # Handle case where no GIF is available for the detected equipment

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

        # Here you would implement your image processing and gym equipment detection logic
        # For now, let's assume the equipment is 'dumbell'
        detected_equipment = "dumbell"  # Placeholder for detected gym equipment

        # Here you would generate the corresponding GIF based on the detected equipment
        generated_gif_filename = generate_gif(detected_equipment)

        if generated_gif_filename:
            return jsonify({'gym_machine': detected_equipment, 'generated_gif': generated_gif_filename}), 200
        else:
            return jsonify({'error': 'GIF not available for the detected equipment'}), 404

    else:
        return jsonify({'error': 'File not allowed'}), 400

if __name__ == '__main__':
    app.run(debug=True)
