from flask import Flask, Response, request, jsonify
import json
from flask_cors import CORS
from glob import glob
from werkzeug.utils import secure_filename


app = Flask(__name__)
CORS( app)

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
UPLOAD_FOLDER = '/path/to/the/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/upload', methods=['POST','OPTIONS'])
def hello_world():
	if request.files:
		for file_ in request.files.values():
			file_.save(secure_filename(file_.filename))
		return jsonify({'status':'success'})
	return jsonify({'status':'failed'})

@app.route('/test_api')
def test():
	return 'PONG'


app.run(port=8080, debug=True, host='0.0.0.0')
