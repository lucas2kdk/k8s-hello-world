const http = require('http');
const os = require('os');

const PORT = process.env.PORT || 8080;
const hostname = os.hostname();

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello from Kubernetes</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }

        .container {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 20px;
            padding: 60px 40px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            text-align: center;
            max-width: 600px;
            width: 100%;
            animation: fadeIn 0.6s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        h1 {
            color: #333;
            font-size: 3em;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .wave {
            animation: wave 0.6s infinite;
            display: inline-block;
            transform-origin: 70% 70%;
        }

        @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(20deg); }
            75% { transform: rotate(-20deg); }
        }

        .subtitle {
            color: #666;
            font-size: 1.2em;
            margin-bottom: 40px;
        }

        .pod-info {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 30px;
            border-radius: 12px;
            margin: 30px 0;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .pod-label {
            font-size: 0.9em;
            opacity: 0.9;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .pod-name {
            font-size: 1.4em;
            font-weight: 600;
            word-break: break-all;
            font-family: 'Courier New', monospace;
        }

        .kubernetes-logo {
            width: 80px;
            height: 80px;
            margin: 20px auto;
        }

        .footer {
            margin-top: 30px;
            color: #999;
            font-size: 0.9em;
        }

        @media (max-width: 600px) {
            h1 {
                font-size: 2em;
            }
            .container {
                padding: 40px 30px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World <span class="wave">👋</span></h1>
        <p class="subtitle">Running in Kubernetes</p>

        <svg class="kubernetes-logo" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path fill="#326CE5" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v7.64l-8 4-8-4V8.18l8-4z"/>
            <path fill="#326CE5" d="M12 6.5c-3.04 0-5.5 2.46-5.5 5.5s2.46 5.5 5.5 5.5 5.5-2.46 5.5-5.5-2.46-5.5-5.5-5.5zm0 1c2.49 0 4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5-4.5-2.01-4.5-4.5 2.01-4.5 4.5-4.5z"/>
            <circle fill="#326CE5" cx="12" cy="12" r="1.5"/>
        </svg>

        <div class="pod-info">
            <div class="pod-label">Container Name</div>
            <div class="pod-name">${hostname}</div>
        </div>

        <div class="footer">
            Lightweight container • Node.js on Alpine Linux
        </div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Container hostname: ${hostname}`);
});
