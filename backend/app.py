from flask import Flask, request, jsonify
from flask_cors import CORS
import librosa
import numpy as np

app = Flask(__name__)
CORS(app)

def vad(audio, sr):
    chunks = librosa.effects.split(audio, top_db=20)
    vad_results = []
    for chunk in chunks:
        start = round(chunk[0] / sr, 2)
        end = round(chunk[1] / sr, 2)
        vad_results.append({'start': start, 'end': end})
    return vad_results

@app.route('/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    audio, sr = librosa.load(file)
    vad_results = vad(audio, sr)
    voice_activity_segments = []
    for i, result in enumerate(vad_results):
        if i == 0:
            if result['start'] > 0:
                voice_activity_segments.append({'start': 0, 'end': result['start']})
        else:
            prev_result = vad_results[i-1]
            if result['start'] - prev_result['end'] > 0:
                voice_activity_segments.append({'start': prev_result['end'], 'end': result['start']})
    voice_activity_segments.append({'start': vad_results[-1]['end'], 'end': audio.shape[0] / sr})
    return jsonify({'voice_activity_segments': voice_activity_segments})

if __name__ == '__main__':
    app.run(debug=True)