from flask import Flask, request
import datetime

app = Flask(__name__)

@app.route('/honeypot', methods=['GET'])
def honeypot():
    # Log the honeypot data
    user_ip = request.remote_addr
    timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    log_entry = f"IP Address: {user_ip}, Timestamp: {timestamp}"
    with open('honeypot_log.txt', 'a') as file:
        file.write(log_entry + '\n')
    print(log_entry)  # For logging to the terminal

    return '', 200  # Respond with 200 OK

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000)
